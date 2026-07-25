import coupleImage from '@/legacy/elma_hendra/assets/image/brides.png';

import ClientPage from './client';

export const metadata = {
  title: 'Hendra & Elma Wedding',
  description: 'Senin, 15 Mei 2023',
  openGraph: {
    title: 'Hendra & Elma Wedding',
    description: 'Senin, 15 Mei 2023',
    type: 'website',
    url: 'https://menghitunghari2.vercel.app/hendra_elma',
    images: [coupleImage],
  },
  alternates: {
    canonical: 'https://menghitunghari2.vercel.app/hendra_elma',
  },
};

export default function Page() {
  return <ClientPage />;
}
