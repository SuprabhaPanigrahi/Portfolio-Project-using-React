import { motion } from "framer-motion";
import { socialLinks } from "../constants";
import styles from "./Hero.module.css";
// import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        {/* CHANGED: Rebuilt profile container with proper structure */}
        <div className={styles.profileContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.2 }}
            className={styles.profileWrapper}
          >
            <img
              src="/images/Profile.JPG"
              alt="Profile"
              className={styles.profileImage}
            />
          </motion.div>

          {/* CHANGED: Waving hand now properly positioned */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.4,
              duration: 0.7,
            }}
            className={styles.wave}
          >
            👋
          </motion.span>
        </div>

        {/* CHANGED: Greeting text moved below profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.greeting}
        >
          <span>Hello, I'm</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={styles.title}
        >
          Suprabha Panigrahi
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className={styles.subtitle}
        >
          Full Stack Developer | Passionate Learner
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className={styles.description}
        >
          Turning ideas into interactive, user-friendly web experiences with
          modern technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className={styles.heroButtons}
        >
          <a href="#projects" className={styles.primaryButton}>
            View My Work
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Contact Me
          </a>
          <a
            href="/Suprabha_Panigrahi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tertiaryButton}
          >
            View My Resume
            {/* <FiDownload className={styles.downloadIcon} /> */}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className={styles.socials}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll down</span>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
