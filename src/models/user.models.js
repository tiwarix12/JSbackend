import mongoose, {Schema} from "mongoose";
import { Jwt } from "jsonwebtoken"; 
import bcrypt from "bcryptjs";
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index:true, // helps optimise seacrh

    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    avatar: {
        type: String, //url
        required: true
    },
    coverImage: {
        type: String,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: 'Video'
    }],
    refreshToken: String

}, {
    timestamps: true
})

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        return next()
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

userSchema.methods.createAccesToken = function() {
    return Jwt.sign(
        {_id: this._id, username: this.username,email: this.email},
        process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1d'}
        )
}
userSchema.methods.refreshAccesToken = function() {
    return Jwt.sign(
        {_id: this._id, username: this.username,email: this.email},
        process.env.REFRESH_TOKEN_SECRET,{expiresIn: '10d'}
        )
}


export const User = mongoose.model('User', userSchema)