import "./House.css";

const House = (props) => {
	return (
		<div className="house">
			<div className="houseImg">
				<img src={`${props.details.img}`} alt={props.details.title} />
			</div>
			{props.details.popular === true && (
				<div className="popular">popular</div>
			)}
			<div className="houseAllDetails">
				<div className="houseDetails">
					<div className="housePrice textPrimary">
						<p>{props.details.showPrice}</p>
						<img width={25} src="images/heart.png" alt="" />
					</div>
					<div className="houseTitle">
						{props.details.title.slice(0, 36)}
					</div>
					<p className="houseDesc">
						{props.details.desc.slice(0, 100)}..
					</p>
				</div>
				<div className="houseExtraInfo">
					<div className="houseCommon">
						<img
							width={15}
							src="images/bed.png"
							alt={props.details.beds}
						/>
						<p>{props.details.beds} beds</p>
					</div>
					<div className="houseCommon">
						<img
							width={15}
							src="images/bath.png"
							alt={props.details.bathroom}
						/>
						<p>{props.details.bathroom} bathroom</p>
					</div>
					<div className="houseCommon">
						<img
							width={15}
							src="images/area.png"
							alt={props.details.area}
						/>
						<p>
							{Math.floor(Math.random() * (1500 - 1200) + 1200)}{" "}
							sqft
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default House;
