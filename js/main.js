import '../scss/main.scss';

async function test() {
    const promise = Promise.resolve(123);
    return console.log( await promise );
}

test();