import { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="w-full px-4 py-2 mb-2 text-lg text-white bg-lime-500 rounded-md focus:outline-none focus:ring focus:ring-lime-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
