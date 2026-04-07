import { ProjectEntry } from '@/data/projects';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ name, techStack, duration, accomplishments }: ProjectEntry) {
  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.duration}>{duration}</p>
      <div className={styles.techStack}>
        {techStack.map((tech) => (
          <span key={tech} className={styles.techBadge}>{tech}</span>
        ))}
      </div>
      <ul className={styles.accomplishments}>
        {accomplishments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
