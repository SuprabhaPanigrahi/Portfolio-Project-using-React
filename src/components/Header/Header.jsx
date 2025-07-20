import { motion } from 'framer-motion';
import { navLinks } from '../constants';
import styles from './Header.module.css';

export default function Header({ activeSection, setActiveSection }) {
  return (
    <header className={styles.header}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20 }}
        className={styles.headerBackground}
      >
        <div className={styles.glow} />
      </motion.div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={styles.navItem}
            >
              <a
                href={link.route}
                className={`${styles.navLink} ${
                  activeSection === link.name ? styles.active : ""
                }`}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
                <motion.span
                  layoutId="navIndicator"
                  className={styles.navIndicator}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}