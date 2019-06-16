import React from "react";
import "./App.css";
import { NavLink, Route, withRouter } from "react-router-dom";

import UserList from "./users/UserList";
import Login from "./auth/Login";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/login">Login</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>

        <Route path="/users" component={UserList} />
        <Route path="/login" component={Login} />
      </>
    );
  }

  logout = () => {
    localStorage.removeItem("jwt");

    this.props.history.push("/login");
  };
}

export default withRouter(App);
