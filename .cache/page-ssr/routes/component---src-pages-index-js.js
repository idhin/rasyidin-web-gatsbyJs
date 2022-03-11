exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./data/SiteConfig.js":
/*!****************************!*\
  !*** ./data/SiteConfig.js ***!
  \****************************/
/***/ ((module) => {

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
  siteDescription: 'Catatan Khulafaur Rasyidin',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  postDefaultCategoryID: 'Tech',
  newsletter: 'https://taniarascia.substack.com',
  newsletterEmbed: 'https://taniarascia.substack.com/embed',
  userName: 'Khulafaurrr',
  userEmail: 'khulafaur@rasyid.in',
  userTwitter: 'codesbandit',
  menuLinks: [{
    name: 'Me',
    link: '/me/'
  }, {
    name: 'Blog',
    link: '/blog/'
  }, {
    name: 'Newsletter',
    link: '/newsletter/'
  }],
  themeColor: '#3F80FF',
  // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff'
}; // Make sure pathPrefix is empty if not needed

if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
} // Make sure siteUrl doesn't have an ending forward slash


if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1); // Make sure siteRss has a starting forward slash

if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;
module.exports = config;

/***/ }),

/***/ "./data/podcasts.js":
/*!**************************!*\
  !*** ./data/podcasts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _content_images_egghead_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content/images/egghead.png */ "./content/images/egghead.png");
/* harmony import */ var _content_thumbnails_hashnode_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/thumbnails/hashnode.svg */ "./content/thumbnails/hashnode.svg");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  title: 'Switching Careers and Learning in Public - with Joel Hooks of Egghead.io',
  path: 'https://egghead.io/podcasts/switching-careers-and-learning-in-public-with-tania-rascia',
  img: _content_images_egghead_png__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  title: 'Woman in Tech: Tania Rascia - with Bolaji Ayodeji of Hashnode',
  path: 'https://townhall.hashnode.com/women-in-tech-tania-rascia-ck2bfzn2100up3is10zhphol4',
  img: _content_thumbnails_hashnode_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
}]);

/***/ }),

/***/ "./data/projects.js":
/*!**************************!*\
  !*** ./data/projects.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  icon: '📝',
  title: 'TakeNote',
  path: 'https://takenote.dev',
  source: 'https://github.com/taniarascia/takenote',
  description: 'A free, open source notes app for the web.'
}, {
  icon: '🌙',
  title: 'New Moon',
  path: 'https://taniarascia.github.io/new-moon/',
  source: 'https://github.com/taniarascia/new-moon/',
  description: 'The optimized dark theme for web development. Your new favorite theme.'
}, {
  icon: '🎮',
  title: 'Chip8.js',
  path: 'https://taniarascia.github.io/chip8/',
  source: 'https://github.com/taniarascia/chip8/',
  description: 'A Chip-8 emulator written in JavaScript for terminal and the browser.'
}, {
  icon: '🔱',
  title: 'MVC.js',
  path: 'https://taniarascia.github.io/mvc/',
  source: 'https://github.com/taniarascia/mvc/',
  description: 'A simple Todo MVC application in plain JavaScript.'
}, {
  icon: '🏺',
  title: 'Laconia',
  path: 'https://laconia.dev',
  source: 'https://github.com/taniarascia/laconia/',
  description: 'A modern PHP MVC framework written without libraries or frameworks.'
}, {
  icon: '⛏️',
  title: ' Primitive',
  path: 'https://taniarascia.github.io/primitive/',
  source: 'https://github.com/taniarascia/primitive/',
  description: 'A minimalist front-end design toolkit built with Sass for developing responsive, browser-consistent web apps.'
}, {
  icon: '🐍',
  title: 'Snek.js',
  source: 'https://github.com/taniarascia/snek/',
  description: 'A terminal-based Snake implementation written in JavaScript (Node.js).'
}, {
  icon: '📦',
  title: 'Webpack Boilerplate',
  source: 'https://github.com/taniarascia/webpack-boilerplate',
  description: 'A sensible Webpack 4 boilerplate with with Babel, Sass, ESLint, HMR, and prod/dev optimization.'
}, {
  icon: '💾',
  title: 'tania.dev',
  source: 'https://github.com/taniarascia/taniarascia.com/',
  description: 'Personal theme for Gatsby (the source of this website).'
}]);

/***/ }),

/***/ "./data/quotes.js":
/*!************************!*\
  !*** ./data/quotes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  name: 'Craig',
  quote: `It's no exaggeration to say that I
  wouldn't currently have a job in development without this site. So thanks for
  ruining my life, Tania.`
}, {
  name: 'Lori',
  quote: `Not to get too dramatic, but I find your site to be an unspeakably beautiful
  lifeboat in an overwhelming sea of technical jargon and shite.`
}, {
  name: 'Evan',
  quote: `You taught me more than any class could have and it took me a fraction of the time because of how clearly you write and teach.`
}, {
  name: 'Zuzana',
  quote: `I keep coming back to your website and I appreciate it more and more every time. The way you explain things just make sense!`
}, {
  name: 'P.P.',
  quote: `You are the best tutor I have ever seen in my life. This tutorial is an excellent example of simplicity, clear explanations and detailed examples. I love every bit of your work. Never stop teaching, please.`
}, {
  name: 'Antony',
  quote: 'Just wanted to thank you for your awesome tutorials. Glad you found your niche, teaching valuable skills to so many folks out there, instead of preparing fine meals for a select few.'
}]);

/***/ }),

/***/ "./data/speaking.js":
/*!**************************!*\
  !*** ./data/speaking.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _content_thumbnails_wp_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content/thumbnails/wp.png */ "./content/thumbnails/wp.png");
/* harmony import */ var _content_thumbnails_react_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/thumbnails/react.png */ "./content/thumbnails/react.png");
/* harmony import */ var _content_thumbnails_vue_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/thumbnails/vue.png */ "./content/thumbnails/vue.png");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  title: 'Getting Started with Vue - Chicago JavaScript',
  path: 'https://www.youtube.com/watch?v=FPVI1wd7Uo0',
  img: _content_thumbnails_vue_png__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  title: 'An Introduction to React - Chicago JavaScript',
  path: 'https://www.youtube.com/watch?v=35-WmqaQCj8&t',
  img: _content_thumbnails_react_png__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  title: 'Developing a WordPress Theme from Scratch - WordCamp Chicago',
  path: 'https://wordpress.tv/2017/08/30/tania-rascia-how-to-develop-a-wordpress-theme-from-scratch/',
  img: _content_thumbnails_wp_png__WEBPACK_IMPORTED_MODULE_0__["default"]
}]);

/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var logDeprecationNotice = function logDeprecationNotice(prop, replacement) {
  if (false) {}

  console.log("\n    The \"" + prop + "\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");

  if (replacement) {
    console.log("Please use " + replacement + " instead of \"" + prop + "\".");
  }
}; // Handle legacy props during their deprecation phase


var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends2.default)({}, props);
  var resolutions = convertedProps.resolutions,
      sizes = convertedProps.sizes,
      critical = convertedProps.critical;

  if (resolutions) {
    convertedProps.fixed = resolutions;
    delete convertedProps.resolutions;
  }

  if (sizes) {
    convertedProps.fluid = sizes;
    delete convertedProps.sizes;
  }

  if (critical) {
    logDeprecationNotice("critical", "the native \"loading\" attribute");
    convertedProps.loading = "eager";
  } // convert fluid & fixed to arrays so we only have to work with arrays


  if (convertedProps.fluid) {
    convertedProps.fluid = groupByMedia([].concat(convertedProps.fluid));
  }

  if (convertedProps.fixed) {
    convertedProps.fixed = groupByMedia([].concat(convertedProps.fixed));
  }

  return convertedProps;
};
/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */


var hasArtDirectionSupport = function hasArtDirectionSupport(currentData) {
  return !!currentData && Array.isArray(currentData) && currentData.some(function (image) {
    return typeof image.media !== "undefined";
  });
};
/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */


var matchesMedia = function matchesMedia(_ref) {
  var media = _ref.media;
  return media ? isBrowser && !!window.matchMedia(media).matches : false;
};
/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string}
 */


var getImageSrcKey = function getImageSrcKey(_ref2) {
  var fluid = _ref2.fluid,
      fixed = _ref2.fixed;
  var data = fluid ? getCurrentSrcData(fluid) : getCurrentSrcData(fixed);
  return data.src;
};
/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[]}   The fluid or fixed image array.
 * @return {{src: string, media?: string}}
 */


