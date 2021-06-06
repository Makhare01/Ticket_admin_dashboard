import React from "react";
import { NavLink } from "react-router-dom";
// import ticketIcon from "../icons/ticket.png";
import loupe from "../icons/loupe.png";
import avatar from "../icons/avatar.png";
import logout from "../icons/exit.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light navbar-style">
        <div className="container">
          <span className="navbar-search">
            <img src={loupe} alt="Loupe svg" width="15px" />
            <input
              type="search"
              id="admin_search"
              name="admin_search"
              placeholder="SEARCH"
              className="admin_search"
            />
          </span>

          <NavLink className="navbar-brand admin-dashboard-title" to="/admin">
            <span style={{ color: "#8F57E7" }}> Ticket </span> Project
          </NavLink>

          <div className="admin_icon">
            <img src={avatar} alt="avarat" className="admin_avarat" />
            <p className="admin_name">Makhare</p>
            <img className="admin_logout_icon" src={logout} alt="Logout icon" />
          </div>
        </div>
      </nav>
      {/* Responsive Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light admin-responsive-navbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand admin-dashboard-title" to="/admin">
            <span style={{ color: "#8F57E7" }}> Ticket </span> Project
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/admin"
                >
                  <div style={{ display: "flex" }}>
                    <img src={avatar} alt="avarat" className="admin_avarat" />
                    <p className="admin_name">Makhare</p>
                    <img
                      className="admin_logout_icon"
                      src={logout}
                      alt="Logout icon"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
