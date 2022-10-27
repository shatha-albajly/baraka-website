import { useTranslation } from "react-i18next";
import "./header.css";
import React from "react";
import Logo from "./Logo.png";
import { Link } from "react-scroll";
const Header = () => {
  const { t, i18n } = useTranslation();
  const clickLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className=" shadow-sm fixed-top ">
      <nav className="container navbar navbar-expand-lg  navbar-light bg-white  ">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="home "
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="home2"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tokenomics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Roadmap
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Team
              </a>
            </li>
            <li>
              {i18n.language === "ar" && (
                <button
                  type="button"
                  onClick={() => clickLanguage("en")}
                  className="btn btn-primary m-2"
                >
                  EN
                </button>
              )}
              {i18n.language === "en" && (
                <button
                  type="button"
                  onClick={() => clickLanguage("ar")}
                  className="btn btn-secondary m-2"
                >
                  AR
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>

    // <div>
    //   <div className="container">

    // </div>
  );
};

export default Header;
