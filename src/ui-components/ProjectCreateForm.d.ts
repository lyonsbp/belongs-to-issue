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
export declare type ProjectCreateFormInputValues = {
    name?: string;
};
export declare type ProjectCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCreateFormOverridesProps = {
    ProjectCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectCreateFormProps = React.PropsWithChildren<{
    overrides?: ProjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProjectCreateFormInputValues) => ProjectCreateFormInputValues;
    onSuccess?: (fields: ProjectCreateFormInputValues) => void;
    onError?: (fields: ProjectCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProjectCreateFormInputValues) => ProjectCreateFormInputValues;
    onValidate?: ProjectCreateFormValidationValues;
}>;
export default function ProjectCreateForm(props: ProjectCreateFormProps): React.ReactElement;
