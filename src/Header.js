import React from "react";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToLogin = this.redirectToLogin.bind(this);
  }

  redirectToLogin() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <>
        <div>I am header</div>
        <button onClick={this.redirectToLogin}>Redirect to Login</button>
        <hr />
      </>
    );
  }
}

export default withRouter(Header);
