import type { FormHTMLAttributes, ReactNode } from 'react';
import type { FormContextValue } from './FormContext';
interface AppFormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>, FormContextValue {
    children: ReactNode;
    /** 폼 제출 핸들러. 미전달 시 기본 submit 동작만 수행 */
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    className?: string;
}
/**
 * 폼 래퍼 컴포넌트.
 * `<form>` 태그를 렌더링하며 `labelAlign`·`labelWidth`를 Context로 하위 입력 컴포넌트에 전파합니다.
 * 개별 컴포넌트에 직접 전달된 prop이 있으면 Context보다 우선합니다.
 *
 * @example
 * // 등록 폼 — AppForm이 여러 AppSection을 감쌈
 * <AppForm onSubmit={handleSubmit} labelAlign="left" labelWidth={80}>
 *   <AppSection title="기본 정보" cols={2}>
 *     <AppInput label="품목코드" />
 *     <AppInput label="품목명" />
 *   </AppSection>
 *   <div className="flex justify-end gap-2">
 *     <AppButton type="submit">저장</AppButton>
 *   </div>
 * </AppForm>
 *
 * // 조회 조건 — onSubmit 없이 Context만 활용
 * <AppForm labelAlign="top">
 *   <AppSection title="조회 조건" cols={4}>
 *     <AppInput label="품목코드" />
 *     <AppSelect label="공정" options={options} />
 *   </AppSection>
 * </AppForm>
 */
export declare const AppForm: ({ children, onSubmit, labelAlign, labelWidth, className, ...formProps }: AppFormProps) => import("react/jsx-runtime").JSX.Element;
export {};
