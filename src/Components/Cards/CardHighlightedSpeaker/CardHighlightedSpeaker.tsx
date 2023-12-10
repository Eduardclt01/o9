import React from "react";
import styled, { useTheme } from "styled-components";
import SecondaryButton from "../../GlobalComponents/Buttons/SecondaryButton/SecondaryButton";
import HeadingXXL from "../../GlobalComponents/Typography/HeadingXXL/HeadingXXL";
import HeadingXL from "../../GlobalComponents/Typography/HeadingXL/HeadingXL";
import TimeLabel from "../../GlobalComponents/Labels/TimeLabel/TimeLabel";

const StyledCardHighlightedSpeakers = styled.div`
  height: 487px;
  background-color: ${props => props.theme.colors.darkGray};
  padding:  ${props => props.theme.spacing.s7};
`;

const CompanyDetails = styled.div`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
    height: 54px;
    padding-left: ${props => props.theme.spacing.s6};
    padding-right: ${props => props.theme.spacing.s6};
    display: flex;
    justify-content: space-between;
    font-size: ${props => props.theme.fontSize.f4};
`


export default function CardHighlightedSpeakers(props: { time: string; heading: string; speaker: any; }) {
  const theme = useTheme()
  const {time, heading } = props;

  return (
    <StyledCardHighlightedSpeakers>

      <div>
        <TimeLabel time={time} />
      </div>
    
      <div>
        <HeadingXXL color={theme.colors.primary} text='Haegoo Song' />
        <HeadingXL color={theme.colors.primary} text={heading} />

        <CompanyDetails>
          <p>hello</p>
          <p>LOGO</p>
        </CompanyDetails>
      </div>
      
    </StyledCardHighlightedSpeakers>
  )

}