type ScanMode = 'scan' | 'manual';
interface PopScannerProps {
    value?: string;
    onChange?: (value: string) => void;
    onScan?: (value: string) => void;
    label?: string;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    defaultMode?: ScanMode;
    scanDelay?: number;
    clearOnScan?: boolean;
    className?: string;
}
export declare const PopScanner: import("react").ForwardRefExoticComponent<PopScannerProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
