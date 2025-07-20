import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`${styles.projectCard} ${index % 2 === 0 ? styles.left : styles.right}`}
    >
      <div className={styles.imageContainer}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className={styles.projectImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.tagsContainer}>
          {project.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectLink}
        >
          View Live Demo →
        </a>
        <br />
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectLink}
        >
          View GitHub Repo →
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;