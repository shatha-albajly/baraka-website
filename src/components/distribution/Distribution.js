import React from "react";
import "./distribution.css";
import { useTranslation } from "react-i18next";
import Shape1 from "./shape1.svg";
import Shape2 from "./shape2.svg";
import DistributionImg from "./distribution.png";
import { InfoCircle } from "iconsax-react";

const Distribution = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section mx-auto py-5 distribution  two-sections ">
      <div className="container-80 row mx-auto d-md-flex  pt-3 justify-content-center align-items-start">
        <div className="text-section  order-md-1 text-start col-md-6">
          <h2>
            <span>{t("distribution.title_1")}</span>
            <span>{t("distribution.title_2")}</span>
          </h2>
          <ul className="row list-unstyled">
            <li className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="orange-square"></div>
                <p>{t("distribution.list_1_1")}</p>
              </div>
              <span className="d-block">{t("distribution.list_1_1_2")}</span>
            </li>
            <li className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="orange-square"></div>
                <p>{t("distribution.list_1_2")}</p>
              </div>
              <span className="d-block">{t("distribution.list_1_2_2")}</span>
            </li>
            <li className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="orange-square"></div>
                <p>{t("distribution.list_1_3")}</p>
              </div>
              <span className="d-block">{t("distribution.list_1_3_2")}</span>
            </li>
            <li className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="orange-square"></div>
                <p>{t("distribution.list_1_4")}</p>
              </div>
              <span className="d-block">{t("distribution.list_1_4_2")}</span>
            </li>
            <li className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="orange-square"></div>
                <p>{t("distribution.list_1_5")}</p>
              </div>
              <span className="d-block">{t("distribution.list_1_5_2")}</span>
            </li>
            <li className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="orange-square"></div>
                <p>{t("distribution.list_1_6")}</p>
              </div>
              <span className="d-block">{t("distribution.list_1_6_2")}</span>
            </li>
          </ul>
        </div>
        <div className=" image-section mb-4 mb-md-0 order-md-2 col-md-6  ">
          <img src={Shape1} className="star-reverse" />
          <img src={Shape2} className="dots-reverse" />
          <div className="image-center">
            <img src={DistributionImg} />
          </div>
        </div>
      </div>
      <div className="container-80 mx-auto text-start ">
        <ul>
          <li className="pb-3">
            <p className="small-size-text">{t("distribution.list_2_1")}</p>
          </li>
          <li className="pb-3">
            <p className="small-size-text">{t("distribution.list_2_2")}</p>
          </li>
          <li className="pb-3">
            <p className="small-size-text">{t("distribution.list_2_3")}</p>
          </li>
          <li className="pb-3">
            <p className="small-size-text">
              {t("distribution.list_2_4")}
              <span className="small-size-text-orange">
                {t("distribution.list_2_4_2")}
              </span>
            </p>
          </li>
          <li className="pb-3">
            <p className="small-size-text">
              {t("distribution.list_2_5")}
              <span className="small-size-text-orange">
                {t("distribution.list_2_5_2")}
              </span>
            </p>
          </li>
        </ul>
        <div>
          <div className="d-flex  align-items-start justify-content-start ">
            <InfoCircle
              size="32"
              color="#F8870D"
              variant="Bulk"
              className="icon"
            />

            <p className="tiny-text m-1 p-0  fst-italic">
              {t("distribution.note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;
