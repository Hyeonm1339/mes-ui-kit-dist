export interface RadialChartDataItem {
    label: string;
    value: number;
    fill?: string;
}
export interface AppRadialChartProps {
    data: RadialChartDataItem[];
    title?: string;
    description?: string;
    height?: number;
    downloadable?: boolean;
    downloadFileName?: string;
    className?: string;
}
export declare const AppRadialChart: ({ data, title, description, height, downloadable, downloadFileName, className, }: AppRadialChartProps) => import("react/jsx-runtime").JSX.Element;
