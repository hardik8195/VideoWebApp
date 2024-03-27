import { Router } from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getUser,
    updateAccountDetails,
    deleteUser,
    subcribe,
    unsubcribe,
    likes,
    dislikes,
    save,
    unsave

} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ]),
    registerUser);

router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/refresh-Token").post(refreshAccessToken);
router.route("/change-Password").post(verifyJWT, changeCurrentPassword);
router.route("/find/:id").get(getUser);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);
router.route("/delete-user").delete(verifyJWT, deleteUser);
router.route("/sub/:id").put(verifyJWT, subcribe);
router.route("/unsub/:id").put(verifyJWT, unsubcribe);
router.route("/like/:videoId").put(verifyJWT, likes);
router.route("/dislike/:videoId").put(verifyJWT, dislikes);
router.route("/save/:videoId").put(verifyJWT,save);
router.route("/unsave/:videoId").put(verifyJWT,unsave);


export default router