var getCurrentSrcData = function getCurrentSrcData(currentData) {
  if (isBrowser && hasArtDirectionSupport(currentData)) {
    // Do we have an image for the current Viewport?
    var foundMedia = currentData.findIndex(matchesMedia);

    if (foundMedia !== -1) {
      return currentData[foundMedia];
    } // No media matches, select first element without a media condition


    var noMedia = currentData.findIndex(function (image) {
      return typeof image.media === "undefined";
    });

    if (noMedia !== -1) {
      return currentData[noMedia];
    }
  } // Else return the first image.


  return currentData[0];
}; // Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.


var imageCache = Object.create({});

var inImageCache = function inImageCache(props) {
  var convertedProps = convertProps(props); // Find src

  var src = getImageSrcKey(convertedProps);
  return imageCache[src] || false;
};

var activateCacheForImage = function activateCacheForImage(props) {
  var convertedProps = convertProps(props); // Find src

  var src = getImageSrcKey(convertedProps);
  imageCache[src] = true;
}; // Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/


var hasNativeLazyLoadSupport = typeof HTMLImageElement !== "undefined" && "loading" in HTMLImageElement.prototype;
var isBrowser = typeof window !== "undefined";
var hasIOSupport = isBrowser && window.IntersectionObserver;
var io;
var listeners = new WeakMap();

function getIO() {
  if (typeof io === "undefined" && typeof window !== "undefined" && window.IntersectionObserver) {
    io = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (listeners.has(entry.target)) {
          var cb = listeners.get(entry.target); // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0

          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            io.unobserve(entry.target);
            listeners.delete(entry.target);
            cb();
          }
        }
      });
    }, {
      rootMargin: "200px"
    });
  }

  return io;
}

function generateImageSources(imageVariants) {
  return imageVariants.map(function (_ref3) {
    var src = _ref3.src,
        srcSet = _ref3.srcSet,
        srcSetWebp = _ref3.srcSetWebp,
        media = _ref3.media,
        sizes = _ref3.sizes;
    return _react.default.createElement(_react.default.Fragment, {
      key: src
    }, srcSetWebp && _react.default.createElement("source", {
      type: "image/webp",
      media: media,
      srcSet: srcSetWebp,
      sizes: sizes
    }), _react.default.createElement("source", {
      media: media,
      srcSet: srcSet,
      sizes: sizes
    }));
  });
} // Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions


function groupByMedia(imageVariants) {
  var withMedia = [];
  var without = [];
  imageVariants.forEach(function (variant) {
    return (variant.media ? withMedia : without).push(variant);
  });

  if (without.length > 1 && "development" !== "production") {
    console.warn("We've found " + without.length + " sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");
  }

  return [].concat(withMedia, without);
}

function generateTracedSVGSources(imageVariants) {
  return imageVariants.map(function (_ref4) {
    var src = _ref4.src,
        media = _ref4.media,
        tracedSVG = _ref4.tracedSVG;
    return _react.default.createElement("source", {
      key: src,
      media: media,
      srcSet: tracedSVG
    });
  });
}

function generateBase64Sources(imageVariants) {
  return imageVariants.map(function (_ref5) {
    var src = _ref5.src,
        media = _ref5.media,
        base64 = _ref5.base64;
    return _react.default.createElement("source", {
      key: src,
      media: media,
      srcSet: base64
    });
  });
}

function generateNoscriptSource(_ref6, isWebp) {
  var srcSet = _ref6.srcSet,
      srcSetWebp = _ref6.srcSetWebp,
      media = _ref6.media,
      sizes = _ref6.sizes;
  var src = isWebp ? srcSetWebp : srcSet;
  var mediaAttr = media ? "media=\"" + media + "\" " : "";
  var typeAttr = isWebp ? "type='image/webp' " : "";
  var sizesAttr = sizes ? "sizes=\"" + sizes + "\" " : "";
  return "<source " + typeAttr + mediaAttr + "srcset=\"" + src + "\" " + sizesAttr + "/>";
}

