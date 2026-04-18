import type { ReactNode } from 'react';
export interface TreeNode {
    id: string;
    label: string;
    icon?: ReactNode;
    children?: TreeNode[];
    disabled?: boolean;
}
interface AppTreeViewProps {
    data: TreeNode[];
    /** 선택된 노드 ID */
    selectedId?: string;
    /** 노드 클릭 콜백 */
    onSelect?: (node: TreeNode) => void;
    /** 기본 펼침 노드 ID 목록 */
    defaultExpanded?: string[];
    /** 아이콘 자동 표시 (기본값 true) */
    showIcons?: boolean;
    className?: string;
}
/**
 * 트리 뷰 컴포넌트
 *
 * @example
 * <AppTreeView
 *   data={[{ id: '1', label: '공정', children: [{ id: '1-1', label: '프레스' }] }]}
 *   onSelect={(node) => console.log(node.id)}
 * />
 */
export declare const AppTreeView: ({ data, selectedId, onSelect, defaultExpanded, showIcons, className, }: AppTreeViewProps) => import("react/jsx-runtime").JSX.Element;
export {};
