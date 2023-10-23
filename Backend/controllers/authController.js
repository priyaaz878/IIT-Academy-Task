import { comparePassword, hashpassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
import JWT from 'jsonwebtoken'



export const registerController =async(req,res)=>{
    try {
        const {name,email,phone,password,address,answer}=req.body

        // validations
        if(!name){
            return res.send({ message:'Name is Required'})
        }
        if(!email){
            return res.send({ message:'Email is Required'})
        }
        if(!password){
            return res.send({ message:'Passowrd is Required'})
        }
        if(!phone){
            return res.send({ message:'Phone is Required'})
        }
        if(!address){
            return res.send({ message:'Address is Required'})
        }
        if(!answer){
            return res.send({ message:'answer is Required'})
        }



// existing user
  const existingUser= await userModel.findOne({email})

  if(existingUser){
    return res.status(200).send({
        success:false,
        message:'Already Register please login'
    })
  }

//   register user

const hashedPassword=await hashpassword(password)

// save
const user = await new userModel({name,email,phone,address,password:hashedPassword,answer}).save()

res.status(201).send({
    success:true,
    message:'user Register Successfully',
    user
})

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Register',
            error
        })
        
    }

}

// post Login

export const loginController=async(req,res)=>{
    try {

        const {email,password}=req.body

        // Validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"invalid email or password"
            })
        }

        // check user
        const user =await userModel.findOne({email})

        if(!user){
            return res.status(404).send({
                success:false,
                message:'email is not registered'
            })
        }

        const match =await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'invalid password'
            })
        }

        // token

        const token =await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})
        res.status(200).send({
            success:true,
            message:'login Succesfully',
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role


            },
            token, 
        })
        
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success:false,
        message:"login error",
        error
      })
        
    }
}

//forgotPasswordController

export const forgotPasswordController = async (req, res) => {
    try {
      const { email, answer, newPassword } = req.body;
      if (!email) {
        res.status(400).send({ message: "Emai is required" });
      }
      if (!answer) {
        res.status(400).send({ message: "answer is required" });
      }
      if (!newPassword) {
        res.status(400).send({ message: "New Password is required" });
      }
      //check
      const user = await userModel.findOne({ email, answer });
      //validation
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Wrong Email Or Answer",
        });
      }
      const hashed = await hashpassword(newPassword);
      await userModel.findByIdAndUpdate(user._id, { password: hashed });
      res.status(200).send({
        success: true,
        message: "Password Reset Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  };
  

