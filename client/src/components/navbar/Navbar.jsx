import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');

    // Redirect to the login page or any other desired page
    navigate("/login");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">inderbooking</span>
        </Link>
        {user ? (
          <div className="LnavItems">
            <p className="LnavItem" >{user.username}</p>
            <p className="LnavItem" onClick={handleLogout}>Logout</p>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register"><button className="navButtons" >Register</button></Link>
            <Link to="/login"><button className="navButtons" >Login</button></Link>
          </div>
        )}
      </div>
    </div>
  );
}
