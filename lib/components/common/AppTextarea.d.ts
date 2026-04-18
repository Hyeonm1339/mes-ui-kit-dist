import type { TextareaHTMLAttributes } from 'react';
import { type FieldLabelProps } from './FieldWrapper';
interface AppTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, FieldLabelProps {
    className?: string;
}
/**
 * 멀티라인 텍스트 입력 컴포넌트
 *
 * @example
 * <AppTextarea label="비고" labelWidth={80} placeholder="내용 입력" rows={4} />
 */
export declare const AppTextarea: import("react").ForwardRefExoticComponent<AppTextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export {};
