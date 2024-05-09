'use client';

interface ButtonProps {
  text: String;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="w-full px-4 py-2 mb-2 text-lg text-white bg-lime-500 rounded-md focus:outline-none focus:ring focus:ring-lime-500"
      type="submit"
    >
      {text}
    </button>
  );
};
