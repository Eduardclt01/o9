import React from "react";
import styled from "styled-components";
import { ReactComponent as RightArrow } from "../../../Assets/Images/Svgs/rightArrow.svg";


const StyledSecondaryButton = styled.button`
    background: transparent;
    border: none;
    border-bottom: 1px solid;
    padding: 0;
    padding-bottom: ${props => props.theme.spacing.s3};
`;

export default function SecondaryButton(props: { text: string; onButtonClick: React.MouseEventHandler<HTMLButtonElement>; }) {
  const {text, onButtonClick} = props;

  return (
    <StyledSecondaryButton onClick={onButtonClick}>
      {text}
      <RightArrow />
    </StyledSecondaryButton>
  )
}