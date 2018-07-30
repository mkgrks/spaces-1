import React from "react";
import styles from "./FormElements.css";

export const Input = props => {
	const { title, disabled, value, required } = props;

	return (
		<div className={styles.input}>
			<input
				type="text"
				className={disabled ? styles.disabled : ""}
				value={value}
				required={required}
			/>
			<span className={styles.highlight} />
			<span className={styles.bar} />
			<label>{title}</label>
		</div>
	);
};
