import { type FieldLabelProps } from './FieldWrapper';
export interface AppEditorProps extends FieldLabelProps {
    /** HTML 문자열 */
    value?: string;
    onChange?: (html: string) => void;
    placeholder?: string;
    /** 에디터 영역 최소 높이(px). 기본 200 */
    minHeight?: number;
    disabled?: boolean;
    className?: string;
}
/**
 * 리치 텍스트 에디터 (Tiptap 기반)
 *
 * @example
 * const [html, setHtml] = useState('')
 * <AppEditor label="내용" value={html} onChange={setHtml} placeholder="내용을 입력하세요" />
 */
export declare const AppEditor: ({ label, labelAlign, labelWidth, required, error, hint, value, onChange, placeholder, minHeight, disabled, className, }: AppEditorProps) => import("react/jsx-runtime").JSX.Element;
/**
 * 에디터 HTML 내용을 렌더링하는 뷰어 (조회 화면용)
 *
 * @example
 * <AppEditorViewer html={post.content} />
 */
export declare const AppEditorViewer: ({ html, className }: {
    html: string;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
