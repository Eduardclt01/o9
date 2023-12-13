import { createSlice } from "@reduxjs/toolkit";
import { AgendaState } from "../Types/AgendaTypes";

const initialState = {
  selectedDay: 1,
} as AgendaState;

const agendaContext = createSlice({
  name: "agendaState",
  initialState,
  reducers: {
    setAllSpeakerList(state, action) {
      return {
        ...state,
        allSpeakerList: action.payload,
      };
    },
    setSpeakersFilteredOnDay(state, action) {
      return {
        ...state,
        speakersFilteredOnDay: action.payload,
      };
    },
    setSelectedDay(state, action) {
      return {
        ...state,
        selectedDay: action.payload,
      };
    },
  },
});

export const { setAllSpeakerList, setSelectedDay, setSpeakersFilteredOnDay } =
  agendaContext.actions;

export default agendaContext.reducer;
