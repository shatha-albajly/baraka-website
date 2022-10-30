import React from "react";
import "./plateformsComparison.css";
import { useTranslation } from "react-i18next";
import Table_AR from "./table_AR.svg";
import Table_EN from "./table_EN.svg";

const PlateformsComparison = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section container-80 mx-auto  py-5 ">
      <div className=" ">
        {i18n.language === "ar" && (
          <img className="  mx-auto w-100  " src={Table_AR} />
        )}

        {i18n.language === "en" && (
          <img className="  mx-auto w-100  " src={Table_EN} />
        )}
      </div>
    </section>
  );
};

export default PlateformsComparison;
