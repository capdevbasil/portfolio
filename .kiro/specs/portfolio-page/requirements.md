# Requirements Document

## Introduction

A personal multi-page portfolio website for Basil Reji, built with Next.js (App Router) and React. The portfolio presents two distinct sides of Basil's identity: a full-stack engineer and a writer/artist. A shared landing page introduces both personas, with dedicated pages for each. The site uses Next.js static export for fast loading, responsive design, and accessibility compliance.

## Glossary

- **Portfolio_Site**: The multi-page Next.js web application that serves as Basil Reji's personal portfolio
- **Landing_Page**: The home page (`/`) that introduces both the engineering and writing/artistic sides of the developer
- **Engineering_Page**: The page (`/engineering`) displaying the developer's professional experience, technical skills, and projects
- **Writing_Page**: The page (`/writing`) displaying the developer's artistic and writing portfolio
- **Navigation_Bar**: A persistent navigation component rendered across all pages, providing links to each page and supporting mobile-responsive behavior
- **Hero_Section**: A prominent section at the top of a page displaying a heading, summary, and call-to-action elements
- **Experience_Section**: The section on the Engineering_Page displaying the developer's work history in reverse chronological order
- **Skills_Section**: The section on the Engineering_Page displaying the developer's technical skills grouped by category
- **Projects_Section**: The section on the Engineering_Page displaying the developer's notable projects with descriptions and technologies used
- **Persona_Card**: A visual component on the Landing_Page representing one of the two personas (engineer or writer) with a brief description and a link to the corresponding page
- **Contact_Link**: A clickable element that directs users to the developer's email, phone, or GitHub profile
- **Skill_Category**: A grouping of related technical skills (e.g., Frontend, Backend, Database, DevOps)
- **Project_Card**: A visual component displaying a single project's name, tech stack, duration, and description
- **Experience_Card**: A visual component displaying a single work experience entry with role, company, duration, location, and responsibilities
- **Writing_Entry**: A visual component on the Writing_Page displaying a writing piece or artistic work with title, description, and category
- **Viewport**: The visible area of the Portfolio_Site within the user's browser window
- **App_Router**: The Next.js App Router used for file-system-based routing between pages

## Requirements

### Requirement 1: Landing Page

**User Story:** As a visitor, I want to see a home page that introduces both sides of Basil's identity, so that I can choose which portfolio to explore.

#### Acceptance Criteria

1. WHEN the visitor navigates to the root URL (`/`), THE Landing_Page SHALL display the developer's full name "Basil Reji" as the primary heading
2. THE Landing_Page SHALL display a brief introduction explaining that Basil has two professional identities: a full-stack engineer and a writer/artist
3. THE Landing_Page SHALL display two Persona_Cards: one for the engineering side and one for the writing/artistic side
4. WHEN a visitor clicks the engineering Persona_Card, THE Portfolio_Site SHALL navigate to the Engineering_Page (`/engineering`)
5. WHEN a visitor clicks the writing/artistic Persona_Card, THE Portfolio_Site SHALL navigate to the Writing_Page (`/writing`)
6. THE Landing_Page SHALL display Contact_Links for email, phone, and GitHub profile
7. WHEN a visitor clicks a Contact_Link for email, THE Portfolio_Site SHALL open the default email client with the developer's email address pre-filled
8. WHEN a visitor clicks a Contact_Link for GitHub, THE Portfolio_Site SHALL open the GitHub profile URL in a new browser tab
9. WHEN a visitor clicks a Contact_Link for phone, THE Portfolio_Site SHALL initiate a phone call action using the tel: protocol

### Requirement 2: Multi-Page Navigation

**User Story:** As a visitor, I want a navigation bar on every page that lets me move between the landing page, engineering page, and writing page, so that I can easily explore both sides of the portfolio.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL be rendered on every page of the Portfolio_Site
2. THE Navigation_Bar SHALL display links to the Landing_Page, Engineering_Page, and Writing_Page
3. WHEN a visitor clicks a navigation link, THE Portfolio_Site SHALL navigate to the corresponding page using client-side routing via the App_Router
4. WHILE a page is the currently active route, THE Navigation_Bar SHALL visually highlight the corresponding navigation link as active
5. WHILE the Viewport width is 768 pixels or less, THE Navigation_Bar SHALL collapse into a hamburger menu icon
6. WHEN a visitor taps the hamburger menu icon, THE Navigation_Bar SHALL expand to display all navigation links
7. WHEN a visitor selects a navigation link on mobile, THE Navigation_Bar SHALL close the expanded menu

### Requirement 3: Engineering Page — Hero Section

**User Story:** As a visitor, I want to see the developer's name, professional summary, and contact information at the top of the engineering page, so that I can quickly understand the developer's professional profile.

#### Acceptance Criteria

1. WHEN the Engineering_Page loads, THE Hero_Section SHALL display the developer's full name "Basil Reji" and the title "Full-Stack Engineer"
2. WHEN the Engineering_Page loads, THE Hero_Section SHALL display the professional summary: "Highly motivated full-stack developer with 5+ years of experience building scalable, user-centric web applications using React, Node.js, and AWS."
3. THE Hero_Section SHALL display Contact_Links for email, phone, and GitHub profile
4. WHEN a visitor clicks a Contact_Link for email, THE Portfolio_Site SHALL open the default email client with the developer's email address pre-filled
5. WHEN a visitor clicks a Contact_Link for GitHub, THE Portfolio_Site SHALL open the GitHub profile URL in a new browser tab
6. WHEN a visitor clicks a Contact_Link for phone, THE Portfolio_Site SHALL initiate a phone call action using the tel: protocol

