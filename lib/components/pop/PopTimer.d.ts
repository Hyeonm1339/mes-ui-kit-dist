type PopTimerMode = 'stopwatch' | 'countdown';
interface PopTimerProps {
    mode?: PopTimerMode;
    targetSeconds?: number;
    autoStart?: boolean;
    onComplete?: () => void;
    onTick?: (seconds: number) => void;
    label?: string;
    className?: string;
}
export declare const PopTimer: ({ mode, targetSeconds, autoStart, onComplete, onTick, label, className, }: PopTimerProps) => import("react/jsx-runtime").JSX.Element;
export {};
