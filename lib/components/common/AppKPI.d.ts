interface AppKPIProps {
    /** 현재 값 */
    value: number;
    /** 목표 값 */
    target: number;
    /** 라벨 */
    label?: string;
    /** 단위 */
    unit?: string;
    /** 크기 (px) */
    size?: number;
    /** 색상 자동 지정 (달성률 기준) */
    autoColor?: boolean;
    /** 고정 색상 */
    color?: string;
    className?: string;
}
/**
 * KPI 게이지 (반원형)
 *
 * @example
 * <AppKPI value={85} target={100} label="달성률" unit="%" />
 */
export declare const AppKPI: ({ value, target, label, unit, size, autoColor, color, className, }: AppKPIProps) => import("react/jsx-runtime").JSX.Element;
export {};
