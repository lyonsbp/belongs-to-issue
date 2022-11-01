/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DraftCreateFormInputValues = {};
export declare type DraftCreateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DraftCreateFormOverridesProps = {
    DraftCreateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type DraftCreateFormProps = React.PropsWithChildren<{
    overrides?: DraftCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DraftCreateFormInputValues) => DraftCreateFormInputValues;
    onSuccess?: (fields: DraftCreateFormInputValues) => void;
    onError?: (fields: DraftCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DraftCreateFormInputValues) => DraftCreateFormInputValues;
    onValidate?: DraftCreateFormValidationValues;
}>;
export default function DraftCreateForm(props: DraftCreateFormProps): React.ReactElement;
