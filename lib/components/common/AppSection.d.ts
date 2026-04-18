import type { ReactNode } from 'react';
interface AppSectionProps {
    title?: string;
    description?: string;
    /** 우측 상단 영역 (버튼 등) */
    actions?: ReactNode;
    /**
     * 컨텐츠 영역 컬럼 수. 설정 시 grid 레이아웃으로 자동 배분
     * @example cols={4} → 입력 필드 4개가 한 줄에 균등 배치
     */
    cols?: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
    className?: string;
}
export declare const AppSection: ({ title, description, actions, cols, children, className, }: AppSectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
