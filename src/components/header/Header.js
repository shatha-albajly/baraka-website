import { useTranslation } from "react-i18next";
import "./header.css";
import React from "react";
import Logo from "./Logo.png";
import { Link } from "react-scroll";
import Button from "../button/Button";

const Header = () => {
  const { t, i18n } = useTranslation();
  const clickLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className=" shadow-sm fixed-top white-background ">
      <nav className="container navbar navbar-expand-lg  navbar-light bg-white   ">
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
          <ul className="navbar-nav ms-auto d-flex align-items-center ">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                <Link
                  className="nav-link"
                  to="home "
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {t("navbar.home")}
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link
                  className="nav-link"
                  to="finance"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {t("navbar.about_us")}
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link
                  className="nav-link"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {t("navbar.services")}
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link
                  className="nav-link"
                  to="tokenomic"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {t("navbar.tokenomics")}
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link
                  className="nav-link"
                  to="roadmap"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {t("navbar.roadmap")}
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link
                  className="nav-link"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {t("navbar.our_team")}
                </Link>
              </a>
            </li>
            <li>
              {i18n.language === "ar" && (
                <button
                  type="button"
                  onClick={() => clickLanguage("en")}
                  className="btn m-2 orange-button"
                >
                  {t("navbar.english")}
                </button>
              )}
              {i18n.language === "en" && (
                <button
                  type="button"
                  onClick={() => clickLanguage("ar")}
                  className="btn m-2 orange-button"
                >
                  {t("navbar.arabic")}
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
