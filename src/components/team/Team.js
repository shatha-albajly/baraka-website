import React from "react";
import "./team.css";
import TeamImage from "./team.png";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="team"
      className="team container-80  py-5 section mx-auto d-flex flex-column  justify-content-center align-items-center"
    >
      <h2>
        <span>{t("team.title_1")}</span>
        <span>{t("team.title_2")}</span>
      </h2>
      <p className="normal-paragraph container-60 text-center">
        {t("team.paragraph")}
      </p>
      <div class=" px-0 mb-4">
        <img
          src={TeamImage}
          alt="team image"
          className=" w-100 d-block mx-auto"
        />
      </div>
      <div className=" container-80 mx-auto  row  ">
        <div className="text-start p-0  col-md-4 col-sm-6">
          <h3 className="mx-0 mb-1">{t("team.leadership")}</h3>
          <p className="team-paragraph w-95">{t("team.leadership_text")}</p>
        </div>
        <div className="text-start p-0  col-md-4 col-sm-6">
          <h3 className="mx-0 mb-1">{t("team.shariya_committee")}</h3>
          <p className="team-paragraph w-95">
            {t("team.shariya_committee_text")}
          </p>
        </div>
        <div className="text-start p-0  col-md-4 col-sm-6">
          <h3 className="mx-0 mb-1">{t("team.technology")}</h3>
          <p className="team-paragraph w-95">{t("team.technology_text")}</p>
        </div>
        <div className="text-start p-0  col-md-4 col-sm-6">
          <h3 className="mx-0 mb-1">{t("team.customer_experience")}</h3>
          <p className="team-paragraph w-95">
            {t("team.customer_experience_text")}
          </p>
        </div>
        <div className="text-start p-0   col-md-4 col-sm-6">
          <h3 className="mx-0 mb-1">{t("team.finance_strategy")}</h3>
          <p className="team-paragraph w-95 ">
            {t("team.finance_strategy_text")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
