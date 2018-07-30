import React from "react";
import styles from "./Card.css";

const Card = props => {
	const { thumbnail, title, description } = props;

	return (
		<article className={styles.card}>
			<a href="#">
				<picture className={styles.thumbnail}>
					<img src={thumbnail} alt={title} />
				</picture>
				<div className={styles.cardContent}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
			</a>
		</article>
	);
};

export default Card;
