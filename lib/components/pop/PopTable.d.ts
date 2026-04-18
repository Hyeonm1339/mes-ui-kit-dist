export interface PopTableColumn<TData> {
    key: keyof TData & string;
    header: string;
    width?: string;
    align?: 'left' | 'center' | 'right';
    render?: (value: TData[keyof TData], row: TData) => React.ReactNode;
}
interface PopTableProps<TData> {
    columns: PopTableColumn<TData>[];
    data: TData[];
    onRowClick?: (row: TData) => void;
    activeRow?: (row: TData) => boolean;
    emptyMessage?: string;
    className?: string;
}
export declare function PopTable<TData>({ columns, data, onRowClick, activeRow, emptyMessage, className, }: PopTableProps<TData>): import("react/jsx-runtime").JSX.Element;
export {};
