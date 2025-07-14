import React, { FormEvent } from "react";

export interface buttonInterface {
  title?: string | number | React.ReactNode;
  isNavbarDropdownTab?: boolean;
  onClick?: (e: FormEvent) => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  buttonType?: "reset" | "submit" | "button";
  size?: "small" | "large";
  isSecondary?: boolean;
  isTertiary?: boolean;
  isNavigation?: boolean;
  iconSize?: number;
  iconLeft?: string;
  iconRight?: string;
  iconViewbox?: string;
  className?: string;
  isMobileFilter?: boolean;
  href?: string;
  width?: number | string;
  variant: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface WrappButton {
  isSecondary?: boolean;
  isTertiary?: boolean;
  isLink?: boolean;
  size?: "small" | "large";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isNavbarDropdownTab?: boolean;
  isNavigationTab?: boolean;
  isMobileFilter?: boolean;
  isloginbutton?: boolean;
  isLoading?: boolean;
  issecondary?: boolean;
  isdisabled?: boolean;
  isnavigation?: boolean;
  isicon?: boolean;
  ismobilefilter?: boolean;
  width?: number | string;
}

export interface SvgInterface {
  name: string;
  style?: React.CSSProperties;
  fill?: string;
  viewBox?: string;
  height?: number;
  width?: number;
  className?: string;
  strokeWidth?: number;
  bgfill?: string;
  stroke?: string;
  stopColor?: string;
  stopColor1?: string;
  stopColor2?: string;
  iconprimary?: string;
  onClick?: () => void;
}
