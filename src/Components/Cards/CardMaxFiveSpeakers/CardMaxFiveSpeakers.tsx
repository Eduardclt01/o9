import React from "react";
import styled from "styled-components";
import SecondaryButton from "../../GlobalComponents/Buttons/SecondaryButton/SecondaryButton";
import HeadingLarge from "../../GlobalComponents/Typography/HeadingLarge/HeadingLarge";
import CardHeader from "../CardComponents/CardHeader/CardHeader";

const StyledCardMaxFiveSpeakers = styled.div`
  height: 487px;
  background-color: ${props => props.theme.colors.darkGray};
  padding:  ${props => props.theme.spacing.s7};
`;


export default function CardMaxFiveSpeakers(props: { time: string; category: string; heading: string; speakers: any; }) {
  const {time, category, heading, speakers } = props;
  const categoryText = category.toUpperCase();

  return (
    <StyledCardMaxFiveSpeakers>
      <CardHeader time={time} labelText={categoryText} />
    
      <div>
        <HeadingLarge text={heading} />
        <SecondaryButton text="learn more" onButtonClick={()=>{}} />
      </div>
      
    </StyledCardMaxFiveSpeakers>
  )

}