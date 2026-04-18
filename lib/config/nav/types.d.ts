import type { LazyExoticComponent, ComponentType } from 'react';
import type { LucideIcon } from 'lucide-react';
export type LazyPage = LazyExoticComponent<ComponentType>;
export interface NavLeaf {
    label: string;
    to: string;
    component: LazyPage;
}
export interface NavLevel2 {
    label: string;
    children: NavLeaf[];
}
export interface NavLevel1 {
    label: string;
    icon: LucideIcon;
    children: NavLevel2[];
}
export declare const page: <T extends Record<string, ComponentType>>(loader: () => Promise<T>, name: keyof T) => LazyPage;
