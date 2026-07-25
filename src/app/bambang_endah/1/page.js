import ClientPage from './client';

export const metadata = {
  title: 'Bambang & Endah Wedding',
  description: 'Minggu, 14 Mei 2023',
  openGraph: {
    title: 'Bambang & Endah Wedding',
    description: 'Minggu, 14 Mei 2023',
    type: 'website',
    url: 'https://menghitunghari2.vercel.app/bambang_endah/1',
  },
  alternates: {
    canonical: 'https://menghitunghari2.vercel.app/bambang_endah/1',
  },
};

export default function Page() {
  return <ClientPage />;
}
