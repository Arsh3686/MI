import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, login } from "../actions/actions";
import { Link, useLocation } from "react-router-dom";
import "./style/Login.css";

const Login = () => {
	const params = useLocation().pathname;
	const [isLogin, setIsLogin] = useState(false);
	const reducerr = useSelector((state) => state.reducers);
	const { loginList } = reducerr;
	const [loggedUsers, setLoggedUsers] = useState([]);
	const dispatch = useDispatch();
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
		remember: false,
		secretWord: "",
	});
	const handleSubmit = () => {
		const arr = JSON.parse(localStorage.getItem("allData") || "[]");
		console.log("hey");
		const isPresent = arr.findIndex((e) => {
			return (
				e.email === loginData.email && e.password === loginData.password
			);
		});
		if (isPresent !== -1) {
			localStorage.setItem("isLoggedIn", true);
			dispatch(isLoggedIn(true));
		} else {
			alert("Wrong Credential");
		}
	};
	const handleNewSubmit = (e) => {
		const isPresent = loggedUsers.findIndex((ele) => {
			return ele.id === loginData.email;
		});
		if (
			loginData.email.length >= 5 &&
			loginData.password.length >= 5 &&
			loginData.secretWord.length >= 5
		) {
			if (isPresent === -1) {
				const arr = JSON.parse(localStorage.getItem("allData") || "[]");

				const localData = {
					email: loginData.email,
					password: loginData.password,
					isLoggedIn: loginData.remember,
					secretWord: loginData.secretWord,
				};
				arr.push(localData);
				console.log("Arr", arr);
				localStorage.setItem("allData", JSON.stringify(arr));

				dispatch(login(loginData));
				setLoginData({
					email: "",
					password: "",
					remember: false,
					secretWord: "",
				});
			} else {
				alert(
					"already present , if you forgot password ,create one , if you don't have account create account"
				);
			}
		} else {
			alert("email & password length should be greater than 5");
		}
	};

	useEffect(() => {
		console.log("loginList", loginList);
		// const userData = dispatch(usersData);
		// console.log("userData", userData);
		setIsLogin(params === "/createAccount" ? true : false);
		setLoggedUsers(loginList);
	}, [params, loginList, reducerr.isLoggedIn]);
	return (
		<div className="login">
			<div className="loginSide">
				<div className="loginSideBox">
					<h1>
						Welcome back to <br />
						Preety Login
					</h1>

					<p>
						<strong>
							{isLogin
								? `Create your Account`
								: `It's great to have you back!`}
						</strong>
					</p>
					<div className="loginPannel">
						<div className="loginCredentials">
							<label htmlFor="Email">Email / Username</label>
							<input
								value={loginData.email}
								onChange={(e) =>
									setLoginData({
										...loginData,
										email: e.target.value,
									})
								}
								type="email"
								placeholder="    Enter your registered email"
							/>
						</div>
						<div className="loginCredentials">
							<label htmlFor="Password">Password</label>
							<input
								value={loginData.password}
								onChange={(e) =>
									setLoginData({
										...loginData,
										password: e.target.value,
									})
								}
								type="password"
								placeholder="    Enter your password"
							/>
						</div>

						{isLogin === true && (
							<div className="forgotPasswordHandler">
								<label htmlFor="">
									Secret word like FamilyMember's name{" "}
								</label>
								<input
									type="text"
									placeholder="    Secret word like ,Mother ,Father name "
									value={loginData.secretWord}
									onChange={(e) =>
										setLoginData({
											...loginData,
											secretWord: e.target.value,
										})
									}
								/>
								<br />
								<small>
									** This word will be used while forget
									Password **
								</small>
							</div>
						)}
					</div>
					<div className="loginextra">
						{isLogin === false && (
							<div className="loginExtra__first">
								<input
									type="checkbox"
									checked={loginData.remember}
									onChange={(e) =>
										setLoginData({
											...loginData,
											remember: e.target.checked,
										})
									}
								/>
								<p>Remember me !!</p>
							</div>
						)}

						{!isLogin && (
							<div className="loginForgot">
								<Link to="/forgot">Forgot password</Link>
							</div>
						)}
					</div>

					<div className="loginButtons">
						{params === "/" ? (
							<button
								onClick={handleSubmit}
								className={`${
									isLogin === false ? `active` : `loginbtn`
								}`}>
								LOGIN
							</button>
						) : (
							params === "/createAccount" && (
								<Link to="/">
									{isLogin === true && (
										<button
											className={`${
												isLogin === false
													? `active`
													: `loginbtn`
											}`}>
											LOGIN
										</button>
									)}
								</Link>
							)
						)}

						<Link to="/createAccount">
							{isLogin === true ? (
								<button
									onClick={handleNewSubmit}
									className={`${
										isLogin === true ? `active` : `loginbtn`
									}`}>
									CREATE_ACCOUNT
								</button>
							) : (
								<button
									className={`${
										isLogin === true ? `active` : `loginbtn`
									}`}>
									CREATE_ACCOUNT
								</button>
							)}
						</Link>
					</div>
				</div>
			</div>
			<div className="loginInfo">
				<img src="images/img2.svg" alt="" />
			</div>
		</div>
	);
};

export default Login;
