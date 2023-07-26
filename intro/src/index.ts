let exampleAny:any;
let exampleUnknown:unknown;

// any
exampleAny = 10;
exampleAny = true;
exampleAny = 'Hello';

// unknown
exampleUnknown = 10;
exampleUnknown = true;
exampleUnknown = 'Hello';

// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;

// unknown
if (typeof exampleUnknown === 'boolean') {
    let unknownSetBool: boolean = exampleUnknown;
}
if (typeof exampleUnknown === 'string') {
    let unknownSetString: string = exampleUnknown;
}
if (typeof exampleUnknown === 'number') {
    let unknownSetNumber: number = exampleUnknown;
}