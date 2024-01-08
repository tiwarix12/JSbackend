import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    videoUrl: {
        type: String,
        required: true,
        trim: true
    },
    thumbnailUrl: {
        type: String,
        required: true,
        trim: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})



export const Video= mongoose.model('Video', videoSchema)