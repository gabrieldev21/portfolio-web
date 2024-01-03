'use client';

export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <svg viewBox="0 0 50 50" className="w-40 h-40 animate-spin">
        <circle
          className="stroke-current text-green-300"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="1 150"
          strokeDashoffset="0"
          dur="1.5s"
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
          values="1 150;90 150;1 150"
        />
      </svg>
    </div>
  );
};
