import { Typography } from "@/styles/typography";
import styled from "styled-components";

export const OuterDiv = styled.div`
  height: 100dvh;
  display: flex;
  align-items: center;
  background-color: var(--beige-100);
`;

export const RightSection = styled.div`
  width: 100%;
  padding: var(--space-32) var(--space-40);
`;

export const MainDiv = styled.div`
  margin-inline: auto;
  height: max-content;
  background-color: var(--white);
  border-radius: 12px;
  width: 100%;
  height: max-content;
  max-width: 560px;
  padding: var(--space-32);
  display: flex;
  flex-direction: column;
  gap: var(--space-32);
`;

export const Heading = styled.p`
  margin: var(--space-0);
  ${Typography.preset1}
  color: var(--grey-900);
  text-align: start;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
`;

export const InputIconRight = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// left Section styles
export const ImageMainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  img {
    height: calc(100dvh - 40px);
  }
`;
