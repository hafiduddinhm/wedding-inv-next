'use client';

import dynamic from 'next/dynamic';

const OzieLusi = dynamic(
  () => import('@/legacy/ozie_lusi/components/OzieLusi'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <OzieLusi />;
}
