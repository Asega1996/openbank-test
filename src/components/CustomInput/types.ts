import { InputProps } from "@mui/material"
import { FieldError } from "react-hook-form"

export type SecurityLevelBarProps = {
    level: number
}

export type CustomInputProps = {
    label: string
    errors: FieldError | undefined
    icon?: any
    onClickIcon?: () => void
    hasSecurityLevel?: boolean
    securityLevel?: number
} & InputProps