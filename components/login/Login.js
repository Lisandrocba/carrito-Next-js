import axios from 'axios'
import React, { useState } from 'react'

const initialState= {
    userName : "",
    password : ""
}

const Login = () => {

    const [user, setUser] = useState(initialState)

    const handlerChange = async (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    

  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center">
        <p className="text-5xl underline mb-6">Login</p>
        <form className="md:w-3/5 w-full pl-10 pr-10 2xl:w-1/3" action='api/auth/login' method='POST'>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="text" name="userName" id="email" onChange={handlerChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre de usuario" required />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" name="password" id="password" onChange={handlerChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="***********" required />
            </div>
            <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    Ingresar
                </span>
            </button>
        </form>

    </div>
  )
}

export default Login
