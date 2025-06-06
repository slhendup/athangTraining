import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialData = {
  name: "",
  email: "",
  password: "",
  confrimPassword: "",
  phoneNumber: "",
};
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ ...initialData });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formData.password !== formData.confrimPassword) {
        setError("Password and confirm password doesnt not match");
        return;
      }
      const response = await axios.post("http://localhost:3000/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confrimPassword: formData.confrimPassword,
        phoneNumber: formData.phoneNumber,
      });

      console.log(response.data);
      setError("");
      setFormData({});
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "some error occured");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="register-title">Register</h2>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          Email
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          Password
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          ConfrimPassword
          <input
            type="text"
            name="confrimPassword"
            value={formData.confrimPassword}
            onChange={handleChange}
            required
          />
          PhoneNumber
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        {error && <p className="register-error"> {error}</p>}
        <button type="submit">Register</button>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
