import React, { useContext, useState } from "react";
import { StoreContext } from "../store/Store";
import "../App.css";
import Solution from "./Solution";

const Home = () => {
	const { questions, tracker, setTracker, setScore, score } =
		useContext(StoreContext);
	const [show, setShow] = useState(false);
	const manipulate = (ele, id) => {
		let kk = questions.find((e) => {
			return e.id === id;
		});
		console.log("sss", ele);
		setTimeout(() => {
			console.log("ss");
			setShow(!show);
			let say = kk.correct === ele;
			say && setScore((r) => r + 1);
		}, [2000]);
	};
	const change = () => {
		tracker < 5 && setTracker((r) => r + 1);
		setShow(!show);
	};
	return (
		<div className="container">
			<h2>Programming quiz</h2>
			<h1>Score Achieved: {score}</h1>
			Total No. of question : {questions.length}
			<div className="box">
				{tracker < 5 ? (
					questions.slice(tracker, tracker + 1).map((e, i) => {
						return (
							<div key={i}>
								<h4>
									Question {tracker + 1} out of{" "}
									{questions.length}
								</h4>
								<h4 className="same">{e.question_name}</h4>
								{e.options.map((ele, i) => {
									return (
										<li
											className="same"
											key={i + ele}
											onClick={() => {
												manipulate(ele, e.id);
											}}
											style={{
												cursor: "pointer",
												backgroundColor: `${
													show === true
														? e.correct === ele &&
														  `green`
														: ""
												}`,
											}}>
											{ele}
										</li>
									);
								})}
								{show && <button onClick={change}>Next</button>}
							</div>
						);
					})
				) : (
					<Solution />
				)}
			</div>
		</div>
	);
};

export default Home;
