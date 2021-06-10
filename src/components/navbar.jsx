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
          <div className="admin_icon">
            <img src={avatar} alt="avarat" className="admin_avarat" />
            <p className="admin_name">Makhare</p>
          </div>

          <NavLink className="navbar-brand admin-dashboard-title" to="/admin">
            <span style={{ color: "#8F57E7" }}> Ticket </span> Project
          </NavLink>

          <div className="admin_icon">
            {/* <img className="admin_logout_icon" src={logout} alt="Logout icon" /> */}
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 511 512"
              xmlns="http://www.w3.org/2000/svg"
              className="admin_logout_icon"
            >
              <path d="m361.5 392v40c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-352c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v352c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm136.355469-170.355469-44.785157-44.785156c-7.8125-7.8125-20.476562-7.8125-28.285156 0-7.8125 7.808594-7.8125 20.472656 0 28.28125l31.855469 31.859375h-240.140625c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h240.140625l-31.855469 31.859375c-7.8125 7.808594-7.8125 20.472656 0 28.28125 3.90625 3.90625 9.023438 5.859375 14.140625 5.859375 5.121094 0 10.238281-1.953125 14.144531-5.859375l44.785157-44.785156c19.496093-19.496094 19.496093-51.214844 0-70.710938zm0 0" />
            </svg>
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
                    <svg
                      width="15px"
                      height="15px"
                      viewBox="0 0 511 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="admin_logout_icon"
                    >
                      <path d="m361.5 392v40c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-352c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v352c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm136.355469-170.355469-44.785157-44.785156c-7.8125-7.8125-20.476562-7.8125-28.285156 0-7.8125 7.808594-7.8125 20.472656 0 28.28125l31.855469 31.859375h-240.140625c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h240.140625l-31.855469 31.859375c-7.8125 7.808594-7.8125 20.472656 0 28.28125 3.90625 3.90625 9.023438 5.859375 14.140625 5.859375 5.121094 0 10.238281-1.953125 14.144531-5.859375l44.785157-44.785156c19.496093-19.496094 19.496093-51.214844 0-70.710938zm0 0" />
                    </svg>
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
