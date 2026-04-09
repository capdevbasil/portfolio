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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3387950441038063"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
