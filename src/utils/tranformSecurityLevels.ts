import theme from '@Styles/theme'

// Fn to transform number to width
// Min number value 0 & Max number value 4
export const transformSecurityLevelToWidth = (securityLevel: number) => {
    return securityLevel !== 0 ? `${25 * securityLevel - 1}%` : '0%'
}

// Fn to transform number to themed color
export const transformSecurityLevelColor = (securityLevel: number) => {
    if (securityLevel === 0) return 'transparent'
    if (securityLevel === 1) return theme.palette.securityLevels.veryHighRisk
    if (securityLevel === 2) return theme.palette.securityLevels.highRisk
    if (securityLevel === 3) return theme.palette.securityLevels.mediumRisk
    if (securityLevel === 4) return theme.palette.securityLevels.lowRisk
}