function generateNoscriptSources(imageVariants) {
  return imageVariants.map(function (variant) {
    return (variant.srcSetWebp ? generateNoscriptSource(variant, true) : "") + generateNoscriptSource(variant);
  }).join("");
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getIO();

  if (observer) {
    observer.observe(el);
    listeners.set(el, cb);
  }

  return function () {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

var noscriptImg = function noscriptImg(props) {
  // Check if prop exists before adding each attribute to the string output below to prevent
  // HTML validation issues caused by empty values like width="" and height=""
  var src = props.src ? "src=\"" + props.src + "\" " : "src=\"\" "; // required attribute

  var sizes = props.sizes ? "sizes=\"" + props.sizes + "\" " : "";
  var srcSet = props.srcSet ? "srcset=\"" + props.srcSet + "\" " : "";
  var title = props.title ? "title=\"" + props.title + "\" " : "";
  var alt = props.alt ? "alt=\"" + props.alt + "\" " : "alt=\"\" "; // required attribute

  var width = props.width ? "width=\"" + props.width + "\" " : "";
  var height = props.height ? "height=\"" + props.height + "\" " : "";
  var crossOrigin = props.crossOrigin ? "crossorigin=\"" + props.crossOrigin + "\" " : "";
  var loading = props.loading ? "loading=\"" + props.loading + "\" " : "";
  var draggable = props.draggable ? "draggable=\"" + props.draggable + "\" " : "";
  var sources = generateNoscriptSources(props.imageVariants);
  return "<picture>" + sources + "<img " + loading + width + height + sizes + srcSet + src + alt + title + crossOrigin + draggable + "style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";
}; // Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release


var Placeholder = _react.default.forwardRef(function (props, ref) {
  var src = props.src,
      imageVariants = props.imageVariants,
      generateSources = props.generateSources,
      spreadProps = props.spreadProps,
      ariaHidden = props.ariaHidden;

  var baseImage = _react.default.createElement(Img, (0, _extends2.default)({
    ref: ref,
    src: src
  }, spreadProps, {
    ariaHidden: ariaHidden
  }));

  return imageVariants.length > 1 ? _react.default.createElement("picture", null, generateSources(imageVariants), baseImage) : baseImage;
});

var Img = _react.default.forwardRef(function (props, ref) {
  var sizes = props.sizes,
      srcSet = props.srcSet,
      src = props.src,
      style = props.style,
      onLoad = props.onLoad,
      onError = props.onError,
      loading = props.loading,
      draggable = props.draggable,
      ariaHidden = props.ariaHidden,
      otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["sizes", "srcSet", "src", "style", "onLoad", "onError", "loading", "draggable", "ariaHidden"]);
  return _react.default.createElement("img", (0, _extends2.default)({
    "aria-hidden": ariaHidden,
    sizes: sizes,
    srcSet: srcSet,
    src: src
  }, otherProps, {
    onLoad: onLoad,
    onError: onError,
    ref: ref,
    loading: loading,
    draggable: draggable,
    style: (0, _extends2.default)({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }, style)
  }));
});

Img.propTypes = {
  style: _propTypes.default.object,
  onError: _propTypes.default.func,
  onLoad: _propTypes.default.func
};

var Image = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(Image, _React$Component);

  function Image(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.

    _this.seenBefore = isBrowser && inImageCache(props);
    _this.isCritical = props.loading === "eager" || props.critical;
    _this.addNoScript = !(_this.isCritical && !props.fadeIn);
    _this.useIOSupport = !hasNativeLazyLoadSupport && hasIOSupport && !_this.isCritical && !_this.seenBefore;
    var isVisible = _this.isCritical || isBrowser && (hasNativeLazyLoadSupport || !_this.useIOSupport);
    _this.state = {
      isVisible: isVisible,
      imgLoaded: false,
      imgCached: false,
      fadeIn: !_this.seenBefore && props.fadeIn
    };
    _this.imageRef = _react.default.createRef();
    _this.placeholderRef = props.placeholderRef || _react.default.createRef();
    _this.handleImageLoaded = _this.handleImageLoaded.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = Image.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.state.isVisible && typeof this.props.onStartLoad === "function") {
      this.props.onStartLoad({
        wasCached: inImageCache(this.props)
      });
    }

    if (this.isCritical) {
      var img = this.imageRef.current;

      if (img && img.complete) {
        this.handleImageLoaded();
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.cleanUpListeners) {
      this.cleanUpListeners();
    }
  } // Specific to IntersectionObserver based lazy-load support
  ;

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.useIOSupport && ref) {
      this.cleanUpListeners = listenToIntersections(ref, function () {
        var imageInCache = inImageCache(_this2.props);

        if (!_this2.state.isVisible && typeof _this2.props.onStartLoad === "function") {
          _this2.props.onStartLoad({
            wasCached: imageInCache
          });
        } // imgCached and imgLoaded must update after isVisible,
        // Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
        // imgLoaded and imgCached are in a 2nd setState call to be changed together,
        // avoiding initiating unnecessary animation frames from style changes.


        _this2.setState({
          isVisible: true
        }, function () {
          _this2.setState({
            imgLoaded: imageInCache,
            // `currentSrc` should be a string, but can be `undefined` in IE,
            // !! operator validates the value is not undefined/null/""
            // for lazyloaded components this might be null
            // TODO fix imgCached behaviour as it's now false when it's lazyloaded
            imgCached: !!(_this2.imageRef.current && _this2.imageRef.current.currentSrc)
          });
        });
      });
    }
  };

  _proto.handleImageLoaded = function handleImageLoaded() {
    activateCacheForImage(this.props);
    this.setState({
      imgLoaded: true
    });

    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };

  _proto.render = function render() {
    var _convertProps = convertProps(this.props),
        title = _convertProps.title,
        alt = _convertProps.alt,
        className = _convertProps.className,
        _convertProps$style = _convertProps.style,
        style = _convertProps$style === void 0 ? {} : _convertProps$style,
        _convertProps$imgStyl = _convertProps.imgStyle,
        imgStyle = _convertProps$imgStyl === void 0 ? {} : _convertProps$imgStyl,
        _convertProps$placeho = _convertProps.placeholderStyle,
        placeholderStyle = _convertProps$placeho === void 0 ? {} : _convertProps$placeho,
        placeholderClassName = _convertProps.placeholderClassName,
        fluid = _convertProps.fluid,
        fixed = _convertProps.fixed,
        backgroundColor = _convertProps.backgroundColor,
        durationFadeIn = _convertProps.durationFadeIn,
        Tag = _convertProps.Tag,
        itemProp = _convertProps.itemProp,
        loading = _convertProps.loading,
        draggable = _convertProps.draggable;

    var shouldReveal = this.state.fadeIn === false || this.state.imgLoaded;
    var shouldFadeIn = this.state.fadeIn === true && !this.state.imgCached;
    var imageStyle = (0, _extends2.default)({
      opacity: shouldReveal ? 1 : 0,
      transition: shouldFadeIn ? "opacity " + durationFadeIn + "ms" : "none"
    }, imgStyle);
    var bgColor = typeof backgroundColor === "boolean" ? "lightgray" : backgroundColor;
    var delayHideStyle = {
      transitionDelay: durationFadeIn + "ms"
    };
    var imagePlaceholderStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded ? 0 : 1
    }, shouldFadeIn && delayHideStyle, {}, imgStyle, {}, placeholderStyle);
    var placeholderImageProps = {
      title: title,
      alt: !this.state.isVisible ? alt : "",
      style: imagePlaceholderStyle,
      className: placeholderClassName,
      itemProp: itemProp
    };

    if (fluid) {
      var imageVariants = fluid;
      var image = getCurrentSrcData(fluid);
      return _react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: (0, _extends2.default)({
          position: "relative",
          overflow: "hidden"
        }, style),
        ref: this.handleRef,
        key: "fluid-" + JSON.stringify(image.srcSet)
      }, _react.default.createElement(Tag, {
        "aria-hidden": true,
        style: {
          width: "100%",
          paddingBottom: 100 / image.aspectRatio + "%"
        }
      }), bgColor && _react.default.createElement(Tag, {
        "aria-hidden": true,
        title: title,
        style: (0, _extends2.default)({
          backgroundColor: bgColor,
          position: "absolute",
          top: 0,
          bottom: 0,
          opacity: !this.state.imgLoaded ? 1 : 0,
          right: 0,
          left: 0
        }, shouldFadeIn && delayHideStyle)
      }), image.base64 && _react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.base64,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateBase64Sources
      }), image.tracedSVG && _react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.tracedSVG,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateTracedSVGSources
      }), this.state.isVisible && _react.default.createElement("picture", null, generateImageSources(imageVariants), _react.default.createElement(Img, {
        alt: alt,
        title: title,
        sizes: image.sizes,
        src: image.src,
        crossOrigin: this.props.crossOrigin,
        srcSet: image.srcSet,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError,
        itemProp: itemProp,
        loading: loading,
        draggable: draggable
      })), this.addNoScript && _react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title,
            loading: loading
          }, image, {
            imageVariants: imageVariants
          }))
        }
      }));
    }

    if (fixed) {
      var _imageVariants = fixed;

      var _image = getCurrentSrcData(fixed);

      var divStyle = (0, _extends2.default)({
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        width: _image.width,
        height: _image.height
      }, style);

      if (style.display === "inherit") {
        delete divStyle.display;
      }

      return _react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: divStyle,
        ref: this.handleRef,
        key: "fixed-" + JSON.stringify(_image.srcSet)
      }, bgColor && _react.default.createElement(Tag, {
        "aria-hidden": true,
        title: title,
        style: (0, _extends2.default)({
          backgroundColor: bgColor,
          width: _image.width,
          opacity: !this.state.imgLoaded ? 1 : 0,
          height: _image.height
        }, shouldFadeIn && delayHideStyle)
      }), _image.base64 && _react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: _image.base64,
        spreadProps: placeholderImageProps,
        imageVariants: _imageVariants,
        generateSources: generateBase64Sources
      }), _image.tracedSVG && _react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: _image.tracedSVG,
        spreadProps: placeholderImageProps,
        imageVariants: _imageVariants,
        generateSources: generateTracedSVGSources
      }), this.state.isVisible && _react.default.createElement("picture", null, generateImageSources(_imageVariants), _react.default.createElement(Img, {
        alt: alt,
        title: title,
        width: _image.width,
        height: _image.height,
        sizes: _image.sizes,
        src: _image.src,
        crossOrigin: this.props.crossOrigin,
        srcSet: _image.srcSet,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError,
        itemProp: itemProp,
        loading: loading,
        draggable: draggable
      })), this.addNoScript && _react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title,
            loading: loading
          }, _image, {
            imageVariants: _imageVariants
          }))
        }
      }));
    }

    return null;
  };

  return Image;
}(_react.default.Component);

Image.defaultProps = {
  fadeIn: true,
  durationFadeIn: 500,
  alt: "",
  Tag: "div",
  // We set it to `lazy` by default because it's best to default to a performant
  // setting and let the user "opt out" to `eager`
  loading: "lazy"
};

var fixedObject = _propTypes.default.shape({
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  media: _propTypes.default.string
});

var fluidObject = _propTypes.default.shape({
  aspectRatio: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  sizes: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  media: _propTypes.default.string
}); // If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props


Image.propTypes = {
  resolutions: fixedObject,
  sizes: fluidObject,
  fixed: _propTypes.default.oneOfType([fixedObject, _propTypes.default.arrayOf(fixedObject)]),
  fluid: _propTypes.default.oneOfType([fluidObject, _propTypes.default.arrayOf(fluidObject)]),
  fadeIn: _propTypes.default.bool,
  durationFadeIn: _propTypes.default.number,
  title: _propTypes.default.string,
  alt: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  // Support Glamor's css prop.
  critical: _propTypes.default.bool,
  crossOrigin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  style: _propTypes.default.object,
  imgStyle: _propTypes.default.object,
  placeholderStyle: _propTypes.default.object,
  placeholderClassName: _propTypes.default.string,
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func,
  onStartLoad: _propTypes.default.func,
  Tag: _propTypes.default.string,
  itemProp: _propTypes.default.string,
  loading: _propTypes.default.oneOf(["auto", "lazy", "eager"]),
  draggable: _propTypes.default.bool
};
var _default = Image;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _content_thumbnails_facebook_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content/thumbnails/facebook.png */ "./content/thumbnails/facebook.png");
/* harmony import */ var _content_thumbnails_gatsby_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../content/thumbnails/gatsby.png */ "./content/thumbnails/gatsby.png");
/* harmony import */ var _content_thumbnails_instagram_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../content/thumbnails/instagram.png */ "./content/thumbnails/instagram.png");





class Footer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
      className: "footer container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://gatsbyjs.org",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Build with Gatsby JS + AWS Amplify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://instagram.com/khulafaurrr",
      title: "Instagram"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: _content_thumbnails_instagram_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      target: "_blank",
      rel: "noopener noreferrer",
      className: "footer-img",
      alt: "Instagram"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://gatsbyjs.org",
      title: "By Gatsby JS"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: _content_thumbnails_gatsby_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      target: "_blank",
      rel: "noopener noreferrer",
      className: "footer-img",
      alt: "Gatsby JS"
    }))));
  }

}

/***/ }),

/***/ "./src/components/Navigation.js":
/*!**************************************!*\
  !*** ./src/components/Navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _images_floppy_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/floppy.png */ "./src/images/floppy.png");
/* harmony import */ var _images_sun_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sun.svg */ "./src/images/sun.svg");
/* harmony import */ var _images_moon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/moon.svg */ "./src/images/moon.svg");
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/ThemeContext */ "./src/context/ThemeContext.js");






