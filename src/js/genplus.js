
export default function canIterate(data) {
    try {
        console.log(`${data} ---> ${data[Symbol.iterator] instanceof Function}`)
    } catch (err) {
        console.log(`${data} ---> false`)
    }
}

canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate({}); // false
canIterate({[Symbol.iterator]() {
            return {
                next() {
                    return {value: 1, done: true}
                }
            }
        }}); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true