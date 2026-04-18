export interface PopMultiSelectOption {
    label: string;
    value: string;
    disabled?: boolean;
    description?: string;
}
interface PopMultiSelectProps {
    options: PopMultiSelectOption[];
    value?: string[];
    onChange?: (values: string[]) => void;
    label?: string;
    labelAlign?: 'top' | 'left';
    labelWidth?: number;
    size?: 'sm' | 'md' | 'lg';
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    searchable?: boolean;
    searchPlaceholder?: string;
    maxSelection?: number;
    className?: string;
}
export declare const PopMultiSelect: ({ options, value, onChange, label, labelAlign, labelWidth, size, placeholder, error, disabled, searchable, searchPlaceholder, maxSelection, className, }: PopMultiSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
