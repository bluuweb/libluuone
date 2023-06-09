import React from 'react';
import clsx from 'clsx';
import { tw } from 'twind';

interface PButtonProps {
  children: React.ReactNode;
  className?: string;
}

const baseClasses = tw`bg-gray-600 hover:bg-sky-700 text-white py-2 px-4 rounded`;

export default function PButton({ children, className }: PButtonProps) {
  const classes = clsx(baseClasses, tw(className));

  return <button className={classes}>{children}</button>;
}
