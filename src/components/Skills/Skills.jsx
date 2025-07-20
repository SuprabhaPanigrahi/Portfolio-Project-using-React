import { motion } from 'framer-motion';
import { skillCategories } from '../constants';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          My <span className={styles.highlight}>Skills</span>
        </motion.h2>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.skillCategory}
            >
              <h3 className={styles.categoryTitle} style={{ color: category.color }}>
                {category.title}
              </h3>
              
              <div className={styles.skillsList}>
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className={styles.skillItem}
                    style={{ borderColor: category.color }}
                  >
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;