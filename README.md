# Goal: Do something with typescript
# How: Port a neural net back prop from java to typescript - See youtube channel for the java

# Files: 
Perceptron.ts = the core logic    
runner.ts = the main()   
tdd.ts = tdd tests  
common.ts = helper funcs  

# Transpile: 
On this machine - use 'nvm use 17'
tsc foo.ts -> creates -> foo.js 

# Transpile + Run ( w/o creating a *js file ):
ts-node foo.ts

# URL 
https://sites.fastspring.com/prototypeprj/instant/ai  
https://www.youtube.com/watch?v=ZJNklhq1zvg&ab_channel=PrototypeProject  


# OUTPUT
(base) pmontgomery@FVFH51FAQ6LW ts_ref % ts-node runner.ts   
/runner.ts printHead|=Epoch # 0 ====    
/runner.ts printHead|   w1  |  w2  | x1 | x2 | Target Result | Result | error | Weighted Sum | adjusted w1 | adjusted w2  
/runner.ts printHead|--------------------    
/runner.ts printText|  0.65 | 0.79 | 0  | 0  |      0        |   0    | 0   |     0.00     |     0.65    | 0.79  
/runner.ts printText|  0.65 | 0.79 | 0  | 1  |      0        |   0    | 0   |     0.79     |     0.65    | 0.79  
/runner.ts printText|  0.65 | 0.79 | 1  | 0  |      0        |   0    | 0   |     0.65     |     0.65    | 0.79  
/runner.ts printText|  0.65 | 0.79 | 1  | 1  |      1        |   1    | 0   |     1.43     |     0.65    | 0.79  

-- Pay attention to 'target' vs 'result', and the 'error'...  Target and result ought to agree and, each iteration, the errors should get smaller.   

```mermaid
flowchart TD
x1[X1]
x2[X2]
w1[random weight1 ]
w2[random weight2 ]
calc[WeightSum=w1*x1 + w2*x2]
step[StepFunc: If ws > 1 : 1, else : 0]
error[Error: target_result - result ]
adjust[W_i =  Learning_Rate * error * X_i + W_i : Loop until error is 0 ]

x1 --> w1 
x1 --> w2 
x2 --> w1
x2 --> w2
w1 -->calc
w2 -->calc
calc --> step
step --> error
error --> adjust

```
