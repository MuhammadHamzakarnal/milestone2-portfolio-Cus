import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Image from "next/image";
import AssImage1 from "../Public/Screenshot 2024-10-23 052020 (2).png";
import AssImage2 from "../Public/Screenshot 2.png";
import AssImage3 from "../Public/Screenshot 2024-10-27 031047 (3).png";
import AssImage4 from "../Public/Screenshot 4.png";
import Link from "next/link";

import StyleCss from "./Project.module.css";

const Project = () => {
  return (
    <div>
      <Header></Header>
      <div className={StyleCss.projectsContainer}>
        <div className={StyleCss.projectItem}>
          <h2>Assignment One</h2>
          <Link href="">
            <Image
              src={AssImage1}
              alt="Assignment 1"
              width={300}
              height={300}
              className={StyleCss.projectImage}
            />
          </Link>
        </div>

        <div className={StyleCss.projectItem}>
          <h2>Assignment Two</h2>
          <Link href="https://vercel.com/muhammad-hamzas-projects-243aa18f/nextjsasss2/BYRhKu2muEHSHXaJPmc6NkweURwb">
            <Image
              src={AssImage2}
              alt="Assignment 2"
              width={300}
              height={300}
              className={StyleCss.projectImage}
            />
          </Link>
        </div>

        <div className={StyleCss.projectItem}>
          <h2>Assignment Three</h2>
          <Link href="https://vercel.com/muhammad-hamzas-projects-243aa18f/nextjs-ass3/Dyt1HtSnETcqdLFQrtdT2eLjAZUR">
            <Image
              src={AssImage3}
              alt="Assignment 3"
              width={300}
              height={300}
              className={StyleCss.projectImage}
            />
          </Link>
        </div>

        <div className={StyleCss.projectItem}>
          <h2>Project One</h2>
          <Link href="">
            <Image
              src={AssImage4}
              alt="Project 1"
              width={300}
              height={300}
              className={StyleCss.projectImage}
            />
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Project;
