import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';

export default async function(eleventyConfig) {
	const { DateTime } = await import("luxon")
	eleventyConfig.addPassthroughCopy("static");
	eleventyConfig.addPassthroughCopy("CNAME");
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  	});
	eleventyConfig.setServerOptions({
    	port: 8081,
  	});
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// which file extensions to process
		extensions: 'html',
		// optional, output image formats
		formats: ['jpg', 'webp'],
		// optional, output image widths
		widths: ['auto', 400, 800],
		// optional, attributes assigned on <img> override these values.
		defaultAttributes: {
			loading: 'lazy',
			sizes: 'auto',
			decoding: 'async',
		},
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
  
  
