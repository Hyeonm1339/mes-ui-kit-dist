interface AppSwitchProps {
    id: string;
    /** 스위치 옆 라벨 */
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
 * 토글 스위치 컴포넌트
 *
 * @example
 * <AppSwitch id="active" label="활성화" checked={isActive} onCheckedChange={setIsActive} />
 * <AppSwitch id="active" label="활성화" labelPosition="left" checked={isActive} onCheckedChange={setIsActive} />
 */
export declare const AppSwitch: ({ id, label, labelPosition, checked, onCheckedChange, disabled, error, hint, className, }: AppSwitchProps) => import("react/jsx-runtime").JSX.Element;
export {};
