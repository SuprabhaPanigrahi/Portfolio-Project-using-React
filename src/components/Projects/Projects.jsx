import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectTypes } from '../constants/index';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          My Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.filters}
        >
          {projectTypes.map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`${styles.filter} ${
                filter === type ? styles.active : ''
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.title}
                project={project}
                index={index}
                hoveredProject={hoveredProject}
                setHoveredProject={setHoveredProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;