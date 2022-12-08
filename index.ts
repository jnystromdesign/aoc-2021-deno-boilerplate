import { runTest, TestCase } from "../test.utils";

const test1:TestCase = {
    input: ``,
    expected: 0
}

function solver(data:string){
    return data
}

async function run(){
    const data = await Deno.readTextFile('input.txt');
    console.log(solver(data))
    console.log(runTest(test1, solver))
}
run();