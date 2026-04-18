import type { ButtonHTMLAttributes } from 'react';
import type { LucideIcon } from 'lucide-react';
type PopButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success';
interface PopButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: PopButtonVariant;
    loading?: boolean;
    prefixIcon?: LucideIcon;
    suffixIcon?: LucideIcon;
    fullWidth?: boolean;
}
export declare const PopButton: import("react").ForwardRefExoticComponent<PopButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
