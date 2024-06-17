import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createTask } from "../lib/pocketbase";
export default function CreateTask() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
  const navigate = useNavigate()
	const handleSubmit = () => {
    if(!title){
      alert("please enter a title")
      return
    }
		createTask(title,description)
    navigate("..")
	};
	return (
		<div className="w-[50%] mx-auto flex flex-col gap-2">
			<div className="flex justify-between w-full">
				<h1 className="text-3xl ">PocketTask</h1>
				<div className="flex space-x-2">
					<button className="px-4  text-gray-100 rounded bg-green-400">
						Log in
					</button>
					<button className="px-4  text-green-400 rounded bg-white border-green-400 border ">
						Sign Up
					</button>
				</div>
			</div>
			<div className="border border-gray-200 w-full shadow-md rounded p-4 flex flex-col items-start gap-2">
				<h2 className="2xl">Create Task</h2>
				<input
					className="border-2 w-[90%] border-gray-300 rounded-md box-content h-4 p-4 text-base "
					type="text"
					placeholder="Title"
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
				<input
					className="border-2 w-[90%] border-gray-300 rounded-md box-content h-4 p-4 "
					type="text"
					placeholder="Decription"
					onChange={(e) => setDescription(e.target.value)}
				/>
        <button
						onClick={handleSubmit}
						className="px-4 py-2 my-4 text-gray-100 rounded bg-green-400 text-sm flex justify-center items-center ">
						<span className="material-symbols-outlined mr-2">save</span>
						<p className="text-sm ">Save</p>
					</button>
      
				
				
			</div>
		</div>
	);
}
