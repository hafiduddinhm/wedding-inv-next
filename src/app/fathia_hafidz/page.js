import moment from 'moment';
import 'moment/locale/id';

const description = moment('2024-12-12T14:00:00')
  .locale('id')
  .format('dddd, D MMMM YYYY');

import coupleImage from '@/legacy/fathia_hafidz/assets/image/home.png';

import ClientPage from './client';

export const metadata = {
  title: 'Fathia & Hafidz Wedding',
  description,
  openGraph: {
    title: 'Fathia & Hafidz Wedding',
    description,
    type: 'website',
    url: 'https://menghitunghari.vercel.app/fathia_hafidz',
    images: [coupleImage],
  },
  alternates: {
    canonical: 'https://menghitunghari.vercel.app/fathia_hafidz',
  },
};

export default function Page() {
  return <ClientPage />;
}
