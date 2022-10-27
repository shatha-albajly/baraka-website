import React from "react";
import "./services.css";
import { useTranslation } from "react-i18next";
import ServicesImg from "./services.png";
import Shape1 from "./shape1.svg";
import Shape2 from "./shape2.svg";
import { CardPos } from "iconsax-react";
import { DollarCircle } from "iconsax-react";
import Image1 from "./image 1.png";
import Image2 from "./image 2.png";
import Image3 from "./image 3.png";
import Image4 from "./image 4.png";
const Services = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section services mx-auto orange-background py-5 two-sections">
      <div className="container-80 row mx-auto d-md-flex  justify-content-center align-items-start">
        <div className="text-section mb-4 mb-md-0  order-md-2  text-start col-md-6    ">
          <h2 className="">
            <span>{t("services.title_1")}</span>
            <span>{t("services.title_2")}</span>
          </h2>
          <div className=" orange-background-icon ">
            <CardPos size="38" color="#fff" variant="Bulk" />
          </div>
          <p class="paragraph-text"> {t("services.paragraph_1_1")} </p>
          <p class="small-size-text"> {t("services.paragraph_1_2")} </p>

          <div className=" d-flex align-items-center justify-content-between companies-logos">
            <img src={Image1} />
            <img src={Image2} />
            <img src={Image3} />
            <img src={Image4} />
          </div>
          <div className=" orange-background-icon ">
            <DollarCircle size="38" color="#fff" variant="Bulk" />
          </div>
          <p class="paragraph-text"> {t("services.paragraph_2_1")} </p>
          <p class="small-size-text"> {t("services.paragraph_2_2")} </p>
        </div>
        <div className=" image-section mb-4 mb-md-0 order-md-2 col-md-6  ">
          <img src={Shape1} className="star-reverse" />
          <img src={Shape2} className="dots-reverse" />
          <div className="image-center">
            <img src={ServicesImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
