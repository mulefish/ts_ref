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

    const caller = stack()[1];
    const func = caller.getFunctionName() || 'anon';
    const fullfile = caller.getFileName();
    // '/Users/pmontgomery/work2023/ts_ref/tdd.ts' is bad
    // 'tdd.ts' is good 
    const file = fullfile.split("ts_ref")[1]
    const msg = `${file} ${func}`;
    const t = typeof x
    if ( t === "object") {
        console.log( msg + "\n" + JSON.stringify( x, null,2))
    } else { 
        console.log(msg + "|" + x )
    }
}
