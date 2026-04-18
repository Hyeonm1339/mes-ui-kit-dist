import type { ReactNode } from 'react';
interface PopDialogProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: ReactNode;
    footer?: ReactNode;
    onConfirm?: () => void;
    confirmLabel?: string;
    cancelLabel?: string;
    confirmLoading?: boolean;
    confirmVariant?: 'default' | 'destructive' | 'success';
    size?: 'md' | 'lg' | 'xl';
    className?: string;
}
export declare const PopDialog: ({ open, onClose, title, description, children, footer, onConfirm, confirmLabel, cancelLabel, confirmLoading, confirmVariant, size, className, }: PopDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
