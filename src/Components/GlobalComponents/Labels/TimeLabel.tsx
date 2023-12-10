import React from "react";
import styled from "styled-components";

const StyledTimeLabel = styled.span<{ heightPx?: number; }>`
  background-color: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.borderRadius.small};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.s5} ${props => props.theme.spacing.s6};
  display: inline-block;
  box-sizing: border-box;
  height:${props => props?.heightPx ? props.heightPx + 'px' : '100%'};
  font-size: ${props => props.theme.fontSize.f1};
`;

export default function TimeLabel(props: { time: string; heightPx?: number }) {
  const {time, heightPx} = props;

  return (
    <StyledTimeLabel heightPx={heightPx} >
      {time}
    </StyledTimeLabel>
  )
}