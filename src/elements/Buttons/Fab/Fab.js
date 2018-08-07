import React from "react";
import { connect } from "react-redux";
import styles from "./Fab.css";

const Fab = props => {
	if (props.user.email)
		return (
			<div className={styles.fab} onClick={props.onClick}>
				{props.value}
			</div>
		);

	return "";
};

export default connect(state => ({ user: state.user }))(Fab);
