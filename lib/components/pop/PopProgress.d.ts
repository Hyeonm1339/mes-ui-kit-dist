type PopProgressVariant = 'default' | 'success' | 'warning' | 'destructive';
interface PopProgressProps {
    value: number;
    max?: number;
    variant?: PopProgressVariant;
    label?: string;
    showCount?: boolean;
    className?: string;
}
export declare const PopProgress: ({ value, max, variant, label, showCount, className, }: PopProgressProps) => import("react/jsx-runtime").JSX.Element;
export {};
