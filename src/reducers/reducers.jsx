const productsCategories = [];
const electronicProducts = [];
const usersData = [];
const fetched = async () => {
	const pp = await (await fetch("https://fakestoreapi.com/products")).json();
	productsCategories.push(...pp);
	console.log("products", productsCategories);
};
fetched();
console.log("products", electronicProducts);
const electronicfetched = () => {
	fetch("https://fakestoreapi.com/products/categories")
		.then((e) => e.json())
		.then((res) => electronicProducts.push(...res));

	console.log("usersData", electronicProducts);
	fetch("https://randomuser.me/api/?results=20")
		.then((e) => e.json())
		.then((res) => usersData.push(...res.results));

	console.log("usersData", usersData);
};
electronicfetched();
const initialState = {
	loginList: [],
	isLoggedIn: false,
	isLoggedOut: true,
	productsCategories,
	electronicProducts,
	usersData,
};
const reducers = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			console.log("from reducer login", action);

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
		case "USER_DATA": {
			return state;
		}
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
		default:
			return state;
	}
};
export default reducers;
