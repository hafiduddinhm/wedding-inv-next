'use client';

import dynamic from 'next/dynamic';

const FathiaHafidz = dynamic(
  () => import('@/legacy/fathia_hafidz/components/FathiaHafidz'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <FathiaHafidz />;
}
