
//create or update user

import User from "../models/User"
import connectDB from "../mongodb/mongoose"

export const createOrUpdateUser = async (id,first_name,last_name,username,image_url,email_addresses) => {
    try {
        await connectDB()
        const user=await User.findOneAndUpdate({clerkId:id},{$set:{
            email:email_addresses[0].email_address,
            firstName:first_name,
            lastName:last_name,
            username:username,
            avatar:image_url
        }},{new:true,upsert:true})

        return Response(JSON.stringify(user),{status:200})
    } catch (error) {
        console.log(error)
        return Response("something went wrong",{status:500})
    }
}

export const deleteUser=async(id)=>{
    try {
        await connectDB()
        await User.findOneAndDelete({clerkId:id})
        return Response("user deleted successfully",{status:200})
    } catch (error) {
        console.log(error)
        return Response("something went wrong",{status:500})
    }
}