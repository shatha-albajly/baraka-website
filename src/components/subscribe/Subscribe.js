import React from "react";
import "./subscribe.css";
import Logo from "./Logo.png";
import { useTranslation } from "react-i18next";

const Subscribe = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className=" shadow-custom ">
      <div className="subscribe container-70 mx-auto d-md-flex justify-content-between align-items-center">
        <div className="subscribe-first">
          <img src={Logo} alt="logo" />
          <p>{t("subscribe.text_1")}</p>
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
        <div className="subscribe-second">
          <p>{t("subscribe.main_section")}</p>
          <ul className="list-unstyled d-flex justify-content-between align-items-center">
            <li>{t("navbar.home")}</li>
            <li>{t("navbar.about_us")}</li>
            <li>{t("navbar.ecosystem")}</li>
            <li>{t("navbar.tokenomics")}</li>
            <li>{t("navbar.roadmap")}</li>
            <li>{t("navbar.our_team")}</li>
          </ul>
          <hr />
          <p>{t("subscribe.follow_us")}</p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
