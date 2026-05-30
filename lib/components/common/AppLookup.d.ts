import type { InputHTMLAttributes, ReactNode } from 'react';
import { type FieldLabelProps } from './FieldWrapper';
import { type AppModalProps } from './AppModal';
export interface AppLookupRenderArgs {
    close: () => void;
    clear: () => void;
}
export interface AppLookupProps extends FieldLabelProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange'> {
    /** 입력창에 표시할 값. 보통 선택된 명칭 또는 코드+명칭 문자열 */
    value?: string;
    /** value와 별도로 관리하는 코드 값. displayValue가 없으면 codeValue - value 형태로 표시 가능 */
    codeValue?: string;
    /** 입력창 표시값을 직접 지정할 때 사용 */
    displayValue?: string;
    displayFormat?: 'value' | 'code' | 'code-value';
    title: string;
    modalSize?: AppModalProps['size'];
    modalMaxHeight?: string;
    modalClassName?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    onClear?: () => void;
    renderContent: (args: AppLookupRenderArgs) => ReactNode;
    className?: string;
    inputClassName?: string;
}
/**
 * 조회/선택 모달을 여는 Lookup 입력 컴포넌트입니다.
 * 모달 내부 검색 폼, 테이블, API 호출은 renderContent로 주입합니다.
 */
export declare const AppLookup: ({ label, labelAlign, labelWidth, required, error, hint, value, codeValue, displayValue, displayFormat, title, modalSize, modalMaxHeight, modalClassName, open: controlledOpen, onOpenChange, onClear, renderContent, className, inputClassName, placeholder, disabled, readOnly, ...props }: AppLookupProps) => import("react/jsx-runtime").JSX.Element;
