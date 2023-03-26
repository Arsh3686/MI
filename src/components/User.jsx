import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { manipulateData } from "../actions/actions";
import "./style/User.css";

const User = () => {
	const { all } = useSelector((state) => state.reducers);
	const [cat, setCat] = useState("all");
	const dispatch = useDispatch();
	const [allUserData, setAllUserData] = useState([]);
	const [searchData, setSearchData] = useState("");
	const [filterTracker, setFilterTracker] = useState({
		all: true,
		male: false,
		female: false,
		search: false,
	});
	const handleSearch = () => {
		console.log(searchData);
		setFilterTracker({ ...filterTracker, search: true });
		setCat("search");
	};
	const handleFetch = async () => {
		let data = await fetch("https://randomuser.me/api/?results=20");
		let res = await data.json();
		dispatch(manipulateData(res.results, cat, searchData));
	};
	useEffect(() => {
		handleFetch();
		setSearchData("");
	}, [cat]);
	return (
		<div className="users">
			<div className="withoutFilter">
				<h3>User Details</h3>
				<label>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Animi quae molestias maxime unde odit eaque laboriosam ea
					quis dolore, repudiandae, nesciunt iusto doloremque nam
					nobis! Architecto nobis deleniti inventore ratione. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Animi
					quae molestias maxime unde odit eaque laboriosam ea quis
					dolore, repudiandae, nesciunt iusto doloremque nam nobis!
					Architecto nobis deleniti inventore ratione. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Animi quae
					molestias maxime unde odit eaque laboriosam ea quis dolore,
					repudiandae, nesciunt iusto doloremque nam nobis! Architecto
					nobis deleniti inventore ratione.
				</label>
			</div>
			<div className="withFilter">
				<div className="checkbox">
					<div className="checkbox_element">
						<input
							type="radio"
							checked={
								filterTracker.all &&
								filterTracker.search === false
							}
							id="ALL"
							onChange={(e) =>
								setFilterTracker({
									...filterTracker,
									male: false,
									female: false,
									all: true,
									search: false,
								})
							}
							onClick={() => setCat("all")}
						/>
						<label htmlFor="ALL">ALL</label>
					</div>
					<div className="checkbox_element">
						<input
							type="radio"
							checked={
								filterTracker.male &&
								filterTracker.search === false
							}
							onChange={(e) =>
								setFilterTracker({
									...filterTracker,
									male: true,
									all: false,
									female: false,
									search: false,
								})
							}
							id="MALE"
							onClick={() => setCat("male")}
						/>
						<label htmlFor="MALE">MALE</label>
					</div>
					<div className="checkbox_element">
						<input
							type="radio"
							checked={
								filterTracker.female &&
								filterTracker.search === false
							}
							id="FEMALE"
							onChange={(e) =>
								setFilterTracker({
									...filterTracker,
									female: true,
									all: false,
									male: false,
									search: false,
								})
							}
							onClick={() => setCat("female")}
						/>
						<label htmlFor="FEMALE">FEMALE</label>
					</div>
					<div className="search" style={{ display: "flex" }}>
						<input
							type="text"
							placeholder="search"
							value={searchData}
							onChange={(e) => setSearchData(e.target.value)}
						/>
						<button
							disabled={filterTracker.search === true}
							onClick={handleSearch}>
							search
						</button>
					</div>
				</div>
				<table>
					<tbody>
						<tr className="heading">
							<th className="heading">Image</th>
							<th className="heading">Name</th>
							<th className="heading">Email</th>
							<th className="heading">Gender</th>
						</tr>
						{all.map((e, id) => {
							return (
								<tr className="detailstr" key={id}>
									<td>
										<img src={e.picture.thumbnail} alt="" />
									</td>
									<td>
										{e.name.title} {e.name.first}{" "}
										{e.name.last}
									</td>
									<td>{e.email}</td>
									<td>{e.gender}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default User;
