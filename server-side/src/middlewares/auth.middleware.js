import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
import dotenv from 'dotenv';

dotenv.config();


export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        let token = null;

        // Check if token is sent in cookies
        if (req.cookies && req.cookies.accessToken) {
            token = req.cookies.accessToken;
        }
        // If not in cookies, check if it's sent in the Authorization header
        else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            throw new ApiError(401, "Unauthorized request: Token not provided");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken._id).select("-password -refreshToken");

        if (!user) {
            throw new ApiError(401, "Invalid access token: User not found");
        }

        // Store the user in the request object for use in subsequent middleware or routes
        req.user = user;
        next();
    } catch (error) {
        // Log the error for debugging
        console.error("JWT verification error:", error);
        throw new ApiError(401, "Invalid access token");
    }
});
