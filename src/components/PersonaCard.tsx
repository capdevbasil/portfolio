import Link from 'next/link';
import styles from './PersonaCard.module.css';

interface PersonaCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export default function PersonaCard({ title, description, href, icon }: PersonaCardProps) {
  return (
    <Link href={href} className={styles.card}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.arrow}>→</span>
    </Link>
  );
}
