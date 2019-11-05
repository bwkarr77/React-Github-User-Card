import React from "react";
import axios from "axios";
import "./App.css";
import "./components/cardStyle.css";
//import class components
import UserList from "./components/UserList";
import UserCard from "./components/UserCard";
import { useGetInfo } from "./components/ApiContent";

const baseUrl = "https://api.github.com/users/";

class App extends React.Component {
  // baseUrl = "https://api.github.com/users/";
  constructor() {
    super();
    this.state = {
      login: "bwkarr77",
      userData: [],
      followers: []
    };
    // const baseUrl = "https://api.github.com/users/";
  }

  //componentDidMount ==> gets invoked immediately
  componentDidMount() {
    this.getUser();
    this.getFriendsList();
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
      .get(`https://api.github.com/users/${this.state.login}/followers`)
      .then(results => {
        // console.log(results.data);
        results.data.forEach(i => {
          axios.get(`https://api.github.com/users/${i.login}`).then(res => {
            // console.log(res.data);
            this.setState({ followers: [...this.state.followers, res.data] });
          });
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    console.log(this.state.followers);
    return (
      <div className="App">
        <div className="App-header">
          <h2>GITHUB USER CARD</h2>
          <section className="card-content">
            <UserCard user={this.state.userData} />
            {Array.isArray(this.state.followers) &&
            this.state.followers.length > 0 ? (
              <UserList followers={this.state.followers} />
            ) : (
              console.log("empty")
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
