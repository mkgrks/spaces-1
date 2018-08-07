import React, { Fragment } from "react";
import { Header, Board, PostInput, PageLoader, Toast, Modal } from "../../components";

import styles from "./App.css";

const App = () => (
	<Fragment>
		<div className={styles.app}>
			<PageLoader barHeight="2px" barWidth="100%" bgColor="#CECECE" barColor="#000" />
			<Header />
			<div className={styles.container}>
				<div className={`${styles.centered} ${false ? styles.centeredPadded : ""}`}>
					{/* <div className={styles.space}>
								<PostInput />
							</div> */}
					<Board />
				</div>
			</div>
		</div>
		<Modal />
		<Toast />
	</Fragment>
);

export default App;
