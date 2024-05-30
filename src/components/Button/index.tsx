'use client';

import { useFormStatus } from 'react-dom';

import styles from './styles.module.scss';

export const Button = ({ text }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button className={styles.button} type="submit" disabled={pending}>
      {pending ? 'Carregando...' : text}
    </button>
  );
};

interface ButtonProps {
  text: String;
}
