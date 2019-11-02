import React from "react";
import "./cardStyle.css";

const UserCard = props => {
  console.log(props.user);
  const {
    name,
    login,
    location,
    url,
    followers,
    following,
    avatar_url,
    bio
  } = props.user;

  function toggleGit(key) {
    let x = document.getElementsByClassName("user-git");
    console.log(x[0]);
    if (x[0].style.display === "none") {
      x[0].style.display = "block";
    } else {
      x[0].style.display = "none";
    }
  }
  return (
    <div className="card-container">
      <section className="top">
        <img className="user-img" src={avatar_url} alt="User pic" />
        <div className="user-content">
          <h2>Name: {name}</h2>
          <h3>Username: {login}</h3>
          <p>Location: {location}</p>
          <a href={url}>See my page...</a>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Bio: {bio}</p>
        </div>
      </section>
      <section className="bottom">
        <img className="user-git" src={`http://ghchart.rshah.org/${login}`} />
      </section>
      <button onClick={toggleGit} key={login}>
        More
      </button>
    </div>
  );
};

export default UserCard;
