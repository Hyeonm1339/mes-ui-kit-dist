interface PopKeypadProps {
    value?: string;
    onChange?: (value: string) => void;
    onConfirm?: (value: string) => void;
    label?: string;
    unit?: string;
    maxLength?: number;
    allowDecimal?: boolean;
    className?: string;
}
export declare const PopKeypad: ({ value: controlledValue, onChange, onConfirm, label, unit, maxLength, allowDecimal, className, }: PopKeypadProps) => import("react/jsx-runtime").JSX.Element;
export {};
