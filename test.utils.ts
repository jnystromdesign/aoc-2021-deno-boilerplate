export type TestCase = {input: string, expected: number};

export const runTest(solver: (input)=>{}, testCase: TestCase) => {
    return {
        answer: solver(testCase.input),
        expected: testCase.expected
    }
}
