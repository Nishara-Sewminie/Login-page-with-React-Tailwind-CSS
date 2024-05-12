import React from 'react'
import cover_image from './images/log-banner.jpg'

const colors = {
    primary: "#060606",
    background: "#f5f5f5",
    disabled: "D9D9D9"
}

const Login = () => {
    return (

        <div className='w-full min-h-screen flex items-start'>

            {/* Left-side */}
            <div className='relative w-1/2 h-full flex flex-col'>

                <div className='absolute top-[5%] left-[10%] flex flex-col'>
                    <h1 className='text-4xl text-white font-bold my-4'>
                        Turn your ideas into reality
                    </h1>
                    <p className='text-xl text-white font-normal'>
                        Start for free and get attractive offers from the community
                    </p>
                </div>

                <img src={cover_image} className='w-full h-full object-cover' />
            </div>

            {/* Right-side */}
            <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
                <h1 className='text-xl text-[#060606] font-semibold'>Interactive Brand</h1>

                <div className='w-full flex flex-col max-w-[550px]'>
                    <div className='w-full flex flex-col mb-2'>
                        <h3 className='text-3xl font-semibold mb-2'>
                            Login
                        </h3>
                        <p className='text-base mb-2'>Welcome Back! Please enter your details.</p>
                    </div>

                    <div className='w-full flex flex-col'>
                        <input
                            type="email"
                            placeholder="Email"
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />

                        <input
                            type="password"
                            placeholder="Password"
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
                    </div>

                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center'>
                            <input type='checkbox' className='w-4 h-4 mr-2' />
                            <p className='text-sm'>Remember me for 30 days</p>
                        </div>

                        <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password</p>
                    </div>




                </div>



                <div className='w-full flex items-center justify-center'>
                    <p className='text-sm font-normal text-[#060606]'>Don't have an account? <span className='font-semibold underline underline-offset-2 curser-ponter'>Sign up for free</span></p>
                </div>

<div className='w-full flex flex-col my-4'>
    <button className='w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
        Log in
    </button>
    <button className='w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center'>
        Sign up
    </button>
</div>

            </div>
        </div>


    )
}

export default Login