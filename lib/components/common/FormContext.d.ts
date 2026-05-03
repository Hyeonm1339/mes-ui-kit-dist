export interface FormContextValue {
    labelAlign?: 'left' | 'right' | 'top' | 'bottom';
    labelWidth?: number;
    labelTextAlign?: 'left' | 'center' | 'right';
}
export declare const FormContext: import("react").Context<FormContextValue | null>;
export declare const useFormContext: () => FormContextValue;
