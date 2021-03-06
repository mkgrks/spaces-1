// http://bit.ly/2M460rF
import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleLogin from "./GoogleLogin/GoogleLogin";
import UserBubble from "./UserBubble/UserBubble";
import { Avatar } from "..";
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
						<Avatar size="32px" onClick={::this.handleBubble} clickable animated />
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
