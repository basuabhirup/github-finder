import React, { Fragment, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import UserRepos from "../repos/UserRepos";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

function User({ user, userRepos, loading, getUser, getUserRepos }) {
	let { username } = useParams();

	useEffect(() => {
		getUser(username);
		getUserRepos(username);
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		company,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	if (loading) return <Spinner />;

	return (
		<Fragment>
			<Link to="/" className="btn btn-light">
				Back To Search
			</Link>
			Hireable:{" "}
			{hireable ? (
				<i className="fas fa-check text-success" />
			) : (
				<i className="fas fa-times-circle text-danger" />
			)}
			<div className="card grid-2">
				<div className="all-center">
					<img
						src={avatar_url}
						alt=""
						className="round-img"
						style={{ width: "150px" }}
					/>
					<h1>{name}</h1>
					<p>Location: {location}</p>
				</div>
				<div>
					{bio && (
						<Fragment>
							<h3>Bio</h3>
							<p>{bio}</p>
						</Fragment>
					)}
					<a
						href={html_url}
						className="btn btn-dark my-1"
						target="_blank"
						rel="noreferrer"
					>
						Visit GitHub Profile
					</a>
					<ul>
						<li>
							{login && (
								<Fragment>
									<strong>Username: </strong> {login}
								</Fragment>
							)}
						</li>
						<li>
							{company && (
								<Fragment>
									<strong>Company: </strong> {company}
								</Fragment>
							)}
						</li>
						<li>
							{blog && (
								<Fragment>
									<strong>Website: </strong> {blog}
								</Fragment>
							)}
						</li>
						<li>
							{company && (
								<Fragment>
									<strong>Company: </strong> {company}
								</Fragment>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className="card text-center">
				<div className="badge badge-success">Followers: {followers}</div>
				<div className="badge badge-primary">Following: {following}</div>
				<div className="badge badge-dark">Public Repos: {public_repos}</div>
				<div className="badge badge-light">Public Gists: {public_gists}</div>
			</div>
			<UserRepos userRepos={userRepos} />
		</Fragment>
	);
}

User.propTypes = {
	user: PropTypes.object,
	userRepos: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	getUser: PropTypes.func.isRequired,
	getUserRepos: PropTypes.func.isRequired,
};

export default User;
