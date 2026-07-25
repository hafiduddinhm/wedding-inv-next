import coupleImage from '@/legacy/johando_windi/assets/image/brides.png';

import ClientPage from './client';

export const metadata = {
  title: 'Johando & Windi Wedding',
  description: 'Kamis, 2 Mei 2023',
  openGraph: {
    title: 'Johando & Windi Wedding',
    description: 'Kamis, 2 Mei 2023',
    type: 'website',
    url: 'https://menghitunghari2.vercel.app/johando_windi',
    images: [coupleImage],
  },
  alternates: {
    canonical: 'https://menghitunghari2.vercel.app/johando_windi',
  },
};

export default function Page() {
  return <ClientPage />;
}
