 // local to server to cloudinery
 import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
 import fs from 'fs';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadToCloudinary = async (filePath) => {
    try{
        if(!filePath)
        {
           return null
        }
           const response = await cloudinary.uploader.upload(filePath,
            {resource_type: "auto"},
            console.log("File uploaded successfully", response.url))
            return response
        }
        catch(error){
            console.log(error)
            fs.unlinkSync(filePath) // remove loacaly saved tempfile if fails
        }
    
    }




// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });