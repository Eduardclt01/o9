import React, { useEffect } from "react";
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

export default function Home() {
  const dispatch = useDispatch();
  const agendaState = useSelector(
    (state: { agendaState: AgendaState }) => state.agendaState
  );

  function setPostData() {
    getPostData("41298")
      .then((res) => {
        dispatch(setAllSpeakerList(res?.data?.data?.blocks[0]?.innerBlocks));
        dispatch(setSelectedDay(0));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log(false);
      });
  }

  function filterBlocksByDay() {
    return agendaState.allSpeakerList?.filter(
      (item: KeynoteBlock) =>
        item.attrs.day.toLowerCase() === `day ${agendaState.selectedDay + 1}`
    );
  }

  useEffect(() => {
    setPostData();
  }, []);

  useEffect(() => {
    const blocks = filterBlocksByDay();
    dispatch(setSpeakersFilteredOnDay(blocks));
  }, [agendaState.selectedDay]);

  return (
    <div className="home">
      <AgendaHeader />

      {agendaState.speakersFilteredOnDay && (
        <CardContainer
          speakersFilteredOnDay={agendaState.speakersFilteredOnDay}
        />
      )}
    </div>
  );
}
