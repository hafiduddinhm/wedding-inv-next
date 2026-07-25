import coupleImage from '@/legacy/ajay_uwin/assets/image/brides.png';

import ClientPage from './client';

export const metadata = {
  title: 'Ajay & Uwin Wedding',
  description: 'Minggu, 16 Mei 2023',
  openGraph: {
    title: 'Ajay & Uwin Wedding',
    description: 'Minggu, 16 Mei 2023',
    type: 'website',
    url: 'https://menghitunghari2.vercel.app/ajay_uwin',
    images: [coupleImage],
  },
  alternates: {
    canonical: 'https://menghitunghari2.vercel.app/ajay_uwin',
  },
};

export default function Page() {
  return <ClientPage />;
}
