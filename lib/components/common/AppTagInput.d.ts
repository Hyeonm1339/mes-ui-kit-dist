import { type FieldLabelProps } from './FieldWrapper';
interface AppTagInputProps extends FieldLabelProps {
    value: string[];
    onChange: (tags: string[]) => void;
    placeholder?: string;
    /** 최대 태그 수 */
    maxTags?: number;
    /** 중복 허용 */
    allowDuplicates?: boolean;
    disabled?: boolean;
    className?: string;
}
/**
 * 태그 입력 컴포넌트
 *
 * @example
 * <AppTagInput label="키워드" value={tags} onChange={setTags} placeholder="입력 후 Enter" />
 */
export declare const AppTagInput: ({ label, labelAlign, labelWidth, required, error, hint, value, onChange, placeholder, maxTags, allowDuplicates, disabled, className, }: AppTagInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
