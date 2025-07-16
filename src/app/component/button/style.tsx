import styled, { css } from "styled-components";
import { WrappButton } from "../../global/interface";
import { typography } from "@/styles/typography";
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
  ${typography.preset4Bold}
  overflow: hidden;
  border: none;
  transition: all 0.3s ease-in-out;
  ::first-letter {
    text-transform: capitalize;
  }

  ${({ variant }) =>
    variant === BUTTON_TYPE.PRIMARY &&
    css`
      background-color: var(--grey-darkest);
      color: var(--white);
      &:hover {
        background-color: var(--grey-dark);
      }
    `}
  ${({ variant }) =>
    variant === BUTTON_TYPE.SECONDARY &&
    css`
      background-color: var(--beige-light);
      color: var(--grey-darkest);
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
      color: var(--grey-dark);
      gap: var(--space-12);
      svg path {
        fill: var(--grey-dark);
      }
      &:hover {
        color: var(--grey-darkest);
        background-color: unset;
        svg path {
          fill: var(--grey-darkest);
        }
      }
    `}
  ${({ variant }) =>
    variant === BUTTON_TYPE.DESTROY &&
    css`
      background-color: var(--red);
      color: var(--white);
      &:hover {
        background-color: linear-gradient(
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.2)
          ),
          #d1493f;
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
