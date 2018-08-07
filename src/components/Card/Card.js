import React from "react";
import styles from "./Card.css";

const Card = props => {
	const { color, title, description, size, id } = props;
	// use id on router, later
	return (
		<div className={[styles.card, styles[size]].join(" ")} style={{ backgroundColor: color }}>
			<div className={styles.cardHeader}>{title}</div>
			<div className={styles.cardMain}>
				<p className={styles.mainDescription}>{description}</p>
			</div>
		</div>
	);
};

export default Card;
