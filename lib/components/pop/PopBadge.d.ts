type PopBadgeStatus = 'active' | 'inactive' | 'warning' | 'error' | 'info' | 'success';
interface PopBadgeProps {
    children: React.ReactNode;
    status?: PopBadgeStatus;
    pulse?: boolean;
    className?: string;
}
export declare const PopBadge: ({ children, status, pulse, className }: PopBadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
