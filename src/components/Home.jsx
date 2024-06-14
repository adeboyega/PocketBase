import React from "react";

const Home = () => {
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
			<input
				type="text"
				className="border border-gray-200 w-full h-12 shadow-md rounded p-4"
			/>
		</div>
	);
};

export default Home;
