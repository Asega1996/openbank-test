export const checkIfPasswordContainsRegExp = (
    password: string,
    regExp: RegExp
) => regExp.test(password)
