import type { ReactNode } from 'react';
export type EditableCellType = 'text' | 'number' | 'select' | 'checkbox';
export interface EditableColumnOption {
    label: string;
    value: string;
}
export type SortDirection = 'asc' | 'desc';
export interface SortInfo {
    key: string;
    direction: SortDirection;
}
export interface FilterInfo {
    key: string;
    value: string;
}
export interface EditableColumn<TData> {
    accessorKey: keyof TData & string;
    header: string;
    type?: EditableCellType;
    options?: EditableColumnOption[];
    readOnly?: boolean;
    width?: number;
    minWidth?: number;
    align?: 'left' | 'center' | 'right';
    /** 정렬 비활성화 (기본 true) */
    sortable?: boolean;
    /** 필터 비활성화 (기본 true) */
    filterable?: boolean;
    /** 필수 컬럼 (빈 값 유효성 검사) */
    required?: boolean;
    /** 좌측 고정 */
    sticky?: boolean;
    /** rowSpan 병합 기준 (같은 값의 인접 행 병합) */
    mergeRows?: boolean;
    /** 커스텀 렌더러 (읽기 모드) */
    render?: (ctx: {
        value: unknown;
        row: TData;
    }) => ReactNode;
}
interface AppDataGridProps<TData extends Record<string, unknown>> {
    columns: EditableColumn<TData>[];
    onColumnsChange?: (columns: EditableColumn<TData>[]) => void;
    data: TData[];
    onChange?: (data: TData[]) => void;
    /** 새 행 기본값 */
    createRow?: () => TData;
    addable?: boolean;
    deletable?: boolean;
    /** 행 드래그 이동 */
    reorderable?: boolean;
    /** 열 드래그 이동 */
    columnReorderable?: boolean;
    /** 열 리사이즈 */
    columnResizable?: boolean;
    /** 행 선택 (체크박스) */
    selectable?: boolean;
    /** 선택된 행 인덱스 */
    selectedRows?: number[];
    onSelectedRowsChange?: (rows: number[]) => void;
    /** 클라이언트 정렬 */
    sortable?: boolean;
    /** 서버 정렬 모드 — true이면 onSortChange로 정렬 정보만 전달 */
    serverSort?: boolean;
    onSortChange?: (sorts: SortInfo[]) => void;
    /** 헤더 돋보기 버튼 필터 */
    filterable?: boolean;
    /** 서버 필터 모드 — true이면 onFilterChange로 필터 정보만 전달 */
    serverFilter?: boolean;
    onFilterChange?: (filters: FilterInfo[]) => void;
    /** 페이지네이션 */
    pagination?: boolean;
    pageSize?: number;
    /** 서버 페이지네이션 모드 */
    serverPagination?: boolean;
    /** 서버 페이지네이션 — 전체 행 수 */
    totalCount?: number;
    /** 서버 페이지네이션 — 페이지/사이즈 변경 콜백 */
    onPageChange?: (pageIndex: number, pageSize: number) => void;
    /** 행 클릭 */
    onRowClick?: (row: TData, index: number) => void;
    /** 행 더블클릭 */
    onRowDoubleClick?: (row: TData, index: number) => void;
    /** CSV 내보내기 버튼 */
    exportable?: boolean;
    /** 내보내기 파일명 */
    exportFileName?: string;
    maxRows?: number;
    height?: number;
    maxHeight?: number;
    showRowNumber?: boolean;
    /** 빈 데이터 메시지 */
    emptyMessage?: string;
    /** 로딩 상태 (스켈레톤 표시) */
    loading?: boolean;
    /** 조건부 행 클래스 */
    rowClassName?: (row: TData, index: number) => string;
    /** 열 표시/숨김 토글 버튼 */
    columnToggle?: boolean;
    className?: string;
}
export declare function AppDataGrid<TData extends Record<string, unknown>>({ columns: editColumns, onColumnsChange, data, onChange, createRow, addable, deletable, reorderable, columnReorderable, columnResizable, selectable, selectedRows: controlledSelectedRows, onSelectedRowsChange, sortable, serverSort, onSortChange, filterable, serverFilter, onFilterChange, pagination, pageSize: initialPageSize, serverPagination, totalCount, onPageChange, onRowClick, onRowDoubleClick, exportable, exportFileName, maxRows, height, maxHeight, showRowNumber, emptyMessage, loading, rowClassName, columnToggle, className, }: AppDataGridProps<TData>): import("react/jsx-runtime").JSX.Element;
export {};
