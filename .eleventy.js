module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/_assets");
  eleventyConfig.addPassthroughCopy("src/browserconfig.xml");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/manifest.json");

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
