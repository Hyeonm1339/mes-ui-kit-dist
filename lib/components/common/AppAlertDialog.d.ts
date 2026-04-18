interface AppAlertDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    variant?: 'default' | 'destructive';
}
export declare const AppAlertDialog: ({ open, onClose, onConfirm, title, description, confirmLabel, cancelLabel, variant, }: AppAlertDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
