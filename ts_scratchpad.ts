
import { verdict, error, log } from "./common";

// log("line 4")
function something() {
    throw new Error('boom');
}

try {
    something();
} catch (e) {
    error(e)
}
