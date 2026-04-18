import type { LucideIcon } from 'lucide-react';
export interface PopStatusItem {
    label: string;
    value: string | React.ReactNode;
    icon?: LucideIcon;
    /** 아이콘 배경 색상 */
    color?: 'default' | 'primary' | 'success' | 'warning' | 'destructive';
    /** 항목 너비 (px 또는 %, flex: number) - 기본값: auto */
    width?: number | string;
}
interface PopStatusBarProps {
    items: PopStatusItem[];
    /** 레이아웃 방향 */
    variant?: 'horizontal' | 'vertical';
    /** 너비 분배 방식: 'auto' (기본값, 자동 계산), 'equal' (균등 분배) */
    layout?: 'auto' | 'equal';
    className?: string;
}
export declare const PopStatusBar: ({ items, variant, layout, className, }: PopStatusBarProps) => import("react/jsx-runtime").JSX.Element;
export {};
