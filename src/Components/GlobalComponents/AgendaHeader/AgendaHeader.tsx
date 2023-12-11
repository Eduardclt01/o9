import React from "react";
import Paragraph from "../Typography/Paragraph/Paragraph";
import HeadingJumbo from "../Typography/HeadingJumbo/HeadingJumbo";
import SwitchButton from "../Buttons/SwitchButton/SwitchButton";
import { useTranslation } from "react-i18next";
import "./agendaHeader.scss";

export default function AgendaHeader() {
  const { t } = useTranslation();

  return (
    <div className="agenda-header">
      <div>
        <div className="subtitle">
          <Paragraph text={t("subTitle")} />
        </div>
        <div className="title">
          <HeadingJumbo text={t("title")} />
        </div>
      </div>

      <div className="button-container">
        <SwitchButton labels={["day 1", "day 2"]} stickyTop={true} />
      </div>

      <div className="timezone show-desktop-only">
        <Paragraph text={t("timeZone")} />
      </div>
    </div>
  );
}
