import React from "react";
import styles from "./FormElements.css";

const InputTile = props => {
	const { placeholder, disabled, value, handleChange } = props;

	return (
		<div className={styles.inputTile}>
			<input
				type="text"
				className={`${styles.input} ${disabled ? styles.disabled : ""}`}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
			/>
			<span className={styles.highlight} />
			<span className={styles.bar} />
		</div>
	);
};
