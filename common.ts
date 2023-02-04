export function verdict(a:boolean, b:boolean, msg:string) {
    if ( a === b ) {
        console.log("PASS " + msg)
    } else {
        console.log("FAIL " + msg)
    }
}

export function log(s:string) {
    console.log(s)
}