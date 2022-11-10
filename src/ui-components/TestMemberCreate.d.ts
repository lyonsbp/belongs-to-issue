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
export declare type TestMemberCreateInputValues = {
    name?: string;
};
export declare type TestMemberCreateValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestMemberCreateOverridesProps = {
    TestMemberCreateGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestMemberCreateProps = React.PropsWithChildren<{
    overrides?: TestMemberCreateOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestMemberCreateInputValues) => TestMemberCreateInputValues;
    onSuccess?: (fields: TestMemberCreateInputValues) => void;
    onError?: (fields: TestMemberCreateInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TestMemberCreateInputValues) => TestMemberCreateInputValues;
    onValidate?: TestMemberCreateValidationValues;
}>;
export default function TestMemberCreate(props: TestMemberCreateProps): React.ReactElement;
