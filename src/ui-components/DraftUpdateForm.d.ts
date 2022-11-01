/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Draft } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DraftUpdateFormInputValues = {};
export declare type DraftUpdateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DraftUpdateFormOverridesProps = {
    DraftUpdateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type DraftUpdateFormProps = React.PropsWithChildren<{
    overrides?: DraftUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    draft?: Draft;
    onSubmit?: (fields: DraftUpdateFormInputValues) => DraftUpdateFormInputValues;
    onSuccess?: (fields: DraftUpdateFormInputValues) => void;
    onError?: (fields: DraftUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DraftUpdateFormInputValues) => DraftUpdateFormInputValues;
    onValidate?: DraftUpdateFormValidationValues;
}>;
export default function DraftUpdateForm(props: DraftUpdateFormProps): React.ReactElement;