class Navigation extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      scrolled: false
    };

    this.navOnScroll = () => {
      if (window.scrollY > 20) {
        this.setState({
          scrolled: true
        });
      } else {
        this.setState({
          scrolled: false
        });
      }
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll);
  }

  render() {
    const {
      scrolled
    } = this.state;
    const {
      menuLinks
    } = this.props;
    const theme = this.context;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
      className: scrolled ? 'nav scroll' : 'nav'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "nav-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "brand"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: _images_floppy_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      className: "favicon",
      alt: "Floppy Diskette"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text"
    }, "Khulafaur Rasyidin"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "links"
    }, menuLinks.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      key: link.name,
      to: link.link,
      activeClassName: "active"
    }, link.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "cta"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "dark-switcher",
      onClick: theme.toggleDark,
      "aria-label": "Toggle Dark Mode.",
      title: "Toggle Dark Mode"
    }, theme.dark ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: _images_sun_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
      className: "theme-icon",
      alt: "Light Mode"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: _images_moon_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
      className: "theme-icon",
      alt: "Dark Mode"
    })))));
  }

}
Navigation.contextType = _context_ThemeContext__WEBPACK_IMPORTED_MODULE_5__["default"];

/***/ }),

/***/ "./src/components/PostListing.js":
/*!***************************************!*\
  !*** ./src/components/PostListing.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostListing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/global */ "./src/utils/global.js");





class PostListing extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  getPostList() {
    const {
      postEdges
    } = this.props;
    const postList = postEdges.map(postEdge => {
      return {
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        thumbnail: postEdge.node.frontmatter.thumbnail,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        categories: postEdge.node.frontmatter.categories
      };
    });
    return postList;
  }

  render() {
    const {
      simple
    } = this.props;
    const postList = this.getPostList();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      className: `posts ${simple ? 'simple' : ''}`
    }, postList.map(post => {
      let thumbnail;

      if (post.thumbnail) {
        thumbnail = post.thumbnail.childImageSharp.fixed;
      }

      const popular = post.categories.includes('Popular');
      const date = (0,_utils_global__WEBPACK_IMPORTED_MODULE_4__.formatDate)(post.date);
      const newest = moment__WEBPACK_IMPORTED_MODULE_3___default()(post.date) > moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(1, 'months');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: post.path,
        key: post.title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "each"
      }, thumbnail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fixed: thumbnail
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "each-list-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, post.title), !simple && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "datetime"
      }, date)), newest && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "alert"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "new"
      }, "New!")), popular && !simple && !newest && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "alert"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "popular"
      }, "Popular"))));
    }));
  }

}

/***/ }),

/***/ "./src/components/ProjectListing.js":
/*!******************************************!*\
  !*** ./src/components/ProjectListing.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectListing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_github_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-github-btn */ "./node_modules/react-github-btn/index.js");


class ProjectListing extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      projects
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      className: "projects"
    }, projects.map(project => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "each",
      key: project.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "project-link",
      href: project.source,
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "project-icon"
    }, project.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "project-title"
    }, project.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, project.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "buttons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_github_btn__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: project.source,
      "data-size": "large",
      "data-show-count": "true"
    }, "Source"), project.path && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "button",
      href: project.path,
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Link")))));
  }

}

/***/ }),

/***/ "./src/components/SEO.js":
/*!*******************************!*\
  !*** ./src/components/SEO.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SEO)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3__);




class SEO extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const replacePath = path => path === `/` ? path : path.replace(/\/$/, ``);

    const {
      postNode,
      postPath,
      postSEO
    } = this.props;
    let title;
    let description;
    let image = '';
    let postURL;

    if (postSEO) {
      const postMeta = postNode.frontmatter;
      title = postMeta.title;
      description = postMeta.description ? postMeta.description : postNode.excerpt;

      if (postMeta.thumbnail) {
        image = postMeta.thumbnail.childImageSharp.fixed.src;
      }

      postURL = url_join__WEBPACK_IMPORTED_MODULE_2___default()((_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteUrl), replacePath(postPath));
    } else {
      title = (_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteTitle);
      description = (_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteDescription);
      image = (_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteLogo);
    }

    image = url_join__WEBPACK_IMPORTED_MODULE_2___default()((_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteUrl), image);
    const blogURL = url_join__WEBPACK_IMPORTED_MODULE_2___default()((_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteUrl), (_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().pathPrefix));
    const schemaOrgJSONLD = [{
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: (_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteTitleAlt) ? (_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteTitleAlt) : ''
    }];

    if (postSEO) {
      schemaOrgJSONLD.push({
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [{
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': postURL,
            name: title,
            image
          }
        }]
      }, {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: blogURL,
        name: title,
        alternateName: (_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteTitleAlt) ? (_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteTitleAlt) : '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image
        },
        description
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      name: "image",
      content: image
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "application/ld+json"
    }, JSON.stringify(schemaOrgJSONLD)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      property: "og:url",
      content: postSEO ? postURL : blogURL
    }), postSEO && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      property: "og:type",
      content: "article"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      property: "og:title",
      content: title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      property: "og:description",
      content: description
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      property: "og:image",
      content: image
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      name: "twitter:creator",
      content: (_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().userTwitter)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      name: "twitter:title",
      content: title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      name: "twitter:description",
      content: description
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      name: "twitter:image",
      content: image
    }));
  }

}

/***/ }),

/***/ "./src/components/SimpleListing.js":
/*!*****************************************!*\
  !*** ./src/components/SimpleListing.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleListing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class SimpleListing extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      data
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      className: "simple-posts"
    }, data.map(post => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: post.path,
        key: post.title,
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "each"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: post.img,
        alt: post.title
      }), post.title)));
    }));
  }

}

/***/ }),

/***/ "./src/context/ThemeContext.js":
/*!*************************************!*\
  !*** ./src/context/ThemeContext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeProvider": () => (/* binding */ ThemeProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const defaultState = {
  dark: false,
  notFound: false,
  toggleDark: () => {}
};
const ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(defaultState);

class ThemeProvider extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      dark: false,
      notFound: false
    };

    this.toggleDark = () => {
      this.setState(prevState => ({
        dark: !prevState.dark
      }));
    };

    this.setNotFound = () => {
      this.setState({
        notFound: true
      });
    };

    this.setFound = () => {
      this.setState({
        notFound: false
      });
    };
  }

  componentDidMount() {
    const lsDark = JSON.parse(localStorage.getItem('dark'));

    if (lsDark) {
      this.setState({
        dark: lsDark
      });
    }
  }

  componentDidUpdate(prevState) {
    const {
      dark
    } = this.state;

    if (prevState.dark !== dark) {
      localStorage.setItem('dark', JSON.stringify(dark));
    }
  }

  render() {
    const {
      children
    } = this.props;
    const {
      dark,
      notFound
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ThemeContext.Provider, {
      value: {
        dark,
        notFound,
        setFound: this.setFound,
        setNotFound: this.setNotFound,
        toggleDark: this.toggleDark
      }
    }, children);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);


/***/ }),

/***/ "./src/layout/index.js":
/*!*****************************!*\
  !*** ./src/layout/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ThemeContext */ "./src/context/ThemeContext.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation */ "./src/components/Navigation.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_favicon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/favicon.png */ "./src/images/favicon.png");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_7__);








class MainLayout extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      dark,
      notFound
    } = this.context;
    const {
      children
    } = this.props;
    let themeClass = '';

    if (dark && !notFound) {
      themeClass = 'dark';
    } else if (notFound) {
      themeClass = 'not-found';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"], {
      bodyAttributes: {
        class: `theme ${themeClass}`
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      name: "description",
      content: (_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default().siteDescription)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
      rel: "shortcut icon",
      type: "image/png",
      href: _images_favicon_png__WEBPACK_IMPORTED_MODULE_6__["default"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      menuLinks: (_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default().menuLinks)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
      id: "main-content"
    }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}
MainLayout.contextType = _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__["default"];

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_github_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-github-btn */ "./node_modules/react-github-btn/index.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout */ "./src/layout/index.js");
/* harmony import */ var _components_PostListing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostListing */ "./src/components/PostListing.js");
/* harmony import */ var _components_ProjectListing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ProjectListing */ "./src/components/ProjectListing.js");
/* harmony import */ var _components_SimpleListing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SimpleListing */ "./src/components/SimpleListing.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/projects */ "./data/projects.js");
/* harmony import */ var _data_speaking__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../data/speaking */ "./data/speaking.js");
/* harmony import */ var _data_podcasts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/podcasts */ "./data/podcasts.js");
/* harmony import */ var _data_quotes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/quotes */ "./data/quotes.js");
/* harmony import */ var _content_images_tania2020crop_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../content/images/tania2020crop.jpg */ "./content/images/tania2020crop.jpg");















