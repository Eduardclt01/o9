import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: ${(props) => props.theme.fontSize.f4};
  margin: 0;
`;

export default function Paragraph(props: { text: string }) {
  const { text } = props;

  return <StyledParagraph>{text}</StyledParagraph>;
}
