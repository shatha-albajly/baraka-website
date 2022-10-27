import React from "react";
import "./meetBaraka.css";
import { useTranslation } from "react-i18next";
import CryptoTrading from "./crypto trading.svg";
import InvestmentImg from "./Investment.svg";
import PaymentSystem from "./payment system.svg";
import TradingBot from "./trading bot.svg";
import Lending from "./lending.svg";
import Taawuniya from "./Taawuniya.svg";
import Ellipse from "./ellipse.svg";
const MeetBaraka = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="white-background py-5  ">
      <div className="container-80 mx-auto d-flex flex-column  justify-content-center align-items-center">
        <h2>
          <span>{t("meet.title_1")}</span>
          <span>{t("meet.title_2")}</span>
        </h2>
        <p className="normal-paragraph container-60 text-center">
          {t("meet.paragraph")}
        </p>

        <div className=" value-first-section  ">
          <div className="row  mx-auto  justify-content-between   align-items-center ">
            <div className=" mx-1 my-2 mx-auto col-md-3  col-sm-5 meet-card rounded-1 white-background  p-0 rounded-1  shadow-card  ">
              <div className="w-40">
                <img src={CryptoTrading} className="float" />
                <img src={Ellipse} className="w-100 h-100 ellipse  " />
              </div>
              <div className="d-flex align-items-center justify-content-center text-center w-60 p-2 h-100 card-text">
                <p className="m-0">{t("meet.list_1")}</p>
              </div>
            </div>

            <div className="mx-1 my-2 mx-auto col-md-3  col-sm-5 meet-card rounded-1 white-background  p-0 rounded-1  shadow-card  ">
              <div className="w-40">
                <img src={InvestmentImg} className="float" />
                <img src={Ellipse} className="w-100 h-100 ellipse  " />
              </div>
              <div className="d-flex align-items-center justify-content-center text-center w-60 p-2 h-100 card-text">
                <p className="m-0">{t("meet.list_2")}</p>
              </div>
            </div>

            <div className=" mx-1 my-2 mx-auto col-md-3  col-sm-5 meet-card rounded-1 white-background  p-0 rounded-1  shadow-card  ">
              <div className="w-40">
                <img src={PaymentSystem} className="float" />
                <img src={Ellipse} className="w-100 h-100 ellipse  " />
              </div>
              <div className="d-flex align-items-center justify-content-center text-center w-60 p-2 h-100 card-text">
                <p className="m-0">{t("meet.list_2")}</p>
              </div>
            </div>

            <div className=" mx-1 my-2 mx-auto col-md-3  col-sm-5 meet-card rounded-1 white-background  p-0 rounded-1  shadow-card  ">
              <div className="w-40">
                <img src={TradingBot} className="float" />
                <img src={Ellipse} className="w-100 h-100 ellipse  " />
              </div>
              <div className="d-flex align-items-center justify-content-center text-center w-60 p-2 h-100 card-text">
                <p className="m-0">{t("meet.list_2")}</p>
              </div>
            </div>

            <div className=" mx-1 my-2 mx-auto col-md-3  col-sm-5 meet-card rounded-1 white-background  p-0 rounded-1  shadow-card  ">
              <div className="w-40">
                <img src={Lending} className="float" />
                <img src={Ellipse} className="w-100 h-100 ellipse  " />
              </div>
              <div className="d-flex align-items-center justify-content-center text-center w-60 p-2 h-100 card-text">
                <p className="m-0">{t("meet.list_2")}</p>
              </div>
            </div>

            <div className=" mx-1 my-2 mx-auto col-md-3  col-sm-5 meet-card rounded-1 white-background  p-0 rounded-1  shadow-card  ">
              <div className="w-40">
                <img src={Taawuniya} className="float" />
                <img src={Ellipse} className="w-100 h-100 ellipse  " />
              </div>
              <div className="d-flex align-items-center justify-content-center text-center w-60 p-2 h-100 card-text">
                <p className="m-0">{t("meet.list_2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetBaraka;
