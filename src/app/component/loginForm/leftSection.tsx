import React from "react";
import { ImageMainSection } from "./style";
import Image from "../Image";
import { Images } from "@/app/assets/images";

const ImageSection = () => {
  return (
    <>
      <ImageMainSection>
        <Image
          src={Images.login_form.src}
          alt="login form image"
          width={560}
          height={920}
          borderRadius="12px"
        />
      </ImageMainSection>
    </>
  );
};

export default ImageSection;
