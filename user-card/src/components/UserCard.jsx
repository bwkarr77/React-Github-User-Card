import React from "react";
import "./cardStyle.css";

const UserCard = props => {
  console.log(props.user);
  const {
    name,
    login,
    location,
    html_url,
    followers,
    following,
    avatar_url,
    bio,
    id
  } = props.user;

  function toggleGit() {
    let x = document.getElementById(`${id}`);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
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
          <a href={html_url}>See my page...</a>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Bio: {bio}</p>
        </div>
      </section>
      <section className="bottom">
        <img
          className="user-git"
          id={id}
          src={`http://ghchart.rshah.org/${login}`}
        />
      </section>
      <button onClick={toggleGit}>More</button>
    </div>
  );
};

export default UserCard;
