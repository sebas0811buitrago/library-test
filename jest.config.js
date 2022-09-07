module.exports = {
  testEnvironment: "jsdom",
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy"
  }
};
