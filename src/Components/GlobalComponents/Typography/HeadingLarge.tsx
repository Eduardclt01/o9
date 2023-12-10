import React from "react";
import styled from "styled-components";

const StyledHeadingLarge = styled.h4<{ color?: string }>`
  font-size: ${(props) => props.theme.fontSize.f5};
  color: ${(props) => (props?.color ? props.color : props.theme.colors.black)};
`;

export default function HeadingLarge(props: { text: string; color: string }) {
  const { text, color } = props;

  return <StyledHeadingLarge color={color}>{text}</StyledHeadingLarge>;
}
