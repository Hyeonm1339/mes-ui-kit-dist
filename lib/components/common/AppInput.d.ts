import type { InputHTMLAttributes } from 'react';
import type { LucideIcon } from 'lucide-react';
import { type FieldLabelProps } from './FieldWrapper';
interface AppInputProps extends InputHTMLAttributes<HTMLInputElement>, FieldLabelProps {
    prefixIcon?: LucideIcon | null;
    suffixIcon?: LucideIcon | null;
    onSuffixClick?: () => void;
    className?: string;
}
/**
 * 텍스트 입력 컴포넌트
 *
 * @example
 * // 라벨 없음 — 필드만
 * <AppInput placeholder="검색어 입력" />
 *
 * // 라벨 좌측 (기본)
 * <AppInput label="품목코드" labelWidth={80} required placeholder="코드 입력" error="필수" />
 *
 * // 라벨 상단
 * <AppInput label="작업명" labelAlign="top" placeholder="작업명 입력" />
 */
export declare const AppInput: import("react").ForwardRefExoticComponent<AppInputProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
