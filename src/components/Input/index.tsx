export const Input = ({ type, placeholder, id, name }: InputProps) => {
  return (
    <input
      className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

interface InputProps {
  type: string;
  placeholder: string;
  id?: string;
  name?: string;
}
