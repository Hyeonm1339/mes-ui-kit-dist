interface AppGuideProps {
    children: React.ReactNode;
}
interface AppGuideSubsectionProps {
    title: string;
    children: React.ReactNode;
    type?: 'default' | 'warning' | 'info';
}
/**
 * 컴포넌트 가이드/주의사항 표시 컴포넌트
 * 모든 샘플 페이지의 하단에 일관된 스타일로 문서 표시
 */
export declare const AppGuide: {
    ({ children }: AppGuideProps): import("react/jsx-runtime").JSX.Element;
    Subsection({ title, children, type }: AppGuideSubsectionProps): import("react/jsx-runtime").JSX.Element;
};
export {};
