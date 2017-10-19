# Learn to TypeScript

Been a while since I've used TypeScript, and since I have they've made some improvements. Time to practise some TypeScript fundamentals and unit testing!

## Folder Structure

```ascii
+-- build
+-- src
|   +-- index.ts
+-- test
|   +-- index.spec.ts
+-- .gitignore
+-- README.markdown
+-- package.json
+-- tsconfig.json
+-- wallaby.js
```

## Project Configuration

### wallaby.js

For this project I am using wallaby as a continuous test runner, configured to run `*.spec.ts` from the `/test/` folder after including `*.ts` from `/src/`. It is important with wallaby to include all your source and test files correctly, and ensure not to mix the two.

### tsconfig.json

Configures TypeScript to read from `/src/` and output into `/build/` when compiling. Not really used with wallaby

### package.json

Includes the project dependencies

* TypeScript Libraries
  * "ts-node"
  * "typescript"
* TypeScript Typings
  * "@types/chai"
  * "@types/mocha"
* Testing Libraries
  * "mocha"
  * "chai"

## TypeScript Concepts

What things in TypeScript do I want to see, and see tested?

### [Types](https://www.tutorialspoint.com/typeScript/typeScript_types.htm)

* Number
* String
* Boolean
* Void
* Null
* Undefined

### [variables](https://www.tutorialspoint.com/typeScript/typeScript_variables.htm)

Specifically regarding `let` and `const` in TypeScript, [here](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)

## References

* [TutorialsPoint](https://www.tutorialspoint.com/typescript/index.htm) TypeScript tutorial
* [TypeScriptLang](https://www.typescriptlang.org/index.html)

## Changelog

* 0.0.4 - 19/10/17 - #hig
  * updated token change to test [git-hook](https://stackoverflow.com/questions/7925850/how-to-automatically-push-after-committing-in-git)
* 0.0.2 - 19/10/17 - #hig
  * added token change to test git upstream connection working correctly through VM
* 0.0.1 - 19/10/17 - #hig
  * added readme initial version with some basic headings, configuration, references and changelog