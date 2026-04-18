import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
export interface DropdownMenuItem {
    label: string;
    icon?: LucideIcon;
    onClick: () => void;
    variant?: 'default' | 'destructive';
    separator?: boolean;
}
interface AppDropdownMenuProps {
    trigger: ReactNode;
    items: DropdownMenuItem[];
}
export declare const AppDropdownMenu: ({ trigger, items }: AppDropdownMenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
