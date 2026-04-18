export interface PopSelectOption {
    label: string;
    value: string;
    disabled?: boolean;
    description?: string;
}
interface PopSelectProps {
    options: PopSelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    labelAlign?: 'top' | 'left';
    labelWidth?: number;
    size?: 'sm' | 'md' | 'lg';
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    searchable?: boolean;
    searchPlaceholder?: string;
    className?: string;
}
export declare const PopSelect: ({ options, value, onChange, label, labelAlign, labelWidth, size, placeholder, error, disabled, searchable, searchPlaceholder, className, }: PopSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
