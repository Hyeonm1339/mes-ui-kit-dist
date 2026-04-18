import type { InputHTMLAttributes } from 'react';
interface AppSearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onSearch'> {
    /** 검색 실행 콜백 (엔터 또는 검색 아이콘 클릭) */
    onSearch?: (value: string) => void;
    /** 초기화 시 콜백 */
    onClear?: () => void;
    /** controlled value */
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}
/**
 * 검색 전용 입력
 *
 * @example
 * <AppSearchInput placeholder="품목 검색" onSearch={(v) => console.log(v)} />
 */
export declare const AppSearchInput: import("react").ForwardRefExoticComponent<AppSearchInputProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
