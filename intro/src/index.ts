let suffix: string | null = getSuffix();
if (suffix !== null) {
  const suffixLocal = suffix;
  let exampleOne: string = `Hello, ${suffixLocal.toLocaleLowerCase()}!`;
  ["jane", "mark", "paul"].forEach((name) => {
    let exampleTwo: string = `Hello, ${name} ${suffixLocal}!`;
    console.log(exampleTwo);
  });
}

let example: string | null = forExample();
if (example !== null) {
  const exampleLocal = example;
  setTimeout(() => {
    console.log(exampleLocal.toLocaleLowerCase());
  }, 1000);
}

example = null;
