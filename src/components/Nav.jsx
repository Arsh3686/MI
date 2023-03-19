import "./style/Nav.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { isLoggedOut } from "../actions/actions";

const Nav = () => {
	const dispatch = useDispatch();
	const logout = () => {
		dispatch(isLoggedOut(false));
		localStorage.removeItem("isLoggedIn");
	};
	return (
		<div>
			<div className="nav">
				<Link to="/">Home</Link>
				<Link to="/product">Products</Link>
				<Link to="/users">Users</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/" onClick={logout}>
					Logout
				</Link>
			</div>
		</div>
	);
};

export default Nav;
