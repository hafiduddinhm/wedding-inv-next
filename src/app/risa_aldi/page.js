import ClientPage from './client';

export const metadata = {
  title: 'Risa & Aldi Wedding',
  description: 'Minggu, 15 September 2024',
  openGraph: {
    title: 'Risa & Aldi Wedding',
    description: 'Minggu, 15 September 2024',
    type: 'website',
    url: 'https://menghitunghari2.vercel.app/risa_aldi',
  },
  alternates: {
    canonical: 'https://menghitunghari2.vercel.app/risa_aldi',
  },
};

export default function Page() {
  return <ClientPage />;
}
