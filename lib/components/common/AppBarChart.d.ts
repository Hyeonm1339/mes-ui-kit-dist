export interface BarChartSeries {
    key: string;
    label: string;
    color?: string;
}
export interface AppBarChartProps {
    data: Record<string, unknown>[];
    series: BarChartSeries[];
    xKey: string;
    title?: string;
    description?: string;
    height?: number;
    layout?: 'vertical' | 'horizontal';
    stacked?: boolean;
    tooltipAnimation?: boolean;
    downloadable?: boolean;
    downloadFileName?: string;
    className?: string;
}
export declare const AppBarChart: ({ data, series, xKey, title, description, height, layout, stacked, tooltipAnimation, downloadable, downloadFileName, className, }: AppBarChartProps) => import("react/jsx-runtime").JSX.Element;
