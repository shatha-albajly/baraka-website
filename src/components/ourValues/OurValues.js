import React from "react";
import "./ourValues.css";
import { useTranslation } from "react-i18next";
import Value1 from "./values1.png";
import Value2 from "./values2.png";
import Value3 from "./values3.png";
import Value4 from "./values4.png";
import Value5 from "./values5.png";
import Value6 from "./values6.png";

const OurValues = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="orange-background py-5 our-values ">
      <div className="container-80 mx-auto d-flex flex-column  justify-content-center align-items-center">
        <h2>
          <span>{t("values.title_1")}</span>
          <span>{t("values.title_2")}</span>
        </h2>

        <div className=" value-first-section mb-5 ">
          <div className="row  mx-auto  justify-content-between  align-items-center ">
            <div className=" col-md-3 mx-auto col-sm-5 rounded-1 value-card shadow-card mx-1 my-2 d-flex flex-column justify-content-center align-items-center  ">
              <img src={Value1} className="" />
              <p className="w-80  card-text">{t("values.list_1")}</p>
            </div>
            <div className="mx-auto col-md-3 col-sm-5  rounded-1  value-card  shadow-card mx-1 my-2  d-flex flex-column justify-content-center align-items-center ">
              <img src={Value2} className="" />
              <p className="w-80 card-text">{t("values.list_2")}</p>
            </div>
            <div className="mx-auto col-md-3 col-sm-5 rounded-1 value-card  shadow-card  mx-1 my-2 d-flex flex-column justify-content-center align-items-center ">
              <img src={Value3} className="" />
              <p className="w-80 card-text">{t("values.list_3")}</p>
            </div>
            <div className="mx-auto col-md-3 col-sm-5 rounded-1 value-card  shadow-card mx-1 my-2 d-flex flex-column justify-content-center align-items-center ">
              <img src={Value4} className="" />
              <p className="w-80 card-text">{t("values.list_4")}</p>
            </div>
            <div className="mx-auto col-md-3 col-sm-5 rounded-1 value-card   shadow-card mx-1 my-2 d-flex flex-column justify-content-center align-items-center ">
              <img src={Value5} className="" />
              <p className="w-80 card-text">{t("values.list_5")}</p>
            </div>
            <div className="mx-auto col-md-3 col-sm-5 rounded-1 value-card  shadow-card  mx-1 my-2 d-flex flex-column justify-content-center align-items-center ">
              <img src={Value6} className="" />
              <p className="w-80 card-text">{t("values.list_6")}</p>
            </div>
          </div>
        </div>

        <div className="value-second-section text-center ">
          <p className="aya1">{t("values.paragraph_1")}</p>
          <p className="aya2"> {t("values.paragraph_2")}</p>
          <p className="aya3">{t("values.paragraph_3")}</p>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
