interface InputProps {
  type: string;
  placeholder: string;
}

export const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      type={type}
      placeholder={placeholder}
    />
  );
};
