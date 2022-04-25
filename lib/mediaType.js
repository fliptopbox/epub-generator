function mediaType(relpath = "", index) {
  const parts = relpath.split(/[\.\/]+/g);
  const [extension] = parts.splice(-1);
  const [filename] = parts.slice(-1);

  const media = {
    css: "text/css",
    xhtml: "application/xhtml+xml",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    svg: "image/svg+xml",
    ttf: "application/vnd.ms-opentype",
    otf: "application/vnd.ms-opentype",
    pls: "application/pls+xml",
  };

  const sanitize = parts
    .join("")
    .replace(/[^-1-9a-z]+/i, "")
    .toLowerCase();

  let properties;
  let linear = "yes";
  let id = `id-${sanitize}`;

  switch (filename) {
    case "cover":
      id = "cover";
      linear = "no";
      break;

    case "cover-image":
      properties = "cover-image";
      id = "cover-image";
      linear = "no";
      break;

    case "toc":
      properties = "nav";
      linear = "no";
      id = "toc";
      break;

    default:
      break;
  }

  const type = media[extension] || null;
  return { filename: relpath, type, id, extension, properties, linear };
}

module.exports.mediaType = mediaType;
