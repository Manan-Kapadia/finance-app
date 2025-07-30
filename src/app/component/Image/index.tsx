"use client";
import React from "react";
import { ImageDiv, NextImage } from "./style";

interface ImageProps {
  src: string;
  alt: string;
  width?: number | `${number}` | string;
  height?: number | `${number}` | string;
  isNextImage?: boolean;
  className?: string;
  borderRadius?: string;
  boxShadow?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down" | "unset";
  loading?: "eager" | "lazy";
  unoptimized?: boolean;
  priority?: boolean;
  objectPosition?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  isNextImage = true,
  className,
  borderRadius,
  boxShadow,
  objectFit = "cover",
  loading = "lazy",
  unoptimized = false,
  priority = false,
  objectPosition = "center",
}) => {
  return (
    <>
      {isNextImage ? (
        <NextImage
          src={src}
          alt={alt}
          width={
            typeof width === "string" ? parseInt(width, 10) || undefined : width
          }
          height={
            typeof height === "string"
              ? parseInt(height, 10) || undefined
              : height
          }
          $borderRadius={borderRadius}
          className={className}
          $boxShadow={boxShadow}
          style={{ objectFit }}
          loading={priority ? "eager" : loading}
          unoptimized={unoptimized}
          priority={priority}
          $objectPosition={objectPosition}
        />
      ) : (
        <ImageDiv
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          $borderRadius={borderRadius}
          $boxShadow={boxShadow}
          objectFit={objectFit}
          loading={loading}
        />
      )}
    </>
  );
};

export default Image;
