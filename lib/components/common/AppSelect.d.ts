import { type FieldLabelProps } from './FieldWrapper';
export interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}
interface AppSelectProps extends FieldLabelProps {
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    className?: string;
}
export declare const AppSelect: ({ label, labelAlign, labelWidth, required, error, hint, options, value, onChange, placeholder, disabled, clearable, className, }: AppSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
