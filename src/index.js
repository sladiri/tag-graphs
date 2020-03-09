import source from "./async-gen.js";
import state from "./immer.js";
import "./lighterhtml.js";
import "./ramda.js";
import "./union-type.js";

(async () => {
    for await (const x of source()) {
        console.log("got x", x);
    }
})();

const { baseState, nextState } = state;
console.log("state", baseState[1], nextState[1]);
