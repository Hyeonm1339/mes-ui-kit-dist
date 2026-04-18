interface PopDatePickerProps {
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    labelAlign?: 'top' | 'left';
    labelWidth?: number;
    size?: 'sm' | 'md' | 'lg';
    placeholder?: string;
    error?: string;
    hint?: string;
    disabled?: boolean;
    minDate?: string;
    maxDate?: string;
    className?: string;
}
export declare const PopDatePicker: ({ value, onChange, label, labelAlign, labelWidth, size, placeholder, error, hint, disabled, minDate, maxDate, className, }: PopDatePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
