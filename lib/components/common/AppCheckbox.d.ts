interface AppCheckboxProps {
    id: string;
    /** 체크박스 옆에 표시할 라벨 */
    label?: string;
    labelPosition?: 'left' | 'right';
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    error?: string;
    hint?: string;
    className?: string;
}
/**
 * 체크박스 컴포넌트 (라벨은 항상 체크박스 우측)
 *
 * @example
 * <AppCheckbox id="urgent" label="긴급 처리" checked={isUrgent} onCheckedChange={setIsUrgent} />
 */
export declare const AppCheckbox: ({ id, label, labelPosition, checked, onCheckedChange, disabled, error, hint, className, }: AppCheckboxProps) => import("react/jsx-runtime").JSX.Element;
export {};
