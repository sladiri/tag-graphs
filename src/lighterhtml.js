import lighterhtml from "https://dev.jspm.io/lighterhtml";
import { pipe } from "https://dev.jspm.io/ramda";

const { html, render } = lighterhtml;

const renderSection = x => html`
    <section>
        <span id="test">lighterhtml ${x}</span>
    </section>
`;

const updateDOM = section => render(document.body, section);

let x = Number.POSITIVE_INFINITY;
setInterval(() => {
    x = x + 1 <= Number.MAX_SAFE_INTEGER ? x + 1 : Number.MIN_SAFE_INTEGER;
    pipe(renderSection, updateDOM)(x);
}, 130);
