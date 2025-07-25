import styled, { css } from "styled-components";
import { WrappButton } from "../../global/interface";
import { Typography } from "@/styles/typography";
import { BUTTON_TYPE } from "@/app/global/constant";

export const Buttons = styled.button<WrappButton>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-16);
  border-radius: 8px;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;
  ${Typography.preset4Bold}
  overflow: hidden;
  border: none;
  transition: all 0.3s ease-in-out;
  ::first-letter {
    text-transform: capitalize;
  }

  ${({ variant }) =>
    variant === BUTTON_TYPE.PRIMARY &&
    css`
      background-color: var(--grey-900);
      color: var(--white);
      &:hover {
        background-color: var(--grey-500);
      }
    `}
  ${({ variant }) =>
    variant === BUTTON_TYPE.SECONDARY &&
    css`
      background-color: var(--beige-100);
      color: var(--grey-900);
      &:hover {
        background-color: var(--white);
        box-shadow: var(--border);
      }
    `}
  ${({ variant }) =>
    variant === BUTTON_TYPE.TERTIARY &&
    css`
      background-color: unset;
      padding: var(--space-0);
      color: var(--grey-500);
      gap: var(--space-12);
      svg path {
        fill: var(--grey-500);
      }
      &:hover {
        color: var(--grey-900);
        background-color: unset;
        svg path {
          fill: var(--grey-900);
        }
      }
    `}
  ${({ variant }) =>
    variant === BUTTON_TYPE.DESTROY &&
    css`
      background-color: var(--red);
      color: var(--white);
      &:hover {
        opacity: 75%;
      }
    `}
`;

export const ButtonWrapper = styled.div<WrappButton>`
  width: ${(props) => props.width};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
  }
`;

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
