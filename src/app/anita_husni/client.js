'use client';

import dynamic from 'next/dynamic';

const AnitaHusni = dynamic(
  () => import('@/legacy/anita_husni/components/AnitaHusni'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <AnitaHusni />;
}
