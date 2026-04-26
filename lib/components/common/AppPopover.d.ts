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
    /** 제어 모드: 외부에서 열림 상태를 관리할 때 사용 */
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
/**
 * 팝오버 컴포넌트
 *
 * @example
 * // 비제어 (기본)
 * <AppPopover trigger={<AppButton variant="outline">필터</AppButton>}>
 *   <div>팝오버 내용</div>
 * </AppPopover>
 *
 * @example
 * // 제어 모드
 * <AppPopover open={open} onOpenChange={setOpen} trigger={<button>열기</button>}>
 *   <div>내용</div>
 * </AppPopover>
 */
export declare const AppPopover: ({ trigger, children, side, align, width, className, open, onOpenChange, }: AppPopoverProps) => import("react/jsx-runtime").JSX.Element;
export {};
