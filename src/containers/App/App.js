import React, { Component, Fragment } from "react";
import { Header, Board, PageLoader, Toast } from "../../components";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

import styles from "./App.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
		};
	}

	handleModal() {
		this.setState(prevState => ({
			modal: !prevState.modal,
		}));
	}

	render() {
		return (
			<Fragment>
				<div className={styles.app}>
					<PageLoader barHeight="2px" barWidth="100%" bgColor="#CECECE" barColor="#000" />
					<Header />
					<div className={styles.container}>
						<div className={`${styles.centered} ${false ? styles.centeredPadded : ""}`}>
							{true ? <Board /> : <WelcomeScreen />}
						</div>
					</div>
				</div>
				<Toast />
			</Fragment>
		);
	}
}

export default App;
