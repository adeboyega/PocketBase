import React, { useEffect, useState } from "react";
// import { client } from "../lib/pocketbase";
import { getTasks, deleteTask } from "../lib/pocketbase";
import { Link } from "react-router-dom";
import { toggleTask, signout,isUserValid } from "../lib/pocketbase";

export default function Todolist() {
	const [tasks, setTasks] = useState([]);
	const [completed, setCompleted] = useState(false);
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		getTasks()
			.then((res) => {
				setTasks(res);
			})
			.catch((error) => {
				console.log("error fetching data", error);
			});
	}, []);

	if(!loading){
		setLoading(!loading)
	}
	return (
		<div className="font-sans flex flex-col justify-center items-center w-[50%] mx-auto gap-4 text-sm">
			{/* header  start */}
			<div className="flex justify-between w-full">
				<h1 className="text-3xl ">PocketTask</h1>
				{!isUserValid ? (
					<>
						<div className="flex space-x-2">
							<Link to={'/login'}>
							<button className="px-4  text-gray-100 rounded bg-green-400">
								Log in
							</button>
							</Link>
							<Link to={'/signup'}>
							<button className="px-4  text-green-400 rounded bg-white border-green-400 border ">
								Sign Up
							</button>
							</Link>
							
						</div>
					</>
				) : (
					<button
						className="px-4  text-green-400 rounded bg-white border-green-400 border "
						onClick={signout}>
						LogOut
					</button>
				)}
			</div>
			{/* header-end  */}
			<div className="border border-gray-200 w-full shadow-md rounded p-4 flex flex-col items-start">
				{tasks.map((task) => (
					<div
						key={task.id}
						className="w-full text-start flex flex-col justify-center border border-gray-200 p-4 shadow-md rounded ">
						<div className="text-xl flex items-center w-full gap-4 px-4 justify-between">
							<div className="text-xl flex items-center gap-4 px-4">
								<input
									type="checkbox"
									name="completed"
									defaultChecked={task.completed}
									className="h-6 w-6 my-auto"
									onChange={() => {
										setCompleted(!completed);
										toggleTask(task.id, task.title, completed);
									}}
								/>
								<h3>{task.title}</h3>
							</div>
							<div className="flex gap-2">
								<Link to={`/edittask/${task.id}`}>
									<div className="p-2 bg-gray-600 text-white text-sm flex items-center justify-center rounded-md">
										<span className="material-symbols-outlined">edit</span>
									</div>
								</Link>
								<div
									onClick={() => deleteTask(task.id)}
									className=" p-2 cursor-pointer bg-red-600 text-white text-sm flex items-center justify-center rounded-md">
									<span className="material-symbols-outlined">delete</span>
								</div>
							</div>
						</div>

						<h4 className="text-sm text-gray-400 px-4 my-4">
							{task.description}
						</h4>
						<hr className="border w-[90%] border-gray-400 px-4 ml-4 my-2" />
					</div>
				))}
				<Link to={"/create"}>
					<button className="px-4 py-2 my-4 text-gray-100 rounded bg-green-400 text-sm flex justify-center items-center ">
						<span className="material-symbols-outlined mr-2">add</span>NewTask
					</button>
				</Link>
			</div>
		</div>
	);
}
