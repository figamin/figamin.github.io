
export default async function(eleventyConfig) {
	const { DateTime } = await import("luxon")
	eleventyConfig.addPassthroughCopy("static");
	eleventyConfig.addPassthroughCopy("CNAME");
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  	});
	
};
export const config = {
	htmlTemplateEngine: "njk",
	dir: {
	  input: "src",
	  output: "public",
	  includes: "../_includes"
	}
  };
  
  
