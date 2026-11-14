import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Delta Service | Location d’engins de chantier à Niamey',
  description:
    'Location d’engins de chantier, transport et solutions logistiques à Niamey, Niger. Votre mission, notre passion.',
  openGraph: {
    title: 'Delta Service | Construire avec confiance',
    description:
      'Location d’engins de chantier, transport et solutions logistiques à Niamey, Niger.',
    locale: 'fr_NE',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo.webp',
      },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f3ef',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
