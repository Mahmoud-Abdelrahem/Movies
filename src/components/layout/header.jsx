import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/providers/context/authLogin";
import { LangContext } from "../../services/providers/context/langContext";
import { ThemeContext } from "../../services/providers/context/themeContext";

function Header() {
  const { lang, setLang } = useContext(LangContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { token} = useContext(AuthContext);

  const cardStyle = {
    height: "100%",
    backgroundColor: theme === "light" ? "#f8f9fa" : "#343a40",
  };

  const textStyle = {
    color: theme === "light" ? "#212529" : "#f8f9fa",
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-body-tertiary"
      style={cardStyle}
    >
      <div className="container-fluid">
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                style={textStyle}
                className="nav-link"
                aria-current="page"
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={textStyle}
                className="nav-link"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={textStyle}
                className="nav-link"
                aria-current="page"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={textStyle}
                className="nav-link"
                aria-current="page"
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={textStyle}
                className="nav-link"
                aria-current="page"
                to="/Favoritemovies"
              >
                Favorite Movies
              </NavLink>
            </li>
          </ul>
        </div>

        <button
          className={
            theme === "light"
              ? "btn bg-dark text-light m-2"
              : "btn bg-light text-dark m-2"
          }
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            fill="currentColor"
            className="bi bi-globe-americas"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
          </svg>
        </button>

        <button
          className={
            theme === "light"
              ? "btn bg-dark text-light m-2"
              : "btn bg-light text-dark m-2"
          }
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            fill="currentColor"
            className="bi bi-moon"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
          </svg>
        </button>
        <div className="d-flex align-items-center">
          <a
            className={
              theme === "light" ? "btn text-dark m-2" : "btn  text-light m-2"
            }
            href="#"
          >
            <i className="fas fa-shopping-cart"></i>
          </a>

          <div className="dropdown">
            <a
              data-mdb-dropdown-init
              className={
                theme === "light" ? "btn  text-dark m-2" : "btn  text-light m-2"
              }
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              aria-expanded="false"
            >
              <i className="fas fa-bell"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          {token ? (
              <NavLink  onClick={() => {
                localStorage.removeItem("token")
                setToken(null)
                navigate("/login")

              } } ><button className="btn btn-danger m-2">Logout</button></NavLink>
          )  : (
            <NavLink to="/login"><button className="btn btn-success m-2">Login</button></NavLink>
            )
          }
        </div>
      </div>
    </nav>
  );
}

export default Header;
