import type { InputHTMLAttributes } from 'react';
import { type FieldLabelProps } from './FieldWrapper';
interface AppNumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'>, FieldLabelProps {
    value?: number | '';
    onChange?: (value: number | '') => void;
    min?: number;
    max?: number;
    step?: number;
    /** 천단위 콤마 표시 (표시 전용, 편집 시 자동 해제) */
    comma?: boolean;
    /** 증감 버튼 표시 */
    showStepper?: boolean;
    className?: string;
}
/**
 * 숫자 전용 입력 컴포넌트
 *
 * @example
 * <AppNumberInput label="수량" value={qty} onChange={setQty} min={0} max={9999} comma showStepper />
 */
export declare const AppNumberInput: import("react").ForwardRefExoticComponent<AppNumberInputProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
