import immer from "https://dev.jspm.io/immer";

const { produce } = immer;

const baseState = [
    {
        todo: "Learn typescript",
        done: true,
    },
    {
        todo: "Try immer",
        done: false,
    },
];

const nextState = produce(baseState, draftState => {
    draftState.push({ todo: "Tweet about it" });
    draftState[1].done = true;
});

export default { baseState, nextState };
