const { packageMetadata } = require("./lib/packageMetadata");
const { isodate } = require("./lib/isodate");
const { outputDirectory } = require("./source/source.json");

const desitinations = [
  { "source/images": "OPS/images" },
  { "source/css": "OPS/css" },
  { "source/fonts": "OPS/fonts" },
  { "source/mimetype": "mimetype" },
  { "source/container.xml": "META-INF/container.xml" },
];

module.exports = function (e) {
  desitinations.forEach((item) => e.addPassthroughCopy(item));

  e.on("eleventy.after", () => packageMetadata());
  e.addFilter("isodate", isodate);

  const output = outputDirectory;
  return { dir: { output } };
};
