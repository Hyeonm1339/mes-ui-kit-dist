export interface AreaChartSeries {
    key: string;
    label: string;
    color?: string;
}
export interface AppAreaChartProps {
    data: Record<string, unknown>[];
    series: AreaChartSeries[];
    xKey: string;
    title?: string;
    description?: string;
    height?: number;
    stacked?: boolean;
    downloadable?: boolean;
    downloadFileName?: string;
    className?: string;
}
export declare const AppAreaChart: ({ data, series, xKey, title, description, height, stacked, downloadable, downloadFileName, className, }: AppAreaChartProps) => import("react/jsx-runtime").JSX.Element;
