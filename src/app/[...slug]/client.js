'use client';

import {themeMap} from '@/themes/themeMap';

export default function ClientPage({data}) {
  const ThemeComponent = themeMap[data.theme];
  return <ThemeComponent data={data} />;
}
