import type { ReactNode } from 'react';
interface AppButtonGroupProps {
    children: ReactNode;
    className?: string;
}
/**
 * 버튼 그룹 컴포넌트 — 연결된 버튼 묶음
 *
 * 내부 AppButton/button 들의 border-radius를 자동 조정하여 하나의 덩어리처럼 표시한다.
 *
 * @example
 * <AppButtonGroup>
 *   <AppButton variant="outline">일</AppButton>
 *   <AppButton variant="outline">주</AppButton>
 *   <AppButton>월</AppButton>
 * </AppButtonGroup>
 */
export declare const AppButtonGroup: ({ children, className }: AppButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
