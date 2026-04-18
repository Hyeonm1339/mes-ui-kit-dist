interface PopCounterInputProps {
    value: number;
    onChange: (value: number) => void;
    label?: string;
    unit?: string;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: string;
}
export declare const PopCounterInput: ({ value, onChange, label, unit, min, max, step, disabled, className, }: PopCounterInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
