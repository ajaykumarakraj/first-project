  
  const userMode=require("../models/userModel")
  // get methos 
const getUser=(req,res)=>{
 res.send("<h1>welcome to mern code  ok </h1>");
}
// post method 
const addUser=(req,res)=>{
  const {inputData} =req.body;
  res.json({
    succes:true,
    message:`welcome ${inputData} `,
  });
}
// new 
const createUser= async(req,res)=>{
try{
const {name,email,password,address}=req.body
const useradd = await userMode.create({
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
module.exports = { getUser,addUser,createUser };
