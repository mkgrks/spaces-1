import React, { Component, Fragment } from "react";
import { CirclePicker } from "react-color";
import { connect } from "react-redux";
import { Input, Fab, Switch, Textarea } from "../../elements";

import { createSpace } from "../../store/actions";

import styles from "./Modal.css";

// inner state makes whole the modal re-render onchange of every input, maybe I should just take input value on submit, remove inner state, later
class Modal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false,
			color: "#fff",
			name: "",
			description: "",
			isPublic: true,
		};
	}

	handleChangeComplete(color) {
		this.setState({ color: color.hex });
	}

	handleModal() {
		this.setState(prevState => ({
			active: !prevState.active,
		}));
	}

	handleChange(e) {
		const { name, value, checked, type } = e.target;

		this.setState({
			[name]: type === "checkbox" ? checked : value,
		});
	}

	handleSubmit() {
		const { createSpace } = this.props;
		const { name, description, isPublic } = this.state;
		createSpace(name, description, isPublic);

		// maybe hold modal open on error? later
		this.setState({
			active: false,
			name: "",
			description: "",
			isPublic: true,
		});
	}

	render() {
		const { active, color, name, description, isPublic } = this.state;
		const { tip } = this.props;

		return (
			<Fragment>
				{active ? (
					<div className={styles.modal}>
						<div className={styles.modalWindow} style={{ backgroundColor: color }}>
							<div
								className={[styles.modalClose, styles.pointer].join(" ")}
								onClick={::this.handleModal}
							>
								&times;
							</div>
							<h2 className={styles.modalTitle}>New Space</h2>
							<div className={styles.modalContent}>
								<Input
									title="Name"
									name="name"
									required
									value={name}
									onChange={::this.handleChange}
								/>
								<Textarea
									title="Description"
									required
									name="description"
									value={description}
									onChange={::this.handleChange}
								/>
								{/* <CirclePicker color={color} onChangeComplete={::this.handleChangeComplete} /> */}
								<p className={styles.tip}>{tip}</p>
								<div className={styles.switch}>
									{" "}
									{/* should pass classname as prop to switch, later */}
									<Switch
										label="Public"
										checked={isPublic}
										onChange={::this.handleChange}
										name="isPublic"
									/>
								</div>
								{/* same for classname here, later */}
								<div className={styles.buttonArea}>
									<button className={styles.button} type="button" onClick={::this.handleSubmit}>
										Create Space
									</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<Fab onClick={::this.handleModal} />
				)}
			</Fragment>
		);
	}
}

export default connect(
	null,
	{ createSpace }
)(Modal);
