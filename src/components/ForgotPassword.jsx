import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, login } from "../actions/actions";
import { Link, useLocation } from "react-router-dom";
import "./style/Login.css";

const ForgotPassword = () => {
	const params = useLocation().pathname;
	const [isLogin, setIsLogin] = useState(false);
	const reducerr = useSelector((state) => state.reducers);
	const { loginList } = reducerr;
	const [loggedUsers, setLoggedUsers] = useState([]);
	const dispatch = useDispatch();
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
		Confirmpassword: "",
		remember: false,
		secretWord: "",
	});
	const handleSubmit = () => {
		const arr = JSON.parse(localStorage.getItem("allData") || "[]");
		console.log(arr);
		const isPresent = arr.findIndex((e) => {
			return (
				e.email === loginData.email &&
				e.secretWord === loginData.secretWord
			);
		});
		if (isPresent !== -1) {
			if (loginData.Confirmpassword === loginData.password) {
				localStorage.removeItem("allData");
				arr[isPresent].password = loginData.password;
				localStorage.setItem("allData", JSON.stringify(arr));
				console.log("New Password", arr);
				setLoginData({
					email: "",
					password: "",
					Confirmpassword: "",
					remember: false,
					secretWord: "",
				});
			} else {
				alert("new Password and Confirm password should be same");
			}

			// localStorage.setItem("isLoggedIn", true);
			// dispatch(isLoggedIn(true));
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
						<strong>Forgot Password Page</strong>
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

						<div className="forgotPasswordHandler">
							<label htmlFor="">Secret word</label>
							<input
								type="text"
								placeholder="    Secret word registerd while creating account "
								value={loginData.secretWord}
								onChange={(e) =>
									setLoginData({
										...loginData,
										secretWord: e.target.value,
									})
								}
							/>
							<br />
						</div>
						<div className="forgotPasswordHandler">
							<label htmlFor="">New Password</label>
							<input
								type="password"
								placeholder="  Enter new Password"
								value={loginData.password}
								onChange={(e) =>
									setLoginData({
										...loginData,
										password: e.target.value,
									})
								}
							/>
							<br />
						</div>
						<div className="forgotPasswordHandler">
							<label htmlFor="">Confirm Password</label>
							<input
								type="text"
								placeholder="  Enter Confirm Password"
								value={loginData.Confirmpassword}
								onChange={(e) =>
									setLoginData({
										...loginData,
										Confirmpassword: e.target.value,
									})
								}
							/>
							<br />
						</div>
					</div>

					{/* <Link to="/" className="loginButtons"> */}
					<button onClick={handleSubmit} className="active">
						UPDATE_PASSWORD
					</button>
					{/* </Link> */}
				</div>
			</div>
			<div className="loginInfo">
				<img src="images/img2.svg" alt="" />
			</div>
		</div>
	);
};

export default ForgotPassword;
