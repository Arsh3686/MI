import React, { useState, useEffect } from "react";
import PropertiesData from "../PropertiesData";
import "./Properties.css";
import House from "./House";
import Nav from "./Nav";

const PropertiesSearch = () => {
	const [arr, setArr] = useState([...PropertiesData]);
	const [selectedPrice, setSelectedPrice] = useState(30);
	const handlePriceRangeData = (prices = 30) => {
		let price = +prices;
		if (price > 0 && price <= 30) {
			setArr([...PropertiesData.filter((e) => e.price <= 30)]);
		} else if (price >= 31 && price <= 60) {
			setArr([
				...PropertiesData.filter((e) => e.price >= 31 && e.price <= 60),
			]);
		} else if (price >= 61 && price <= 100) {
			setArr([
				...PropertiesData.filter(
					(e) => e.price >= 61 && e.price <= 100
				),
			]);
		} else if (price >= 101 && price <= 150) {
			setArr([
				...PropertiesData.filter(
					(e) => e.price >= 101 && e.price <= 150
				),
			]);
		} else if (price >= 151 && price <= 200) {
			setArr([
				...PropertiesData.filter(
					(e) => e.price >= 151 && e.price <= 200
				),
			]);
		} else {
			setArr([...PropertiesData.filter((e) => e.price >= 201)]);
		}
	};
	useEffect(() => {
		handlePriceRangeData();
	}, []);
	return (
		<div className="properties">
			<div className="search">
				<div className="search__">
					<h3>Search properties to rent</h3>
				</div>
				<div className="searchFilter">
					<div className="filterUsingDropDown">
						<div className="filterUsingDropDownSelector">
							{/* <p>price </p> */}
							<select
								onChange={(e) =>
									setSelectedPrice(e.target.value)
								}>
								<option value="30">₹0-30 Lac</option>
								<option value="60">₹30-60 Lac</option>
								<option value="100">₹60-1 cr</option>
								<option value="150">₹1cr-1.50 cr</option>
								<option value="200">₹1.50cr-2 cr</option>
								<option value="300">₹2cr-3 cr</option>
							</select>
						</div>
						<button
							className="btns"
							onClick={() => handlePriceRangeData(selectedPrice)}>
							Search
						</button>
					</div>
				</div>
			</div>
			<div className="filteredResults">
				{arr.map((e) => {
					return (
						<React.Fragment key={e.id}>
							<House details={e} />
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default PropertiesSearch;
