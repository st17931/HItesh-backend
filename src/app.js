const express = require("express");
const Video = require("./models/video.model.js")
const userRouter = require("./routes/video.route.js")

const server = express();
server.use(express.json());

// server.post("/setVideoData", async (req, res) => {
//     //const {title, description} = req.body;
//     try {
//         const newVideo = new Video(req.body);
//         await newVideo.save();
//         res.json({
//             message:"Successfully inserted the data",
//             data:{
//                 title: newVideo.title,
//                 desc: newVideo.description
//             }
//         })
//     }catch(error){
//         res.json({
//             message:"Error in pushing data",
//             err:error
//         })
//     }
   
// })

// server.get("/getAllVideo",async(req,res)=>{
//     try{
//         const videoes = await Video.find();
//         res.json({
//             message:"Success",
//             data:videoes
//         })
//     }catch(error){
//         res.statusCode(500).json({
//             message:"Fail",
//             description:"Unable to get videoes",
//             error:error
//         })
//     }
// })

server.use("/video", userRouter);


module.exports = server;