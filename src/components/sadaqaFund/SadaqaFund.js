import React from "react";
import "./sadaqaFund.css";
import { useTranslation } from "react-i18next";
import SadaqaFund1 from "./sadaqaFund1.png";
import Shape1 from "./shape1.svg";
import Shape2 from "./shape2.svg";

const SadaqaFund = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section mx-auto  orange-background py-5 two-sections">
      <div className="container-80 row mx-auto d-md-flex  justify-content-center align-items-center">
        <div className="text-section mb-4 mb-md-0  order-md-2  text-start col-md-6    ">
          <h2 className="">
            <span>{t("sadaqa-fund.title_1")}</span>
            <span>{t("sadaqa-fund.title_2")}</span>
          </h2>
          <p className="paragraph-text">{t("sadaqa-fund.paragraph")}</p>
          <ul>
            <li>
              <p className="small-size-text">{t("sadaqa-fund.list_1")}</p>
            </li>
            <li>
              <p className="small-size-text">{t("sadaqa-fund.list_2")}</p>
            </li>
            <li>
              <p className="small-size-text">{t("sadaqa-fund.list_3")}</p>
            </li>
            <li>
              <p className="small-size-text">{t("sadaqa-fund.list_4")}</p>
            </li>
          </ul>
          <p className="paragraph-text">{t("sadaqa-fund.paragraph_2")}</p>
        </div>
        <div className=" image-section mb-4 mb-md-0 order-md-1 col-md-6  ">
          <img src={Shape1} className="star" />
          <img src={Shape2} className="dots" />
          <div className="image-center">
            <img src={SadaqaFund1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SadaqaFund;
