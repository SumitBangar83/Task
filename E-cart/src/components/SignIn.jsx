import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [token, setToken] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // clear old errors

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", form);
      console.log(response.data)
      // Save token locally if needed
      const { token, user } = response.data;
      setToken(token);

      // Optionally store in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert(`Welcome ${user.name}`);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="w-fit m-auto my-20">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
        className="border p-2"
          type="email" 
          name="email" 
          placeholder="Email" 
          value={form.email} 
          onChange={handleChange} 
          required 
        />
        <br />
        <input 
        className="border p-2"
          type="password" 
          name="password" 
          placeholder="Password" 
          value={form.password} 
          onChange={handleChange} 
          required 
        />
        <br />
        <button className="border p-2" type="submit">Login</button>
      </form>

      {error && <p style={{color: "red"}}>{error}</p>}
      {token && <p style={{color: "green"}}>Login successful! Token stored.</p>}
    </div>
  );
}

export default Login;
