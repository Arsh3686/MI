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
export const getSearchData = (data) => {
	return {
		type: "SEARCH_DATA",
		payload: data,
	};
};
export const manipulateData = (data, genre, text) => {
	return {
		type: "ALL_DATA",
		payload: { genre, data, text },
	};
};
export const reducers = combineReducers({ combineReducers });
