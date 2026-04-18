import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
interface AppEmptyStateProps {
    /** 아이콘 */
    icon?: LucideIcon;
    /** 제목 */
    title?: string;
    /** 설명 */
    description?: string;
    /** 액션 영역 (버튼 등) */
    action?: ReactNode;
    className?: string;
}
/**
 * 데이터 없음 상태 표시
 *
 * @example
 * <AppEmptyState title="데이터 없음" description="조건에 맞는 데이터가 없습니다." action={<AppButton size="sm">등록</AppButton>} />
 */
export declare const AppEmptyState: ({ icon: Icon, title, description, action, className, }: AppEmptyStateProps) => import("react/jsx-runtime").JSX.Element;
export {};
