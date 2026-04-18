export interface AppCodePreviewProps {
    /** 미리보기로 렌더링할 컴포넌트 */
    children: React.ReactNode;
    /** ?raw import로 불러온 소스 파일 전체 문자열 */
    source: string;
    /** 추출할 마커 이름 (@preview-start:xxx ~ @preview-end:xxx) */
    marker: string;
    /** 미리보기 영역 추가 클래스 */
    className?: string;
}
export declare const AppCodePreview: ({ children, source, marker, className }: AppCodePreviewProps) => import("react/jsx-runtime").JSX.Element;
