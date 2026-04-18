import { type FieldLabelProps } from './FieldWrapper';
interface AppColorPickerProps extends FieldLabelProps {
    value?: string;
    onChange?: (color: string) => void;
    /** 프리셋 색상 목록 */
    presets?: string[];
    /** 커스텀 입력 허용 */
    allowCustom?: boolean;
    disabled?: boolean;
    className?: string;
}
/**
 * 색상 선택 컴포넌트
 *
 * @example
 * <AppColorPicker label="라인 색상" value={color} onChange={setColor} />
 */
export declare const AppColorPicker: ({ label, labelAlign, labelWidth, required, error, hint, value, onChange, presets, allowCustom, disabled, className, }: AppColorPickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
