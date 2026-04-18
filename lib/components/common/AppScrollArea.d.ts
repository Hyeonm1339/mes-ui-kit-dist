import type { ReactNode } from 'react';
interface AppScrollAreaProps {
    children: ReactNode;
    /** 고정 높이. 미지정 시 부모 높이에 맞춤 */
    height?: number | string;
    /** 고정 너비. 미지정 시 100% */
    width?: number | string;
    /** 스크롤 방향. 기본 vertical */
    orientation?: 'vertical' | 'horizontal' | 'both';
    className?: string;
}
/**
 * 스크롤 영역 컴포넌트 — 내용이 넘칠 때 스크롤바를 표시한다.
 *
 * @example
 * // 고정 높이 목록
 * <AppScrollArea height={300}>
 *   {longList.map(item => <div key={item.id}>{item.name}</div>)}
 * </AppScrollArea>
 *
 * @example
 * // 가로 스크롤
 * <AppScrollArea orientation="horizontal">
 *   <div className="flex gap-2 w-max">...</div>
 * </AppScrollArea>
 */
export declare const AppScrollArea: ({ children, height, width, orientation, className, }: AppScrollAreaProps) => import("react/jsx-runtime").JSX.Element;
export {};
