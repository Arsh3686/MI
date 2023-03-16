import React from "react";

import Store from "./store/Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
	return (
		<Store>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/cartPage" element={<CartPage />} /> */}
				</Routes>
			</Router>
		</Store>
	);
};

export default App;
