import accessImmutableObject from './2-nested.js';

const result = accessImmmutableObject(
    {
        name: {
            first: "Guillaume",
            last: "Salva",
        },
    },
    ['name', 'first']
);

console.log(result);