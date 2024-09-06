import { useState } from "react";
import "../style/login.css";
import { users } from "../data/data";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
  usuario: "",
  password: "",
};

export default function LoginPage({ setIsAuthenticated, setUserAthenticated }) {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState(initialState);


  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUser = users.find(
      (user) =>
        user.email === loginForm.usuario && user.password === loginForm.password
    );
    if (!isUser) {
      toast.error("Usuario o contraseña incorrectos");
      return;
    }
    setUserAthenticated(isUser);
    
    setIsAuthenticated(true);
    navigate("/requeriments");
    setLoginForm(initialState);
  };

  return (
    <>
      <div className="login">
        <div className="login-frame">
          <div className="login-header">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="title">S&S WEB</span>
          </div>
          <div className="login-content">
            <div className="login-container">
              <img
                src="/Imagenes/Logo.png"
                alt="Grupo S&S Logo"
                className="logo"
              />
              <h2 className="login-title">OPERADOR DE COMERCIO EXTERIOR EN LÍNEA</h2>
              <form id="loginForm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Usuario"
                  required
                  id="usuario"
                  value={loginForm.usuario}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  required
                  id="password"
                  value={loginForm.password}
                  onChange={handleChange}
                />
                <input
                  type="submit"
                  className="button-login"
                  value={"INGRESAR"}
                />
              </form>
              <a href="#" className="forgot-password">
                ¿Olvidó la contraseña?
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  );
}
