import { type FieldLabelProps } from './FieldWrapper';
export interface CheckboxOption {
    label: string;
    value: string;
    disabled?: boolean;
}
interface AppCheckboxGroupProps extends FieldLabelProps {
    options: CheckboxOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
    layout?: 'horizontal' | 'vertical';
    disabled?: boolean;
    className?: string;
}
/**
 * 체크박스 그룹 컴포넌트 (다중 선택)
 *
 * @example
 * // 수평 (기본)
 * <AppCheckboxGroup label="권한" labelWidth={80} options={roleOptions} value={roles} onChange={setRoles} />
 *
 * // 수직
 * <AppCheckboxGroup label="항목" labelAlign="top" layout="vertical" options={items} value={selected} onChange={setSelected} />
 */
export declare const AppCheckboxGroup: ({ label, labelAlign, labelWidth, required, error, hint, options, value, onChange, layout, disabled, className, }: AppCheckboxGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
