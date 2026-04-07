import styles from './HeroSection.module.css';
import SocialLinks from './SocialLinks';

interface HeroSectionProps {
  name: string;
  title: string;
  summary?: string;
  showContactLinks?: boolean;
}

export default function HeroSection({
  name,
  title,
  summary,
  showContactLinks = false,
}: HeroSectionProps) {
  return (
    <header className={styles.hero}>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.title}>{title}</h2>
      {summary && <p className={styles.summary}>{summary}</p>}
      {showContactLinks && <SocialLinks />}
    </header>
  );
}
