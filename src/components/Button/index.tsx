'use client';

import { useFormStatus } from 'react-dom';

export const Button = ({ text }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full px-4 py-2 mb-2 text-lg text-white bg-lime-500 rounded-md focus:outline-none focus:ring focus:ring-lime-500"
      type="submit"
      disabled={pending}
    >
      {pending ? 'Carregando...' : text}
    </button>
  );
};

interface ButtonProps {
  text: String;
}
