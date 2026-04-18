import { type ColumnDef } from '@tanstack/react-table';
interface AppTableProps<TData> {
    columns: ColumnDef<TData>[];
    data: TData[];
    /** 페이지네이션 활성화 (기본 true) */
    pagination?: boolean;
    pageSize?: number;
    /** 로딩 상태 */
    loading?: boolean;
    /** 데이터 없을 때 메시지 */
    emptyMessage?: string;
    className?: string;
}
/**
 * 데이터 테이블 컴포넌트 (TanStack Table 래핑)
 *
 * @example
 * const columns: ColumnDef<Order>[] = [
 *   { accessorKey: 'orderId', header: '작업번호' },
 *   { accessorKey: 'status', header: '상태' },
 * ]
 * <AppTable columns={columns} data={orders} />
 */
export declare function AppTable<TData>({ columns, data, pagination, pageSize, loading, emptyMessage, className, }: AppTableProps<TData>): import("react/jsx-runtime").JSX.Element;
export {};
