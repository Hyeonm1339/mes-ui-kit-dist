import type { ReactNode } from 'react';
interface AppCarouselProps {
    items: ReactNode[];
    orientation?: 'horizontal' | 'vertical';
    /** 아이템 너비 비율. 기본 100% (1 슬라이드씩) */
    basis?: string;
    /** 하단 dot 인디케이터 표시 여부 */
    showDots?: boolean;
    loop?: boolean;
    className?: string;
    itemClassName?: string;
}
/**
 * 캐러셀 컴포넌트
 *
 * @example
 * // 기본 (1개씩)
 * <AppCarousel items={['슬라이드1', '슬라이드2', '슬라이드3'].map(t => <div>{t}</div>)} showDots />
 *
 * @example
 * // 1/3씩 보이는 카드 캐러셀
 * <AppCarousel basis="basis-1/3" items={cards} loop />
 */
export declare const AppCarousel: ({ items, orientation, basis, showDots, loop, className, itemClassName, }: AppCarouselProps) => import("react/jsx-runtime").JSX.Element;
export {};
