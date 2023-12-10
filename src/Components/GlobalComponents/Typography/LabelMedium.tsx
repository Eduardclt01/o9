import React from "react";
import styled from "styled-components";

const StyledLabelMedium = styled.p`
  font-size: ${(props) => props.theme.fontSize.f3};
  margin: 0;
`;

export default function LabelMedium(props: { text: string }) {
  const { text } = props;

  return <StyledLabelMedium>{text}</StyledLabelMedium>;
}
