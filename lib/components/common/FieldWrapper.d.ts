import type { ReactNode } from 'react';
export interface FieldLabelProps {
    label?: string;
    labelAlign?: 'left' | 'right' | 'top' | 'bottom';
    /** label 너비 (px). left/right 모드에서 라벨 고정 너비 */
    labelWidth?: number;
    required?: boolean;
    error?: string;
    hint?: string;
}
interface FieldWrapperProps extends FieldLabelProps {
    children: ReactNode;
    className?: string;
}
/**
 * 라벨 정렬 레이아웃 래퍼 — 모든 입력 컴포넌트 내부에서 사용
 *
 * labelAlign:
 *  - 'top'    : 라벨 위 (기본, label 없으면 필드만)
 *  - 'left'   : 라벨 좌측 (수평)
 *  - 'right'  : 라벨 우측 (수평)
 *  - 'bottom' : 라벨 아래
 */
export declare const FieldWrapper: ({ label, labelAlign: labelAlignProp, labelWidth: labelWidthProp, required, error, hint, children, className, }: FieldWrapperProps) => import("react/jsx-runtime").JSX.Element;
export {};
