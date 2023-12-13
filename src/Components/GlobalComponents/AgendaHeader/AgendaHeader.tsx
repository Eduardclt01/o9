import React from "react";
import Paragraph from "../Typography/Paragraph/Paragraph";
import HeadingJumbo from "../Typography/HeadingJumbo/HeadingJumbo";
import SwitchButton from "../Buttons/SwitchButton/SwitchButton";
import { useTranslation } from "react-i18next";
import "./agendaHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDay } from "../../../Context/agendaContext";
import { AgendaState } from "../../../Types/AgendaTypes";

export default function AgendaHeader() {
  const agendaState = useSelector(
    (state: { agendaState: AgendaState }) => state.agendaState
  );

  const { t } = useTranslation();
  const dispatch = useDispatch();

  function onSwitchDayClick(day: number) {
    dispatch(setSelectedDay(day));
  }

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
        <SwitchButton
          labels={["DAY 1", "DAY 2"]}
          stickyTop={true}
          onButtonClick={onSwitchDayClick}
          selectedItem={agendaState.selectedDay}
        />
      </div>

      <div className="timezone show-desktop-only">
        <Paragraph text={t("timeZone")} />
      </div>
    </div>
  );
}
