'use client';

import dynamic from 'next/dynamic';

const RikaLilik = dynamic(
  () => import('@/legacy/rika_lilik/components/RikaLilik'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <RikaLilik />;
}
