import type { InputHTMLAttributes, ReactNode } from 'react';
import { type FieldLabelProps } from './FieldWrapper';
export interface AutocompleteOption<T = unknown> {
    value: string;
    label: string;
    description?: ReactNode;
    disabled?: boolean;
    raw?: T;
}
export interface AppAutocompleteProps<T = unknown> extends FieldLabelProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'onSelect'> {
    value?: string;
    defaultValue?: string;
    selectedValue?: string;
    options?: AutocompleteOption<T>[];
    loading?: boolean;
    emptyText?: string;
    loadingText?: string;
    minSearchLength?: number;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    onValueChange?: (value: string) => void;
    onSelect?: (option: AutocompleteOption<T>) => void;
    onClear?: () => void;
    renderOption?: (option: AutocompleteOption<T>, state: {
        active: boolean;
        selected: boolean;
    }) => ReactNode;
    className?: string;
    inputClassName?: string;
    popoverClassName?: string;
}
/**
 * 서버 검색/자동완성 UI를 위한 입력 컴포넌트입니다.
 * API 호출과 debounce는 사용하는 쪽에서 처리하고, 이 컴포넌트는 입력/목록/선택 UI만 담당합니다.
 */
export declare const AppAutocomplete: <T>({ label, labelAlign, labelWidth, required, error, hint, value: controlledValue, defaultValue, selectedValue, options, loading, emptyText, loadingText, minSearchLength, open: controlledOpen, onOpenChange, onValueChange, onSelect, onClear, renderOption, className, inputClassName, popoverClassName, placeholder, disabled, readOnly, onFocus, onKeyDown, ...props }: AppAutocompleteProps<T>) => import("react/jsx-runtime").JSX.Element;
