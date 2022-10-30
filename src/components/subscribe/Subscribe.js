import React from "react";
import "./subscribe.css";
import Logo from "./Logo.png";
import { useTranslation } from "react-i18next";
import FacebookIcon from "./facebook.svg";
import InstigramIcon from "./instigram.svg";
import LinkedinIcon from "./linkedin.svg";
import TwitterIcon from "./twitter.svg";
import YoutubeIcon from "./youtube.svg";
import { Link } from "react-scroll";

const Subscribe = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="subscribe section mx-auto py-5 my-2 two-sections shadow-custom ">
      <div className=" container-70 row mx-auto d-md-flex justify-content-between align-items-center text-start">
        <div className="subscribe-first col-md-5  ">
          <div className="footer-logo d-block">
            <img src={Logo} alt="logo" />
          </div>
          <p className="small-size-text mx-2">{t("subscribe.text_1")}</p>
          <div>
            {/* <form id="subscribe" novalidate="true">
              <input
                class="enteremail"
                name="EMAIL"
                id="subscribe-email"
                placeholder={t("subscribe.placeholder")}
                spellcheck="false"
                type="text"
              />
              <button
                type="submit"
                id="subscribe-button"
                class="subscribe-button color-bg"
              >
                <i class="fa fa-rss"></i> {t("subscribe.subscribe")}
              </button>
              <label for="subscribe-email" class="subscribe-message"></label>
            </form> */}
          </div>
        </div>
        <div className="subscribe-second  col-md-6">
          {/* <p className="mx-2 normal-paragraph pb-1">
            {t("subscribe.main_section")}
          </p>
          <nav>
            <ul className="list-unstyled d-flex   justify-content-start  align-items-center pb-2">
              <li className="nav-item active mx-2">
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
              <li className="nav-item mx-2">
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
              <li className="nav-item mx-2">
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
              <li className="nav-item mx-2">
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
              <li className="nav-item mx-2">
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
              <li className="nav-item mx-2">
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
            </ul>
          </nav>
          <hr /> */}
          <p className="normal-paragraph mx-2">{t("subscribe.follow_us")}</p>
          <div className=" d-flex justify-content-start align-items-center ">
            <a href="https://www.facebook.com/BarakaExchange">
              <img src={FacebookIcon} className="icon-footer mx-2" />
            </a>

            <a href="https://www.linkedin.com/company/88930919/admin/">
              <img src={LinkedinIcon} className="icon-footer mx-2" />
            </a>
            <a href="https://twitter.com/baraka_exchange">
              <img src={TwitterIcon} className="icon-footer mx-2" />
            </a>
            <a href="https://www.youtube.com/channel/UCsVXiveJ8Tx_6d9nHLnWaVg">
              <img src={YoutubeIcon} className="icon-footer mx-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
