export class Perceptron { 

    andData: number[][][] = [[[0,0],[0]],
    [[0,1],[0]],
    [[1,0],[0]],
    [[1,1],[1]]];

    LEARNING_RATE:number = 0.005;
	INITIAL_WEIGHTS: number[] = [Math.random(), Math.random()]; 
    getData() { 
        return this.andData;
    }
    getLearningRate() { 
        return this.LEARNING_RATE;
    }
    getInitialWeights() { 
        return this.INITIAL_WEIGHTS;
    }
    calculateWeightedSum(data:number[], weights:number[]) {
		let weightedSum:number = 0;
		for(let x=0; x < data.length; x++) { 
            weightedSum += data[x] * weights[x];
        }
		return weightedSum; 
	}

    applyActivationFunction(weightedSum:number) {
		if(weightedSum > 1) { 
            return 1;
        }
        return 0;
    }

    adjustWeights(data:number[], weights:number[], error:number) {
		let adjustedWeights:number[] = [] // = new double[weights.length];
		for(let x=0; x < weights.length; x++) { 
            adjustedWeights[x] = this.LEARNING_RATE * error * data[x] + weights[x];
        }
		return adjustedWeights;
	}



}