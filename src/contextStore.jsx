import React, { createContext, useState } from "react";
const productsCategories = [];
const fetched = async () => {
	const pp = await (
		await fetch("https://fakestoreapi.com/products/categories")
	).json();
	productsCategories.push(...pp);
	console.log("products", productsCategories);
};
fetched();
export const Contextstore = createContext();

const ContextStore = ({ children }) => {
	const [state, setState] = useState([...productsCategories]);
	const store = {
		storedData: [state, setState],
	};
	return (
		<Contextstore.Provider value={store}>{children}</Contextstore.Provider>
	);
};

export default ContextStore;
