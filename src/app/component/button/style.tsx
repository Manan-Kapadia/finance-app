import styled, { css, keyframes } from "styled-components";
import { WrappButton } from "../../global/interface";

// keyframes
const ball = keyframes`
  from {
    -webkit-transform: translateY(0) scaleY(0.8);
    transform: translateY(0) scaleY(0.8);
  }
  to {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
`;

export const Buttons = styled.button<WrappButton>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 24px;
  border-radius: 999px;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;
  background-color: var(--black);
  color: var(--white);
  border: none;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  ::first-letter {
    text-transform: capitalize;
  }
  span {
    position: relative;
  }
  &:hover {
    background-color: var(--body-text);
  }
  @media (max-width: 991px) {
    padding: 6px 18px;
  }
  ${({ size }) =>
    size === "small" &&
    css`
      padding: 6px 18px;
      span {
      }
    `}
  ${({ isSecondary }) =>
    isSecondary &&
    css`
      background-color: var(--background2);
      color: var(--black);
      &:hover {
        background-color: var(--border);
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: var(--border);
      color: var(--body-text);
      &:hover {
        background-color: var(--border);
      }
    `}
  ${({ isTertiary }) =>
    isTertiary &&
    css`
      background-color: unset;
      padding: 8px;
      color: var(--black);
      &:hover {
        color: var(--body-text);
        background-color: unset;
      }
      @media (max-width: 991px) {
        padding: 6px;
      }
    `}

  ${({ isNavigationTab }) =>
    isNavigationTab &&
    css`
      background-color: unset;
      color: var(--black);
      &:hover {
        background-color: var(--background);
      }
    `}
    ${({ isNavbarDropdownTab }) =>
    isNavbarDropdownTab &&
    css`
      display: flex;
      z-index: 1;
      height: fit-content;
      border-radius: 12px;
      padding: 12px;
      border-radius: 8px;
      border: unset;
      gap: 12px;
      justify-content: flex-start;
      align-items: center;
      background-color: unset;
      &:hover {
        background-color: var(--background);
      }
      p {
        color: var(--body-text);
      }
      @media (max-width: 449px) {
        padding: 6px;
      }
    `}
  ${({ isicon }) =>
    isicon &&
    css`
      padding: 8px 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      background-color: var(--background);
      color: var(--black);
      &:hover {
        background-color: var(--border);
      }
    `}
  ${({ isLink }) =>
    isLink &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      background-color: var(--white);
      color: var(--black);
      &:hover {
        background-color: var(--background);
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

  ${({ isLoading }) =>
    isLoading &&
    css`
      &::before {
        position: absolute;
        top: 50%;
        left: calc(50% - 2px);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: var(--white);
        z-index: 2;
        margin-top: 4px;
        -webkit-animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate
          ${ball};
        animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
        -webkit-animation-delay: 0.15s;
        animation-delay: 0.15s;
      }
      ${Buttons} {
        cursor: wait;
        color: transparent;
        background-color: var(--lightgray);
        &:hover {
          cursor: not-allowed;
        }
        &::before {
          position: absolute;
          top: 50%;
          left: calc(50% - 2px);
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--white);
          z-index: 2;
          margin-top: 4px;
          -webkit-animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite
            alternate ${ball};
          animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate
            ${ball};
          margin-left: -15px;
        }
        &::after {
          position: absolute;
          left: calc(50% - 2px);
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--white);
          z-index: 2;
          margin-top: 4px;
          -webkit-animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite
            alternate ${ball};
          animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate
            ${ball};
          margin-left: 15px;
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
        }
      }
    `}
`;

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextDesc = styled.div<WrappButton>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${({ isMobileFilter }) =>
    isMobileFilter &&
    css`
      @media (max-width: 449px) {
        display: none;
      }
    `}
`;
