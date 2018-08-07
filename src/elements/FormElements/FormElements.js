import React, { Fragment } from "react";
import styles from "./FormElements.css";

export const Input = props => {
	const { title, name, disabled, value, required, onChange } = props;

	return (
		<div className={styles.input}>
			<input
				type="text"
				name={name}
				className={`${styles.inputField} ${disabled ? styles.disabled : ""}`}
				value={value}
				required={required}
				autoComplete="off"
				onChange={onChange}
			/>
			<span className={styles.highlight} />
			<span className={styles.bar} />
			<label className={styles.inputLabel}>{title}</label>
		</div>
	);
};

export const Textarea = props => {
	const { title, name, disabled, value, required, onChange } = props;

	return (
		<div className={styles.input}>
			<textarea
				className={`${[styles.inputField, styles.textarea].join(" ")} ${
					disabled ? styles.disabled : ""
				}`}
				name={name}
				value={value}
				autoComplete="off"
				maxLength="250"
				required={required}
				onChange={onChange}
			/>
			<span className={styles.highlight} />
			<span className={styles.bar} />
			<label className={styles.inputLabel}>{title}</label>
		</div>
	);
};

export const Switch = props => {
	const { name, checked, onChange, label } = props;
	return (
		<Fragment>
			<div className={styles.label}>{label}</div>
			<label className={styles.switch}>
				<input type="checkbox" name={name} checked={checked} onChange={onChange} /> <div />
			</label>
		</Fragment>
	);
};
