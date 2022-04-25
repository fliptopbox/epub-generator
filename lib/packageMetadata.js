const fs = require("fs");
const path = require("path");

const { mediaType } = require("./mediaType");
const { spine, manifest } = require("./spine");

const { outputDirectory } = require("../source/source.json");
const output = `../${outputDirectory}`;

const outputPath = path.join(__dirname, output, "OPS");

async function packageMetadata() {
  const f = fs.readdirSync(outputPath, () => null);
  const data = f
    .map((item) => {
      const fullpath = outputPath + "/" + item;
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

exports.packageMetadata = packageMetadata;
