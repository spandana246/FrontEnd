import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

interface LoginResponse {
  token: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await login(email, password);
    const data = res.data as LoginResponse;
    setToken(data.token);
    navigate("/feedback");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
