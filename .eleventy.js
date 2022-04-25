const fs = require("fs");
const path = require("path");
const { mediaType } = require("./lib/mediaType");
const { spine, manifest } = require("./lib/spine");
const { outputDirectory } = require("./source/source.json");

const output = outputDirectory;
const outputPath = path.join(__dirname, output, "OPS");

async function renderPackageMetadata(folder) {
  const f = fs.readdirSync(folder, () => null);

  const data = f
    .map((item) => {
      const fullpath = folder + "/" + item;
      const stats = fs.statSync(fullpath);
      const files = stats.isFile() ? [] : fs.readdirSync(fullpath + "/");
      return [item, files.map((s) => `${item}/${s}`)];
    })
    .map(([file, files]) => (files.length ? files : [file]))
    .flat()
    .map(mediaType)
    .filter(({ type }) => type);

  const spineSection = spine(data).join("\n");
  const manifestSection = manifest(data).join("\n");

  // open the rendered file and insert
  const outputFilname = outputPath + "/package.opf";
  let content = fs
    .readFileSync(outputFilname, "utf-8")
    .replace(/\<manifest ?\/>/, `\n<manifest>\n${manifestSection}\n</manifest>`)
    .replace(/\<spine ?\/>/, `\n<spine>\n${spineSection}\n</spine>`);

  fs.writeFileSync(outputFilname, content);
}

function isodate(value) {
  const date = new Date(value);
  const today = new Date();
  const output = !date ? today : date;

  console.assert(date, "Date value is illegal", value);

  // delete the milisecond decimal
  return output.toISOString().replace(/(\.\d+)/, "");
}

module.exports = function (xi) {
  xi.addPassthroughCopy({ "source/images": "OPS/images" });
  xi.addPassthroughCopy({ "source/css": "OPS/css" });
  xi.addPassthroughCopy({ "source/fonts": "OPS/fonts" });

  xi.addPassthroughCopy({ "source/mimetype": "mimetype" });
  xi.addPassthroughCopy({ "source/container.xml": "META-INF/container.xml" });

  xi.on("eleventy.after", () => renderPackageMetadata(outputPath));

  xi.addFilter("isodate", isodate);

  return { dir: { output } };
};
