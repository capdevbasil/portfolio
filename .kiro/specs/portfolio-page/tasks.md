# Implementation Plan: Portfolio Page

## Overview

Build a multi-page Next.js portfolio site with three pages (Landing, Engineering, Writing), a shared Navbar with mobile hamburger menu, reusable components, static data files, CSS Modules styling, and comprehensive tests. Each task builds incrementally, wiring components together as they are created.

## Tasks

- [ ] 1. Set up project structure, global styles, and TypeScript data models
  - [x] 1.1 Initialize Next.js App Router project with TypeScript and CSS Modules
    - Create `src/app/layout.tsx` with root HTML structure, metadata, and global styles import
    - Create `src/styles/globals.css` with CSS custom properties, reset, and base typography
    - Configure `next.config.js` with `output: 'export'` for static export
    - _Requirements: 10.2, 9.1_

  - [x] 1.2 Create static data files under `src/data/`
    - Create `src/data/experience.ts` with `ExperienceEntry` interface and data array (3 entries in reverse chronological order)
    - Create `src/data/skills.ts` with `SkillCategory` interface and data array (6 categories)
    - Create `src/data/projects.ts` with `ProjectEntry` interface and data array (2 projects)
    - Create `src/data/writing.ts` with `WritingEntry` interface and data array (placeholder entries)
    - _Requirements: 4.1, 4.4, 5.2, 6.3, 7.6_

- [ ] 2. Implement shared components (Navbar, HeroSection, ContactLinks)
  - [x] 2.1 Implement Navbar component with mobile hamburger menu
    - Create `src/components/Navbar.tsx` using `usePathname()` for active link highlighting
    - Create `src/components/Navbar.module.css` with responsive styles (hamburger at ≤768px)
    - Use Next.js `<Link>` for client-side routing to `/`, `/engineering`, `/writing`
    - Manage `isOpen` state with `useState` for mobile menu toggle
    - Close menu on navigation link click
    - Add `aria-label` attributes on nav and hamburger button
    - Mark as `'use client'` component
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 8.4, 8.5, 9.1, 9.2, 9.3, 9.4_

  - [ ]* 2.2 Write property test for Navbar active state (Property 1)
    - **Property 1: Navigation active state matches current route**
    - Generate random pathnames from valid routes; verify `active` class applied to exactly the correct link
    - **Validates: Requirements 2.4**

  - [ ]* 2.3 Write property test for hamburger menu toggle (Property 6)
    - **Property 6: Hamburger menu toggle round-trip**
    - Generate random initial states; toggle twice; verify state returns to original
    - **Validates: Requirements 2.6, 8.5**

  - [x] 2.4 Implement ContactLinks component
    - Create `src/components/ContactLinks.tsx` with email (`mailto:`), phone (`tel:`), and GitHub (`target="_blank"`, `rel="noopener noreferrer"`) links
    - Create `src/components/ContactLinks.module.css`
    - Add `aria-label` on each contact link
    - _Requirements: 1.6, 1.7, 1.8, 1.9, 3.3, 3.4, 3.5, 3.6, 9.4_

  - [ ]* 2.5 Write property test for ARIA labels on contact and nav elements (Property 9)
    - **Property 9: ARIA labels on interactive navigation and contact elements**
    - Generate random sets of nav/contact link elements; verify each has a non-empty `aria-label`
    - **Validates: Requirements 9.4**

  - [x] 2.6 Implement HeroSection component
    - Create `src/components/HeroSection.tsx` accepting `name`, `title`, `summary`, `showContactLinks` props
    - Create `src/components/HeroSection.module.css`
    - Use semantic HTML (`header`, heading elements)
    - Conditionally render ContactLinks when `showContactLinks` is true
    - _Requirements: 3.1, 3.2, 7.1, 9.1_

- [ ] 3. Implement Landing Page
  - [x] 3.1 Implement PersonaCard component
    - Create `src/components/PersonaCard.tsx` with `title`, `description`, `href`, optional `icon` props
    - Create `src/components/PersonaCard.module.css`
    - Use Next.js `<Link>` for navigation to `/engineering` and `/writing`
    - _Requirements: 1.3, 1.4, 1.5_

  - [x] 3.2 Build Landing Page (`src/app/page.tsx`)
    - Render primary heading "Basil Reji"
    - Use public/img/logo.png as the header logo
    - Render brief introduction about two professional identities
    - Render two PersonaCards (engineer → `/engineering`, writer → `/writing`)
    - Render ContactLinks with email, phone, GitHub
    - Use public/img/hero.png in the hero section
    - Use semantic HTML (`main`, `section`)
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 9.1_

  - [ ]* 3.3 Write unit tests for Landing Page
    - Test "Basil Reji" heading renders
    - Test two PersonaCards render with correct links
    - Test ContactLinks render with correct href patterns
    - _Requirements: 1.1, 1.3, 1.4, 1.5, 1.6_

