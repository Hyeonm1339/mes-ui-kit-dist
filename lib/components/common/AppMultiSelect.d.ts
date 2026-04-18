import { type FieldLabelProps } from './FieldWrapper';
import type { SelectOption } from './AppSelect';
interface AppMultiSelectProps extends FieldLabelProps {
    options: SelectOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
    placeholder?: string;
    /** 트리거에 표시할 최대 태그 수. 초과 시 "외 N개"로 표시. 기본 3 */
    maxTags?: number;
    /** 전체 선택 / 전체 해제 버튼 표시 */
    showSelectAll?: boolean;
    /** 선택 항목 수 제한 */
    maxCount?: number;
    disabled?: boolean;
    className?: string;
}
/**
 * 다중 선택 드롭다운 컴포넌트
 *
 * @example
 * <AppMultiSelect
 *   label="공정"
 *   labelAlign="top"
 *   options={processOptions}
 *   value={selectedProcesses}
 *   onChange={setSelectedProcesses}
 * />
 */
export declare const AppMultiSelect: ({ label, labelAlign, labelWidth, required, error, hint, options, value, onChange, placeholder, maxTags, showSelectAll, maxCount, disabled, className, }: AppMultiSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
