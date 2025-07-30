import Image from "next/image";
import styled from "styled-components";

interface Props {
  $borderRadius?: string;
  $boxShadow?: string;
  filter?: string;
  opacity?: number;
  aspectRatio?: string;
  objectFit?: string;
}
interface NextImageProps {
  $borderRadius?: string;
  $boxShadow?: string;
  filter?: string;
  opacity?: number;
  aspectRatio?: string;
  $objectPosition?: string;
}

export const ImageDiv = styled.img<Props>`
  object-fit: cover;
  border-radius: ${(props) => props.$borderRadius || "0px"};
  box-shadow: ${(props) => props.$boxShadow || "none"};
  filter: ${(props) => props.filter || "none"};
  opacity: ${(props) => props.opacity || 1};
  aspect-ratio: ${(props) => props.aspectRatio || "auto"};
  object-fit: ${(props) => props.objectFit || "cover"};
`;

export const NextImage = styled(Image)<NextImageProps>`
  object-fit: cover;
  border-radius: ${(props) => props.$borderRadius || "0px"};
  object-position: ${(props) => props.$objectPosition || "center"};
  box-shadow: ${(props) => props.$boxShadow || "none"};
  filter: ${(props) => props.filter || "none"};
  opacity: ${(props) => props.opacity || 1};
  aspect-ratio: ${(props) => props.aspectRatio || "auto"};
`;
