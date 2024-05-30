import styles from './styles.module.scss';

export const Input = ({ type, placeholder, id, name }: InputProps) => {
  return (
    <input
      className={styles.input}
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
