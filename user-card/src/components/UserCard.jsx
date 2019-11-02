import React from "react";

const UserCard = props => {
  const {
    name,
    login,
    location,
    url,
    followers,
    following,
    avatar_url
  } = props.user;
  console.log(avatar_url);
  return (
    <div>
      <h2>{name}</h2>
      <p>{login}</p>
      <p>{location}</p>
      <p>{url}</p>
      <p>{followers}</p>
      <p>{following}</p>
      <img src={avatar_url} />
    </div>
  );
};

export default UserCard;
