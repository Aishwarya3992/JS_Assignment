const jestConfig = {
    verbose: true,
    testURL: "http://localhost/",
    'transform': {
      '^.+\\.jsx?$': 'babel-jest',
    },
    "testMatch": ["**/*test.js"],
  }
  
  module.exports = jestConfig