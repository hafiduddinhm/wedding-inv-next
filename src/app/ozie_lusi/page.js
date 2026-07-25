import coupleImage from '@/legacy/ozie_lusi/assets/image/brides.png';

import ClientPage from './client';

export const metadata = {
  title: 'Ozie & Lusi Wedding',
  description: 'Jumat, 12 Mei 2023',
  openGraph: {
    title: 'Ozie & Lusi Wedding',
    description: 'Jumat, 12 Mei 2023',
    type: 'website',
    url: 'https://menghitunghari2.vercel.app/ozie_lusi',
    images: [coupleImage],
  },
  alternates: {
    canonical: 'https://menghitunghari2.vercel.app/ozie_lusi',
  },
};

export default function Page() {
  return <ClientPage />;
}
