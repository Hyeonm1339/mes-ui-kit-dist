import type { ReactNode } from 'react';
interface AppCardProps {
    title?: string;
    description?: string;
    children: ReactNode;
    footer?: ReactNode;
    className?: string;
    contentClassName?: string;
}
/**
 * 카드 레이아웃 컴포넌트
 *
 * @example
 * <AppCard title="생산 현황" description="오늘 기준">
 *   <p>내용</p>
 * </AppCard>
 */
export declare const AppCard: ({ title, description, children, footer, className, contentClassName, }: AppCardProps) => import("react/jsx-runtime").JSX.Element;
export {};
