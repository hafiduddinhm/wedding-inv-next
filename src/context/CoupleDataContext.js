'use client';

import {createContext, useContext} from 'react';

const CoupleDataContext = createContext(null);

export function CoupleDataProvider({value, children}) {
  return (
    <CoupleDataContext.Provider value={value}>
      {children}
    </CoupleDataContext.Provider>
  );
}

export function useCoupleData() {
  const ctx = useContext(CoupleDataContext);
  if (!ctx) {
    throw new Error(
      'useCoupleData must be used within a CoupleDataProvider',
    );
  }
  return ctx;
}
