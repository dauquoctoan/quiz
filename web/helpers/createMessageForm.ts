
import { FieldError, FieldErrorsImpl, GlobalError, Merge, LiteralUnion, RegisterOptions } from "react-hook-form"

function createName(name: string) {
    const remainingName = name.slice(1)
    return name.substring(0, 1).toUpperCase() + remainingName;
}

function createAction(error: LiteralUnion<keyof RegisterOptions, string>): string {
    switch (error) {
        case "required":
            return 'is required'
        case "pattern":
            return 'invalid'
        case "minLength":
            return 'maximum level is not reached'
        case "maxLength":
            return 'minimum level is not reached'
        default:
            return '';
    }
}

export function createMessageForm(name: string, error: FieldError | Merge<FieldError, FieldErrorsImpl<any>>): string {
    return error.message as string || `${createName(name)} ${createAction(error.type as any)}`
}