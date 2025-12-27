import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      role="region"
      className={`rounded-xl border border-gray-200 shadow-sm m-2 
                  hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="px-4 py-3">{children}</div>;
}

export function CardTitle({ children, className = "" }: CardProps) {
  return <div className={`${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`${className}`}>{children}</div>;
}

export function CardDescription({ children }: { children: ReactNode }) {
  return <div className="px-2 py-2 text-primary-900">{children}</div>;
}

export function CardFooter({ children }: { children: ReactNode }) {
  return <div className="px-4 py-3">{children}</div>;
}
