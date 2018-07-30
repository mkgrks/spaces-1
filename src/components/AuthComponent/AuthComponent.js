import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleLogin from "./GoogleLogin/GoogleLogin";
import UserBubble from "../UserBubble/UserBubble";
import { userLogout } from "../../store/actions";

import styles from "./AuthComponent.css";

class AuthComponent extends Component {
	// keep in mind, babel can create the constructors now, later
	constructor(props) {
		super(props);

		this.state = {
			showBubble: false,
		};
	}

	handleLogout() {
		const { userLogout } = this.props;

		userLogout();
		this.setState({
			showBubble: false,
		});
	}

	handleBubble() {
		this.setState(prevState => ({
			showBubble: !prevState.showBubble,
		}));
	}

	render() {
		const { showBubble } = this.state;
		const {
			user: { avatar, fullName, email },
		} = this.props;

		return (
			<div className={styles.authComponent}>
				{email ? (
					<div>
						<div
							style={{ backgroundImage: `url(${avatar}` }}
							className={[styles.authButton, styles.avatar].join(" ")}
							onClick={::this.handleBubble}
						/>
						{showBubble ? (
							<UserBubble
								fullName={fullName}
								email={email}
								avatar={avatar}
								handleBubble={::this.handleBubble}
								handleLogout={::this.handleLogout}
							/>
						) : (
							""
						)}
					</div>
				) : (
					<GoogleLogin />
				)}
			</div>
		);
	}
}

export default connect(
	state => ({ user: state.user }),
	{ userLogout }
)(AuthComponent);
