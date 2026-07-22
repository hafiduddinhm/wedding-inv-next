'use client';

import dynamic from 'next/dynamic';

const JohandoWindi = dynamic(
  () => import('@/legacy/johando_windi/components/JohandoWindi'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <JohandoWindi />;
}
