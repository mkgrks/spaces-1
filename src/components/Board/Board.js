import React, { Component, Fragment } from "react";
import { Card } from "..";
import { connect } from "react-redux";
import styles from "./Board.css";
import { defaultBoards } from "../../utils/defaults";

const Board = props => {
	const { spaces } = props;
	// debugger; // eslint-disable-line

	return (
		<section className={styles.cards}>
			{(spaces || defaultBoards).map(s => (
				<Card key={s.id} title={s.name} description={s.descr} thumbnail={s.thumbnail} />
			))}
		</section>
	);
};

export default connect(state => ({ spaces: state.spaces }))(Board);
