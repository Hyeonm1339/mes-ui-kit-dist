import type { ReactNode } from 'react';
interface AppDialogProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: ReactNode;
    footer?: ReactNode;
    /** 확인/취소 버튼을 자동 생성할 경우 사용 */
    onConfirm?: () => void;
    confirmLabel?: string;
    cancelLabel?: string;
    confirmLoading?: boolean;
    confirmVariant?: 'default' | 'destructive';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * 모달 외부(오버레이) 클릭 시 닫힘 여부.
     * 기본값 true — AppDialog는 단순 알림성 팝업이므로 외부 클릭으로 닫히는 것이 자연스럽다.
     */
    closeOnOverlayClick?: boolean;
    className?: string;
}
/**
 * 모달 다이얼로그 컴포넌트
 *
 * @example
 * <AppDialog
 *   open={open}
 *   onClose={() => setOpen(false)}
 *   title="작업 삭제"
 *   description="정말 삭제하시겠습니까?"
 *   onConfirm={handleDelete}
 *   confirmVariant="destructive"
 *   confirmLabel="삭제"
 * >
 *   <p>삭제 후 복구가 불가합니다.</p>
 * </AppDialog>
 */
export declare const AppDialog: ({ open, onClose, title, description, children, footer, onConfirm, confirmLabel, cancelLabel, confirmLoading, confirmVariant, closeOnOverlayClick, size, className, }: AppDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
