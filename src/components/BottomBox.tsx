import React from 'react';

type BottomBoxProps = {
  children: React.ReactNode;
};

export default function BottomBox({ children }: BottomBoxProps) {
  return (
    <div className="bg-gray-500 text-gray-200 uppercase text-center text-base rounded-t-md flex justify-center items-center underline underline-offset-4">
      {children}
    </div>
  );
}
