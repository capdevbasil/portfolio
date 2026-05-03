import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Basil Reji — Full-Stack Engineer & Writer',
  description:
    'Portfolio of Basil Reji — a full-stack engineer and writer/artist. Explore engineering projects, technical skills, and creative writing.',
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [
      {
        rel: 'manifest',
        url: '/favicon/site.webmanifest',
      },
      {
        rel: 'android-chrome-192x192',
        url: '/favicon/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicon/android-chrome-512x512.png',
      },
    ],
  },
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
