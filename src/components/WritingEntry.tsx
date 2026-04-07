import { WritingEntry as WritingEntryType } from '@/data/writing';
import styles from './WritingEntry.module.css';

export default function WritingEntry({ title, description, category, date, link }: WritingEntryType) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Read ${title}`}>
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <span className={styles.category}>{category}</span>
      </div>
      {date && <p className={styles.date}>{date}</p>}
      <p className={styles.description}>{description}</p>
    </article>
  );
}
