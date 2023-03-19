import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style/User.css";

const User = () => {
	const { usersData } = useSelector((state) => state.reducers);
	const [cat, setCat] = useState("all");
	const [filterTracker, setFilterTracker] = useState({
		all: true,
		male: false,
		female: false,
	});
	const [state, setState] = useState([...usersData]);
	const filterUserData = (e) => {};
	useEffect(() => {
		console.log(state);
		// if (cat !== "all") {
		// 	setState([
		// 		...state.filter((ele) => {
		// 			return ele.gender === cat;
		// 		}),
		// 	]);
		// } else {
		// 	setState([...usersData]);
		// }
	}, [cat]);
	return (
		<div>
			<div className="withoutFilter">
				<h3>User Details</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Animi quae molestias maxime unde odit eaque laboriosam ea
					quis dolore, repudiandae, nesciunt iusto doloremque nam
					nobis! Architecto nobis deleniti inventore ratione.
				</p>
			</div>
			<div className="withFilter">
				<div className="checkbox">
					<div className="checkbox_element">
						<input
							type="checkbox"
							checked={filterTracker.all}
							id="ALL"
							onChange={(e) =>
								setFilterTracker({
									...filterTracker,
									male: false,
									female: false,
									all: true,
								})
							}
							onClick={() => setCat("all")}
						/>
						<label htmlFor="ALL">ALL</label>
					</div>
					<div className="checkbox_element">
						<input
							type="checkbox"
							checked={filterTracker.male}
							onChange={(e) =>
								setFilterTracker({
									...filterTracker,
									male: true,
									all: false,
									female: false,
								})
							}
							id="MALE"
							onClick={() => setCat("male")}
						/>
						<label htmlFor="MALE">MALE</label>
					</div>
					<div className="checkbox_element">
						<input
							type="checkbox"
							checked={filterTracker.female}
							id="FEMALE"
							onChange={(e) =>
								setFilterTracker({
									...filterTracker,
									female: true,
									all: false,
									male: false,
								})
							}
							onClick={() => setCat("female")}
						/>
						<label htmlFor="FEMALE">FEMALE</label>
					</div>
				</div>
				<table>
					<tbody>
						<tr>
							<th>Image</th>
							<th>Name</th>
							<th>Email</th>
							<th>Gender</th>
						</tr>
						{state &&
							(cat !== "all"
								? state
										.filter((ele) => ele.gender === cat)
										.map((e, id) => {
											return (
												<tr key={id}>
													<td>
														<img
															src={
																e.picture
																	.thumbnail
															}
															alt=""
														/>
													</td>
													<td>
														{e.name.title}{" "}
														{e.name.first}{" "}
														{e.name.last}
													</td>
													<td>{e.email}</td>
													<td>{e.gender}</td>
												</tr>
											);
										})
								: state.map((e, id) => {
										return (
											<tr key={id}>
												<td>
													<img
														src={
															e.picture.thumbnail
														}
														alt=""
													/>
												</td>
												<td>
													{e.name.title}{" "}
													{e.name.first} {e.name.last}
												</td>
												<td>{e.email}</td>
												<td>{e.gender}</td>
											</tr>
										);
								  }))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default User;
