import React from 'react'
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button , Input , Select} from './index'
import {  useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"



function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // handle submit eik event hai jo authomatic state maintain krega input feild ka
    const {register , handleSubmit} = useForm()
    const [error , setError] = useState("")


    // This function is the logic that gets executed when the form is submitted.
    // It attempts to log in the user using authService.login(data). If successful
    // , it retrieves the current user data with authService.getCurrentUser().
    // If both the session and user data exist, it dispatches an authentication action (authLogin) and navigates to a specific location (navigate("/")).



    // since humme login me email and psswrd cahaye to humne data pass kra ye ...register(email) and ...register(password)  eik object me bhej dega 
    const login = async (data) => {
setError("")
try {
   const session =  await authService.login(data)

   if (session) {
const userData = await authService.getCurrentUser()    
 
if(userData) dispatch(authLogin(userData))
navigate("/")

} 
   
   
   else {
    
   }
} catch (error) {
    setError(error.message)
}
    }
    return (
        <div   className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>

<h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
<p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
{/* 
form jab bhi submit hoga wha pr handle submit use hoga 
handle submit eik method hai jaha par hum apna method dete hai ki aaise submit hoga jaise ki login */}
{/* 
The form component has an onSubmit attribute set to handleSubmit(login).
 This means that when the form is submitted, 
 the handleSubmit function will be called,
  passing the login function as an argument.
 The login function handles the form submission logic. */}


<form onSubmit={handleSubmit(login)} className='mt-8'>
    <div className='space-y-5'>
        <Input
        label = "Email"
        placeholder = "Enter Your Email"
        type = "email"
        // When you spread register onto the Input component, it informs react-hook-form that this input field is part of the form, and it should be aware of its state and changes
        {...register("email", {
            required: true,
            validate: {
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
        }
    })}
        />

        <Input 
        label = "Password"
        type = "password"
        placeholder = "Enter Your Password"
        {...register("password" , {required : true,})}
        />
        <Button type = "submit"
        className='w-full'
        >Sign in</Button>
    </div>

</form>

            </div>

        </div>
    )
}


export default Login
