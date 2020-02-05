import React from "react";
import Header from "./Header";
import "./styles.css";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToApp = this.redirectToApp.bind(this);
  }

  redirectToApp() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h2>I am User</h2>
        <button onClick={this.redirectToApp}>Redirect to App</button>
      </div>
    );
  }
}

export default Users;
