import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const UserList = () => {
  const users = useContext(UserContext);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Users</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {users.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Username</th>
                <th colSpan={4} style={{ textAlign: "center" }}>
                  Address
                </th>
                <th>Website</th>
                <th colSpan={3} style={{ textAlign: "center" }}>
                  Company
                </th>
              </tr>
            </thead>

            <tbody>
              {users?.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      <Link
                        to={`/user-details/${user.id}`}
                        style={{ color: "inherit" }}
                      >
                        {user.name}
                      </Link>
                    </td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.suite}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.zipcode}</td>
                    <td>{user.website}</td>
                    <td>{user.company.name}</td>
                    <td>{user.company.catchPhrase}</td>
                    <td>{user.company.bs}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default UserList;
