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
  return (
    <div className="card-container">
      <img src={avatar_url} alt="User pic" />
      <div className="user-content">
        <h2>Name: {name}</h2>
        <p>Username: {login}</p>
        <p>Location: {location}</p>
        <a href={url}>See my page...</a>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Bio: {bio}</p>
      </div>
    </div>
  );
};

export default UserCard;
