import React from "react";
import styled from "styled-components";
import TimeLabel from "../../GlobalComponents/Labels/TimeLabel";
import LabelMedium from "../../GlobalComponents/Typography/LabelMedium";

const StyledCardheader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 29px;
  align-items: center;
`;

export default function CardHeader(props: { time: string; labelText: string }) {
  const { time, labelText } = props;

  return (
    <StyledCardheader>
      <TimeLabel time={time} />
      <LabelMedium text={labelText} />
    </StyledCardheader>
  );
}
