import { motion } from 'framer-motion';
import { education } from '../constants';
import styles from './Education.module.css';

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          My <span className={styles.highlight}>Education</span>
        </motion.h2>

        <div className={styles.timeline}>
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.timelineItem}
            >
              <div className={styles.timelineContent}>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.institution}>{item.institution}</p>
                <span className={styles.year}>{item.year}</span>
                <p className={styles.description}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;