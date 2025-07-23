"use client";
import React from "react";
import { ErrorText, InputWrapper, StyledInput, StyledLabel } from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  width?: string;
}

const InputComponent: React.FC<InputProps> = ({
  label,
  error,
  width,
  ...props
}) => {
  return (
    <InputWrapper width={width}>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <StyledInput {...props} placeholder="Enter Text" />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

export default InputComponent;