### Requirement 4: Engineering Page — Experience Section

**User Story:** As a visitor, I want to see the developer's work history with roles, companies, and responsibilities, so that I can evaluate the developer's professional background.

#### Acceptance Criteria

1. WHEN the Engineering_Page loads, THE Experience_Section SHALL display all work experience entries in reverse chronological order (most recent first)
2. THE Experience_Card SHALL display the job title, company name, employment duration, and location for each entry
3. THE Experience_Card SHALL display a list of key responsibilities and achievements for each work experience entry
4. THE Experience_Section SHALL display the following entries: Senior Fullstack Developer at Sanmitsude Experts, Senior React Developer at Zora Technologies, and Senior Engineer at dbi.ai

### Requirement 5: Engineering Page — Skills Section

**User Story:** As a visitor, I want to see the developer's technical skills organized by category, so that I can quickly assess the developer's technical capabilities.

#### Acceptance Criteria

1. WHEN the Engineering_Page loads, THE Skills_Section SHALL display all technical skills grouped by Skill_Category
2. THE Skills_Section SHALL display the following Skill_Categories: Frontend, Backend, Database, DevOps, Unit Testing, and Developer Tools
3. THE Skills_Section SHALL display each individual skill within its corresponding Skill_Category
4. WHEN a visitor views the Skills_Section, THE Skills_Section SHALL visually distinguish each Skill_Category from the others using distinct grouping or labeling

### Requirement 6: Engineering Page — Projects Section

**User Story:** As a visitor, I want to see the developer's notable projects with descriptions and technologies used, so that I can understand the developer's hands-on experience.

#### Acceptance Criteria

1. WHEN the Engineering_Page loads, THE Projects_Section SHALL display all project entries
2. THE Project_Card SHALL display the project name, tech stack, project duration, and a list of key accomplishments for each project
3. THE Projects_Section SHALL display the following projects: Motorhub and Zora App
4. WHEN a visitor views a Project_Card, THE Project_Card SHALL visually highlight the technologies used in the project

### Requirement 7: Writing/Artistic Page

**User Story:** As a visitor, I want to explore Basil's writing and artistic side, so that I can appreciate the creative dimension of the developer's identity.

#### Acceptance Criteria

1. WHEN the Writing_Page loads, THE Hero_Section SHALL display the developer's name "Basil Reji" and the title "Writer & Artist"
2. THE Writing_Page SHALL display a brief introduction describing the developer's writing and artistic interests
3. THE Writing_Page SHALL display Writing_Entry components for each writing piece or artistic work
4. THE Writing_Entry SHALL display the title, description, and category for each piece
5. THE Writing_Page SHALL organize Writing_Entry components by category (e.g., poetry, essays, short stories, visual art)
6. THE Writing_Page SHALL provide a placeholder structure that allows the developer to easily add new Writing_Entry content over time

### Requirement 8: Responsive Design

**User Story:** As a visitor, I want the portfolio site to display correctly on devices of different screen sizes, so that I can view the portfolio on my phone, tablet, or desktop.

#### Acceptance Criteria

1. WHILE the Viewport width is 768 pixels or less, THE Portfolio_Site SHALL rearrange the layout to a single-column format on all pages
2. WHILE the Viewport width is greater than 768 pixels, THE Portfolio_Site SHALL display content in a multi-column layout where appropriate
3. THE Portfolio_Site SHALL render all text content at a legible font size across all supported Viewport widths (minimum 320 pixels wide)
4. WHILE the Viewport width is 768 pixels or less, THE Navigation_Bar SHALL collapse into a hamburger menu icon
5. WHEN a visitor taps the hamburger menu icon, THE Navigation_Bar SHALL expand to display all navigation links

### Requirement 9: Accessibility

**User Story:** As a visitor using assistive technology, I want the portfolio site to be accessible, so that I can navigate and read the content using a screen reader or keyboard.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL use semantic HTML elements (nav, main, section, article, header, footer) to structure the content on all pages
2. THE Portfolio_Site SHALL support full keyboard navigation across all interactive elements using the Tab key
3. THE Portfolio_Site SHALL provide visible focus indicators on all interactive elements during keyboard navigation
4. THE Portfolio_Site SHALL include descriptive aria-labels on all Contact_Links and navigation elements
5. THE Portfolio_Site SHALL maintain a minimum color contrast ratio of 4.5:1 for all text content against its background

### Requirement 10: Performance and Loading

**User Story:** As a visitor, I want the portfolio site to load quickly, so that I do not leave the site before it finishes rendering.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL render meaningful content within 2 seconds on a standard broadband connection
2. THE Portfolio_Site SHALL use Next.js static export (`output: 'export'`) so that all pages are pre-rendered at build time with no server-side data fetching at runtime
3. IF a network resource fails to load, THEN THE Portfolio_Site SHALL still display all text-based content without errors
4. THE Portfolio_Site SHALL use Next.js Link component for client-side page transitions without full page reloads
