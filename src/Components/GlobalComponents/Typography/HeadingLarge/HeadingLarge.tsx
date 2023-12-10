import React from "react";
import styled from "styled-components";

const StyledHeadingLarge = styled.h5`
  font-size: ${props => props.theme.fontSize.f6};
`;

export default function HeadingLarge(props: { text: string; }) {
  const {text} = props;

  return (
    <StyledHeadingLarge>
      {text}
    </StyledHeadingLarge>
  )
}