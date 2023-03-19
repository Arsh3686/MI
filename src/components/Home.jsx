import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./style/Home.css";
import Login from "./Login";

const Home = () => {
	const { isLoggedIn } = useSelector((state) => state.reducers);
	const isLoggedInLoc = JSON.parse(
		localStorage.getItem("isLoggedIn") !== null ? true : false
	);
	useEffect(() => {
		console.log("isLoggedIn Home", isLoggedIn, isLoggedInLoc);
		console.log(
			"getLocal Home",
			JSON.parse(
				localStorage.getItem("isLoggedIn") !== null ? true : false
			)
		);
	}, [isLoggedIn, isLoggedInLoc]);
	return (
		<>
			{isLoggedInLoc === false ? (
				<Login />
			) : (
				<div className="home">
					<h1>Welcome to React</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Aut placeat dolor molestiae incidunt ex dicta
						sapiente optio animi earum nulla minima iusto amet
						soluta, voluptatibus inventore eveniet, quas excepturi
						voluptate.
					</p>
					<button>Explore More !!</button>
				</div>
			)}
		</>
	);
};

export default Home;
