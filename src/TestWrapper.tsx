import React from "react";
import { Provider } from "react-redux";
import store from "./store";

export default function TestWrapper(props: { children: React.ReactNode }) {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
}
