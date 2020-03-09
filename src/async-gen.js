export default async function* source() {
    let x = 0;
    while (x++ < 5) {
        await new Promise(resolve => setTimeout(resolve, 500));
        yield x;
    }
}
