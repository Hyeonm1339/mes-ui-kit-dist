import type { ReactNode } from 'react';
export interface TabItem {
    value: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
}
export interface AppTabsProps {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    items: TabItem[];
    /** 탭 스타일. default=채움 버튼 / line=밑줄 스타일 */
    variant?: 'default' | 'line';
    /**
     * 탭 목록이 넘칠 경우 처리 방식.
     * - more: 넘치는 탭을 +N 버튼 드롭다운으로 표시 (기본값)
     * - scroll: 가로 스크롤
     * - wrap: 줄바꿈
     */
    overflow?: 'more' | 'scroll' | 'wrap';
    className?: string;
    listClassName?: string;
    contentClassName?: string;
}
/**
 * 탭 컴포넌트
 *
 * @example
 * <AppTabs items={[{ value: 'a', label: 'A', content: <div>A</div> }]} />
 *
 * @example
 * // 탭이 많을 때 +N 드롭다운 (기본값)
 * <AppTabs items={manyTabs} overflow="more" />
 *
 * @example
 * // 밑줄 스타일
 * <AppTabs items={tabs} variant="line" />
 */
export declare const AppTabs: ({ defaultValue, value, onValueChange, items, variant, overflow, className, listClassName, contentClassName, }: AppTabsProps) => import("react/jsx-runtime").JSX.Element;
