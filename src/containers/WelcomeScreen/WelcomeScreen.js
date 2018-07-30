import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Input } from "../../elements";
import { Avatar } from "../../components";

const WelcomeScreen = props => {
	const { avatar, firstName, fullName, email } = props.user;

	return (
		<Fragment>
			<h2>Welcome {firstName}! </h2>
			<h3>This is everything we know about you. Feel free to change anything! </h3>
			<Avatar size="50%" image={avatar} />
			<Input title="Name" required value={fullName} />
			<Input title="E-mail" value={email} disabled required />
		</Fragment>
	);
};

export default connect(state => ({ user: state.user }))(WelcomeScreen);
