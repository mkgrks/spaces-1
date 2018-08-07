import React from "react";
import { connect } from "react-redux";
import styles from "./Avatar.css";

const Avatar = props => {
	const { avatar, size, clickable, onClick, animated } = props;

	return (
		<img
			className={`${styles.avatar} ${clickable && styles.clickable} ${animated && styles.animated}`}
			src={avatar}
			style={{ width: size, height: size }}
			onClick={onClick}
			alt="Just you!"
		/>
	);
};

export default connect(state => ({ avatar: state.user.avatar }))(Avatar);
