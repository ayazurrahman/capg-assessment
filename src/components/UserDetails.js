import React, { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const users = useContext(UserContext);
  const { userId } = useParams();
  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: '50px'}}>
      <div style={{backgroundColor: '#126EC0', padding: '20px 50px', color: '#fff'}}>
        <h1>Hello {user.name}</h1>
        <h3>Email: {user.email}</h3>
        <h3>Phone: {user.phone}</h3>
        <address>
          {user.address.suite}, {user.address.street}, {user.address.city},{" "}
          {user.address.zipcode}
        </address>
        <a href={user.website} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
          {user.website}
        </a>
      </div>
    </div>
  );
};

export default UserDetails;
