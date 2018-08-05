import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Avatar } from "..";
import { isUrl } from "../../utils/functions";
import { scrape, discardScraped } from "../../store/actions";
import styles from "./PostInput.css";

class PostInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "",
		};
	}

	emmitChange(event) {
		this.setState({ value: event.target.innerText });
	}

	handlePaste(e) {
		const { scrape } = this.props;
		const pasted = e.clipboardData.getData("text/plain");

		if (isUrl(pasted)) {
			scrape(pasted);
		}
	}

	handleClose(e) {
		e.preventDefault();
		this.props.discardScraped();
	}

	render() {
		console.log(this.state.value);
		const { scrapedData } = this.props;
		return (
			<Fragment>
				<div className={styles.tile}>
					<div className={styles.main}>
						<Avatar size="32px" />
						<div
							className={styles.textarea}
							onInput={::this.emmitChange}
							onPaste={::this.handlePaste}
							contentEditable="plaintext-only" // we could take  advantage of contentEditable and use markup, later
							placeholder="Let the people know..."
						/>
						<div className={styles.postButton} />
					</div>
					{scrapedData.haveData ? (
						<a
							className={styles.pagePreview}
							target="_blank"
							href={scrapedData.url}
							rel="noopener noreferrer"
						>
							<div className={styles.thumbnail}>
								<img src={scrapedData.image} width="100%" alt={scrapedData.title} />
							</div>
							<div className={styles.info}>
								<b className={styles.title}>{scrapedData.title}</b>
								<p className={styles.description}>{scrapedData.description}</p>
							</div>
							<span className={styles.close} onClick={::this.handleClose}>
								&times;
							</span>
						</a>
					) : (
						""
					)}
				</div>
			</Fragment>
		);
	}
}

export default connect(
	state => ({ scrapedData: state.scrapedData }),
	{ scrape, discardScraped }
)(PostInput);
