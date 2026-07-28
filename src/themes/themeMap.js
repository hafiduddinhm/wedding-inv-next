import dynamic from 'next/dynamic';

// Add an entry here whenever a new theme folder is created under src/themes.
export const themeMap = {
  'theme-1': dynamic(() => import('./theme-1/components/Theme'), {
    ssr: false,
  }),
};
