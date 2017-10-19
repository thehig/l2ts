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

## Git VM

* Inside my virtual machine I'm running Windows 10, and have not copied across my github private key.
* The VM Host OS is running Ubuntu, has my github private key and does have the ssh-agent running.
* I wanted local, hassle free pushes from inside my VM, so I created a `git init --bare` inside a shared folder, then from within my VM I do my pushes and pulls to `file://E:/.../Repo`.
* I was trying to set up a post-commit hook inside the host OS that would trigger on a push from the VM, and would push to github using the ssh-agent.
* Couldn't get it to automagically push, but I was able to clone the project in the host OS and push to github by manually adding the remote.
* Not sure if adding hooks to the `init --bare` folder is the right way to go, and almost certain that `post-commit`is the wrong hook

## References

* [TutorialsPoint](https://www.tutorialspoint.com/typescript/index.htm) TypeScript tutorial
* [TypeScriptLang](https://www.typescriptlang.org/index.html)

## Changelog

* 0.0.6 - 19/10/17 - @hig
  * updated token change to test [git-hook](https://stackoverflow.com/questions/7925850/how-to-automatically-push-after-committing-in-git)
  * added [#git-vm](#git-vm) to explain what I was trying to do
  * updated author tag from `#` to `@`
* 0.0.2 - 19/10/17 - @hig
  * added token change to test git upstream connection working correctly through VM
* 0.0.1 - 19/10/17 - @hig
  * added readme initial version with some basic headings, configuration, references and changelog