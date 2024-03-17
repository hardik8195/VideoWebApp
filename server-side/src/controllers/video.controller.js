import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Video } from "../models/video.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const addvideo = asyncHandler(async (req, res) => {
    const { title} = req.body;

    if (![title].every(Boolean)) {
        throw new ApiError(400, "All fields are required!");
    }
    const videoLocalPath = req.files?.videoFile[0]?.path
    const thumbnailLocalPath = req.files?.thumbnail[0]?.path

    if (!videoLocalPath) throw new ApiError(400, "video is required");
    if(!thumbnailLocalPath) throw new ApiError(400,"thumbnail is required");

    const videoFile = await uploadOnCloudinary(videoLocalPath);
    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);

    if (!videoFile) throw new ApiError(400, "video is failed to upload ,try again");
    if(!thumbnail) throw new ApiError(400,"thumbnail is failed to upload ,try again");


    const video = await Video.create({
        userId:req.user._id,
        title,
        videoFile: videoFile?.url,
        thumbnail:thumbnail?.url,
        duration: videoFile.duration
    })

    const createdvideo = await Video.findById(video._id);
    if (!createdvideo) throw new ApiError(500, "something went wrong")

    return res
        .status(200)
        .json(
            new ApiResponse(201, createdvideo, "Successfully published video")
        )
})
const updatevideo = asyncHandler(async (req, res) => {
    
})
const deletevideo = asyncHandler(async (req, res) => { 
    const deletedVideo=await Video.findByIdAndDelete(req.params.id);

    if(!deletedVideo) return new ApiError(401,"Sorry there is a problem in deleting");

    return res
    .status(200)
    .json(
        new ApiResponse(201,{},"Succesfully deleted video")
    )

})
const getvideo = asyncHandler(async (req, res) => { 
    const video = await Video.findById(req.params.id);

    return res
    .status(200)
    .json(
        new ApiResponse(201,video,"finded your video")
    )
})

const addView = asyncHandler(async (req, res) => { 
    const video = await Video.findByIdAndUpdate(req.params.id,
        {
            $inc:{views:1}
        },
        {
            new:true
        }
        );

    return res
    .status(200)
    .json(
        new ApiResponse(201,video,"view is increased")
    )
})
const random = asyncHandler(async (req, res) => { 
    const videos = await Video.aggregate(
        [
            {
                $sample:{size:40}
            }
        ]
    );

    return res
    .status(200)
    .json(videos)
})
const trend = asyncHandler(async (req, res) => { 
    const videos = await Video.find().sort({views:-1});

    return res
    .status(200)
    .json(videos)
})
const sub = asyncHandler(async (req, res) => {
     const user  = await User.findById(req.user._id);
     const subscribedChannels  = user.subscribedUsers

     const list = await Promise.all(
        subscribedChannels.map(async (channelId) => {
          return await Video.find({ userId: channelId });
        })
      );
      return res
      .status(200)
      .json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  
})

const getbyTags = asyncHandler(async(req,res)=>{
    const tags = req.query.tags.split(",");
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);

    return res
    .status(201)
    .json(videos)
})
const getbySearch = asyncHandler(async(req,res)=>{
    const query = req.query.q
    const videos = await Video.find({
        title: { $regex: query, $options: "i" },
      }).limit(40);

    return res
    .status(201)
    .json(videos)
})

export {
    addvideo,
    updatevideo,
    deletevideo,
    getvideo,
    sub,
    addView,
    random,
    trend,
    getbyTags,
    getbySearch
}