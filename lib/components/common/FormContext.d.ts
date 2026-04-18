export interface FormContextValue {
    labelAlign?: 'left' | 'right' | 'top' | 'bottom';
    labelWidth?: number;
}
export declare const FormContext: import("react").Context<FormContextValue | null>;
export declare const useFormContext: () => FormContextValue;
