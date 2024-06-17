import React,{useState} from 'react'
import { isUserValid, signout, signup } from '../lib/pocketbase';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  const Navigate = useNavigate()
	const handleSubmit = () => {
    if(!username || !password){
      alert("please fill in your logs")
      return
    }
		signup(username, password)
    Navigate("/")
	};
  return (
    <div className="w-[50%] mx-auto flex flex-col gap-2">
    {/* header  start */}
    <div className="flex justify-between w-full">
      <h1 className="text-3xl ">PocketTask</h1>
      { isUserValid ?(
        <>
          <div className="flex space-x-2">
          <button className="px-4  text-gray-100 rounded bg-green-400">
            Log in
          </button>
          <button className="px-4  text-green-400 rounded bg-white border-green-400 border ">
            Sign Up
          </button>
        </div>
        </>
      ):(
        <button className="px-4  text-green-400 rounded bg-white border-green-400 border " onClick={signout}>
            LogOut
          </button>
      )
      }
    
    </div>
    {/* header-end  */}
    <div className="border border-gray-200 w-full shadow-md rounded p-4 flex flex-col items-start gap-2">
      <h2 className="2xl">Create A New Account</h2>
      <input
        className="border-2 w-[90%] border-gray-300 rounded-md box-content h-4 p-4 text-base "
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        className="border-2 w-[90%] border-gray-300 rounded-md box-content h-4 p-4 "
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
          onClick={handleSubmit}
          className="px-4 py-2 my-4 text-gray-100 rounded bg-green-400 text-sm flex justify-center items-center ">
          <span className="material-symbols-outlined mr-2">login</span>
          <p className="text-sm ">Continue</p>
        </button>
    
      
      
    </div>
  </div>
  )
}
