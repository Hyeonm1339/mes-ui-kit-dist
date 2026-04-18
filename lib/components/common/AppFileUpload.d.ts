import type { FieldLabelProps } from './FieldWrapper';
interface AppFileUploadProps extends FieldLabelProps {
    /** 허용 MIME 타입 또는 확장자. 예: "image/*,.pdf" */
    accept?: string;
    /** 다중 파일 선택 */
    multiple?: boolean;
    /** 파일당 최대 크기(byte). 기본 제한 없음 */
    maxSize?: number;
    /** 최대 파일 개수. multiple=true 시에만 적용 */
    maxFiles?: number;
    value?: File[];
    onChange?: (files: File[]) => void;
    disabled?: boolean;
    error?: string;
    hint?: string;
}
/**
 * 파일 업로드 컴포넌트 — 드래그 앤 드롭 및 클릭 방식 모두 지원.
 *
 * @example
 * // 단일 이미지 업로드
 * const [files, setFiles] = useState<File[]>([])
 * <AppFileUpload
 *   label="첨부파일"
 *   labelAlign="top"
 *   accept="image/*"
 *   value={files}
 *   onChange={setFiles}
 * />
 *
 * @example
 * // 다중 파일, 최대 3개, 파일당 5MB
 * <AppFileUpload multiple maxFiles={3} maxSize={5 * 1024 * 1024} value={files} onChange={setFiles} />
 */
export declare const AppFileUpload: ({ accept, multiple, maxSize, maxFiles, value, onChange, disabled, error, hint, label, labelAlign, labelWidth, required, }: AppFileUploadProps) => import("react/jsx-runtime").JSX.Element;
export {};