class Index extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      data
    } = this.props;
    const latestPostEdges = data.latest.edges;
    const popularPostEdges = data.popular.edges;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: `${(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_9___default().siteDescription)}`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "elevator"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, `Hai, Saya Khulafaur Rasyidin 👋`, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sangat senang jika bisa berbagi opini, ilmu, informasi yang bisa bermanfaat bagi pembacanya, Saya sangat terbuka terhadap segala masukan yang bersifat membangun. Kamu juga dapat menghubungi saya melalui email ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "mailto:khulafaur@rasyid.in"
    }, "khulafaur@rasyid.in"), ". Web ini saya dedikasikan untuk menulis ilmu & pengalaman baik yang sudah saya pelajari dan ketahui."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container front-page"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      className: "section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Latest Articles", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/blog",
      className: "view-all"
    }, "View all")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PostListing__WEBPACK_IMPORTED_MODULE_5__["default"], {
      simple: true,
      postEdges: latestPostEdges
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      className: "section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Talks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SimpleListing__WEBPACK_IMPORTED_MODULE_7__["default"], {
      simple: true,
      data: _data_speaking__WEBPACK_IMPORTED_MODULE_11__["default"]
    }))));
  }

}
const pageQuery = "916544636";

/***/ }),

/***/ "./src/utils/global.js":
/*!*****************************!*\
  !*** ./src/utils/global.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editOnGithub": () => (/* binding */ editOnGithub),
/* harmony export */   "formatDate": () => (/* binding */ formatDate)
/* harmony export */ });
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-join */ "./node_modules/url-join/lib/url-join.js");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_2__);




const formatDate = date => moment__WEBPACK_IMPORTED_MODULE_1___default().utc(date).format((_data_SiteConfig__WEBPACK_IMPORTED_MODULE_2___default().dateFormat));

const editOnGithub = post => {
  const date = moment__WEBPACK_IMPORTED_MODULE_1___default().utc(post.date).format((_data_SiteConfig__WEBPACK_IMPORTED_MODULE_2___default().dateFromFormat));
  return url_join__WEBPACK_IMPORTED_MODULE_0___default()((_data_SiteConfig__WEBPACK_IMPORTED_MODULE_2___default().repo), '/blob/master/content/posts', `${date}-${post.slug}.md`);
};



/***/ }),

/***/ "./node_modules/github-buttons/dist/buttons.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/github-buttons/dist/buttons.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render$1)
/* harmony export */ });
/*!
 * github-buttons v2.7.0
 * (c) 2020 なつき
 * @license BSD-2-Clause
 */
var document = window.document;

var Math = window.Math;

var HTMLElement = window.HTMLElement;

var XMLHttpRequest = window.XMLHttpRequest;

var createElementInDocument = function (document) {
  return function (tag, props, children) {
    var el = document.createElement(tag);
    if (props) {
      for (var prop in props) {
        var val = props[prop];
        if (val != null) {
          if (el[prop] != null) {
            el[prop] = val;
          } else {
            el.setAttribute(prop, val);
          }
        }
      }
    }
    if (children) {
      for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        el.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
      }
    }
    return el
  }
};

var createElement = createElementInDocument(document);

var dispatchOnce = function (func) {
  var onceToken;
  return function () {
    if (!onceToken) {
      onceToken = 1;
      func.apply(this, arguments);
    }
  }
};

var hasOwnProperty = function (obj, prop) {
  return {}.hasOwnProperty.call(obj, prop)
};

var name = "github-buttons";
var version = "2.7.0";

var iframeURL = 'https://' + (/* istanbul ignore next */  'unpkg.com/' + name + '@' + version + '/dist' ) + '/buttons.html';

var apiBaseURL = 'https://api.github.com';

var useXHR = XMLHttpRequest && XMLHttpRequest.prototype && 'withCredentials' in XMLHttpRequest.prototype;

var useShadowDOM = useXHR && HTMLElement && HTMLElement.prototype.attachShadow && !HTMLElement.prototype.attachShadow.prototype;

var onEvent = function (target, eventName, func) {
  /* istanbul ignore else: IE lt 9 */
  if (target.addEventListener) {
    target.addEventListener(eventName, func, false);
  } else {
    target.attachEvent('on' + eventName, func);
  }
};

var offEvent = function (target, eventName, func) {
  /* istanbul ignore else: IE lt 9 */
  if (target.removeEventListener) {
    target.removeEventListener(eventName, func, false);
  } else {
    target.detachEvent('on' + eventName, func);
  }
};

var onceEvent = function (target, eventName, func) {
  var callback = function (event) {
    offEvent(target, eventName, callback);
    return func(event)
  };
  onEvent(target, eventName, callback);
};

var onceReadyStateChange = /* istanbul ignore next: IE lt 9 */ function (target, regex, func) {
  var eventName = 'readystatechange';
  var callback = function (event) {
    if (regex.test(target.readyState)) {
      offEvent(target, eventName, callback);
      return func(event)
    }
  };
  onEvent(target, eventName, callback);
};

var parseOptions = function (anchor) {
  var options = {
    href: anchor.href,
    title: anchor.title,
    'aria-label': anchor.getAttribute('aria-label')
  };
  var ref = ['icon', 'color-scheme', 'text', 'size', 'show-count'];
  for (var i = 0, len = ref.length; i < len; i++) {
    var attribute = 'data-' + ref[i];
    options[attribute] = anchor.getAttribute(attribute);
  }
  if (options['data-text'] == null) {
    options['data-text'] = anchor.textContent || anchor.innerText;
  }
  return options
};

var buttonsCssText = "body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}";

var light = ".btn{color:#24292e;background-color:#eff3f6;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5');border-color:#cdcfd1;border-color:rgba(27,31,35,.2)}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0');background-position:-0.5em;border-color:#acaeb0;border-color:rgba(27,31,35,.35)}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;background-image:none;border-color:#acaeb0;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}";

var dark = ".btn{color:#fafbfc;background-color:#202428;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226');border-color:#2b3138;border-color:rgba(27,31,35,.2)}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21');background-position:-0.5em;border-color:#252b30;border-color:rgba(27,31,35,.5)}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;background-image:none;border-color:#252b30;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}";

var stringify = function (obj, sep, eq, encodeURIComponent) {
  if (sep == null) {
    sep = '&';
  }
  if (eq == null) {
    eq = '=';
  }
  if (encodeURIComponent == null) {
    encodeURIComponent = window.encodeURIComponent;
  }
  var params = [];
  for (var name in obj) {
    var value = obj[name];
    if (value != null) {
      params.push(encodeURIComponent(name) + eq + encodeURIComponent(value));
    }
  }
  return params.join(sep)
};

var parse = function (str, sep, eq, decodeURIComponent) {
  if (sep == null) {
    sep = '&';
  }
  if (eq == null) {
    eq = '=';
  }
  if (decodeURIComponent == null) {
    decodeURIComponent = window.decodeURIComponent;
  }
  var obj = {};
  var params = str.split(sep);
  for (var i = 0, len = params.length; i < len; ++i) {
    var entry = params[i];
    if (entry !== '') {
      var ref = entry.split(eq);
      obj[decodeURIComponent(ref[0])] = (ref[1] != null ? decodeURIComponent(ref.slice(1).join(eq)) : undefined);
    }
  }
  return obj
};

var widgetColorSchemes = {
  light: light,
  dark: dark
};

var getColorSchemeMediaQuery = function (systemColorScheme, widgetColorScheme) {
  return '@media(prefers-color-scheme:' + systemColorScheme + '){' + widgetColorSchemes[hasOwnProperty(widgetColorSchemes, widgetColorScheme) ? widgetColorScheme : systemColorScheme] + '}'
};

var getColorScheme = function (declarations) {
  if (declarations == null) {
    return widgetColorSchemes.light
  }

  var colorSchemes = parse(declarations, ';', ':', function (str) {
    return str.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, '')
  });

  return widgetColorSchemes[hasOwnProperty(widgetColorSchemes, colorSchemes['no-preference']) ? colorSchemes['no-preference'] : 'light'] +
    getColorSchemeMediaQuery('light', colorSchemes.light) +
    getColorSchemeMediaQuery('dark', colorSchemes.dark)
};

