import React from "react";
import Header from "./Header";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToUser = this.redirectToUser.bind(this);
  }

  redirectToUser() {
    this.props.history.push("/users");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h2>I am App</h2>
        <button onClick={this.redirectToUser}>Redirect to User</button>
      </div>
    );
  }
}

export default App;
