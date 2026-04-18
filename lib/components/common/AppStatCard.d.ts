import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
interface AppStatCardProps {
    title: string;
    value: ReactNode;
    /** 단위 (예: EA, %, 건) */
    unit?: string;
    /** 증감값 (양수: 증가, 음수: 감소) */
    change?: number;
    /** 증감 라벨 (예: '전일 대비') */
    changeLabel?: string;
    /** 아이콘 */
    icon?: LucideIcon;
    /** 아이콘 배경색 */
    iconColor?: 'default' | 'blue' | 'green' | 'yellow' | 'red';
    className?: string;
}
/**
 * 대시보드용 통계 카드
 *
 * @example
 * <AppStatCard title="생산량" value="1,245" unit="EA" change={5.2} changeLabel="전일 대비" icon={Factory} iconColor="blue" />
 */
export declare const AppStatCard: ({ title, value, unit, change, changeLabel, icon: Icon, iconColor, className, }: AppStatCardProps) => import("react/jsx-runtime").JSX.Element;
export {};
