import type { ReactNode } from 'react';
import { type FieldLabelProps } from './FieldWrapper';
interface AppFormFieldProps extends FieldLabelProps {
    children: ReactNode;
    className?: string;
}
/**
 * 폼 필드 래퍼 — 입력 컴포넌트를 직접 감쌀 때 사용
 *
 * @example
 * // label 없이 — 입력 필드만 출력
 * <AppFormField error={errors.code?.message}>
 *   <AppInput {...register('code')} />
 * </AppFormField>
 *
 * // label + left 정렬 (기본)
 * <AppFormField label="품목코드" required labelWidth={80} error={errors.code?.message}>
 *   <AppInput {...register('code')} />
 * </AppFormField>
 *
 * // label top 정렬
 * <AppFormField label="품목코드" labelAlign="top">
 *   <AppInput {...register('code')} />
 * </AppFormField>
 */
export declare const AppFormField: ({ children, className, ...labelProps }: AppFormFieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
