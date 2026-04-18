import type { ButtonHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
    prefixIcon?: LucideIcon;
    suffixIcon?: LucideIcon;
}
/**
 * 버튼 컴포넌트
 *
 * @example
 * <AppButton onClick={handleSave}>저장</AppButton>
 * <AppButton variant="destructive" loading={isDeleting}>삭제</AppButton>
 * <AppButton variant="outline" prefixIcon={Plus}>추가</AppButton>
 */
export declare const AppButton: import("react").ForwardRefExoticComponent<AppButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
