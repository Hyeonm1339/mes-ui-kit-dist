type ToastType = 'success' | 'error' | 'warning' | 'info';
interface ToastOptions {
    /** 토스트 타입 */
    type: ToastType;
    /** 메인 제목 */
    title: string;
    /** 부가 설명 (선택) */
    description?: string;
    /** 자동 닫힘 시간(ms). 기본 sonner 기본값 사용 */
    duration?: number;
}
/**
 * Toast 알림 헬퍼
 *
 * @example
 * // 단축 메서드
 * AppToast.success('저장 완료')
 * AppToast.error('저장 실패', '네트워크 오류가 발생했습니다.')
 *
 * @example
 * // 옵션 객체로 호출
 * AppToast.show({ type: 'success', title: '저장 완료', description: '작업지시가 등록되었습니다.' })
 *
 * @example
 * // Promise 토스트
 * AppToast.promise(saveApi(), {
 *   loading: '저장 중...',
 *   success: '저장 완료',
 *   error: '저장 실패',
 * })
 */
export declare const AppToast: {
    /** 옵션 객체로 토스트 표시 */
    show: ({ type, title, description, duration }: ToastOptions) => string | number;
    success: (title: string, description?: string, duration?: number) => string | number;
    error: (title: string, description?: string, duration?: number) => string | number;
    warning: (title: string, description?: string, duration?: number) => string | number;
    info: (title: string, description?: string, duration?: number) => string | number;
    promise: <T>(promise: Promise<T>, options: {
        loading: string;
        success: string;
        error: string;
    }) => (string & {
        unwrap: () => Promise<T>;
    }) | (number & {
        unwrap: () => Promise<T>;
    }) | {
        unwrap: () => Promise<T>;
    };
};
export {};
