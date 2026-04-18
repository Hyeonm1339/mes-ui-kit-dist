interface PopKeypadDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: (value: string) => void;
    title?: string;
    unit?: string;
    initialValue?: string;
    maxLength?: number;
    allowDecimal?: boolean;
}
export declare const PopKeypadDialog: ({ open, onClose, onConfirm, title, unit, initialValue, maxLength, allowDecimal, }: PopKeypadDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
