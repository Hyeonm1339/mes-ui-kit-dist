export interface ComposedChartSeries {
    key: string;
    label: string;
    type: 'bar' | 'line' | 'area';
    color?: string;
    yAxisId?: 'left' | 'right';
}
export interface AppComposedChartProps {
    data: Record<string, unknown>[];
    series: ComposedChartSeries[];
    xKey: string;
    title?: string;
    description?: string;
    height?: number;
    dualAxis?: boolean;
    downloadable?: boolean;
    downloadFileName?: string;
    className?: string;
}
export declare const AppComposedChart: ({ data, series, xKey, title, description, height, dualAxis, downloadable, downloadFileName, className, }: AppComposedChartProps) => import("react/jsx-runtime").JSX.Element;
