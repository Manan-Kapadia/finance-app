"use client";
import React from "react";
import { InputWrapper, Input, InputIconLeft, InputIconRight } from "./style";
import SVGIcon from "../../assets/svgIcon";
import { useState } from "react";

type InputComponentProps = {
  width?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  showPasswordToggle?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputComponent: React.FC<InputComponentProps> = ({
  width,
  prefixIcon,
  suffixIcon,
  showPasswordToggle,
  type = "text",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(!!props.value);
  const [showPassword, setShowPassword] = useState(false);

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

  const inputType = showPasswordToggle
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <InputWrapper width={width} isActive={isFocused} filled={isFilled}>
      <div>
        {prefixIcon && (
          <InputIconLeft>
            <SVGIcon name={prefixIcon} width={20} height={20} />
          </InputIconLeft>
        )}
        <Input
          {...props}
          id={props.id}
          type={inputType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {showPasswordToggle && (
          <InputIconRight
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={0}
            aria-label={showPassword ? "Hide password" : "Show password"}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ")
                setShowPassword((prev) => !prev);
            }}
          >
            <SVGIcon
              name={showPassword ? "eye-off" : "eye"}
              width={20}
              height={20}
            />
          </InputIconRight>
        )}
        {suffixIcon && !showPasswordToggle && (
          <InputIconRight>
            <SVGIcon name={suffixIcon} width={20} height={20} />
          </InputIconRight>
        )}
      </div>
    </InputWrapper>
  );
};

export default InputComponent;
