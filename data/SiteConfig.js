const config = {
  siteTitle: 'Khulafaur Rasyidin',
  siteTitleShort: 'Khulafaurrr',
  siteTitleAlt: 'Khulafaurrr',
  siteLogo: '/logos/newlogo-1024.png',
  siteUrl: 'https://codesbandit.netlify.app',
  repo: 'https://github.com/messidiq/test',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Catatan Khulafaur Rasyidin',
  // siteRss: '/rss.xml',
  googleAnalyticsID: 'G-XKC1ZFJ8P8',
  postDefaultCategoryID: 'Tech',
  // newsletter: 'https://taniarascia.substack.com',
  // newsletterEmbed: 'https://taniarascia.substack.com/embed',
  userName: 'Khulafaurrr',
  userEmail: 'khulafaur@rasyid.in',
  userTwitter: 'codesbandit',
  menuLinks: [
    {
      name: 'Tentang Saya',
      link: '/me/',
    },
    {
      name: 'Blog',
      link: '/blog/',
    },
    // {
    //   name: 'Newsletter',
    //   link: '/newsletter/',
    // },

  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config