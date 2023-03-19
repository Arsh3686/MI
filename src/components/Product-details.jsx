import React, { useEffect, useState } from "react";
import "./style/Product-details.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Productdetails = () => {
	const { productsCategories } = useSelector((state) => state.reducers);
	const { id } = useParams();
	const [state, setState] = useState({});
	useEffect(() => {
		setState(
			productsCategories.find((ele) => {
				return ele.id === +id;
			})
		);
		// setState(productsCategories.find((e) => e.id === id));
	}, []);
	return (
		<>
			{console.log(state)}
			{state && (
				<div className="prdetails" key={state.id}>
					<div className="top">{state.category} Category</div>
					<div className="down">
						<div className="product_img">
							<img src={state.image} alt="" />
						</div>
						<div className="product_details">
							<div className="details">
								<h3>Product Name</h3>
								<p>{state.title}</p>
							</div>
							<div className="details">
								<h3>Product Price</h3>
								<p>${state.price}</p>
							</div>
							<div className="details">
								<h3>Product Description</h3>
								<p>{state.description}</p>
							</div>
							<div className="details">
								<h3>Product Rating</h3>
								<p>{state.rating && state.rating.rate}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Productdetails;
