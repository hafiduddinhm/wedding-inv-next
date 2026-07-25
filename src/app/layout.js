import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Analytics} from '@vercel/analytics/react';

export const metadata = {
  metadataBase: new URL('https://menghitunghari2.vercel.app'),
  title: 'Menghitung Hari Invitation',
  description:
    'UNDANGAN DIGITAL Berbagi Momen Spesial dengan Mudah, Murah dan Cepat',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Menghitung Hari Invitation',
    description:
      'UNDANGAN DIGITAL Berbagi Momen Spesial dengan Mudah, Murah dan Cepat',
    images: ['/meta.png'],
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ovo&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/glacial-indifference-2"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
