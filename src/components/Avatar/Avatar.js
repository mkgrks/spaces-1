import React from "react";
import styles from "./Avatar.css";

const Avatar = props => {
	const { image } = props;
	// add clickable prop, set cursor
	return <img className={styles.avatar} src={image} alt="Just you!" />;
};

export default Avatar;
