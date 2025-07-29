module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  // ✅ Fix optional chaining error by transforming this node_module:
  transformIgnorePatterns: [
    "/node_modules/(?!(\\@adobe/css-tools)/)"
  ],
};

