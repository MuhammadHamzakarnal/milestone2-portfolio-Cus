import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import StyleCss from "./About.module.css";

const About = () => {
  return (
    <div>
      <Header />

      <div className={StyleCss.aboutContainer}>
        <h2 className={StyleCss.aboutHeader}>About Me</h2>

        <p className={StyleCss.aboutText}>
          Hello! I&apos;m a passionate developer who has delved into the world of web
          development. I started my journey by learning HTML and CSS, which
          provided me with a solid foundation for creating beautiful and
          responsive web pages.
        </p>

        <p className={StyleCss.aboutText}>
          To enhance my skills further, I explored TypeScript, which allowed me
          to write more robust and maintainable code. Currently, I&apos;m diving into
          Next.js, a powerful framework for building server-rendered React
          applications that has opened up a new world of possibilities for me.
        </p>

        <p className={StyleCss.aboutText}>
          I&apos;m excited about continuing to grow my skill set and contribute to
          innovative projects. Let&apos;s connect and build something amazing
          together!
        </p>

        <div className={StyleCss.textCenter}>
          <button className={StyleCss.aboutButton}>Hire me</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
