import React from "react";
import styled from "styled-components";

const StyledHeadingRegular = styled.h5`
  font-size: ${(props) => props.theme.fontSize.f6};
`;

export default function HeadingRegular(props: { text: string }) {
  const { text } = props;

  return <StyledHeadingRegular>{text}</StyledHeadingRegular>;
}
