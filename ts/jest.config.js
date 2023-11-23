module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    collectCoverageFrom: ['**/src/**/*.ts', '!**/node_modules/**', '!**/tests/**', '!**/src/index.ts'],
    coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
};
