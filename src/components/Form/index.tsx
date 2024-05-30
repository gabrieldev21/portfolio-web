'use client';

import { useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { Button } from '@components';
import { useFormState } from 'react-dom';
import styles from './styles.module.scss';

export const Form = ({
  children,
  title,
  subtitle,
  firstRouteText,
  firstRouterPush,
  secondRouteText,
  secondRouterPush,
  action,
  buttonText,
}: FormProps) => {
  const router = useRouter();
  const [state, formAction] = useFormState(action, null);
  useEffect(() => {
    state != null && toast.error(JSON.stringify(state));
  }, [state]);

  return (
    <>
      <Toaster position="top-center" closeButton />
      <form className={styles.form} action={formAction}>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        {children}
        <Button text={buttonText} />
        <span onClick={() => router.push(firstRouterPush)}>
          {firstRouteText}
        </span>
        <span onClick={() => router.push(secondRouterPush ?? '')}>
          {secondRouteText}
        </span>
      </form>
    </>
  );
};

interface FormProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  firstRouteText: string;
  firstRouterPush: string;
  secondRouteText?: string;
  secondRouterPush?: string;
  action: (
    state: Awaited<unknown>,
    data: FormData
  ) => unknown | Promise<unknown>;
  buttonText: string;
}
