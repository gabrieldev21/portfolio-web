'use client';

import { FormEvent, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface FormProps {
  children: ReactNode;
  label: string;
  secondLabel?: string;
  onSubmitRouterPush: string;
  firstSpan: string;
  firstRouterPush: string;
  secondSpan?: string;
  secondRouterPush?: string;
}

export const Form = ({
  children,
  label,
  secondLabel,
  onSubmitRouterPush,
  firstSpan,
  firstRouterPush,
  secondSpan,
  secondRouterPush,
}: FormProps) => {
  const router = useRouter();
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(onSubmitRouterPush);
  };

  return (
    <form
      className="flex flex-col gap-4 items-center justify-center w-full max-w-md p-12 mx-auto bg-white rounded-md shadow-md"
      onSubmit={handleOnSubmit}
    >
      <div>
        <h2 className="mb-4 text-2xl font-bold">{label}</h2>
        <p className="mb-4 text-base font-extralight">{secondLabel}</p>
      </div>
      {children}
      <span
        onClick={() => router.push(firstRouterPush)}
        className="text-base cursor-pointer"
      >
        {firstSpan}
      </span>
      <span
        onClick={() => router.push(secondRouterPush ?? '')}
        className="text-base cursor-pointer"
      >
        {secondSpan}
      </span>
    </form>
  );
};
