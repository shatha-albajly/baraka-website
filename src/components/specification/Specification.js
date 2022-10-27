import React from "react";
import "./specification.css";
import { useTranslation } from "react-i18next";
import Shape1 from "./shape1.svg";
import Shape2 from "./shape2.svg";
import SpecificationImg from "./specification.png";

const Specification = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section mx-auto  orange-background py-5 two-sections">
      <div className="container-80 row mx-auto d-md-flex  justify-content-center align-items-start">
        <div className="text-section mb-0 mb-md-4 order-md-2  text-start col-md-6    ">
          <h2>
            <span>{t("specification.title_1")}</span>
            <span>{t("specification.title_2")}</span>
          </h2>
          <ul className="row list-unstyled">
            <li className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="orange-square"></div>
                <p>{t("specification.list_1_1")}</p>
              </div>
              <span className="d-block">{t("specification.list_1_2")}</span>
            </li>
            <li className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="orange-square"></div>
                <p>{t("specification.list_2_1")}</p>
              </div>
              <span className="d-block">{t("specification.list_2_2")}</span>
            </li>
            <li className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="orange-square"></div>
                <p>{t("specification.list_3_1")}</p>
              </div>
              <span className="d-block">{t("specification.list_3_2")}</span>
            </li>
            <li className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="orange-square"></div>
                <p>{t("specification.list_4_1")}</p>
              </div>
              <span className="d-block">{t("specification.list_4_2")}</span>
            </li>
          </ul>
        </div>
        <div className=" image-section mb-4 mb-md-0 order-md-1 col-md-6  ">
          <img src={Shape1} className="star" />
          <img src={Shape2} className="dots" />
          <div className="image-center">
            <img src={SpecificationImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specification;
