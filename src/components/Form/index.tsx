'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@components';

export const Form = ({
  children,
  label,
  secondLabel,
  firstSpan,
  firstRouterPush,
  secondSpan,
  secondRouterPush,
  action,
  buttonText,
}: FormProps) => {
  const router = useRouter();

  return (
    <form
      className="flex flex-col gap-4 items-center justify-center w-full max-w-md p-12 mx-auto bg-white rounded-md shadow-md mg-10"
      action={action}
    >
      <div>
        <h2 className="mb-4 text-2xl font-bold text-center">{label}</h2>
        <p className="mb-4 text-base font-medium text-center text-stone-400">
          {secondLabel}
        </p>
      </div>
      {children}
      <Button text={buttonText} />
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

interface FormProps {
  children: React.ReactNode;
  label: string;
  secondLabel?: string;
  firstSpan: string;
  firstRouterPush: string;
  secondSpan?: string;
  secondRouterPush?: string;
  action?: (action: FormData) => Promise<void>;
  buttonText: string;
}
