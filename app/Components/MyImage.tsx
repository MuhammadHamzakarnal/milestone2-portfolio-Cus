import React from "react";
import Image from "next/image";

import firstImage from "../Public/image.png.jpg";
import styles from "./MyImage.module.css";

export const MyImage = () => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={firstImage.src}
        alt="Image1"
        width={500}
        height={500}
        className={styles.imageStyle}
      />
    </div>
  );
};
