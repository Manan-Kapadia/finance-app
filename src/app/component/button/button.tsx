"use client";
import React from "react";
import { buttonInterface } from "@/app/global/interface";
import { Buttons, ButtonWrapper, SvgWrapper } from "./style";
import { BUTTON_TYPE } from "@/app/global/constant";
import SVGIcon from "@/app/assets/svgIcon";

/**
 * it renders button with functionalitites like title, icon ,type ,onclick etc
 * @param {string | number | ReactNode} title - title of the button
 * @param {boolean} isLoading - check whether the button is loading or not
 * @param {boolean} disabled - check whether the button is disabled or not
 * @param {string} className - custom css class name
 * @param {string} buttonType - type of the button - primary, secondary or link
 * @param {string} href - url to be redirected
 * @param {number} variant - type of the button - primary, secondary,tertiary, navigation or icon
 * @param {string} iconViewbox - viewbox of the icon
 * @param {string} isNavbarDropdownTab - checks whether the button is for navbar dropdown
 * @param {string} iconLeft - icon to be placed on left side of the text
 * @param {string} iconRight - icon to be placed on right side of the text
 * @param {number} iconSize - size of the icon
 * @param {string} size - size of the button
 * @param {string} width - width of the button
 * @param {boolean} isMobileFilter - check whether the button is mobile filter or not
 * @param {boolean} isDisabled - check whether the button is disabled or not
 * @param {function} onMouseEnter - function to be called on mouse enter
 * @param {function} onMouseLeave - function to be called on mouse leave
 * @returns {JSX.Element} - rendered button component
 */
export const Button = ({
  title,
  onClick,
  className,
  buttonType,
  variant,
  iconViewbox,
  iconName,
  iconSize,
  size = "large",
  width,
}: buttonInterface) => {
  return (
    <>
      <ButtonWrapper width={width}>
        <Buttons
          onClick={onClick}
          type={buttonType}
          size={size}
          variant={variant}
          aria-label={typeof title === "string" ? title : undefined}
          className={className}
        >
          {title}
          {iconName && variant === BUTTON_TYPE.TERTIARY && (
            <SvgWrapper>
              <SVGIcon
                name={iconName}
                height={iconSize}
                width={iconSize}
                viewBox={iconViewbox}
              />
            </SvgWrapper>
          )}
        </Buttons>
      </ButtonWrapper>
    </>
  );
};
