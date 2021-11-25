import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";
import "./App.css";

class App extends Component {
	state = {
		users: [],
		user: {},
		loading: false,
		alert: null,
	};

	searchUsers = text => {
		this.setState({ laoding: true });
		axios
			.get(
				`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then(res => this.setState({ users: res.data.items, loading: false }));
	};

	getUser = username => {
		this.setState({ laoding: true });
		axios
			.get(
				`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then(res => this.setState({ user: res.data, loading: false }));
	};

	clearUsers = () => this.setState({ users: [], loading: false });

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
		setTimeout(() => this.setState({ alert: null }), 5000);
	};

	render() {
		const { users, user, loading } = this.state;

		return (
			<Router>
				<div className="App">
					<Navbar />
					<div className="container">
						<Alert alert={this.state.alert} />
						<Routes>
							<Route
								exact
								path="/"
								element={
									<Fragment>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											isCleared={users.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										<Users loading={loading} users={users} />
									</Fragment>
								}
							/>
							<Route exact path="/about" element={<About />} />
							<Route
								exact
								path="/user/:username"
								element={
									<User user={user} getUser={this.getUser} loading={loading} />
								}
							/>
						</Routes>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
