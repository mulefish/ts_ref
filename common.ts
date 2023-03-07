
declare const require: any; 
const colorYellow:string = "\x1b[33m";
const colorCyan:string = "\x1b[36m";
const backgroundWhite:string = "\x1b[47m"
const reset:string = "\x1b[0m";

const stack = require('callsite');

export function verdict(a:boolean, b:boolean, msg:string) {
    if ( a === b ) {
        console.log("PASS " + msg)
    } else {
        console.log("FAIL " + msg)
    }
}

export function log(x:any ) {
    const caller = stack()[1];
    const func = caller.getFunctionName() || '';
    const fullfile = caller.getFileName();
    const line = caller.getLineNumber()
    const file = fullfile.split("ts_ref")[1]

    const metainfo = `${colorYellow}${line}${file}${reset}${func}`;
    const t = typeof x
    if ( t === "object") {
        console.log( metainfo + "\n" + JSON.stringify( x, null,2))
    } else { 
        console.log(metainfo + "|" + x )
    }
}

export function error(e:unknown) {
    const caller = stack()[1];
    // const func = caller.getFunctionName() || 'anon';
    const file = caller.getFileName()
    const line = caller.getLineNumber()
    const message = (e as Error).message
    const metainfo = `${backgroundWhite}${colorCyan}${line} ${file} ${reset}`
    console.log( metainfo + "|" + message )
}


/*
const Reset = "\x1b[0m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Underscore = "\x1b[4m";
const Blink = "\x1b[5m";
const Reverse = "\x1b[7m";
const Hidden = "\x1b[8m";

const FgBlack = "\x1b[30m";
const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgBlue = "\x1b[34m";
const FgMagenta = "\x1b[35m";
const FgCyan = "\x1b[36m";
const FgWhite = "\x1b[37m";

const BgBlack = "\x1b[40m";
const BgRed = "\x1b[41m";
const BgGreen = "\x1b[42m";
const BgYellow = "\x1b[43m";
const BgBlue = "\x1b[44m";
const BgMagenta = "\x1b[45m";
const BgCyan = "\x1b[46m";
const BgWhite = "\x1b[47m";
*/ 