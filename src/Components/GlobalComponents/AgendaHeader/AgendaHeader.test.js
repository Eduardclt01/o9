import React from "react";
import { render, screen } from "@testing-library/react";
import TestWrapper from "../../../TestWrapper";
import AgendaHeader from "./AgendaHeader";

test("Render header with title, subtitle, time zone and switch", async () => {
  render(
    <TestWrapper>
      <AgendaHeader />
    </TestWrapper>
  );
  const subtitleElement = await screen.findByTestId("agendaHeader-subtitle");
  const titleElement = await screen.findByTestId("agendaHeader-title");
  const timeZoneElement = await screen.findByTestId("agendaHeader-timezone");

  expect(subtitleElement).toBeDefined();
  expect(titleElement).toBeDefined();
  expect(timeZoneElement).toBeDefined();
});

describe("Button switch", () => {
  test("Button switched should have right classes", async () => {
    render(
      <TestWrapper>
        <AgendaHeader />
      </TestWrapper>
    );

    const switchDesktop = await screen.findByTestId(
      "agendaHeader-switchDesktop"
    );
    const switchMobile = await screen.findByTestId("agendaHeader-switchMobile");

    expect(switchDesktop.parentElement).toHaveClass("show-desktop-only");
    expect(switchMobile.parentElement).toHaveClass("show-mobile-only");
  });
});
