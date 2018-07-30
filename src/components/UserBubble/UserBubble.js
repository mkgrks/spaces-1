import React, { Component, createRef } from "react";
import { GoogleLogout } from "react-google-login";
import styles from "./UserBubble.css";

class UserBubble extends Component {
	constructor(props) {
		super(props);

		this.userBubble = createRef();
	}

	componentDidMount() {
		this.userBubble.current.focus();
	}

	onBlur() {
		const { handleBubble } = this.props;

		handleBubble();
	}

	render() {
		const { fullName, avatar, email, handleLogout } = this.props;

		return (
			<div
				id="user-bubble"
				ref={this.userBubble}
				onBlur={::this.onBlur} // + tabindex to avoid extra listeners
				tabIndex="0"
				className={styles.userBubble}
			>
				<div className={styles.basicInfo}>
					<div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} />
					<div className={styles.info}>
						<b className={styles.truncate}>{fullName}</b>
						<span className={styles.truncate}>{email}</span>
					</div>
				</div>
				<div className={styles.actions}>
					<GoogleLogout
						className={[styles.button, styles.signout].join(" ")}
						buttonText="Sign out"
						tag="div"
						type=""
						onLogoutSuccess={handleLogout}
					/>
				</div>
			</div>
		);
	}
}

export default UserBubble;
