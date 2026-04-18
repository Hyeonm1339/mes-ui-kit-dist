import type { ReactNode } from 'react';
interface AppPageLayoutProps {
    /** 상단 조회 조건 영역 */
    search?: ReactNode;
    /** 하단 데이터 그리드 영역 */
    grid?: ReactNode;
    /** search + grid 외 자유 구성 시 children 사용 */
    children?: ReactNode;
    /** 내부 패딩 제거 (기본 p-4) */
    noPadding?: boolean;
    className?: string;
}
/**
 * 페이지 기본 레이아웃 래퍼.
 * `flex flex-col gap-3 p-4`를 기본으로 하여 여러 AppSection을 세로로 쌓는 구조를 잡아줍니다.
 *
 * **자유 구성 (children)**
 * ```tsx
 * <AppPageLayout>
 *   <AppSection title="조회 조건" cols={4}>...</AppSection>
 *   <AppSection title="조회 결과">...</AppSection>
 * </AppPageLayout>
 * ```
 *
 * **검색+그리드 단축 구성 (search + grid)**
 * grid 영역은 flex-1로 남은 세로 공간을 채웁니다.
 * ```tsx
 * <AppPageLayout
 *   search={<AppSection title="조회 조건">...</AppSection>}
 *   grid={<AppSection title="결과"><AppDataGrid .../></AppSection>}
 * />
 * ```
 */
export declare const AppPageLayout: ({ search, grid, children, noPadding, className, }: AppPageLayoutProps) => import("react/jsx-runtime").JSX.Element;
export {};
