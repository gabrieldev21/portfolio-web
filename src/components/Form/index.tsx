'use client';

import { useRouter } from 'next/navigation';

export const Form = ({
  children,
  label,
  secondLabel,
  firstSpan,
  firstRouterPush,
  secondSpan,
  secondRouterPush,
  action,
}: FormProps) => {
  const router = useRouter();

  return (
    <form
      className="flex flex-col gap-4 items-center justify-center w-full max-w-md p-12 mx-auto bg-white rounded-md shadow-md"
      action={action}
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

interface FormProps {
  children: React.ReactNode;
  label: string;
  secondLabel?: string;
  onSubmitRouterPush: string;
  firstSpan: string;
  firstRouterPush: string;
  secondSpan?: string;
  secondRouterPush?: string;
  action?: (action: FormData) => Promise<void>;
}
