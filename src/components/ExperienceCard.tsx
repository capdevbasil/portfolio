import { ExperienceEntry } from '@/data/experience';
import styles from './ExperienceCard.module.css';

export default function ExperienceCard({ jobTitle, company, duration, location, responsibilities }: ExperienceEntry) {
  return (
    <article className={styles.card}>
      <h3 className={styles.jobTitle}>{jobTitle}</h3>
      <p className={styles.company}>{company}</p>
      <div className={styles.meta}>
        <span>{duration}</span>
        <span>{location}</span>
      </div>
      <ul className={styles.responsibilities}>
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