var data = {"mark-github":{"width":16,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z\"/>"},"heart":{"width":12,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M8.727 3C7.091 3 6.001 4.65 6.001 4.65S4.909 3 3.273 3C1.636 3 0 4.1 0 6.3 0 9.6 6 14 6 14s6-4.4 6-7.7C12 4.1 10.364 3 8.727 3z\"/>"},"eye":{"width":16,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\"/>"},"star":{"width":14,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z\"/>"},"repo-forked":{"width":10,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z\"/>"},"repo-template":{"width":14,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M12 8V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h2v2l1.5-1.5L6 16v-4H3v1H1v-2h7v-1H2V1h9v7h1zM4 2H3v1h1V2zM3 4h1v1H3V4zm1 2H3v1h1V6zm0 3H3V8h1v1zm6 3H8v2h2v2h2v-2h2v-2h-2v-2h-2v2z\"/>"},"issue-opened":{"width":14,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z\"/>"},"cloud-download":{"width":16,"height":16,"path":"<path fill-rule=\"evenodd\" d=\"M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z\"/>"}};

var octicon = function (icon, height) {
  icon = ('' + icon).toLowerCase().replace(/^octicon-/, '');
  if (!hasOwnProperty(data, icon)) {
    icon = 'mark-github';
  }
  return '<svg viewBox="0 0 ' + data[icon].width + ' ' + data[icon].height + '" class="octicon octicon-' + icon + '" style="width: ' + (height * data[icon].width / data[icon].height) + 'px; height: ' + height + 'px;" aria-hidden="true">' + data[icon].path + '</svg>'
};

var queues = {};

var fetch = function (url, func) {
  var queue = queues[url] || (queues[url] = []);
  if (queue.push(func) > 1) {
    return
  }

  var callback = dispatchOnce(function () {
    delete queues[url];
    while ((func = queue.shift())) {
      func.apply(null, arguments);
    }
  });

  if (useXHR) {
    var xhr = new XMLHttpRequest();
    onEvent(xhr, 'abort', callback);
    onEvent(xhr, 'error', callback);
    onEvent(xhr, 'load', function () {
      var data;
      try {
        data = JSON.parse(xhr.responseText);
      } catch (error) {
        callback(error);
        return
      }
      callback(xhr.status !== 200, data);
    });
    xhr.open('GET', url);
    xhr.send();
  } else {
    var contentWindow = this || window;
    contentWindow._ = function (json) {
      contentWindow._ = null;
      callback(json.meta.status !== 200, json.data);
    };
    var script = createElementInDocument(contentWindow.document)('script', {
      async: true,
      src: url + (/\?/.test(url) ? '&' : '?') + 'callback=_'
    });
    var onloadend = /* istanbul ignore next: IE lt 9 */ function () {
      if (contentWindow._) {
        contentWindow._({
          meta: {}
        });
      }
    };
    onEvent(script, 'load', onloadend);
    onEvent(script, 'error', onloadend);
    /* istanbul ignore if: IE lt 9 */
    if (script.readyState) {
      onceReadyStateChange(script, /de|m/, onloadend);
    }
    contentWindow.document.getElementsByTagName('head')[0].appendChild(script);
  }
};

var render = function (root, options, func) {
  var createElement = createElementInDocument(root.ownerDocument);

  var style = root.appendChild(createElement('style', {
    type: 'text/css'
  }));

  var cssText = buttonsCssText + getColorScheme(options['data-color-scheme']);

  /* istanbul ignore if: IE lt 9 */
  if (style.styleSheet) {
    style.styleSheet.cssText = cssText;
  } else {
    style.appendChild(root.ownerDocument.createTextNode(cssText));
  }

  var btn = createElement('a', {
    className: 'btn',
    href: options.href,
    target: '_blank',
    rel: 'noopener',
    innerHTML: octicon(options['data-icon'], /^large$/i.test(options['data-size']) ? 16 : 14),
    'aria-label': options['aria-label'] || undefined
  }, [
    ' ',
    createElement('span', {}, [options['data-text'] || ''])
  ]);

  var widget = root.appendChild(createElement('div', {
    className: 'widget' + (/^large$/i.test(options['data-size']) ? ' widget-lg' : '')
  }, [
    btn
  ]));

  var domain = btn.hostname.split('.').reverse();
  if (domain[0] === '') {
    domain.shift();
  }
  if (domain[0] !== 'com' || domain[1] !== 'github') {
    btn.href = '#';
    btn.target = '_self';
    func(widget);
    return
  }

  var len = domain.length;
  var path = (' /' + btn.pathname).split(/\/+/);
  if (((len === 2 || (len === 3 && domain[2] === 'gist')) && path[3] === 'archive') ||
    (len === 2 && path[3] === 'releases' && path[4] === 'download') ||
    (len === 3 && domain[2] === 'codeload')) {
    btn.target = '_top';
  }

  if (!/^true$/i.test(options['data-show-count']) || len !== 2) {
    func(widget);
    return
  }

  var href, property;
  if (!path[2] && path[1]) {
    href = property = 'followers';
  } else if (!path[3] && path[2]) {
    property = 'stargazers_count';
    href = 'stargazers';
  } else if (!path[4] && path[3] === 'subscription') {
    property = 'subscribers_count';
    href = 'watchers';
  } else if (!path[4] && path[3] === 'fork') {
    property = 'forks_count';
    href = 'network/members';
  } else if (path[3] === 'issues') {
    property = 'open_issues_count';
    href = 'issues';
  } else {
    func(widget);
    return
  }

  var api = path[2] ? '/repos/' + path[1] + '/' + path[2] : '/users/' + path[1];
  fetch.call(this, apiBaseURL + api, function (error, json) {
    if (!error) {
      var data = json[property];
      widget.appendChild(createElement('a', {
        className: 'social-count',
        href: json.html_url + '/' + href,
        target: '_blank',
        rel: 'noopener',
        'aria-label': data + ' ' + property.replace(/_count$/, '').replace('_', ' ').slice(0, data < 2 ? -1 : undefined) + ' on GitHub'
      }, [
        ('' + data).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      ]));
    }
    func(widget);
  });
};

var devicePixelRatio = window.devicePixelRatio || /* istanbul ignore next */ 1;

var ceilPixel = function (px) {
  return (devicePixelRatio > 1 ? Math.ceil(Math.round(px * devicePixelRatio) / devicePixelRatio * 2) / 2 : Math.ceil(px)) || 0
};

var get = function (el) {
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  if (el.getBoundingClientRect) {
    var boundingClientRect = el.getBoundingClientRect();
    width = Math.max(width, ceilPixel(boundingClientRect.width));
    height = Math.max(height, ceilPixel(boundingClientRect.height));
  }
  return [width, height]
};

var set = function (el, size) {
  el.style.width = size[0] + 'px';
  el.style.height = size[1] + 'px';
};

var render$1 = function (options, func) {
  if (options == null || func == null) {
    return
  }
  if (options.getAttribute) {
    options = parseOptions(options);
  }
  if (useShadowDOM) {
    var host = createElement('span', {
      title: options.title || undefined
    });
    render(host.attachShadow({ mode:  'closed' }), options, function () {
      func(host);
    });
  } else {
    var iframe = createElement('iframe', {
      src: 'javascript:0',
      title: options.title || undefined,
      allowtransparency: true,
      scrolling: 'no',
      frameBorder: 0
    });
    set(iframe, [0, 0]);
    iframe.style.border = 'none';
    var callback = function () {
      var contentWindow = iframe.contentWindow;
      var body;
      try {
        body = contentWindow.document.body;
      } catch (_) /* istanbul ignore next: IE 11 */ {
        document.body.appendChild(iframe.parentNode.removeChild(iframe));
        return
      }
      offEvent(iframe, 'load', callback);
      render.call(contentWindow, body, options, function (widget) {
        var size = get(widget);
        iframe.parentNode.removeChild(iframe);
        onceEvent(iframe, 'load', function () {
          set(iframe, size);
        });
        iframe.src = iframeURL + '#' + (iframe.name = stringify(options));
        func(iframe);
      });
    };
    onEvent(iframe, 'load', callback);
    document.body.appendChild(iframe);
  }
};




/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
//! moment.js

;(function (global, factory) {
     true ? module.exports = factory() :
    0
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && ("object" !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = undefined;
                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-github-btn/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-github-btn/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class GitHubButton extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor (props) {
    super(props)
    this.$ = react__WEBPACK_IMPORTED_MODULE_0___default().createRef()
    this._ = react__WEBPACK_IMPORTED_MODULE_0___default().createRef()
  }
  render () {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('span', { ref: this.$ }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement('a', { ...this.props, ref: this._ }, this.props.children))
  }
  componentDidMount () {
    this.paint()
  }
  getSnapshotBeforeUpdate () {
    this.reset()
    return null
  }
  componentDidUpdate () {
    this.paint()
  }
  componentWillUnmount () {
    this.reset()
  }
  paint () {
    const _ = this.$.current.appendChild(document.createElement('span'))
    Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! github-buttons */ "./node_modules/github-buttons/dist/buttons.esm.js")).then(({ render }) => {
      render(_.appendChild(this._.current), function (el) {
        try {
          _.parentNode.replaceChild(el, _)
        } catch (_) {}
      })
    })
  }
  reset () {
    this.$.current.replaceChild(this._.current, this.$.current.lastChild)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GitHubButton);


/***/ }),

