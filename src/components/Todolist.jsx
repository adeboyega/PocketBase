import React, { useEffect, useState } from "react";
// import { client } from "../lib/pocketbase";
import { getTasks, client } from "../lib/pocketbase";
import { Link } from "react-router-dom";
export default function Todolist() {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		getTasks()
			.then((res) => {
				setTasks(res);
			})
			.catch((error) => {
				console.log("error fetching data", error);
			});
	}, []);

	return (
		<div className="font-sans flex flex-col justify-center items-center w-[50%] mx-auto gap-4 text-sm">
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
			<div className="border border-gray-200 w-full shadow-md rounded p-4 flex flex-col items-start">
				{tasks.map((task) => (
					<div
						key={task.id}
						className="w-full text-start flex flex-col justify-center border border-gray-200 p-4 shadow-md rounded ">
						<div className="text-xl flex items-center w-full gap-4 px-4">
							<input
								type="checkbox"
								name="completed"
								className="h-6 w-6 my-auto"
							/>
							<h3>{task.title}</h3>
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
