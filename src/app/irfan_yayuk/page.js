import coupleImage from '@/legacy/irfan_yayuk/assets/image/11.png';

import ClientPage from './client';

export const metadata = {
  title: 'Irfan & Yayuk Wedding',
  description: 'Minggu, 7 Mei 2023',
  openGraph: {
    title: 'Irfan & Yayuk Wedding',
    description: 'Minggu, 7 Mei 2023',
    type: 'website',
    url: 'https://menghitunghari.vercel.app/irfan_yayuk',
    images: [coupleImage],
  },
  alternates: {
    canonical: 'https://menghitunghari.vercel.app/irfan_yayuk',
  },
};

export default function Page() {
  return <ClientPage />;
}
