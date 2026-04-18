import { type ReactNode } from 'react';
type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
type ModalMode = 'view' | 'create' | 'edit';
export interface AppModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    /** 모달 상단에 표시할 모드 뱃지 (조회/등록/수정) */
    mode?: ModalMode;
    children: ReactNode;
    /** 커스텀 푸터. 지정하면 기본 저장/취소 버튼을 대체한다 */
    footer?: ReactNode;
    /** 저장/확인 버튼 클릭 핸들러. 지정 시 기본 푸터 버튼이 생성된다 */
    onConfirm?: () => void;
    confirmLabel?: string;
    cancelLabel?: string;
    confirmLoading?: boolean;
    confirmVariant?: 'default' | 'destructive';
    /** 본문 콘텐츠 로딩 중 오버레이 표시 */
    loading?: boolean;
    /**
     * 모달 외부(오버레이) 클릭 시 닫힘 여부.
     * 기본값 false — 등록·수정 폼에서 실수로 닫히는 것을 방지.
     * 단순 조회 팝업처럼 외부 클릭으로 닫아도 되는 경우 true로 설정한다.
     */
    closeOnOverlayClick?: boolean;
    /**
     * 모달 뒤 배경 블러 처리 여부.
     * 기본값 true. false로 설정하면 배경이 투명하게 보인다.
     */
    backdropBlur?: boolean;
    /**
     * xs  : 360px  — 간단한 단일 필드 입력
     * sm  : 480px  — 소형 등록/수정 폼
     * md  : 640px  — 일반 등록/수정 폼 (기본값)
     * lg  : 800px  — 중형 상세 조회/편집
     * xl  : 1024px — 대형 그리드 포함 팝업
     * 2xl : 1280px — 초대형 복합 팝업
     * full: 화면 전체 (여백 16px)
     */
    size?: ModalSize;
    /** 본문 최대 높이. 기본 80vh */
    maxHeight?: string;
    className?: string;
}
/**
 * CRUD 팝업 전용 모달 컴포넌트
 *
 * - 헤더(고정) / 본문(스크롤) / 푸터(고정) 구조
 * - 7가지 사이즈 지원
 * - mode 뱃지로 조회/등록/수정 맥락 표시
 * - loading prop으로 본문 로딩 오버레이 제어
 *
 * @example
 * // 기본 등록 폼
 * <AppModal
 *   open={open}
 *   onClose={() => setOpen(false)}
 *   title="작업지시 등록"
 *   mode="create"
 *   size="md"
 *   onConfirm={handleSave}
 *   confirmLoading={isSaving}
 * >
 *   <AppInput label="품번" ... />
 * </AppModal>
 *
 * @example
 * // 커스텀 푸터
 * <AppModal
 *   open={open}
 *   onClose={() => setOpen(false)}
 *   title="생산실적 상세"
 *   mode="view"
 *   size="lg"
 *   footer={
 *     <AppButton prefixIcon={Printer} onClick={handlePrint}>출력</AppButton>
 *   }
 * >
 *   ...
 * </AppModal>
 */
export declare const AppModal: ({ open, onClose, title, mode, children, footer, onConfirm, confirmLabel, cancelLabel, confirmLoading, confirmVariant, loading, closeOnOverlayClick, backdropBlur, size, maxHeight, className, }: AppModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
