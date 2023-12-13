import { configureStore } from "@reduxjs/toolkit";

import agendaState from "./Context/agendaContext";

const store = configureStore({
  reducer: {
    agendaState: agendaState,
  },
});

export default store;
