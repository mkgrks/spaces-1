// import React, { Component, Fragment } from "react";
// import { Input } from "../../elements";

// import styles from "./Modal.css";

// class Modal extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			active: props.active,
// 		};
// 	}

// 	componentWillReceiveProps(nextProps) {
// 		::this.handleModal();
// 	}

// 	handleModal() {
// 		this.setState(prevState => ({
// 			active: !prevState.active,
// 		}));
// 	}

// 	render() {
// 		const { active } = this.state;
// 		const { tip } = this.props;
// 		return (
// 			<Fragment>
// 				{active ? (
// 					<div className={styles.modal}>
// 						<div className={styles.modalWindow}>
// 							<span
// 								className={[styles.modalClose, styles.pointer].join(" ")}
// 								onClick={::this.handleModal}
// 							>
// 								&times;
// 							</span>
// 							<h2>Create a Space</h2>
// 							<div className={styles.modalContent}>
// 								<Input title="Name" />
// 								<p className={styles.tip}>{tip}</p>
// 							</div>
// 						</div>
// 					</div>
// 				) : (
// 					<Fragment />
// 				)}
// 			</Fragment>
// 		);
// 	}
// }

// export default Modal;
