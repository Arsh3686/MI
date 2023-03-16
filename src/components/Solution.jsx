import React, { useContext } from "react";
import { StoreContext } from "../store/Store";

const Solution = () => {
	const { questions } = useContext(StoreContext);
	return (
		<div>
			{questions.map((e) => {
				return (
					<div key={e.id} className="same">
						<h3>Question : {e.question_name}</h3>
						<h5>Answer :{e.correct}</h5>
						<hr />
					</div>
				);
			})}
		</div>
	);
};

export default Solution;
