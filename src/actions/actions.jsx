import { combineReducers } from "redux";
export const login = (data) => {
	console.log("from action login", data);
	return {
		type: "LOGIN",
		payload: {
			id: data.email,
			data: data,
		},
	};
};
export const isLoggedIn = (data) => {
	return {
		type: "IS_LOGGED_IN",
		payload: data,
	};
};
export const isLoggedOut = (data) => {
	return {
		type: "IS_LOGGED_OUT",
		payload: data,
	};
};
export const usersData = () => {
	return {
		type: "USER_DATA",
	};
};
export const logout = () => {
	return {
		type: "LOGOUT",
	};
};

export const reducers = combineReducers({ combineReducers });
