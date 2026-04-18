import type { VariantProps } from 'class-variance-authority';
import { badgeVariants } from '@/components/ui/badge';
type BadgeStatus = 'active' | 'inactive' | 'warning' | 'error' | 'info';
interface AppBadgeProps extends VariantProps<typeof badgeVariants> {
    children: React.ReactNode;
    status?: BadgeStatus;
    className?: string;
}
/**
 * 상태 뱃지 컴포넌트
 *
 * @example
 * <AppBadge status="active">운영중</AppBadge>
 * <AppBadge status="error">알람</AppBadge>
 * <AppBadge variant="secondary">대기</AppBadge>
 */
export declare const AppBadge: ({ children, status, variant, className }: AppBadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
