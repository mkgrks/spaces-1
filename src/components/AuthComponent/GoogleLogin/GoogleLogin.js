import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin, error, loader } from "../../../store/actions";
import styles from "./GoogleLogin.css";

class GoogleLogin extends Component {
	componentDidMount() {
		const script = document.createElement("script");
		script.onload = () => {
			window.gapi.load("auth2", () => {
				window.gapi.auth2.init({
					client_id: process.env.GOOGLE_CLIENT_ID,
					scope: "profile",
				});
			});
		};

		script.src = "https://apis.google.com/js/platform.js";
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);
	}

	handleLogin() {
		const { userLogin, error, loader } = this.props;
		loader(true);

		window.gapi.auth2
			.getAuthInstance()
			.signIn() // .grantOfflineAccess()
			.then(res => {
				userLogin(res);
			})
			.catch(e => {
				error(e.error);
			});
	}

	render() {
		return <div className={[styles.authButton, styles.g].join(" ")} onClick={::this.handleLogin} />;
	}
}

export default connect(
	null,
	{ userLogin, error, loader }
)(GoogleLogin);
