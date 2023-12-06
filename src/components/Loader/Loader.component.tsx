import React, { ReactNode } from 'react';

type Props = {
  isLoading: boolean;
  skeleton: ReactNode;
  children: ReactNode;
};

export const Loader: React.FC<Props> = ({ isLoading, skeleton, children }) => {
  return isLoading ? skeleton : children;
};
