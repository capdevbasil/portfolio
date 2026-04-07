import HeroSection from '@/components/HeroSection';
import ExperienceCard from '@/components/ExperienceCard';
import SkillCategory from '@/components/SkillCategory';
import ProjectCard from '@/components/ProjectCard';
import EducationCard from '@/components/EducationCard';
import { experiences } from '@/data/experience';
import { skillCategories } from '@/data/skills';
import { projects } from '@/data/projects';
import { educationEntries } from '@/data/education';
import styles from './page.module.css';

export default function EngineeringPage() {
  return (
    <main className={styles.main}>
      <HeroSection
        name="Basil Reji"
        title="Full-Stack Engineer"
        summary="Full-Stack Developer with 6 years of experience specializing in React, Next.js, NestJS, and AWS. Proven track record of owning the entire stack — from database design to cloud deployment — for systems supporting 50K+ users with 99.9% uptime, across real estate, fleet management, and service platforms."
        showContactLinks
      />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        {experiences.map((entry) => (
          <ExperienceCard key={entry.company} {...entry} />
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category) => (
            <SkillCategory key={category.name} {...category} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        {educationEntries.map((entry) => (
          <EducationCard key={entry.institution + entry.degree} {...entry} />
        ))}
      </section>
    </main>
  );
}
