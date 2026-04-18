import type { ReactNode } from 'react';
interface AppSheetProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children: ReactNode;
    side?: 'left' | 'right' | 'top' | 'bottom';
    onConfirm?: () => void;
    confirmLabel?: string;
    cancelLabel?: string;
    confirmLoading?: boolean;
}
export declare const AppSheet: ({ open, onClose, title, description, children, side, onConfirm, confirmLabel, cancelLabel, confirmLoading, }: AppSheetProps) => import("react/jsx-runtime").JSX.Element;
export {};
