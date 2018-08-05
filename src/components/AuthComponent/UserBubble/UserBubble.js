import React, { Component, createRef } from "react";
import styles from "./UserBubble.css";
import Avatar from "../../Avatar/Avatar";

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
					<Avatar size="32px" />
					<div className={styles.info}>
						<b className={styles.truncate}>{fullName}</b>
						<span className={styles.truncate}>{email}</span>
					</div>
				</div>
				<div className={styles.actions}>
					<div className={styles.button}>Feedback</div>
					<div className={[styles.button, styles.signout].join(" ")} onClick={handleLogout}>
						Sign out
					</div>
				</div>
			</div>
		);
	}
}

export default UserBubble;
