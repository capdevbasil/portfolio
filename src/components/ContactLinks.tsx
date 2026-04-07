import styles from './ContactLinks.module.css';

interface ContactLinksProps {
  email?: string;
  phone?: string;
  github?: string;
}

const defaults = {
  email: 'rejibasilp@gmail.com',
  phone: '+918921307045',
  github: 'https://github.com/capdevbasil',
};

export default function ContactLinks({
  email = defaults.email,
  phone = defaults.phone,
  github = defaults.github,
}: ContactLinksProps) {
  return (
    <ul className={styles.links}>
      <li>
        <a
          href={`mailto:${email}`}
          className={styles.link}
          aria-label="Send an email"
        >
          Email
        </a>
      </li>
      <li>
        <a
          href={`tel:${phone}`}
          className={styles.link}
          aria-label="Call by phone"
        >
          Phone
        </a>
      </li>
      <li>
        <a
          href={github}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}
