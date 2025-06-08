import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/icon/aa_b.png";

import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const offcanvasRef = useRef(null);

  const closeOffcanvas = () => {
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasRef.current);
    if (offcanvas) {
      offcanvas.hide();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const isPages = location.pathname === "/" || location.pathname === "/home";
  const isMyWork = location.pathname === "/projects";
  const isAboutMe = location.pathname === "/aboutme";
  const isProject = location.pathname.startsWith("/project/");
  const isContact = location.pathname === "/contacts";

  const pageTitles = [
    isPages && "Menu",
    isMyWork && "My Works",
    isAboutMe && "About Me",
    isProject && "Projects",
    isContact && "Contact",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className="navbar navbar-light g-0 sticky-top aa-bg-white ">
      <div className="container-fluid mx-3 mx-sm-4 mx-md-5 justify-content-end align-items-start">
        {!isPages && (
          <>
            <Link to="/home" className="d-flex me-auto aa my-auto">
              <img
                src={logo}
                alt="logo"
                height={isPages ? "150" : "50"}
                loading="lazy"
              />
            </Link>
          </>
        )}

        {isPages && (
          <>
            <Link to="/home" className="d-flex aa-text-primary me-auto aa">
              <img
                src={logo}
                alt="logo"
               
                loading="lazy"
                style={{height: isPages ? (scrolled ? "50px" : "10vw") : "50px", minHeight: "50px"}}
              />
              {isPages && (
                <p
                  className={`aa-fs-p-4  mt-1 ms-3 ${scrolled ? "d-none" : ""}`}
                >
                  Adrian Albuera
                </p>
              )}
            </Link>
          </>
        )}

        <div className="d-flex">
          <div className="d-none d-sm-flex">
          <Link
            to="/contacts"
            className={`aa-btn-accent me-3 ${scrolled ? "my-auto" : "mt-1"}`}
          >
            Let's talk
          </Link>
</div>
          <button
            className={`aa-btn  ${scrolled ? "mt-1" : "mt-1"}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            {pageTitles}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              viewBox="0 0 100 60"
              aria-hidden="true"
            >
              <line
                x1="10"
                y1="10"
                x2="90"
                y2="10"
                stroke="black"
                strokeWidth="5"
              />
              <line
                x1="10"
                y1="30"
                x2="90"
                y2="30"
                stroke="black"
                strokeWidth="5"
              />
              <line
                x1="10"
                y1="50"
                x2="60"
                y2="50"
                stroke="black"
                strokeWidth="5"
              />
            </svg>
          </button>
        </div>

       

        <div
          className="offcanvas offcanvas-center text-bg-light"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
          ref={offcanvasRef}
        >
          <div className="offcanvas-header">
            <img src={logo} alt="logo" height="50" loading="lazy" />
            <button
              type="button"
              className="btn-close btn-close-dark"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body d-flex align-items-center justify-content-center">
            <ul className="navbar-nav text-center">
              <li className="nav-item my-2">
                <NavLink
                  to="/home"
                  className="aa-fs-p-1 nav-link"
                  onClick={closeOffcanvas}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item my-2">
                <NavLink
                  to="/aboutme"
                  className="aa-fs-p-1 nav-link"
                  onClick={closeOffcanvas}
                >
                  About Me
                </NavLink>
              </li>
              <li className="nav-item my-2">
                <NavLink
                  to="/projects"
                  className="aa-fs-p-1 nav-link"
                  onClick={closeOffcanvas}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item my-2">
                <NavLink
                  to="/contacts"
                  className="aa-fs-p-1 nav-link"
                  onClick={closeOffcanvas}
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