/***/ "./node_modules/url-join/lib/url-join.js":
/*!***********************************************!*\
  !*** ./node_modules/url-join/lib/url-join.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (name, context, definition) {
  if ( true && module.exports) module.exports = definition();
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
})('urljoin', this, function () {

  function normalize (strArray) {
    var resultArray = [];
    if (strArray.length === 0) { return ''; }

    if (typeof strArray[0] !== 'string') {
      throw new TypeError('Url must be a string. Received ' + strArray[0]);
    }

    // If the first part is a plain protocol, we combine it with the next part.
    if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
      var first = strArray.shift();
      strArray[0] = first + strArray[0];
    }

    // There must be two or three slashes in the file protocol, two slashes in anything else.
    if (strArray[0].match(/^file:\/\/\//)) {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
    } else {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
    }

    for (var i = 0; i < strArray.length; i++) {
      var component = strArray[i];

      if (typeof component !== 'string') {
        throw new TypeError('Url must be a string. Received ' + component);
      }

      if (component === '') { continue; }

      if (i > 0) {
        // Removing the starting slashes for each component but the first.
        component = component.replace(/^[\/]+/, '');
      }
      if (i < strArray.length - 1) {
        // Removing the ending slashes for each component but the last.
        component = component.replace(/[\/]+$/, '');
      } else {
        // For the last component we will combine multiple slashes to a single one.
        component = component.replace(/[\/]+$/, '/');
      }

      resultArray.push(component);

    }

    var str = resultArray.join('/');
    // Each input component is now separated by a single slash except the possible first plain protocol part.

    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

    // replace ? in parameters with &
    var parts = str.split('?');
    str = parts.shift() + (parts.length > 0 ? '?': '') + parts.join('&');

    return str;
  }

  return function () {
    var input;

    if (typeof arguments[0] === 'object') {
      input = arguments[0];
    } else {
      input = [].slice.call(arguments);
    }

    return normalize(input);
  };

});


/***/ }),

/***/ "./content/images/egghead.png":
/*!************************************!*\
  !*** ./content/images/egghead.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/egghead-4b2eb166c6aeb1885a07a2d177d6bd00.png");

/***/ }),

/***/ "./content/images/tania2020crop.jpg":
/*!******************************************!*\
  !*** ./content/images/tania2020crop.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/tania2020crop-6d56d7845f3fa6dc0196a7ba4f5b98fd.jpg");

/***/ }),

/***/ "./content/thumbnails/facebook.png":
/*!*****************************************!*\
  !*** ./content/thumbnails/facebook.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/facebook-d902847c7a94b5fb6cbe8a23aa8df9d1.png");

/***/ }),

/***/ "./content/thumbnails/gatsby.png":
/*!***************************************!*\
  !*** ./content/thumbnails/gatsby.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/gatsby-e0fc01a9a0a5c4198be67d2cf16e935c.png");

/***/ }),

/***/ "./content/thumbnails/hashnode.svg":
/*!*****************************************!*\
  !*** ./content/thumbnails/hashnode.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAwcHgiIGhlaWdodD0iNTAwcHgiIHZpZXdCb3g9IjAgMCA1MDAgNTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+U3F1YXJlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlNxdWFyZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMS4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNODAsMCBMNDIwLDAgQzQ2NC4xODI3ODIsMCA1MDAsMzUuODE3MjE4MyA1MDAsODAgTDUwMCw0MjAgQzUwMCw0NjQuMTgyNzgyIDQ2NC4xODI3ODIsNTAwIDQyMC4wMDAwMDIsNTAwIEw3OS45OTk5OTc3LDUwMCBDMzUuODE3MjE4Myw1MDAgMCw0NjQuMTgyNzgyIDAsNDIwLjAwMDAwMiBMMCw3OS45OTk5OTc3IEMwLDM1LjgxNzIxODMgMzUuODE3MjE4MywwIDgwLDAgWiIgaWQ9IlBhdGgiIGZpbGw9IiMyOTYyRkYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTM3NS4zMTEyMjEsNDUwLjc5NzA1OSBMMzc1LjIyODg3MSw0NTAuNzgwNTg5IEM0MDMuNjY5MzQ3LDQ1MC4zMDk0NDEgNDI2LjgwMDc0Niw0MjcuNzI3MjgyIDQyNy45NTUwNzUsMzk5LjMwNjMzNiBDNDI5LjEwOTQwMSwzNzAuODg1MzkyIDQwNy44ODU1MzgsMzQ2LjUwMTcyNSAzNzkuNTc2OTQ4LDM0My43MjU2OTIgTDI3Ny4xMzM2NDgsMTYyLjg1MjMyOSBDMjYyLjE0NTk2MiwxMzUuOTQwMzc2IDIzMy4yMDgyMDIsMTM3LjEwOTc0NiAyMjIuNzgyNywxNzUuMzAzNjM4IEMyMTMuODIzMDI4LDIxMS40NzE3MjMgMjE2LjEyODgyNiwyNDUuNTQ4MTIgMjEzLjUyNjU3LDI4Ni43MjMwOCBDMjEzLjUwOTYxLDI4Ni45OTM2NTcgMjEzLjMyMDM2OSwyODcuMjIyNTQ5IDIxMy4wNTc4LDI4Ny4yOTAwNjYgQzIxMi43OTUyMzUsMjg3LjM1NzU4NSAyMTIuNTE5MDUyLDI4Ny4yNDgzNzEgMjEyLjM3MzY2OSwyODcuMDE5NTM4IEwxMjAuOTE1ODUyLDEwNC42OTY4MTUgQzEyOC4zODAxNTUsOTguODM0OTc2NSAxMzIuNzQ5NDIsODkuODc3OTc4OSAxMzIuNzc0MjM5LDgwLjM4NzExOTcgQzEzMi43NzQyNDIsNjMuNjA0Nzc3IDExOS4xNjk0Niw1MCAxMDIuMzg3MTE3LDUwIEM4NS42MDQ3NzcsNTAgNzIsNjMuNjA0Nzc3IDcyLDgwLjM4NzExOTcgQzcyLDk3LjE2OTQ2MjQgODUuNjA0Nzc3LDExMC43NzQyNDIgMTAyLjM4NzEyLDExMC43NzQyNDIgQzEwMy44MjAwMDcsMTEwLjc3NDI0MiAxMDQuOTg5Mzc4LDExMC40Nzc3ODIgMTA2LjE0MjI3NywxMTAuNDc3NzgyIEMxNDQuNjMyNjI5LDIwOS40NDU5MTUgMTg3LjQ3MTA1NiwzMjQuOTE2OTcyIDIwMi44MDQ2MTMsMzUxLjU0ODkzNyBDMjEzLjIzMDExMywzNzcuMDExNTMxIDI0OC44MjE3NDYsMzY4LjkwODI5OCAyNDkuNjk0NjU3LDM0MS40MTk4OTcgTDI1My40NDk4MTIsMTk3LjAxMTA3NyBDMjUzLjQ0OTgxMiwxOTYuMTM4MTY3IDI1NC42MDI3MTEsMTk2LjEzODE2NyAyNTQuODk5MTcxLDE5Ni43MTQ2MTcgTDMyOC4zNTUzLDM3MS40OTQwODcgQzMyMy45ODYzOCwzNzkuMzczMjk2IDMyMS43MTc2OSwzODguMjQzODcxIDMyMS43NjczMDUsMzk3LjI1MzE0MSBDMzIxLjgwMzYwNiw0MjYuODA5NTgyIDM0NS43NTQ3ODQsNDUwLjc2MDc2MSAzNzUuMzExMjIzLDQ1MC43OTcwNTkgTDM3NS4zMTEyMjEsNDUwLjc5NzA1OSBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./content/thumbnails/instagram.png":
/*!******************************************!*\
  !*** ./content/thumbnails/instagram.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/instagram-97d44d149b291bd0d885e8cea9c63f28.png");

/***/ }),

/***/ "./content/thumbnails/react.png":
/*!**************************************!*\
  !*** ./content/thumbnails/react.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./content/thumbnails/vue.png":
/*!************************************!*\
  !*** ./content/thumbnails/vue.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./content/thumbnails/wp.png":
/*!***********************************!*\
  !*** ./content/thumbnails/wp.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/favicon.png":
/*!********************************!*\
  !*** ./src/images/favicon.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/floppy.png":
/*!*******************************!*\
  !*** ./src/images/floppy.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/floppy-a644d2bf058ab990b67c1ee0d3524511.png");

/***/ }),

