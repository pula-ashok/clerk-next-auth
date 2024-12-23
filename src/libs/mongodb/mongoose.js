import mongoose from 'mongoose'

const connectDB=async()=>{
    const url=process.env.MONGO_URL
    await mongoose.connect(url).then(()=>console.log('DB connected')).catch((err)=>console.log(err))
}

export default connectDB