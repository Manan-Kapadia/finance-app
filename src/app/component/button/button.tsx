"use client";
import React from "react";
import { buttonInterface } from "@/app/global/interface";
import { Buttons, ButtonWrapper, SvgWrapper, TextDesc } from "./style";
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
  isLoading = false,
  className,
  buttonType,
  href,
  variant = BUTTON_TYPE.SECONDARY,
  iconViewbox,
  isNavbarDropdownTab,
  iconLeft,
  iconRight,
  iconSize,
  size = "large",
  width,
  isMobileFilter,
  isDisabled,
  onMouseEnter,
  onMouseLeave,
}: buttonInterface) => {
  return (
    <>
      <ButtonWrapper isLoading={isLoading} width={width}>
        <Buttons
          onClick={onClick}
          isSecondary={variant === BUTTON_TYPE.SECONDARY}
          disabled={isDisabled || isLoading}
          type={buttonType}
          size={size}
          isTertiary={variant === BUTTON_TYPE.TERTIARY}
          isNavigationTab={variant === BUTTON_TYPE.NAVIGATION}
          isicon={variant === BUTTON_TYPE.ICON}
          isLink={variant === BUTTON_TYPE.LINK}
          isNavbarDropdownTab={isNavbarDropdownTab}
          as={href ? "a" : "button"}
          href={href}
          aria-label={typeof title === "string" ? title : undefined}
          className={className}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {iconLeft && (
            <SvgWrapper>
              <SVGIcon
                name={iconLeft}
                height={iconSize}
                width={iconSize}
                viewBox={iconViewbox}
              />
            </SvgWrapper>
          )}
          <TextDesc isMobileFilter={isMobileFilter}>
            <span>{title}</span>
          </TextDesc>
          {iconRight && (
            <SvgWrapper>
              <SVGIcon
                name={iconRight}
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
