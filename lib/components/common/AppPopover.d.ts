import type { ReactNode } from 'react';
interface AppPopoverProps {
    trigger: ReactNode;
    children: ReactNode;
    /** 방향 */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /** 정렬 */
    align?: 'start' | 'center' | 'end';
    /** 너비 (px) */
    width?: number;
    className?: string;
}
/**
 * 팝오버 컴포넌트
 *
 * @example
 * <AppPopover trigger={<AppButton variant="outline">필터</AppButton>}>
 *   <div>팝오버 내용</div>
 * </AppPopover>
 */
export declare const AppPopover: ({ trigger, children, side, align, width, className, }: AppPopoverProps) => import("react/jsx-runtime").JSX.Element;
export {};
