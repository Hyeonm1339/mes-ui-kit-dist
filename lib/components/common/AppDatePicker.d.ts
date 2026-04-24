import type { DateRange } from 'react-day-picker';
import type { FieldLabelProps } from './FieldWrapper';
interface BaseProps extends FieldLabelProps {
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    /** single / range 모드: 텍스트 직접 입력 가능 (YYYY-MM-DD) */
    inputable?: boolean;
}
interface SingleProps extends BaseProps {
    mode: 'single';
    value?: Date;
    onChange?: (date: Date | undefined) => void;
}
interface RangeProps extends BaseProps {
    mode: 'range';
    value?: DateRange;
    onChange?: (range: DateRange | undefined) => void;
}
export interface YearMonth {
    year: number;
    month: number;
}
interface YearMonthProps extends BaseProps {
    mode: 'year-month';
    value?: YearMonth;
    onChange?: (value: YearMonth | undefined) => void;
}
export interface WeekValue {
    year: number;
    week: number;
}
interface WeekProps extends BaseProps {
    mode: 'week';
    value?: WeekValue;
    onChange?: (value: WeekValue | undefined) => void;
}
type AppDatePickerProps = SingleProps | RangeProps | YearMonthProps | WeekProps;
export declare const AppDatePicker: (props: AppDatePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
