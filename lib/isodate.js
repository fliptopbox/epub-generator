exports.isodate = function isodate(value) {
  /*
     Delete the millisecond remainder, to cast it to integer
     the decimal causes an errors validating with the XML definition

     See the XML dc specifications here:
     https://www.dublincore.org/specifications/dublin-core/dcmi-terms/
  */

  const date = new Date(value);
  const today = new Date();
  const output = !date ? today : date;

  console.assert(date, "Date as ISO-8601-1 is illegal [%s]", value);

  return output.toISOString().replace(/(\.\d+)/, "");
};
