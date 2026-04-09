import HeroSection from '@/components/HeroSection';
import WritingEntry from '@/components/WritingEntry';
import { fetchBloggerPosts } from '@/lib/blogger';
import styles from './page.module.css';

const BLOGGER_URL = 'https://wormonroad.blogspot.com';

export default async function WritingPage() {
  const entries = await fetchBloggerPosts(BLOGGER_URL);
  const categories = Array.from(new Set(entries.map((e) => e.category)));

  return (
    <main className={styles.main}>
      <HeroSection name="Basil Reji" title="Writer & Artist" />

      <section className={styles.intro}>
        <p>
          Beyond engineering, I explore ideas through writing and art. From
          poetry and essays to short stories, this space is a collection of
          creative work that reflects curiosity, introspection, and a love for
          storytelling.
        </p>
      </section>

      {categories.map((category) => (
        <section key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          {entries
            .filter((entry) => entry.category === category)
            .map((entry) => (
              <WritingEntry key={entry.title} {...entry} />
            ))}
        </section>
      ))}
    </main>
  );
}
