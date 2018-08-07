import React from "react";
import { connect } from "react-redux";

import styles from "./PageLoader.css";

const PageLoader = props => {
	const { barHeight, barWidth, bgColor, barColor, loading } = props;

	if (loading) {
		return (
			<div className={styles.loader} style={{ height: barHeight, backgroundColor: barColor }}>
				<div
					className={styles.undetermined}
					style={{ width: barWidth, backgroundColor: bgColor }}
				/>
			</div>
		);
	}

	return "";
};

export default connect(state => ({ loading: state.loading }))(PageLoader);
