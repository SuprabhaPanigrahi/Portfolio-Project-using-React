import { motion } from 'framer-motion';
import { aboutText } from '../constants';
import styles from './About.module.css';

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
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className={styles.text}
            >
              {aboutText.split('\n\n').map((paragraph, index) => {
                if (paragraph.includes('[View full CV]')) {
                  return (
                    <p key={index}>
                      {paragraph.split('[View full CV]')[0]}
                      <a 
                        href="/Suprabha_Panigrahi_CV.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cvLink}
                      >
                        View full CV
                      </a>
                    </p>
                  );
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </motion.div>
            
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