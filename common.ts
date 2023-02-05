declare var require: any; 
var stack = require('callsite');


export function verdict(a:boolean, b:boolean, msg:string) {
    if ( a === b ) {
        console.log("PASS " + msg)
    } else {
        console.log("FAIL " + msg)
    }
}


export function log(x:any ) {

    // const ary = stack()
    // stack().forEach(function(item:any, i:number){
    //     const func = item.getFunctionName() || 'anon'
    //     const file = item.getFileName() 
    //     const line = item.getLineNumber() 
    //     const msg = `${file} ${func}`
    //     console.log( i, msg)
    // });
    const caller = stack()[1];
    const func = caller.getFunctionName() || 'anon';
    const fullfile = caller.getFileName();
    // '/Users/pmontgomery/work2023/ts_ref/tdd.ts' is bad
    // 'tdd.ts' is good 
    const file = fullfile.split("ts_ref")[1]

    // const line = caller.getLineNumber() // Pointless because the source is transpiled
    const msg = `${file} ${func}`;

    const t = typeof x
    if ( t === "object") {
        console.log( msg + "\n" + JSON.stringify( x, null,2))
    } else { 
        console.log(msg + "|" + x )
    }
}
