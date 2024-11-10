import { MyImage } from "./MyImage";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div>
        <span className={styles.heroText}>Hi! I AM</span>
        <br /> <br />
        <span className={styles.heroSubText}>M.Hamza</span>
        <p className={styles.heroDescription}>
          <b className="text-xl sm:text-2xl font-bold">I am a web developer</b>{" "}
          <br />
          with a strong foundation in HTML, CSS, and TypeScript. Currently, I am
          expanding my skills by learning Next.js, a powerful framework for
          building dynamic and responsive web applications. <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad minima
          eius pariatur tempore odio amet iste blanditiis nisi, deserunt
          ducimus. Mollitia corporis odio qui delectus veritatis numquam nobis
          harum eveniet.
        </p>
        <div className={styles.heroButtonContainer}>
          <button className={styles.heroButton}>Hire me</button>
          <button className={styles.heroButtonTalk}>Let&apos;s talk</button> {/* Escape single quote */}
        </div>
      </div>

      <MyImage />
    </div>
  );
};

export default HeroSection;
