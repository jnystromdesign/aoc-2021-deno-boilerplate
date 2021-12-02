const testData = ``; // Add the exemple data
const testResult = ``; // Add the exemple data result

function solveQuestion(data:string[]){
    return data
}

async function run(){
    const fileContent = await Deno.readTextFile('input.txt');
    const data = fileContent.split("\n");
    console.log(solveQuestion(data))
}
run();