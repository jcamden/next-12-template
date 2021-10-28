import React, { ReactNode } from 'react';

interface CenterProps {
  children: ReactNode;
}

export const Center: React.FC<CenterProps> = ({ children }) => {
  return (
    <div className="flex h-screen items-center">
      <div className="m-auto">{children}</div>
    </div>
  );
};
