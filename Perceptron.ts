export class Perceptron { 

    andData: number[][][] = [[[0,0],[0]],
    [[0,1],[0]],
    [[1,0],[0]],
    [[1,1],[1]]];

    LEARNING_RATE:number = 0.05;
	INITIAL_WEIGHTS: number[] = [Math.random(), Math.random()]; 
     
    // calculateWeightedSum(data:number[], weights:number[]) {
	// 	let weightedSum:number = 0;
	// 	for(let x=0; x < data.length; x++) { 
    //         weightedSum += data[x] * weights[x];
    //     }
	// 	return weightedSum; 
	// }




}