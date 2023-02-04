
// Importing the class from the location of the file
import { verdict, log } from "./common";
import { Perceptron } from "./Perceptron"  


function andData_forTheSimpleNeuralNet_ShapeTest() { 
    const expected_shape = "_00_0_01_0_10_0_11_1" 
    const andData: number[][][] = [[[0,0],[0]],
                [[0,1],[0]],
                [[1,0],[0]],
                [[1,1],[1]]];

    let actual_shape = ""
    andData.forEach((ary2, i)=> {
        ary2.forEach((ary3, j)=> { 
            actual_shape += "_"
            ary3.forEach((item, k)=> { 
                actual_shape += item
            })
        })
    })
    const isOk = actual_shape === expected_shape
    verdict( isOk, true, "andData_forTheSimpleNeuralNet_ShapeTest")



}

function perceptron_newup_test() { 
    // Does not matter what to test here - just that the 
    // Perceptron is well formed. I happen to pick on 'andData' but 
    // anything or feature of the Perceptron class would be as good a 
    // test subject as any other for this test.

    const p = new Perceptron() 

    const andData: number[][][] = [[[0,0],[0]],
                [[0,1],[0]],
                [[1,0],[0]],
                [[1,1],[1]]];
    const isOk:boolean = JSON.stringify( andData ) === JSON.stringify(p.andData)

    verdict(isOk, true, "perceptron_newup_test")
}

function perceptron_calculateWeightedSum_test() { 
    const p = new Perceptron() 

}

function main() { 
    andData_forTheSimpleNeuralNet_ShapeTest()
    perceptron_newup_test() 
//    perceptron_calculateWeightedSum_test() 
}
main()