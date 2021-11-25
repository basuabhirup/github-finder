import React, { Component, useEffect } from "react";
import { useParams } from "react-router-dom";

function User({ user, loading, getUser }) {
	let { username } = useParams();

	useEffect(() => {
		getUser(username);
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_reos,
		public_gists,
		hireable,
	} = user;

	return <div>{name}</div>;
}

export default User;
