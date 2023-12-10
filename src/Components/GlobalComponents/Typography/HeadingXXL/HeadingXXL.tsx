import React from "react";
import styled from "styled-components";

const StyledHeadingXXL = styled.h3<{ color?: string; }>`
  font-size: ${props => props.theme.fontSize.f8};
  color: ${props => props?.color ? props.color : props.theme.colors.black};
`;

export default function HeadingXXL(props: { text: string; color: string;}) {
  const {text, color} = props;

  return (
    <StyledHeadingXXL color={color}>
      {text}
    </StyledHeadingXXL>
  )
}