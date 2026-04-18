export interface StepItem {
    label: string;
    description?: string;
}
interface AppStepperProps {
    steps: StepItem[];
    /** 현재 활성 단계 (0-based) */
    activeStep: number;
    /** 방향 */
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}
/**
 * 단계 표시 컴포넌트
 *
 * @example
 * <AppStepper
 *   steps={[{ label: '접수' }, { label: '생산' }, { label: '검사' }, { label: '완료' }]}
 *   activeStep={1}
 * />
 */
export declare const AppStepper: ({ steps, activeStep, orientation, className, }: AppStepperProps) => import("react/jsx-runtime").JSX.Element;
export {};
