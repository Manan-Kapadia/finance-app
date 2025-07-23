import styled from "styled-components";

interface Props {
  width?: string | number;
  hasError?: boolean;
  isActive?: boolean;
}

export const InputWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "100%"};
  gap: var(--space-16);
  padding: var(--space-20) var(--space-12);
  border: 1px solid
    ${({ hasError, isActive }) =>
      hasError
        ? "var(--red)"
        : isActive
        ? "var(--grey-darkest)"
        : "var(--grey-light)"};
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  color: var(--grey-darkest);
  font-weight: 500;
`;

export const StyledInput = styled.input<{ hasError?: boolean }>`
  padding: 12px 16px;
  border-radius: 8px;

  background: var(--white);
  font-size: 16px;
  color: var(--grey-darkest);
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: var(--grey-dark);
  }
`;

export const ErrorText = styled.span`
  color: var(--red);
  font-size: 12px;
  margin-top: 2px;
`;
