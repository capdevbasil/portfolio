import { FaLinkedinIn, FaInstagram, FaFacebookF, FaWhatsapp, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './SocialLinks.module.css';

const socials = [
  { name: 'Email', icon: FaEnvelope, href: 'mailto:rejibasilp@gmail.com', className: styles.email },
  { name: 'Phone', icon: FaPhone, href: 'tel:+918921307045', className: styles.phone },
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/capdevbasil', className: styles.github },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/basil-r-22bb56105/', className: styles.linkedin },
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/basilinbrief/', className: styles.instagram },
  { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/basilreji97/', className: styles.facebook },
  { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/918921307045', className: styles.whatsapp },
];

export default function SocialLinks() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Connect</h2>
      <div className={styles.grid}>
        {socials.map(({ name, icon: Icon, href, className }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${className}`}
            aria-label={name}
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  );
}
