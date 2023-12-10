import React from "react";
import styled from "styled-components";

const StyledHeadingJumbo = styled.h1`
  font-size: ${(props) => props.theme.fontSize.f9};
  margin: 0;
`;

export default function HeadingJumbo(props: { text: string }) {
  const { text } = props;

  return <StyledHeadingJumbo>{text}</StyledHeadingJumbo>;
}
