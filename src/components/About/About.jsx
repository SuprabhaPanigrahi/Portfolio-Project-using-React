import { motion } from 'framer-motion';
import { aboutText } from '../constants';
import styles from './About.module.css';
// import profilePhoto from '../assets/images/Profile.JPG';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.content}
        >
          <div className={styles.textColumn}>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              About <span className={styles.highlight}>Me</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className={styles.text}
            >
              {aboutText}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className={styles.stats}
            >
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2 Months of</span>
                <span className={styles.statLabel}>Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>∞</span>
                <span className={styles.statLabel}>Passion</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.imageColumn}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.glow} />
              <img 
                src="/images/img.jpg"  
                alt="Suprabha Panigrahi" 
                className={styles.image}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;