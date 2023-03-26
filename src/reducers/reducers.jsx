const productsCategories = [];
const electronicProducts = [];
const all = []; //userData\
const filterdUserData = [];
const fetched = async () => {
	const pp = await (await fetch("https://fakestoreapi.com/products")).json();
	productsCategories.push(...pp);
	console.log("products", productsCategories);
};
fetched();
const electronicfetched = () => {
	fetch("https://fakestoreapi.com/products/categories")
		.then((e) => e.json())
		.then((res) => electronicProducts.push(...res));

	console.log("usersData", electronicProducts);
	fetch("https://randomuser.me/api/?results=20")
		.then((e) => e.json())
		.then((res) => {
			all.push(...res.results);
			filterdUserData.push(...res.results);
		});
	console.log("usersData", all);
};
electronicfetched();
const initialState = {
	loginList: [],
	isLoggedIn: false,
	isLoggedOut: true,
	productsCategories,
	electronicProducts,
	all,
	datas: [],
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			const { id, data } = action.payload;
			return {
				...state,
				loginList: [
					...state.loginList,
					{
						id,
						password: data.password,
						remember: data.remember,
					},
				],
			};

		case "IS_LOGGED_IN": {
			console.log("from reducer IS_LOGGED_IN", action);

			return {
				...state,
				isLoggedIn:
					JSON.parse(localStorage.getItem("isLoggedIn")) ||
					action.payload,
				isLoggedOut: !action.payload,
			};
		}
		case "IS_LOGGED_OUT": {
			return {
				...state,
				isLoggedIn: !action.payload,
				isLoggedOut: action.payload,
			};
		}
		case "ALL_DATA": {
			let data = [];

			if (action.payload.genre === "male") {
				data = [
					...all.filter((e) => e.gender === action.payload.genre),
				];
			} else if (action.payload.genre === "female") {
				data = [
					...all.filter((e) => e.gender === action.payload.genre),
				];
			} else if (action.payload.genre === "search") {
				data = [...all.filter((e) => e.email === action.payload.text)];
				console.log(data);
			} else {
				data = [...action.payload.data];
			}
			console.log("action.payload in " + action.payload.text, data);
			return {
				...state,
				all: data,
				// datas: data,
			};
		}

		default:
			return state;
	}
};
export default reducers;
