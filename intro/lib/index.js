"use strict";
let exampleAny;
let exampleUnknown;
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
let anySetBool = exampleAny;
// unknown
if (typeof exampleUnknown === 'boolean') {
    let unknownSetBool = exampleUnknown;
}
if (typeof exampleUnknown === 'string') {
    let unknownSetString = exampleUnknown;
}
if (typeof exampleUnknown === 'number') {
    let unknownSetNumber = exampleUnknown;
}
