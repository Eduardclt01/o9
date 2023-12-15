import React, { useEffect, useState } from "react";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { AgendaState, KeynoteBlock } from "../../Types/AgendaTypes";
import { getPostData } from "../../Api/base";
import {
  setAllSpeakerList,
  setSelectedDay,
  setSpeakersFilteredOnDay,
} from "../../Context/agendaContext";
import AgendaHeader from "../GlobalComponents/AgendaHeader/AgendaHeader";
import CardContainer from "../GlobalComponents/CardContainer/CardContainer";
import { useTranslation } from "react-i18next";

export default function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const agendaState = useSelector(
    (state: { agendaState: AgendaState }) => state.agendaState
  );

  const { t } = useTranslation();

  function setPostData(postId: string) {
    setLoading(true);
    setError(false);
    getPostData(postId)
      .then((res) => {
        dispatch(setAllSpeakerList(res?.data?.data?.blocks[0]?.innerBlocks));
        dispatch(setSelectedDay(0));
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function getFilterBlocksByDay() {
    return agendaState.allSpeakerList?.filter(
      (item: KeynoteBlock) =>
        item.attrs.day.toLowerCase() === `day ${agendaState.selectedDay + 1}`
    );
  }

  function setFilteredBlocks() {
    const blocks = getFilterBlocksByDay();
    dispatch(setSpeakersFilteredOnDay(blocks));
  }

  useEffect(() => {
    setPostData("41298");
  }, []);

  useEffect(() => {
    setFilteredBlocks();
  }, [agendaState.selectedDay, agendaState.allSpeakerList]);

  return (
    <div className="home">
      <AgendaHeader />

      {!loading && !error && agendaState.speakersFilteredOnDay && (
        <CardContainer
          speakersFilteredOnDay={agendaState.speakersFilteredOnDay}
        />
      )}

      {error && <p>{t("error")}</p>}
      {loading && <p>{t("loading")}</p>}
    </div>
  );
}
