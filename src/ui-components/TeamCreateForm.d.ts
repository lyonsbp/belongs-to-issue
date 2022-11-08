/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeamCreateFormInputValues = {
    name?: string;
};
export declare type TeamCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamCreateFormOverridesProps = {
    TeamCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamCreateFormProps = React.PropsWithChildren<{
    overrides?: TeamCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeamCreateFormInputValues) => TeamCreateFormInputValues;
    onSuccess?: (fields: TeamCreateFormInputValues) => void;
    onError?: (fields: TeamCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TeamCreateFormInputValues) => TeamCreateFormInputValues;
    onValidate?: TeamCreateFormValidationValues;
}>;
export default function TeamCreateForm(props: TeamCreateFormProps): React.ReactElement;
