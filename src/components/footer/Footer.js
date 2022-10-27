import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <p> {t("footer")}</p>
    </footer>
  );
};

export default Footer;
