import React from "react";
import axios from "axios";

import "../auth/addInterceptors";
import requiresAuth from "../auth/requiresAuth";

class UserList extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <>
        <h2>Our Users</h2>

        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </>
    );
  }

  // USING AXIOS.INTERCEPTORS
  componentDidMount() {
    const endpoint = "http://localhost:5000/api/users";

    axios
      .get(endpoint)
      .then(res => {
        console.log("users", res.data);
        this.setState(() => ({ users: res.data }));
      })
      .catch(error => {
        console.error("users error", error.response);
      });
  }

  // NOT USING AXIOS.INTERCEPTORS
  // componentDidMount() {
  //   const endpoint = "http://localhost:5000/api/users";
  //   const token = localStorage.getItem("jwt");
  //   const config = {
  //     headers: {
  //       authorization: token
  //     }
  //   };

  //   axios
  //     .get(endpoint, config)
  //     .then(res => {
  //       console.log("users", res.data);
  //       this.setState(() => ({ users: res.data }));
  //     })
  //     .catch(error => {
  //       console.error("users error", error.response);
  //     });
  // }
}

export default requiresAuth(UserList);
