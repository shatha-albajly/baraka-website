import React from "react";
import "./roadmap.css";
import RoadmapImg from "./roadmap.svg";
import { useTranslation } from "react-i18next";
const Roadmap = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="Roadmap container-80  py-5 section mx-auto ">
      <h2>
        <span>{t("roadmap.title_1")}</span>
        <span>{t("roadmap.title_2")}</span>
      </h2>
      <img src={RoadmapImg} alt="roadmap image" className="w-100" />
    </section>
  );
};

export default Roadmap;
