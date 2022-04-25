function spine(data) {
  const items = data
    .filter(({ extension }) => extension == "xhtml")
    .map(({ id, linear }) => `<itemref idref="${id}" linear="${linear}" />`);
  console.log("Completed spine", items)
  return items;
}

module.exports.spine = spine;

function manifest(data) {
  const items = data.map((r) => {
    const { id, type, filename = "", properties } = r;
    const props = properties ? `properties="${properties}"` : "";
    return `<item media-type="${type}" id="${id}" ${props} href="${filename}" />`;
  });
  console.log("Completed manifest", items)
  return items;
}

module.exports.manifest = manifest;
