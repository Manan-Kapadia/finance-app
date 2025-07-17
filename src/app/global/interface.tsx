import React from "react";

export interface buttonInterface {
  title?: string | number | React.ReactNode;
  onClick?: (e: React.SyntheticEvent) => void;
  buttonType?: "reset" | "submit" | "button";
  size?: "small" | "large";
  iconSize?: number;
  iconName?: string;
  iconViewbox?: string;
  className?: string;
  isMobileFilter?: boolean;
  href?: string;
  width?: number | string;
  variant: number;
  // onMouseEnter?: () => void;
  // onMouseLeave?: () => void;
}

export interface WrappButton {
  isSecondary?: boolean;
  isTertiary?: boolean;
  isLink?: boolean;
  size?: "small" | "large";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: number;
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
