import React from "react";

export default function rootlayout() {
	return (
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
	);
}
