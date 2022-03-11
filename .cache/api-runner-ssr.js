var plugins = [{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/khulafaurrasyidin/Documents/Research/RASYID.IN/dev-blog/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-remark-autolink-headers',
      plugin: require('/Users/khulafaurrasyidin/Documents/Research/RASYID.IN/dev-blog/node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js'),
      options: {"plugins":[],"offsetY":"100","maintainCase":false,"removeAccents":true},
    },{
      name: 'gatsby-plugin-google-analytics',
      plugin: require('/Users/khulafaurrasyidin/Documents/Research/RASYID.IN/dev-blog/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"UA-42068444-1"},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/Users/khulafaurrasyidin/Documents/Research/RASYID.IN/dev-blog/node_modules/gatsby-plugin-sitemap/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/khulafaurrasyidin/Documents/Research/RASYID.IN/dev-blog/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"Khulafaur Rasyidin","short_name":"Khulafaurrr","description":"Catatan Khulafaur Rasyidin","start_url":"/","background_color":"#ffffff","theme_color":"#3F80FF","display":"minimal-ui","icons":[{"src":"/logos/newlogo-48.png","sizes":"48x48","type":"image/png"},{"src":"/logos/newlogo-1024.png","sizes":"1024x1024","type":"image/png"}]},
    },{
      name: 'gatsby-plugin-feed',
      plugin: require('/Users/khulafaurrasyidin/Documents/Research/RASYID.IN/dev-blog/node_modules/gatsby-plugin-feed/gatsby-ssr.js'),
      options: {"plugins":[],"query":"\n        {\n          site {\n            siteMetadata {\n              rssMetadata {\n                site_url\n                feed_url\n                title\n                description\n                image_url\n              }\n            }\n          }\n        }\n      ","feeds":[{"query":"\n            {\n              allMarkdownRemark(\n                limit: 1000,\n                sort: { order: DESC, fields: [fields___date] },\n                filter: { frontmatter: { template: { eq: \"post\" } } }\n              ) {\n                edges {\n                  node {\n                    excerpt(pruneLength: 180)\n                    html\n                    timeToRead\n                    fields {\n                      slug\n                      date\n                    }\n                    frontmatter {\n                      title\n                      date\n                      categories\n                      tags\n                      template\n                    }\n                  }\n                }\n              }\n            }\n          ","output":"/rss.xml","title":"Muhamamd Shiddiq - RSS Feed"}]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
