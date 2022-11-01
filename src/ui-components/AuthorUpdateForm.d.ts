/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Author } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AuthorUpdateFormInputValues = {};
export declare type AuthorUpdateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorUpdateFormOverridesProps = {
    AuthorUpdateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type AuthorUpdateFormProps = React.PropsWithChildren<{
    overrides?: AuthorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    author?: Author;
    onSubmit?: (fields: AuthorUpdateFormInputValues) => AuthorUpdateFormInputValues;
    onSuccess?: (fields: AuthorUpdateFormInputValues) => void;
    onError?: (fields: AuthorUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AuthorUpdateFormInputValues) => AuthorUpdateFormInputValues;
    onValidate?: AuthorUpdateFormValidationValues;
}>;
export default function AuthorUpdateForm(props: AuthorUpdateFormProps): React.ReactElement;
