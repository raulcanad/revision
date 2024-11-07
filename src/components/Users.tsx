import React, { useState, useEffect } from 'react';

// Define a TypeScript interface for the user data
interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: User[] = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Lista de Usuarios</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ margin: '10px 0', borderBottom: '1px solid #ddd' }}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users; // Default export
