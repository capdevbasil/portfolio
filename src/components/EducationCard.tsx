import { EducationEntry } from '@/data/education';
import styles from './EducationCard.module.css';

export default function EducationCard({ institution, location, degree, duration }: EducationEntry) {
  return (
    <article className={styles.card}>
      <h3 className={styles.institution}>{institution}</h3>
      <p className={styles.degree}>{degree}</p>
      <div className={styles.meta}>
        <span>{duration}</span>
        <span>{location}</span>
      </div>
    </article>
  );
}
