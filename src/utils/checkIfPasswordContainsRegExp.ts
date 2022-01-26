// Fn to check if a string match a regExp
export const checkIfPasswordContainsRegExp = (
    password: string,
    regExp: RegExp
) => regExp.test(password)
