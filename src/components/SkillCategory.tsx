import { SkillCategory as SkillCategoryType } from '@/data/skills';
import styles from './SkillCategory.module.css';

export default function SkillCategory({ name, skills }: SkillCategoryType) {
  return (
    <article className={styles.category}>
      <h3 className={styles.name}>{name}</h3>
      <ul className={styles.skills}>
        {skills.map((skill) => (
          <li key={skill} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
