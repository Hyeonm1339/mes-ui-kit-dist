interface PopTextKeypadDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: (value: string) => void;
    title?: string;
    initialValue?: string;
    maxLength?: number;
}
export declare const PopTextKeypadDialog: ({ open, onClose, onConfirm, title, initialValue, maxLength, }: PopTextKeypadDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
