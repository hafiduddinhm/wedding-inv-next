import coupleImage from '@/legacy/anita_husni/assets/image/home.png';

import ClientPage from './client';

export const metadata = {
  title: 'Anita & Husni Wedding',
  description: 'Minggu, 5 November 2023',
  openGraph: {
    title: 'Anita & Husni Wedding',
    description: 'Minggu, 5 November 2023',
    type: 'website',
    url: 'https://menghitunghari2.vercel.app/anita_husni',
    images: [coupleImage],
  },
  alternates: {
    canonical: 'https://menghitunghari2.vercel.app/anita_husni',
  },
};

export default function Page() {
  return <ClientPage />;
}
