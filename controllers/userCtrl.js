  
  const userModel=require("../models/userModel")


// new 
const createUser= async(req,res)=>{
try{
const {name,email,password,address}=req.body
const useradd = await userModel.create({
  name,email,password,address
}) 
res.status(201).json({
  message:"success",
  useradd
})
}
catch (error){
console.log(error)
res.status(400).json({
  message:"false",
  error
})
}
}

const getAllUser=async(req,res)=>{
  try {
    const users=await userModel.find({})
    res.status(200).json({
      success:true,
      totalusers:users.length,
      users
    })
  } catch (error) {
    console.log(error)
res.status(400).json({
  success:"false",
  error:error.message
})
  }
}

const getsingleUser = async (req,res)=>{
try {
  const user=await userModel.findById(req.params.id);
 if(user){
  res.status(200).json({
    success:true,
    user
  })
 }else{
  res.status(400).send("user not found")
 }
} catch (error) {
  res.status(400).json({
    message:"single user error"
  })
}
}
const updateUser=async(req,res)=>{
const user= await userModel.findById(req.params.id)
if(user){
  user.name=req.body.name|| user.name
  user.email=req.body.email|| user.email
  if(req.body.password){
    user.password=req.body.password
  }
  const updateUser=await user.save()
  res.status(200).json({
    success:true,
    _id:updateUser._id,
    name:updateUser.name,
    email:updateUser.email,
  })
}else{
  res.status(400).json({
    message:"update user error"
  })
}
}

const deleteUser=async(req,res)=>{
const user=await userModel.findById(req.params.id)
if(user){
 await user.deleteOne()
 res.status(200).json({
  success:true,
  message:"user deleted"
 })
}else{
  res.status(400)
  throw new Error("User not Found")
}
}
module.exports = { getAllUser,createUser,getsingleUser,updateUser,deleteUser };
