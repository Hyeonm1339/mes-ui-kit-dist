export interface PieChartDataItem {
    name: string;
    value: number;
    color?: string;
}
export interface AppPieChartProps {
    data: PieChartDataItem[];
    donut?: boolean;
    title?: string;
    description?: string;
    height?: number;
    showLabel?: boolean;
    downloadable?: boolean;
    downloadFileName?: string;
    className?: string;
}
export declare const AppPieChart: ({ data, donut, title, description, height, showLabel, downloadable, downloadFileName, className, }: AppPieChartProps) => import("react/jsx-runtime").JSX.Element;
