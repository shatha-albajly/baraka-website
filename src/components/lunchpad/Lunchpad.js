import React from "react";
import "./lunchpad.css";
import { useTranslation } from "react-i18next";
import Shape1 from "./shape1.svg";
import Shape2 from "./shape2.svg";
import InvestmentImg from "./lunchpad.png";
import { KeyboardOpen } from "iconsax-react";
import Image1 from "./image 1.png";
import Image2 from "./image 2.png";
import Image3 from "./image 3.png";
const Lunchpad = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section lunchpad mx-auto orange-background py-5 two-sections">
      <div className="container-80 row mx-auto d-md-flex  justify-content-center align-items-start">
        <div className="text-section mb-0 mb-md-4 order-md-1  text-start col-md-6    ">
          <h2>
            <span>{t("launchpad.title_1")}</span>
            <span>{t("launchpad.title_2")}</span>
          </h2>
          <div className=" orange-background-icon ">
            <KeyboardOpen size="38" color="#fff" variant="Bulk" />
          </div>
          <p class="paragraph-text"> {t("launchpad.paragraph_1")} </p>
          <p class="small-size-text"> {t("launchpad.paragraph_2")} </p>
          <div className="  d-flex align-items-center justify-content-between companies-logos">
            <img src={Image1} />
            <img src={Image2} />
            <img src={Image3} />
          </div>
        </div>
        <div className=" image-section mb-4 mb-md-0 order-md-2 col-md-6  ">
          <img src={Shape1} className="star-reverse" />
          <img src={Shape2} className="dots-reverse" />
          <div className="image-center">
            <img src={InvestmentImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lunchpad;
