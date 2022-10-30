import React from "react";
import "./whyBaraka.css";
import { useTranslation } from "react-i18next";
import CircleImg from "./circle.svg";
import CircleImg_AR from "./circle_AR.svg";
import WhyBarakaImg from "./whyBaraka.png";
import Shape1 from "./shape1.svg";
import Shape2 from "./shape2.svg";
import { Global } from "iconsax-react";
import { Bitcoin } from "iconsax-react";
import { OceanProtocol } from "iconsax-react";

const WhyBaraka = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section why-baraka mx-auto orange-background py-5 two-sections">
      <div className="container-80 row mx-auto d-md-flex  justify-content-center align-items-start">
        <div className="text-section mb-4 mb-md-0  order-md-2  text-start col-md-6    ">
          <h2 className="">
            <span>{t("why.title_1")}</span>
            <span>{t("why.title_2")}</span>
          </h2>
          <p class="small-size-text"> {t("why.paragraph_1")} </p>

          <div className=" orange-background-icon ">
            <Global size="38" color="#fff" variant="Bulk" />
          </div>
          <p class="small-size-text"> {t("why.paragraph_2")} </p>

          <div className=" orange-background-icon ">
            <Bitcoin size="38" color="#fff" variant="Bulk" />
          </div>
          <p class="small-size-text"> {t("why.paragraph_3")} </p>

          <div className=" orange-background-icon ">
            <OceanProtocol size="38" color="#fff" variant="Bulk" />
          </div>
          <p class="small-size-text"> {t("why.paragraph_4")} </p>
        </div>

        <div className=" image-section mb-4 mb-md-0 order-md-1 col-md-6  ">
          <img src={Shape1} className="star" />
          <img src={Shape2} className="dots" />
          <div className="image-center">
            <img src={WhyBarakaImg} />
          </div>
        </div>

        <div className="mt-4 order-md-3 mx-auto w-100">
          {i18n.language === "ar" && (
            <img
              className="  circle-shape mx-auto w-100  "
              src={CircleImg_AR}
            />
          )}

          {i18n.language === "en" && (
            <img className="  circle-shape mx-auto w-100  " src={CircleImg} />
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyBaraka;
