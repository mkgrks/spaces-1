import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Toast.css";
import { dismissNotification } from "../../store/actions";

class Toast extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		const {
			notification: { timer },
			dismissNotification,
		} = nextProps;

		if (timer)
			setTimeout(() => {
				dismissNotification();
			}, timer);
	}

	render() {
		const {
			notification: { text },
		} = this.props;
		if (text)
			return (
				<div className={styles.toast}>
					<p>{text}</p>
				</div>
			);
		else return "";
	}
}

export default connect(
	state => ({ notification: state.notification }),
	{ dismissNotification }
)(Toast);
