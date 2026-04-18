interface AppAvatarProps {
    /** 이미지 URL */
    src?: string;
    /** 대체 텍스트 (이미지 없을 때 이니셜로 표시) */
    name?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
/**
 * 아바타 컴포넌트
 *
 * @example
 * <AppAvatar name="김철수" />
 * <AppAvatar src="/photo.jpg" name="김철수" size="lg" />
 */
export declare const AppAvatar: ({ src, name, size, className }: AppAvatarProps) => import("react/jsx-runtime").JSX.Element;
export {};
