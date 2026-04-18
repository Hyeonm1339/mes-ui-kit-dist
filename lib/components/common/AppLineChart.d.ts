export interface LineChartSeries {
    key: string;
    label: string;
    color?: string;
    dot?: boolean;
}
export interface AppLineChartProps {
    data: Record<string, unknown>[];
    series: LineChartSeries[];
    xKey: string;
    title?: string;
    description?: string;
    height?: number;
    tooltipAnimation?: boolean;
    downloadable?: boolean;
    downloadFileName?: string;
    className?: string;
}
export declare const AppLineChart: ({ data, series, xKey, title, description, height, tooltipAnimation, downloadable, downloadFileName, className, }: AppLineChartProps) => import("react/jsx-runtime").JSX.Element;
