export type Step2FormValues = {
    password: string
    passwordRepeat: string
    optionalQuestion: string
}

export type Step2FormProps = {
    onSubmit: (data: Step2FormValues) => void
}