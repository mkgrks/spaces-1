import React from "react";
import styles from "./Card.css";

const Card = props => {
	const { color, title, description, size, id } = props;

	return (
		<div
			className={[styles.card, styles[`${size}Card`]].join(" ")}
			style={{ backgroundColor: color }}
		>
			<div className={styles.cardHeader}>{title}</div>
			<div className={styles.cardMain}>
				<p className={styles.mainDescription}>{description}</p>
			</div>
		</div>
	);
};

export default Card;
