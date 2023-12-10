import React from "react";
import styled from "styled-components";

const StyledIconButton = styled.div`
  cursor: pointer;
`;

export default function IconButton(props: { Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; onButtonClick: CallableFunction; }) {
  const {Icon, onButtonClick} = props;

  return (
    <StyledIconButton onClick={onButtonClick()}>
     <Icon />
    </StyledIconButton>
  )
}