import React from "react";
import styled from "styled-components";
import { device } from "../../../Assets/Theme/breakpoints";

const StyledCardWrapper = styled.div<{
  backgroundColor?: string;
  gridSpanAmount?: number;
}>`
  height: 487px;
  background-color: ${(props) =>
    props?.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.lightGray};
  padding: ${(props) => props.theme.spacing.s7};

  @media ${device.mobileLUp} {
    height: 429px;
  }

  @media ${device.tabletUp} {
    height: 524px;
  }

  @media ${device.desktopUpS} {
    height: 464px;
    grid-column: ${(props) =>
      props?.gridSpanAmount ? "span " + props.gridSpanAmount : "span 1"};
  }

  @media ${device.desktopUPXL} {
    height: 488px;
  }
`;

export default function CardWrapper(props: {
  children: React.ReactNode;
  backgroundColor?: string;
  gridSpanAmount?: number;
}) {
  const { children, backgroundColor, gridSpanAmount } = props;

  return (
    <StyledCardWrapper
      backgroundColor={backgroundColor}
      gridSpanAmount={gridSpanAmount}
    >
      {children}
    </StyledCardWrapper>
  );
}
