import React from "react";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";
import Shape1 from "./shape1.svg";
import Shape2 from "./shape2.svg";
import "./home.css";
import HomeImg from "./Frame 7.png";
const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="home section mx-auto  pt-5  two-sections">
      <div className="container-80 my-5 my-lg-0  row mx-auto pt-3 d-md-flex  justify-content-center align-items-start">
        <div className="text-section  order-md-1 text-start col-md-6    ">
          <h1 className="title  m-2 ">
            <div>
              <span className="black-text">{t("home.title_1")}</span>
              <span className="orange-text">{t("home.title_2")}</span>
            </div>

            <span className="grey-text">{t("home.title_3")}</span>
          </h1>
          <p className=" normal-text-home m-2 ">{t("home.paragraph")}</p>
          <div className="buttons d-flex   mx-auto m-0 mt-4 ">
            <button type="button" className="btn m-2 orange-button ">
              {t("home.button_1")}
            </button>
            <button type="button" className="btn m-2 orange-button ">
              {t("home.button_2")}
            </button>
          </div>
        </div>
        {/* <div className="image-section  mb-4 mb-md-0 order-md-2 col-md-6">
          <img src={HomeImg} />
        </div> */}
        <div className=" image-section my-5 my-lg-0 order-md-2 col-md-6  ">
          <img src={Shape1} className="star-reverse" />
          <img src={Shape2} className="dots-reverse" />
          <div className="finance-video image-center mx-auto">
            {/* <img src={FinanceImg} /> */}

            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/AkpPx3f1l-U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
