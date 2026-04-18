import type { ReactNode } from 'react';
interface AppTooltipProps {
    content: ReactNode;
    children: ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
}
export declare const AppTooltip: ({ content, children, side }: AppTooltipProps) => import("react/jsx-runtime").JSX.Element;
export {};
