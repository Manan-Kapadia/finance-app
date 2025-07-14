import React from "react";

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