- [ ] 4. Checkpoint
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Implement Engineering Page components
  - [x] 5.1 Implement ExperienceCard component
    - Create `src/components/ExperienceCard.tsx` displaying job title, company, duration, location, responsibilities
    - Create `src/components/ExperienceCard.module.css`
    - Use semantic HTML (`article`)
    - _Requirements: 4.2, 4.3, 9.1_

  - [ ]* 5.2 Write property test for ExperienceCard completeness (Property 3)
    - **Property 3: Experience card completeness**
    - Generate random ExperienceEntry objects; render ExperienceCard; verify all required fields appear
    - **Validates: Requirements 4.2, 4.3**

  - [x] 5.3 Implement SkillCategory component
    - Create `src/components/SkillCategory.tsx` displaying category name and list of skills
    - Create `src/components/SkillCategory.module.css` with visual distinction between categories
    - _Requirements: 5.1, 5.3, 5.4, 9.1_

  - [ ]* 5.4 Write property test for skill categorization (Property 4)
    - **Property 4: Skill categorization correctness**
    - Generate random skill-to-category mappings; render SkillCategory; verify each skill appears only within its correct category
    - **Validates: Requirements 5.1, 5.3**

  - [x] 5.5 Implement ProjectCard component
    - Create `src/components/ProjectCard.tsx` displaying project name, tech stack (visually highlighted), duration, accomplishments
    - Create `src/components/ProjectCard.module.css`
    - Use semantic HTML (`article`)
    - _Requirements: 6.2, 6.4, 9.1_

  - [ ]* 5.6 Write property test for ProjectCard completeness (Property 5)
    - **Property 5: Project card completeness**
    - Generate random ProjectEntry objects; render ProjectCard; verify all required fields appear
    - **Validates: Requirements 6.2**

- [ ] 6. Build Engineering Page
  - [x] 6.1 Assemble Engineering Page (`src/app/engineering/page.tsx`)
    - Render HeroSection with "Basil Reji", "Full-Stack Engineer", professional summary, and ContactLinks
    - Render Experience_Section with ExperienceCards from data (reverse chronological)
    - Render Skills_Section with SkillCategory components from data (6 categories)
    - Render Projects_Section with ProjectCards from data (2 projects)
    - Use semantic HTML (`main`, `section`)
    - _Requirements: 3.1, 3.2, 3.3, 4.1, 4.4, 5.1, 5.2, 6.1, 6.3, 9.1_

  - [ ]* 6.2 Write unit tests for Engineering Page
    - Test hero displays name and "Full-Stack Engineer" title
    - Test hero displays professional summary
    - Test all 3 experience entries render
    - Test experience entries are in reverse chronological order
    - Test all 6 skill categories render
    - Test both projects render
    - Test semantic HTML elements exist
    - _Requirements: 3.1, 3.2, 4.1, 4.4, 5.2, 6.1, 6.3, 9.1_

- [ ] 7. Implement Writing Page
  - [x] 7.1 Implement WritingEntry component
    - Create `src/components/WritingEntry.tsx` displaying title, description, category, optional date and link
    - Create `src/components/WritingEntry.module.css`
    - Use semantic HTML (`article`)
    - _Requirements: 7.4, 9.1_

  - [ ]* 7.2 Write property test for WritingEntry completeness (Property 10)
    - **Property 10: Writing entry completeness**
    - Generate random WritingEntry objects; render WritingEntry; verify title, description, and category appear
    - **Validates: Requirements 7.4**

  - [x] 7.3 Build Writing Page (`src/app/writing/page.tsx`)
    - Render HeroSection with "Basil Reji", "Writer & Artist"
    - Render brief introduction about writing and artistic interests
    - Render WritingEntry components grouped by category
    - Include placeholder structure for easy future additions
    - Use semantic HTML (`main`, `section`)
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 9.1_

  - [ ]* 7.4 Write unit tests for Writing Page
    - Test hero displays "Writer & Artist" title
    - Test WritingEntry components render from data
    - Test entries are organized by category
    - Test semantic HTML elements exist
    - _Requirements: 7.1, 7.3, 7.5, 9.1_

- [ ] 8. Checkpoint
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 9. Responsive design and accessibility polish
  - [x] 9.1 Add responsive CSS across all component CSS Modules
    - Add media queries at 768px breakpoint for single-column layout on all pages
    - Ensure legible font sizes at minimum 320px viewport width
    - Ensure multi-column layout above 768px where appropriate
    - _Requirements: 8.1, 8.2, 8.3_

  - [x] 9.2 Add keyboard navigation and focus indicators
    - Ensure all interactive elements are naturally focusable or have appropriate `tabIndex`
    - Add visible `:focus-visible` styles in globals.css and component CSS Modules
    - Ensure minimum 4.5:1 color contrast ratio for all text
    - _Requirements: 9.2, 9.3, 9.5_

  - [ ]* 9.3 Write property test for keyboard accessibility (Property 8)
    - **Property 8: Interactive elements are keyboard-accessible with focus indicators**
    - Generate random sets of interactive elements; verify each is tabbable and has a focus style
    - **Validates: Requirements 9.2, 9.3**

- [ ] 10. Wire root layout and final integration
  - [x] 10.1 Complete root layout (`src/app/layout.tsx`)
    - Import and render Navbar in the root layout so it appears on every page
    - Import globals.css
    - Set metadata (title, description)
    - Wrap children in semantic `<main>` if not already done per page
    - _Requirements: 2.1, 9.1, 10.2_

  - [ ]* 10.2 Write integration tests for cross-page navigation
    - Test Navbar renders on all three pages
    - Test navigation links route correctly
    - Test active link updates on navigation
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 10.4_

- [ ] 11. Final checkpoint
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- All components use CSS Modules for scoped styling
- All data is statically imported from `src/data/` files — no runtime fetching
