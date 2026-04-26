import type { ReactNode } from 'react';
export interface DraggableTreeNode {
    id: string;
    label: string;
    icon?: ReactNode;
    children?: DraggableTreeNode[];
    disabled?: boolean;
}
export interface AppDraggableTreeProps {
    data: DraggableTreeNode[];
    /** 노드 이동 후 새 트리 구조 콜백 */
    onChange: (data: DraggableTreeNode[]) => void;
    selectedId?: string;
    onSelect?: (node: DraggableTreeNode) => void;
    defaultExpanded?: string[];
    showIcons?: boolean;
    className?: string;
}
/**
 * 드래그로 노드 순서·부모를 변경할 수 있는 트리 컴포넌트.
 *
 * @example
 * const [tree, setTree] = useState(initialTree)
 * <AppDraggableTree data={tree} onChange={setTree} onSelect={(n) => console.log(n.id)} />
 */
export declare const AppDraggableTree: ({ data, onChange, selectedId, onSelect, defaultExpanded, showIcons, className, }: AppDraggableTreeProps) => import("react/jsx-runtime").JSX.Element;
