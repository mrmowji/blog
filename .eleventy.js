module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/browserconfig.xml");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addFilter("persianDate", function (value) {
    return value.toISOString().split("T")[0].replace(/\-/g, "/");
    //return value.toLocaleDateString('fa-IR');
  });

  eleventyConfig.addFilter("isoDate", function (value) {
    return value.toISOString();
    //return value.toLocaleDateString('fa-IR');
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
