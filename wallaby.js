module.exports = function(wallaby) {
  return {
    files: ["src/**/*.ts"],
    tests: ["test/**/*.spec.ts"],
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({ useStandardDefaults: true })
    },
    testFramework: 'mocha',
    env: {
      type: 'node'
    }
  };
};
