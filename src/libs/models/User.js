import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId:{type:String,required:true,unique:true},
    email:{type:String,required:true},
    username:{type:String,required:true},
    avatar:{type:String,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
},{timestamps:true})

export const User = mongoose.models.User2 || mongoose.model('User2',userSchema);

export default User