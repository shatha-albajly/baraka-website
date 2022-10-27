import React from "react";
import "./islamicFinance.css";
import { useTranslation } from "react-i18next";
import FinanceImg from "./finance.png";
// import Funds_AR from "./funds-ar.svg";

import Shape1 from "./shape1.svg";
import Shape2 from "./shape2.svg";

const IslamicFinance = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section finance mx-auto orange-background  py-5 two-sections">
      <div className="container-80 row mx-auto d-md-flex  justify-content-center align-items-start">
        <div className="text-section mb-4 mb-md-0  order-md-1  text-start col-md-6    ">
          <h2 className="">
            <span>{t("islamic_finance.title_1")}</span>
            <span>{t("islamic_finance.title_2")}</span>
          </h2>
          <p class="small-size-text"> {t("islamic_finance.paragraph_2")} </p>
        </div>
        <div className=" image-section mb-4 mb-md-0 order-md-2 col-md-6  ">
          <img src={Shape1} className="star-reverse" />
          <img src={Shape2} className="dots-reverse" />
          <div className="finance-video image-center mx-auto">
            {/* <img src={FinanceImg} /> */}

            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/AkpPx3f1l-U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IslamicFinance;
