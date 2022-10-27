import React from "react";
import "./barakaExchange.css";
import { useTranslation } from "react-i18next";
import Exchange1 from "./exchange1.png";
import Exchange2 from "./exchange2.png";
import Exchange3 from "./exchange3.png";

const BarakaExchange = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="exchange white-background py-5  ">
      <div className="container-80 mx-auto d-flex flex-column  justify-content-center align-items-center">
        <h2>
          <span>{t("exchange.title_1")}</span>
          <span>{t("exchange.title_2")}</span>
        </h2>
        <p className="normal-paragraph container-60 text-center">
          {t("exchange.paragraph")}
        </p>

        <div className="row  mx-auto committee-cards  justify-content-between  align-items-center">
          <div className=" col-md-3 col-sm-5 img-card mx-auto     ">
            <img src={Exchange1} className="mw-100  " />
          </div>
          <div className=" col-md-3 col-sm-5 mx-auto  img-card  ">
            <img src={Exchange2} className="mw-100 " />
          </div>
          <div className=" col-md-3 col-sm-5 mx-auto img-card  ">
            <img src={Exchange3} className="mw-100  " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarakaExchange;
