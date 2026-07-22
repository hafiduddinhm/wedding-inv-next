import coupleImage from '@/legacy/ivy5/assets/image/home.png';

import ClientPage from './client';

export const metadata = {
  title: 'Fitri & Anwar Wedding',
  description: 'Minggu, 10 Desember 2045',
  openGraph: {
    title: 'Fitri & Anwar Wedding',
    description: 'Minggu, 10 Desember 2045',
    type: 'website',
    url: 'https://menghitunghari.vercel.app/ivy5',
    images: [coupleImage],
  },
  alternates: {
    canonical: 'https://menghitunghari.vercel.app/ivy5',
  },
};

export default function Page() {
  return <ClientPage />;
}
