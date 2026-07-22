'use client';

import dynamic from 'next/dynamic';

const RomiRosyi = dynamic(
  () => import('@/legacy/romi_rosyi/components/RomiRosyi'),
  {
    ssr: false,
  },
);

export default function ClientPage() {
  return <RomiRosyi />;
}
