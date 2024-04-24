// src/pages/Users.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

async function getData(url) {
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch users and update state
  async function fetchAndUpdateData(url) {
    setLoading(true);
    try {
      const apiResponse = await getData(url);
      setUsers(apiResponse.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchAndUpdateData(`https://reqres.in/api/users`);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Users Page</h1>
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <img src={user.avatar} alt={user.first_name} />
          <h2>{user.first_name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Users;
