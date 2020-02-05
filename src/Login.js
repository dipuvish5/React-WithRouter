import React from "react";
import Header from "./Header";
import "./styles.css";

class Login extends React.Component {
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
        <h2>I am Login</h2>
        <button onClick={this.redirectToApp}>Redirect to App</button>
      </div>
    );
  }
}

export default Login;
