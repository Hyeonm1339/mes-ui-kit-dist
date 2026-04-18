type ProgressVariant = 'default' | 'success' | 'warning' | 'destructive';
type ProgressSize = 'sm' | 'md' | 'lg';
interface AppProgressProps {
    /** 0 ~ max 범위의 현재 값 */
    value: number;
    /** 최대값. 기본 100 */
    max?: number;
    variant?: ProgressVariant;
    /** 바 높이. sm=2px md=6px lg=10px. 기본 md */
    size?: ProgressSize;
    /** 우측에 퍼센트 표시 */
    showLabel?: boolean;
    /** showLabel 대신 커스텀 텍스트 */
    label?: string;
    className?: string;
}
/**
 * 진행률 표시 컴포넌트
 *
 * @example
 * <AppProgress value={60} showLabel />
 *
 * @example
 * <AppProgress value={3} max={10} variant="success" label="3/10 단계" />
 */
export declare const AppProgress: ({ value, max, variant, size, showLabel, label, className, }: AppProgressProps) => import("react/jsx-runtime").JSX.Element;
export {};
