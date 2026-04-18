import type { InputHTMLAttributes } from 'react';
import type { LucideIcon } from 'lucide-react';
interface PopInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    labelAlign?: 'top' | 'left';
    labelWidth?: number;
    size?: 'sm' | 'md' | 'lg';
    error?: string;
    prefixIcon?: LucideIcon;
    suffixIcon?: LucideIcon;
    onSuffixClick?: () => void;
    keypad?: boolean | {
        title?: string;
        unit?: string;
        maxLength?: number;
        allowDecimal?: boolean;
    };
}
export declare const PopInput: import("react").ForwardRefExoticComponent<PopInputProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
