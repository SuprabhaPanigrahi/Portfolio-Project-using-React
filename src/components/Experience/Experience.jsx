import { motion } from 'framer-motion';
import { experiences } from '../constants';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          My <span className={styles.highlight}>Experience</span>
        </motion.h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.timelineItem}
            >
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                
                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>
                      <span className={styles.bullet} />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className={styles.skills}>
                  {exp.skills.map((skill, i) => (
                    <span key={i} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;