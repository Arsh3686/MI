import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Nav from "./Nav";

const NavHandle = () => {
	const { isLoggedIn } = useSelector((state) => state.reducers);
	const isLoggedInLoc = JSON.parse(
		localStorage.getItem("isLoggedIn") !== null ? true : false
	);
	useEffect(() => {
		console.log("isLoggedIn navHandle", isLoggedIn, isLoggedInLoc);
		console.log(
			"getLocal navHandle",
			JSON.parse(
				localStorage.getItem("isLoggedIn") !== null ? true : false
			)
		);
	}, [isLoggedIn, isLoggedInLoc]);
	return <>{isLoggedInLoc === true ? <Nav /> : <div></div>}</>;
};

export default NavHandle;
