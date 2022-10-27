import React from "react";
import "./ecosystem.css";
import { useTranslation } from "react-i18next";

import Ecosystem1 from "./ecosystem1.png";
import Ecosystem2 from "./ecosystem2.png";
import Ecosystem3 from "./ecosystem3.png";
import Ecosystem4 from "./ecosystem4.png";

const Ecosystem = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="ecosystem orange-background py-5  ">
      <div className="container-80 mx-auto ">
        <h2 className="d-flex  justify-content-center align-items-center">
          <span>{t("ecosystem.title_1")}</span>
          <span>{t("ecosystem.title_2")}</span>
        </h2>
        <div className=" row mx-auto justify-content-between align-items-center">
          <div className="mx-auto col-md-3  col-sm-5 m-1 p-1 img-card2 shadow-card white-background   d-flex flex-column justify-content-center align-items-center ">
            <img src={Ecosystem1} className="mw-100" />
            <h3 className="w-80">{t("ecosystem.list_1_title")}</h3>
            <ul className="card-text text-start w-80">
              <li>{t("ecosystem.list_1_1")}</li>
              <li>{t("ecosystem.list_1_2")}</li>
            </ul>
          </div>
          <div className="mx-auto col-md-3 col-sm-5 m-1 p-1 img-card2 shadow-card white-background   d-flex flex-column justify-content-center align-items-center ">
            <img src={Ecosystem2} className="mw-100" />
            <h3 className="w-80">{t("ecosystem.list_2_title")}</h3>
            <ul className="card-text text-start w-80">
              <li>{t("ecosystem.list_2_1")}</li>
              <li>{t("ecosystem.list_2_2")}</li>
              <li>{t("ecosystem.list_2_3")}</li>
            </ul>
          </div>
          <div className="mx-auto col-md-3 col-sm-5 m-1 p-1 img-card2 shadow-card white-background d-flex flex-column justify-content-center align-items-center ">
            <img src={Ecosystem3} className="mw-100" />
            <h3 className="w-80">{t("ecosystem.list_3_title")}</h3>
            <ul className="card-text text-start w-80">
              <li>{t("ecosystem.list_3_1")}</li>
              <li>{t("ecosystem.list_3_2")}</li>
            </ul>
          </div>
          <div className="mx-auto col-md-3 col-sm-5 m-1 p-1 img-card2 shadow-card white-background d-flex flex-column justify-content-center align-items-center ">
            <img src={Ecosystem4} className="mw-100" />
            <h3 className="w-80">{t("ecosystem.list_4_title")}</h3>
            <ul className="card-text text-start w-80">
              <li>{t("ecosystem.list_4_1")}</li>
              <li>{t("ecosystem.list_4_2")}</li>
              <li>{t("ecosystem.list_4_3")}</li>
              <li>{t("ecosystem.list_4_4")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
