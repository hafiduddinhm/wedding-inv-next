import coupleImage from '@/legacy/rika_lilik/assets/image/brides.png';

import ClientPage from './client';

export const metadata = {
  title: 'Rika & Lilik Wedding',
  description: 'Sabtu, 13 Mei 2023',
  openGraph: {
    title: 'Rika & Lilik Wedding',
    description: 'Sabtu, 13 Mei 2023',
    type: 'website',
    url: 'https://menghitunghari2.vercel.app/rika_lilik',
    images: [coupleImage],
  },
  alternates: {
    canonical: 'https://menghitunghari2.vercel.app/rika_lilik',
  },
};

export default function Page() {
  return <ClientPage />;
}
