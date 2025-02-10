import React, { useState, useEffect } from "react";

const ExUseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {users.map((user, i) => (
        <React.Fragment key={user.id}> {/* Use user.id if available */}
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ExUseEffect