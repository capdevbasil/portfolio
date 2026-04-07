'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/engineering', label: 'Engineering' },
  { href: '/writing', label: 'Writing' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <Link href="/" className={styles.logo} onClick={handleLinkClick}>
        <img
          src="/img/hero.png"
          alt="Basil Reji logo"
          width={150}
          height={150}
          className={styles.logo}
        />
      </Link>

      <button
        className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      <ul className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${styles.link} ${pathname === href ? styles.active : ''}`}
              onClick={handleLinkClick}
              aria-label={`Navigate to ${label}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
