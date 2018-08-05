import React, { Component, Fragment } from "react";
import { Card } from "..";
import { connect } from "react-redux";
import styles from "./Board.css";

const Board = props => {
	const { spaces } = props;
	// debugger; // eslint-disable-line

	return (
		<div className={styles.container}>
			{spaces.map(s => (
				<Card
					id={s.id}
					key={s.id}
					title={s.name}
					description={s.descr}
					color={s.color}
					size={s.size}
				/>
			))}
		</div>
	);
};

export default connect(state => ({ spaces: state.spaces }))(Board);
