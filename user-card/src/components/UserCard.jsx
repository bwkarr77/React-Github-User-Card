import React from "react";

const UserCard = props => {
  const { name, login, location, url, followers, following } = props.user;
  console.log(name);
  return (
    <div>
      <h2>{name}</h2>
      <p>{login}</p>
      <p>{location}</p>
      <p>{url}</p>
      <p>{followers}</p>
      <p>{following}</p>
    </div>
  );
};

export default UserCard;
