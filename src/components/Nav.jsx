import "./Nav.css";

const Nav = () => {
	return (
		<div className="nav">
			<div className="firstHalf">
				<div className="logo">
					<img src="images/bagel.png" width={35} alt="" />
				</div>
				<div className="navs">
					<p>Rent</p>
					<p>Buy</p>
					<p>Sell</p>
					<p>Manage Property</p>
					<p>Resource</p>
				</div>
			</div>
			<div className="secondHalf">
				<button className="btn">Login</button>
				<button className="btn active">Sign Up</button>
			</div>
		</div>
	);
};

export default Nav;
