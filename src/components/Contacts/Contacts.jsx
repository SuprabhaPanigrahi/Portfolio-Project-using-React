import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./Contacts.module.css";
import { socialLinks } from '../constants/index'

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Get In <span className={styles.highlight}>Touch</span>
        </motion.h2>

        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.info}
          >
            <h3 className={styles.infoTitle}>Contact Information</h3>

            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Berhampur, Odisha, India</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>suprabhapanigrahi620@gmail.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 7735822183</p>
                </div>
              </div>
            </div>
            {/* Add your social links here */}
            <div className={styles.socialLinks}>
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
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.form}
          >
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className={styles.formGroup}>
              <input type="text" placeholder="Subject" />
            </div>

            <div className={styles.formGroup}>
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message <FaPaperPlane />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
