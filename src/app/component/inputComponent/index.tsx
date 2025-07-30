"use client";
import React from "react";
import {
  InputWrapper,
  Input,
  StyledLabel,
  FieldWrapper,
  LeftSection,
} from "./style";

type InputProps = {
  width?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputComponent: React.FC<InputProps> = ({
  width,
  prefix,
  suffix,
  label,

  ...props
}) => {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) props.onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e);
  };

  return (
    <FieldWrapper>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <InputWrapper width={width}>
        <LeftSection>
          {prefix}
          <Input
            {...props}
            id={props.id}
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
