import type { ReactNode } from 'react';
type HoverCardSide = 'top' | 'right' | 'bottom' | 'left';
type HoverCardAlign = 'start' | 'center' | 'end';
interface AppHoverCardProps {
    /** 호버 대상 요소 */
    trigger: ReactNode;
    /** 카드 안에 표시할 콘텐츠 */
    children: ReactNode;
    /** 카드 너비. 기본 256px */
    width?: number | string;
    side?: HoverCardSide;
    align?: HoverCardAlign;
    /** 트리거와의 간격(px). 기본 6 */
    sideOffset?: number;
    /** 열림 지연(ms). 기본 300 */
    openDelay?: number;
    /** 닫힘 지연(ms). 기본 200 */
    closeDelay?: number;
    className?: string;
}
/**
 * 호버 카드 컴포넌트 — 요소에 마우스를 올리면 카드 형태의 추가 정보를 표시한다.
 *
 * @example
 * // 기본 사용
 * <AppHoverCard trigger={<span className="underline cursor-pointer">담당자: 김철수</span>}>
 *   <p className="font-medium">김철수</p>
 *   <p className="text-muted-foreground">프레스 공정 담당</p>
 *   <p className="text-muted-foreground">내선: 1234</p>
 * </AppHoverCard>
 *
 * @example
 * // 버튼에 추가 정보 표시
 * <AppHoverCard trigger={<AppButton variant="outline">WO-2026-0001</AppButton>} side="right">
 *   <p>품목: 브래킷 A형</p>
 *   <p>수량: 500</p>
 * </AppHoverCard>
 */
export declare const AppHoverCard: ({ trigger, children, width, side, align, sideOffset, openDelay, closeDelay, className, }: AppHoverCardProps) => import("react/jsx-runtime").JSX.Element;
export {};
