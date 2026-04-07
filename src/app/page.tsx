import PersonaCard from '@/components/PersonaCard';
import SocialLinks from '@/components/SocialLinks';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        
        <h1 className={styles.name}>Basil Reji</h1>
        <p className={styles.intro}>
          Full-Stack Developer with 6 years of experience specializing in
          React, Next.js, NestJS, and AWS. Writer and artist by heart.
        </p>
      </section>

      <section className={styles.personas}>
        <PersonaCard
          title="Full-Stack Engineer"
          description="Explore my professional experience, technical skills, and projects."
          href="/engineering"
          icon="💻"
        />
        <PersonaCard
          title="Writer &amp; Artist"
          description="Discover my writing, poetry, and artistic endeavors."
          href="/writing"
          icon="✍️"
        />
      </section>

      <SocialLinks />
    </main>
  );
}
