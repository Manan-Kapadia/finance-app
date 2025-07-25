import { Typography } from "@/styles/typography";
import styled from "styled-components";

interface Props {
  width?: string | number;
  isActive?: boolean;
  filled?: boolean;
}

export const InputWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "100%"};
  gap: var(--space-16);
  padding: var(--space-12) var(--space-20);
  border-radius: 8px;
  border: 1px solid var(--grey-300);
  background: var(--white);
  opacity: 1;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  color: var(--grey-900);
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Input = styled.input<Props>`
  ${Typography.preset4}
  background:var(--white);
  color: var(--grey-900);
  outline: none;
  border: none;
  width: 100%;
  transition: border 0.2s, background 0.2s, color 0.2s;
  &::placeholder {
    color: var(--grey-400);
    opacity: 1;
  }
  &:disabled {
    cursor: not-allowed;
  }
  ${({ filled }) =>
    filled &&
    `
      background: var(--grey-50);
    `}
`;

// Icon styles
export const InputIconLeft = styled.span`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

export const InputIconRight = styled.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  cursor: pointer;
`;
