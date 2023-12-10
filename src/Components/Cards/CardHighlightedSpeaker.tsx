import React from "react";
import styled, { useTheme } from "styled-components";
import { ReactComponent as RightUpArrow } from "../../../Assets/Images/Svgs/rightUpArrow.svg";
import HeadingXXL from "../GlobalComponents/Typography/HeadingXXL";
import HeadingXL from "../GlobalComponents/Typography/HeadingXL";
import TimeLabel from "../GlobalComponents/Labels/TimeLabel";
import IconButton from "../GlobalComponents/Buttons/IconButton";

const StyledCardHighlightedSpeakers = styled.div`
  height: 487px;
  background-color: ${props => props.theme.colors.darkGray};
  padding:  ${props => props.theme.spacing.s7};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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

const HighligtedCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function CardHighlightedSpeakers(props: { time: string; heading: string; speaker: any; }) {
  const theme = useTheme()
  const {time, heading } = props;

  return (
    <StyledCardHighlightedSpeakers>

      <HighligtedCardHeader>
        <TimeLabel time={time} heightPx={29}/>
        <IconButton Icon={RightUpArrow} onButtonClick={() => {}}/>
      </HighligtedCardHeader>
    
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