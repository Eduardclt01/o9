import React from "react";
import styled from "styled-components";
import { device } from '../../Assets/Theme/breakpoints';
import TimeLabel from "../TimeLabel/TimeLabel";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";

const StyledCardMaxTwoSpeakers = styled.div`
  height: 487px;
  background-color: ${props => props.theme.colors.lightGray};
  padding:  ${props => props.theme.spacing.s7};
`;

const Cardheader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 29px;
  align-items: center;
`;

const CategoryHeader = styled.p`
  margin: 0;
`;


export default function CardMaxTwoSpeakers(props: { time: string; category: string; heading: string; speakers: any; }) {
  const {time, category, heading, speakers } = props;

  return (
    <StyledCardMaxTwoSpeakers>
      <Cardheader>
      <TimeLabel time={time} />
      <div><CategoryHeader>{category}</CategoryHeader></div>
      </Cardheader>
    
      <div>
        <h5>{heading}</h5>
        <SecondaryButton text="learn more" onButtonClick={()=>{}} />
      </div>
      
    </StyledCardMaxTwoSpeakers>
  )

}