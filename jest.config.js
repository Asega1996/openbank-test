module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>'],
    moduleNameMapper: {
        '^@Components(.*)$': '<rootDir>/src/components$1',
        '^@Styles(.*)$': '<rootDir>/src/styles$1',
        '^@Assets(.*)$': '<rootDir>/src/assets$1',
        '^@Utils(.*)$': '<rootDir>/src/utils$1',
        '^@Store(.*)$': '<rootDir>/src/store$1',
        '^@Services(.*)$': '<rootDir>/src/services$1',
        '^@Screen(.*)$': '<rootDir>/src/screen$1',
    },
    testEnvironment: 'jsdom',
}
