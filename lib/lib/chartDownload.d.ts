/**
 * 차트 컨테이너의 SVG를 PNG로 변환해 다운로드한다.
 * 추가 라이브러리 없이 브라우저 내장 Canvas API를 사용한다.
 */
export declare const downloadChartAsPng: (containerRef: React.RefObject<HTMLDivElement | null>, fileName?: string) => void;
