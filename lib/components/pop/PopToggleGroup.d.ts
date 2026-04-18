export interface PopToggleOption {
    label: string;
    value: string;
    color?: 'default' | 'success' | 'destructive' | 'warning';
}
interface PopToggleGroupProps {
    options: PopToggleOption[];
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    fullWidth?: boolean;
    className?: string;
}
export declare const PopToggleGroup: ({ options, value, onChange, label, fullWidth, className, }: PopToggleGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
