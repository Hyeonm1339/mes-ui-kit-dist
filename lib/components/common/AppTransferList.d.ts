export interface TransferItem {
    value: string;
    label: string;
    disabled?: boolean;
}
interface AppTransferListProps {
    /** 전체 아이템 목록 */
    items: TransferItem[];
    /** 오른쪽(선택됨) 목록의 value 배열 */
    value: string[];
    onChange: (value: string[]) => void;
    /** 좌측 제목 */
    leftTitle?: string;
    /** 우측 제목 */
    rightTitle?: string;
    /** 검색 표시 */
    showSearch?: boolean;
    /** 높이 */
    height?: number;
    className?: string;
}
/**
 * 좌우 이동 선택 리스트
 *
 * @example
 * <AppTransferList
 *   items={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]}
 *   value={selected}
 *   onChange={setSelected}
 * />
 */
export declare const AppTransferList: ({ items, value, onChange, leftTitle, rightTitle, showSearch, height, className, }: AppTransferListProps) => import("react/jsx-runtime").JSX.Element;
export {};
