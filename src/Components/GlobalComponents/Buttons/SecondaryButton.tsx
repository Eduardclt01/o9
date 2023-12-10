import React from "react";
import styled from "styled-components";

const StyledSecondaryButton = styled.button`
  background: transparent;
  border: none;
  border-bottom: 1px solid;
  padding: 0;
  padding-bottom: ${(props) => props.theme.spacing.s3};
`;

const TextWrapper = styled.span`
  padding-right: ${(props) => props.theme.spacing.s4};
`;

export default function SecondaryButton(props: {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const { text, onButtonClick, Icon } = props;

  return (
    <StyledSecondaryButton onClick={onButtonClick}>
      <TextWrapper>{text.toUpperCase()}</TextWrapper>
      {Icon && <Icon />}
    </StyledSecondaryButton>
  );
}
