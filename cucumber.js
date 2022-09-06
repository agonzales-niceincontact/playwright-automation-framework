let common = [
  "test/features/**/*.feature",
  "--require-module ts-node/register",
  "--require-module tsconfig-paths/register",
  "--require test/steps/**/*.ts",
  "--require test/hooks/**/*.ts",
  "--require cucumber.config.ts",
  "--format progress-bar",
  "--format summary",
  "--publish-quiet",
].join(" ");

module.exports = {
  default: common,
};
