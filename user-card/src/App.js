import React from "react";
import axios from "axios";
import "./App.css";
//import class components
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: "bwkarr77",
      userData: [],
      followers: []
    };
  }

  //componentDidMount ==> gets invoked immediately
  componentDidMount() {
    this.getUser();
  }

  getUser() {
    axios
      .get(`https://api.github.com/users/${this.state.login}`)
      .then(results => {
        console.log(results.data);
        this.setState({ userData: results.data });
      })
      .catch(err => console.log(err));
  }

  getFriendsList() {
    axios
      .get(`https://api.github.com/users/${this.state.name}/followers`)
      .then(results => {
        console.log(results.data);
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>GITHUB USER CARD</h2>
          <p>content...</p>
          <UserCard user={this.state.userData} />
        </div>
      </div>
    );
  }
}

export default App;
