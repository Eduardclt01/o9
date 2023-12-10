import React from "react";
import styled from "styled-components";

const StyledHeadingXL = styled.h4<{ color?: string; }>`
  font-size: ${props => props.theme.fontSize.f7};
  color: ${props => props?.color ? props.color : props.theme.colors.black};
`;

export default function HeadingXL(props: { text: string; color: string;}) {
  const {text, color} = props;

  return (
    <StyledHeadingXL color={color}>
      {text}
    </StyledHeadingXL>
  )
}