import React, { Component } from "react";
import AuthComponent from "../AuthComponent/AuthComponent";
import styles from "./Header.css";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			raised: false,
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", ::this.handleScroll, { passive: true });
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", ::this.handleScroll);
	}

	handleScroll() {
		const { raised } = this.state;

		if (window.scrollY > 0 && !raised) {
			this.setState({ raised: true });
		} else if (window.scrollY === 0) {
			this.setState({ raised: false });
		}
	}

	render() {
		const { raised } = this.state;
		const headerClasses = [styles.header, raised && styles.shadow].join(" ");

		return (
			<header className={headerClasses}>
				<div className={styles.logo}>
					Spaces<code className={styles.version}>alpha</code>
				</div>
				<AuthComponent />
			</header>
		);
	}
}

export default Header;
