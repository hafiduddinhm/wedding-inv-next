'use client';

import dynamic from 'next/dynamic';

const RisaAldi = dynamic(
  () => import('@/legacy/risa_aldi/components/RisaAldi'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <RisaAldi />;
}
