import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Basil Reji — Full-Stack Engineer & Writer',
  description:
    'Portfolio of Basil Reji — a full-stack engineer and writer/artist. Explore engineering projects, technical skills, and creative writing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
