
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/khulafaurrasyidin/Documents/Research/rasyidin-web-gatsbyJs/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/khulafaurrasyidin/Documents/Research/rasyidin-web-gatsbyJs/src/pages/blog.js")),
  "component---src-pages-categories-js": preferDefault(require("/Users/khulafaurrasyidin/Documents/Research/rasyidin-web-gatsbyJs/src/pages/categories.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/khulafaurrasyidin/Documents/Research/rasyidin-web-gatsbyJs/src/pages/index.js")),
  "component---src-pages-publications-js": preferDefault(require("/Users/khulafaurrasyidin/Documents/Research/rasyidin-web-gatsbyJs/src/pages/publications.js")),
  "component---src-pages-tags-js": preferDefault(require("/Users/khulafaurrasyidin/Documents/Research/rasyidin-web-gatsbyJs/src/pages/tags.js")),
  "component---src-templates-category-js": preferDefault(require("/Users/khulafaurrasyidin/Documents/Research/rasyidin-web-gatsbyJs/src/templates/category.js")),
  "component---src-templates-page-js": preferDefault(require("/Users/khulafaurrasyidin/Documents/Research/rasyidin-web-gatsbyJs/src/templates/page.js")),
  "component---src-templates-post-js": preferDefault(require("/Users/khulafaurrasyidin/Documents/Research/rasyidin-web-gatsbyJs/src/templates/post.js")),
  "component---src-templates-tag-js": preferDefault(require("/Users/khulafaurrasyidin/Documents/Research/rasyidin-web-gatsbyJs/src/templates/tag.js"))
}

