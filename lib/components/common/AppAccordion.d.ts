import type { ReactNode } from 'react';
export interface AccordionItemDef {
    value: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
}
interface AppAccordionProps {
    items: AccordionItemDef[];
    /** 단일 선택(single) 또는 복수 선택(multiple). 기본 single */
    type?: 'single' | 'multiple';
    defaultValue?: string | string[];
    /** 제어 컴포넌트로 사용 시 현재 열린 값 */
    value?: string | string[];
    onValueChange?: (value: string | string[]) => void;
    /** 테두리 없는 플랫 스타일 */
    variant?: 'default' | 'flat';
    className?: string;
}
/**
 * 아코디언 컴포넌트
 *
 * @example
 * <AppAccordion
 *   items={[
 *     { value: 'q1', label: '작업지시란 무엇인가요?', content: '...' },
 *     { value: 'q2', label: '공정을 추가하려면?', content: '...' },
 *   ]}
 * />
 *
 * @example
 * // 복수 선택
 * <AppAccordion type="multiple" items={items} />
 */
export declare const AppAccordion: ({ items, type, defaultValue, value, onValueChange, variant, className, }: AppAccordionProps) => import("react/jsx-runtime").JSX.Element;
export {};
