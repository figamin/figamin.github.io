export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("static");
	eleventyConfig.addPassthroughCopy("src/CNAME");
};
export const config = {
	htmlTemplateEngine: "njk",
	dir: {
	  input: "src",
	  output: "public",
	  includes: "../_includes"
	}
  };
  
  