/***/ "./src/images/moon.svg":
/*!*****************************!*\
  !*** ./src/images/moon.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxwYXRoIGQ9Ik0xMDUuODcsMTQuOTljLTMuNzQtMy4zOS03LjkxLTYuMzgtMTIuNDItOC44OWMtMC44Ny0wLjQ5LTItMC4zNS0yLjcxLDAuMzMgYy0wLjcxLDAuNjgtMC44MywxLjczLTAuMjksMi41M2MxNS42MywyMi45MywxMi4yOSw1Mi41Mi04LjExLDcxLjk3Yy0xMS45LDExLjM1LTI3Ljg1LDE3LjYtNDQuOTEsMTcuNiBjLTExLjM5LDAtMjIuNTQtMi44Ni0zMi4yNC04LjI3Yy0wLjg3LTAuNDktMi0wLjM2LTIuNzEsMC4zM2MtMC43MSwwLjY4LTAuODMsMS43Mi0wLjI4LDIuNTNjMi44MSw0LjEyLDYuMTIsNy45Myw5Ljg2LDExLjMyIGMxMi42MSwxMS40NSwyOS4yNywxNy43Niw0Ni45LDE3Ljc2YzE4LjI3LDAsMzUuMzQtNi43LDQ4LjA5LTE4Ljg2YzEyLjUzLTExLjk0LDE5LjMxLTI3LjcxLDE5LjA5LTQ0LjQgQzEyNS45Miw0Mi4yNSwxMTguNzIsMjYuNjQsMTA1Ljg3LDE0Ljk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KPC9zdmc+");

/***/ }),

/***/ "./src/images/sun.svg":
/*!****************************!*\
  !*** ./src/images/sun.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxnPgogICAgPHBhdGggZD0iTTY0LDMwLjM0Yy0xOC41OSwwLTMzLjY2LDE1LjA3LTMzLjY2LDMzLjY1YzAsMTguNTksMTUuMDcsMzMuNjYsMzMuNjYsMzMuNjYgYzE4LjU5LDAsMzMuNjYtMTUuMDcsMzMuNjYtMzMuNjZDOTcuNjYsNDUuNDEsODIuNTksMzAuMzQsNjQsMzAuMzR6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTU2Ljc2LDI0LjIxTDU2Ljc2LDI0LjIxaDE0LjQ5YzAuNjcsMCwxLjI5LTAuMzMsMS42OC0wLjg4YzAuMzgtMC41NCwwLjQ3LTEuMjUsMC4yNC0xLjg4IEw2NS45MiwxLjgzYy0wLjMtMC44MS0xLjA2LTEuMzQtMS45Mi0xLjM0cy0xLjYyLDAuNTQtMS45MiwxLjM0bC03LjI1LDE5LjYzYy0wLjIzLDAuNjMtMC4xNCwxLjMzLDAuMjQsMS44OCBDNTUuNDYsMjMuODksNTYuMDksMjQuMjEsNTYuNzYsMjQuMjF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTk3LjI2LDQwLjk5YzAuMzgsMC4zOSwwLjkxLDAuNiwxLjQ0LDAuNmMwLjEyLDAsMC4yNC0wLjAxLDAuMzYtMC4wM2MwLjY2LTAuMTIsMS4yMS0wLjU1LDEuNS0xLjE2IGw4Ljc2LTE5LjAxYzAuMzYtMC43OCwwLjE5LTEuNjktMC40MS0yLjNjLTAuNjEtMC42MS0xLjUzLTAuNzctMi4zMS0wLjQyTDg3LjYsMjcuNDRjLTAuNjEsMC4yOC0xLjA0LDAuODQtMS4xNiwxLjUgYy0wLjEyLDAuNjYsMC4xLDEuMzMsMC41NiwxLjgxTDk3LjI2LDQwLjk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0xMjYuMTgsNjIuMDhsLTE5LjY0LTcuMjRjLTAuNjMtMC4yMy0xLjMzLTAuMTQtMS44OCwwLjI0Yy0wLjU1LDAuMzgtMC44NywxLTAuODcsMS42N2wwLjAxLDE0LjQ5IGMwLDAuNjcsMC4zMywxLjMsMC44OCwxLjY4YzAuMzUsMC4yMywwLjc2LDAuMzYsMS4xNywwLjM2YzAuMjQsMCwwLjQ4LTAuMDQsMC43MS0wLjEzbDE5LjY0LTcuMjRjMC44LTAuMjksMS4zNC0xLjA2LDEuMzQtMS45MyBDMTI3LjUyLDYzLjE0LDEyNi45OSw2Mi4zOCwxMjYuMTgsNjIuMDh6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTEwMC41Niw4Ny42Yy0wLjI4LTAuNjEtMC44NC0xLjA0LTEuNS0xLjE2Yy0wLjY2LTAuMTEtMS4zNCwwLjEtMS44LDAuNTdMODcuMDEsOTcuMjYgYy0wLjQ3LDAuNDctMC42OSwxLjE1LTAuNTcsMS44MWMwLjEyLDAuNjUsMC41NSwxLjIyLDEuMTYsMS41bDE5LjAxLDguNzZjMC4yNywwLjEzLDAuNTYsMC4xOCwwLjg2LDAuMTggYzAuNTMsMCwxLjA1LTAuMjEsMS40NC0wLjZjMC42MS0wLjYxLDAuNzctMS41MiwwLjQxLTIuM0wxMDAuNTYsODcuNnoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+CiAgICA8cGF0aCBkPSJNNzEuMjQsMTAzLjc4TDcxLjI0LDEwMy43OGwtMTQuNDksMC4wMWMtMC42NywwLTEuMjksMC4zMy0xLjY3LDAuODggYy0wLjM4LDAuNTUtMC40NywxLjI1LTAuMjUsMS44N2w3LjI1LDE5LjY0YzAuMywwLjgsMS4wNiwxLjM0LDEuOTIsMS4zNHMxLjYyLTAuNTQsMS45Mi0xLjM0bDcuMjUtMTkuNjQgYzAuMjMtMC42MywwLjE0LTEuMzMtMC4yNC0xLjg4QzcyLjU0LDEwNC4xMSw3MS45MiwxMDMuNzgsNzEuMjQsMTAzLjc4eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0zMC43NCw4Ny4wMWMtMC40Ny0wLjQ3LTEuMTQtMC42OC0xLjgtMC41N2MtMC42NiwwLjEyLTEuMjIsMC41NS0xLjUsMS4xNmwtOC43NiwxOS4wMSBjLTAuMzYsMC43OC0wLjE5LDEuNywwLjQyLDIuM2MwLjM5LDAuMzksMC45MSwwLjYsMS40NCwwLjZjMC4yOSwwLDAuNTgtMC4wNiwwLjg2LTAuMTlsMTkuMDEtOC43N2MwLjYxLTAuMjgsMS4wNC0wLjg0LDEuMTYtMS41IGMwLjEyLTAuNjYtMC4xLTEuMzMtMC41Ny0xLjhMMzAuNzQsODcuMDF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTIyLjE3LDczLjI5YzAuNDEsMCwwLjgyLTAuMTMsMS4xNy0wLjM3YzAuNTUtMC4zOCwwLjg4LTEuMDEsMC44OC0xLjY4bC0wLjAxLTE0LjQ5IGMwLTAuNjctMC4zMy0xLjI5LTAuODgtMS42OGMtMC41NS0wLjM4LTEuMjUtMC40Ny0xLjg3LTAuMjRMMS44Miw2Mi4wOGMtMC44LDAuMjktMS4zNCwxLjA2LTEuMzQsMS45MmMwLDAuODUsMC41MywxLjYyLDEuMzQsMS45MiBsMTkuNjUsNy4yNEMyMS43LDczLjI1LDIxLjkzLDczLjI5LDIyLjE3LDczLjI5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0yNy40NSw0MC40YzAuMjgsMC42MSwwLjg0LDEuMDQsMS41LDEuMTZjMC4xMiwwLjAyLDAuMjQsMC4wMywwLjM2LDAuMDNjMC41NCwwLDEuMDYtMC4yMSwxLjQ1LTAuNiBMNDEsMzAuNzRjMC40Ny0wLjQ4LDAuNjgtMS4xNSwwLjU2LTEuODFjLTAuMTItMC42NS0wLjU1LTEuMjEtMS4xNi0xLjQ5bC0xOS4wMi04Ljc2Yy0wLjc4LTAuMzYtMS42OS0wLjE5LTIuMywwLjQyIGMtMC42MSwwLjYxLTAuNzcsMS41Mi0wLjQxLDIuM0wyNy40NSw0MC40eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICA8L2c+Cjwvc3ZnPg==");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map