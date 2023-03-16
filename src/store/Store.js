import { createContext, useState } from "react";
import data from "../Data/data.json";
export const StoreContext = createContext();
const Store = ({ children }) => {
	const [questions] = useState([...data]);
	const [tracker, setTracker] = useState(0);
	const [score, setScore] = useState(0);
	const store = {
		questions,
		tracker,
		setTracker,
		setScore,
		score,
	};
	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};
export default Store;

// import { createContext, useState } from "react";
// import data from "../Data/data.json";

// export const StoreContext = createContext();

// const Store = ({ children }) => {
// 	const [state, setState] = useState([...data]);
// 	const [cartStore, setCartStore] = useState([]);
// 	const [totalPrice, setTotalPrice] = useState(0);
// 	let datas = [...cartStore];
// 	const addElement = (ele) => {
// 		let isPresent = cartStore.findIndex((e) => {
// 			return e.id === ele.id;
// 		});
// 		if (isPresent !== -1) {
// 			let manipulateCartData = [...cartStore];

// 			manipulateCartData = manipulateCartData.filter((e) => {
// 				return e.id !== ele.id;
// 			});

// 			setCartStore([...manipulateCartData]);
// 		} else {
// 			setCartStore([...cartStore, ele]);
// 		}
// 	};
// 	const increment = (id) => {
// 		datas = datas.map((e) => {
// 			return e.id === id ? { ...e, amount: e.amount + 1 } : e;
// 		});

// 		setCartStore([...datas]);
// 	};
// 	const decrement = (id) => {
// 		let isPresent = datas.find((e) => {
// 			return e.id === id;
// 		});
// 		if (isPresent.amount > 1) {
// 			datas = datas.map((e) => {
// 				return e.id === id ? { ...e, amount: e.amount - 1 } : e;
// 			});
// 		} else {
// 			datas = datas.filter((e) => {
// 				return e.id !== id;
// 			});
// 		}

// 		console.log("after manipulating setCartStore", datas);
// 		setCartStore([...datas]);
// 	};
// 	const removeFromCart = (id) => {
// 		setCartStore([...datas.filter((e) => e.id !== id)]);
// 	};

// 	const store = {
// 		arrstore: [state, setState],
// 		cartStore: [cartStore, setCartStore],
// 		addElement,
// 		increment,
// 		decrement,
// 		removeFromCart,
// 		price: [totalPrice, setTotalPrice],
// 	};
// 	return (
// 		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
// 	);
// };
// export default Store;
