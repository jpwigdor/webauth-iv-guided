import React from "react";
import axios from "axios";

const token = localStorage.getItem("jwt");

// could be process.env.API_URL
axios.defaults.baseURL = "http://localhost:5000/api";

// Interceptors Example
// axios.interceptors.request.use(
//   config => {
//     config.headers.authorization = token;
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const notLoggedIn = <div>Please Login to see our users</div>;

      return <> {token ? <Component {...this.props} /> : notLoggedIn} </>;
    }
  };
}
