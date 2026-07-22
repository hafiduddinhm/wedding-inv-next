import coupleImage from '@/legacy/putri_ipan/assets/image/home.png';

import ClientPage from './client';

export const metadata = {
  title: 'Putri & Ipan Wedding',
  description: 'Minggu, 29 Oktober 2023',
  openGraph: {
    title: 'Putri & Ipan Wedding',
    description: 'Minggu, 29 Oktober 2023',
    type: 'website',
    url: 'https://menghitunghari.vercel.app/putri_ipan',
    images: [coupleImage],
  },
  alternates: {
    canonical: 'https://menghitunghari.vercel.app/putri_ipan',
  },
};

export default function Page() {
  return <ClientPage />;
}
