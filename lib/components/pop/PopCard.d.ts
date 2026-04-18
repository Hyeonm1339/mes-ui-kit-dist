import type { ReactNode } from 'react';
interface PopCardProps {
    title?: string;
    description?: string;
    children: ReactNode;
    footer?: ReactNode;
    highlight?: boolean;
    className?: string;
}
export declare const PopCard: ({ title, description, children, footer, highlight, className, }: PopCardProps) => import("react/jsx-runtime").JSX.Element;
export {};
