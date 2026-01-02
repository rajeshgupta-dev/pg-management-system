import React, { useState } from 'react'
import axios from "axios"

const AdminRegister = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  async function handleRegister() {
    try {
      await axios.post("http://localhost:5000/api/v1/admin/register", data);
      setData({
        name: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.log("Error:", error);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter Admin name"
            name="name"
            value={data.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
          />
          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default AdminRegister;
