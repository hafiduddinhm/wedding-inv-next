import coupleImage from '@/legacy/romi_rosyi/assets/image/home.webp';

import ClientPage from './client';

export const metadata = {
  title: 'Romi & Rosyi Wedding',
  description: 'Sabtu, 21 Oktober 2023',
  openGraph: {
    title: 'Romi & Rosyi Wedding',
    description: 'Sabtu, 21 Oktober 2023',
    type: 'website',
    url: 'https://menghitunghari2.vercel.app/romi_rosyi',
    images: [coupleImage],
  },
  alternates: {
    canonical: 'https://menghitunghari2.vercel.app/romi_rosyi',
  },
};

export default function Page() {
  return <ClientPage />;
}
