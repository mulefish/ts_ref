
declare var require: any; 
declare var module: any;
import { log } from "./common";
import { Perceptron } from "./Perceptron"  

export function main() { 
    const perceptron = new Perceptron() 
    let data:number[][][] = perceptron.andData;
    let weights:number[] = perceptron.INITIAL_WEIGHTS;
    let epochNumber:number = 0; 
    let errorFlag:boolean = true;
    let error:number = 0;
    let adjustedWeights:number[] = []

    while(errorFlag) {
        printHeading(epochNumber++);
        errorFlag = false;
        error = 0;
        for(let x = 0; x < perceptron.andData.length; x++) {
            const weightedSum:number = perceptron.calculateWeightedSum(perceptron.andData[x][0], weights);
            const result:number = perceptron.applyActivationFunction(weightedSum);
            error = data[x][1][0] - result;
            if(error != 0) {
                errorFlag = true;
            }
            adjustedWeights = perceptron.adjustWeights(data[x][0], weights, error);
            printVector(data[x], weights, result, error, weightedSum, adjustedWeights);
            weights = adjustedWeights;
        }
    }
}

export function printHeading(epochNumber:number) {
    log("\n==========================================Epoch # "+epochNumber+" ==============================================");
    log("   w1  |  w2  | x1 | x2 | Target Result | Result | error | Weighted Sum | adjusted w1 | adjusted w2");
    log("---------------------------------------------------------------------------------------------------");
}

export function printVector(data:number[][], weights:number[], result:number, error:number, weightedSum:number, adjustedWeights:number[]) {

    const w0 = weights[0].toFixed(2)
    const w1 = weights[1].toFixed(2)
    const aw0 = adjustedWeights[0].toFixed(2)
    const aw1 = adjustedWeights[1].toFixed(2)
    const ws = weightedSum.toFixed(2)
    log("  "+ w0 +" | "+ w1 +" | "+data[0][0]+"  | "+ data[0][1] +
                       "  |      "+data[1][0]+"        |   "+result+"    | "+error+"   |     "+ws + 
                       "     |     "+ aw0+"    | "+ aw1);
}

if (require.main === module) {
    main() 
}
