# Goal: Do something with typescript
# How: Port a neural net back prop from java to typescript - See youtube channel for the java

# Transpile: 
tsc foo.ts -> creates -> foo.js 

# Transpile + Run ( w/o creating a *js file ):
ts-node foo.ts

# URL 
https://sites.fastspring.com/prototypeprj/instant/ai  
https://www.youtube.com/watch?v=ZJNklhq1zvg&ab_channel=PrototypeProject  

# OUTPUT
==========================================Epoch # 0 ==============================================
/runner.ts printHeading|   w1  |  w2  | x1 | x2 | Target Result | Result | error | Weighted Sum | adjusted w1 | adjusted w2  
/runner.ts printHeading|---------------------------------------------------------------------------------------------------  
/runner.ts printVector|  0.48 | 0.64 | 0  | 0  |      0        |   0    | 0   |     0.00     |     0.48    | 0.64  
/runner.ts printVector|  0.48 | 0.64 | 0  | 1  |      0        |   0    | 0   |     0.64     |     0.48    | 0.64  
/runner.ts printVector|  0.48 | 0.64 | 1  | 0  |      0        |   0    | 0   |     0.48     |     0.48    | 0.64  
/runner.ts printVector|  0.48 | 0.64 | 1  | 1  |      1        |   1    | 0   |     1.12     |     0.48    | 0.64  