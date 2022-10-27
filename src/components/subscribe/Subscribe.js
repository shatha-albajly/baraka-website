import React from "react";
import "./subscribe.css";
import Logo from "./Logo.png";
import { useTranslation } from "react-i18next";

const Subscribe = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="subscribe section mx-auto py-5 my-2 two-sections shadow-custom ">
      <div className=" container-70 row mx-auto d-md-flex justify-content-between align-items-center text-start">
        <div className="subscribe-first col-md-5  ">
          <div className="footer-logo d-block">
            <img src={Logo} alt="logo" />
          </div>
          <p className="small-size-text">{t("subscribe.text_1")}</p>
          <div>
            <form id="subscribe" novalidate="true">
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
            </form>
          </div>
        </div>
        <div className="subscribe-second  col-md-6">
          <p className="normal-paragraph pb-1">{t("subscribe.main_section")}</p>
          <nav>
            <ul className="list-unstyled d-flex justify-content-between align-items-center pb-2">
              <li>{t("navbar.home")}</li>
              <li>{t("navbar.about_us")}</li>
              <li>{t("navbar.ecosystem")}</li>
              <li>{t("navbar.tokenomics")}</li>
              <li>{t("navbar.roadmap")}</li>
              <li>{t("navbar.our_team")}</li>
            </ul>
          </nav>
          <hr />
          <p className="normal-paragraph">{t("subscribe.follow_us")}</p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
