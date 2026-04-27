import type { FormEvent, ReactNode } from 'react';
import type { FormContextValue } from './FormContext';
interface AppFormSectionProps extends FormContextValue {
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
    title?: string;
    description?: string;
    cols?: 1 | 2 | 3 | 4 | 5 | 6;
    actions?: ReactNode;
    className?: string;
    children: ReactNode;
}
/**
 * AppForm + AppSection 결합 컴포넌트.
 * 폼 입력 필드를 섹션 안에 그리드로 배치하는 가장 일반적인 패턴을 하나의 컴포넌트로 제공합니다.
 *
 * @example
 * // 조회 조건
 * <AppFormSection
 *   title="조회 조건"
 *   cols={4}
 *   labelAlign="top"
 *   onSubmit={handleSearch}
 *   actions={
 *     <>
 *       <AppButton variant="outline" type="button" onClick={handleReset}>초기화</AppButton>
 *       <AppButton type="submit">조회</AppButton>
 *     </>
 *   }
 * >
 *   <AppInput label="품목코드" />
 *   <AppSelect label="공정" options={options} />
 * </AppFormSection>
 *
 * // 등록/수정 폼
 * <AppFormSection
 *   title="기본 정보"
 *   cols={2}
 *   labelAlign="left"
 *   labelWidth={80}
 *   onSubmit={handleSubmit}
 *   actions={<AppButton type="submit" loading={isPending}>저장</AppButton>}
 * >
 *   <AppInput label="코드" />
 *   <AppInput label="명칭" />
 * </AppFormSection>
 */
export declare const AppFormSection: ({ onSubmit, labelAlign, labelWidth, title, description, cols, actions, className, children, }: AppFormSectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
