import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddToCart from "./addToCart/AddToCart";
import "./App.css";
import Contact from "./components/Contact";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";
import Login from "./components/Login";
import NavHandle from "./components/NavHandle";
import Product from "./components/Product";
import Productdetails from "./components/Product-details";
import User from "./components/User";

// import { Provider } from "react-redux";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AddToCart from "./addToCart/AddToCart";
// import CartHandler from "./addToCart/CartHandler";

import store from "./store/Store";
// import { Provider } from "react-redux";
// import store from "./todoList/store";
// import TodoList from "./todoList/TodoList";
// import store from "./addToCart/cartStore";
// import Price from "./addToCart/Price";
// import Weather from "./Weather/Weather";

const App = () => {
	return (
		// <Provider store={store}>
		// 	<TodoList />
		// </Provider>

		<Provider store={store}>
			<BrowserRouter>
				<NavHandle />
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path={"/createAccount"} element={<Login />} />
					<Route path="/product" element={<Product />} />
					<Route
						path="/product-details/:id"
						element={<Productdetails />}
					/>
					<Route path="/forgot" element={<ForgotPassword />} />
					<Route path="/users" element={<User />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</Provider>

		// <Provider store={store}>
		// 	<BrowserRouter>
		// 		<Routes>
		// 			<Route path="/" element={<CartHandler />} />
		// 			<Route path="/addToCart" element={<AddToCart />} />
		// 			<Route path="/price" element={<Price />} />
		// 			{/* <Route path="/" element={<Weather />} /> */}
		// 		</Routes>
		// 	</BrowserRouter>
		// </Provider>
	);
};

export default App;
