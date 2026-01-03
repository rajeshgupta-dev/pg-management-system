import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast, Bounce } from 'react-toastify';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
  const navigate = useNavigate();


  async function handleRegister() {
    if (!data.email || !data.password) {
      setError("all fiedl required")
      setTimeout(() => {
        setError("")
      }, 1000)
      return
    }
    setLoading(true)
    try {
      let res = await axios.post("http://localhost:5000/api/v1/admin/register", data);
      setData({
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
      setLoading(false)
      navigate("/admin-dashboard")
    } catch (error) {
      console.log("Error:", error);
      toast.error(error?.response?.data?.message || "Server Error", {
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
    } finally {
      setLoading(false);
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
    <div className='min-h-screen flex items-center justify-center bg-amber-100'>
      <div className='bg-white w-full max-w-sm p-4 rounded-lg shadow-md text-center'>
        <h2 className='mb-2.5 text-2xl'>Admin Login</h2>
        <div className='space-y-4'>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            className='w-full outline p-1'
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
            className='w-full outline p-1'
          />
          <p className='text-red-500'>{error}</p>
          <button onClick={handleRegister} className=' w-full bg-amber-200 p-1 font-semibold hover:bg-amber-300 cursor-pointer'>{loading ? "Loading..." : "Login"}</button>
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

export default AdminLogin;
