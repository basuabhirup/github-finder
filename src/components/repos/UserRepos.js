import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

function UserRepos({ userRepos }) {
	return userRepos.map(repo => <RepoItem repo={repo} key={repo.id} />);
}

UserRepos.propTypes = {
	userRepos: PropTypes.array.isRequired,
};

export default UserRepos;
