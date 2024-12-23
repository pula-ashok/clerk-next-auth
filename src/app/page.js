import connectDB from '@/libs/mongodb/mongoose'
import React from 'react'

const Home = async() => {
  await connectDB()
  return (
    <div>Home</div>
  )
}

export default Home