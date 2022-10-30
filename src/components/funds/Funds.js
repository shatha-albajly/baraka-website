import React from "react";
import "./funds.css";
import { useTranslation } from "react-i18next";
import Funds_EN from "./funds.svg";
import Funds_AR from "./funds-ar.svg";

import Shape1 from "./shape1.svg";
import Shape2 from "./shape2.svg";

const Funds = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section funds mx-auto  py-5 two-sections">
      <div className="container-80 row mx-auto d-md-flex  justify-content-center align-items-start">
        <div className="text-section mb-4 mb-md-0  order-md-1  text-start col-md-6    ">
          <h2 className="">
            <span>{t("funds.title_1")}</span>
            <span>{t("funds.title_2")}</span>
          </h2>
          <ul>
            <li className="mb-2">
              <p className="small-size-text">{t("funds.list_1_1")}</p>
            </li>
            <li className="mb-2">
              <p className="small-size-text">{t("funds.list_1_2")}</p>
            </li>
            <li className="mb-2">
              <p className="small-size-text">{t("funds.list_1_3")}</p>
            </li>
            <li className="mb-2">
              <p className="small-size-text">{t("funds.list_1_4")}</p>
            </li>
            <li className="mb-2">
              <p className="small-size-text">{t("funds.list_1_5")}</p>
            </li>
          </ul>
        </div>
        <div className=" image-section mb-4 mb-md-0 order-md-2 col-md-6  ">
          <img src={Shape1} className="star-reverse" />
          <img src={Shape2} className="dots-reverse" />
          <div className="image-center">
            {i18n.language === "ar" && <img src={Funds_AR} />}

            {i18n.language === "en" && <img src={Funds_EN} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funds;
