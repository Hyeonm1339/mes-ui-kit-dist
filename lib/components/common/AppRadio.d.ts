import { type FieldLabelProps } from './FieldWrapper';
export interface RadioOption {
    label: string;
    value: string;
    disabled?: boolean;
}
interface AppRadioGroupProps extends FieldLabelProps {
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
    layout?: 'horizontal' | 'vertical';
    disabled?: boolean;
    className?: string;
}
/**
 * 라디오 그룹 컴포넌트
 *
 * @example
 * // 수평 (기본)
 * <AppRadioGroup label="상태" labelWidth={80} options={statusOptions} value={status} onChange={setStatus} />
 *
 * // 수직
 * <AppRadioGroup label="유형" labelAlign="top" layout="vertical" options={typeOptions} value={type} onChange={setType} />
 */
export declare const AppRadioGroup: ({ label, labelAlign, labelWidth, required, error, hint, options, value, onChange, layout, disabled, className, }: AppRadioGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
