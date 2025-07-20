import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.content}
        >
          <p className={styles.text}>
            Built with <FaHeart className={styles.heart} /> by Suprabha Panigrahi
          </p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;