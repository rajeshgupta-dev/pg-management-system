import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast, Bounce } from 'react-toastify';


const AdminRegister = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });


  async function handleRegister() {
    try {
      let res = await axios.post("http://localhost:5000/api/v1/admin/register", data);
      setData({
        name: '',
        email: '',
        password: ''
      });
      toast(res.data.message, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.response.data.message, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
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
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce} />
    </div>
  );
}

export default AdminRegister;
