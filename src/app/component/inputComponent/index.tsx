"use client";
import React from "react";
import {
  InputWrapper,
  Input,
  StyledLabel,
  FieldWrapper,
  LeftSection,
} from "./style";
import { useState } from "react";

type InputProps = {
  width?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  label?: string;
  inputType?: "text" | "email" | "password";
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputComponent: React.FC<InputProps> = ({
  width,
  prefix,
  suffix,
  label,
  inputType = "text",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(!!props.value);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setIsFilled(!!e.target.value);
    if (props.onBlur) props.onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilled(!!e.target.value);
    if (props.onChange) props.onChange(e);
  };

  return (
    <FieldWrapper>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <InputWrapper width={width} isActive={isFocused} filled={isFilled}>
        <LeftSection>
          {prefix}
          <Input
            {...props}
            id={props.id}
            type={inputType}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </LeftSection>
        {suffix}
      </InputWrapper>
    </FieldWrapper>
  );
};

export default InputComponent;
