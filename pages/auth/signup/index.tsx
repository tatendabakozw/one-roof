import React, { useState, ReactElement } from 'react'
import HomeLayout from '../../../layouts/HomeLayout'

function signup():ReactElement {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signInWithCreds = (e: any) =>{
        e.preventDefault()
        console.log(email, password)
    }

    const signInWithGoogleAuth = (e: any) =>{
        e.preventDefault()
        console.log('sign in with google')
    }

    return (
        <HomeLayout page_title={'Sign Up'} page_description="Sign up to on roof market platform">
            <div className="flex h-screen w-full">
                <div className="m-auto w-1/3 flex flex-col">
                    <p className="text-gray-700 text-3xl self-center font-semibold mb-8">Sign Up</p>
                    <span 
                        onClick={signInWithGoogleAuth}
                        className="bg-blue-700 hover:bg-blue-600 cursor-pointer rounded-lg p-2 text-white text-xl text-center mb-8">Sign up with Google</span>
                    <div className="grid grid-cols-4 items-center mb-8">
                        <div className="border-b col-span-1 border-gray-400 w-full "/>
                        <p className="col-span-2 text-center">or sign up with credentials</p>
                        <div className="border-b col-span-1 border-gray-400 w-full "/>
                    </div>
                    <form action="" className="flex flex-col" onSubmit={signInWithCreds}>
                        <label htmlFor="email" className="mb-1 text-gray-700 font-semibold">Email Address</label>
                        <input 
                            type="text" 
                            id="email"
                            placeholder="me@mail.com" 
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-2 border-gray-300 rounded-lg p-2 outline-none mb-8" />
                        <div className="flex flex-row items-center mb-1 justify-between">
                            <label htmlFor="password" className="text-gray-700 font-semibold">Password</label>
                            <p className="text-blue-700">Forgot Password?</p>
                        </div>
                        <input 
                            type="password" 
                            id="password"
                            placeholder="password" 
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-2 border-gray-300 rounded-lg p-2 outline-none mb-8" />
                        <button className="bg-blue-900 hover:bg-blue-800 rounded-lg p-2 text-white text-xl text-center outline-none border-none " type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </HomeLayout>
    )
}

export default signup
