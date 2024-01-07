import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-Y7MK6QGA.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/context/ContextProvider.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/context/ContextProvider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/context/ContextProvider.tsx"
  );
  import.meta.hot.lastModified = "1704558241364.8625";
}
var postdata = (0, import_react.createContext)({
  postData: [],
  setPostData: () => {
  }
});
var latestPost = (0, import_react.createContext)({
  latestPostData: [],
  setLatestPostData: () => {
  }
});
var postsMetaContext = (0, import_react.createContext)({
  postsMeta: [],
  setPostsMeta: () => {
  }
});
var popularPost = (0, import_react.createContext)({
  popularPostData: [],
  setPopularPostData: () => {
  }
});
var myPage = (0, import_react.createContext)({
  page: 1,
  setPage: () => {
  }
});
var showSpiner = (0, import_react.createContext)({
  showSpin: null,
  setShowSpin: () => {
  }
});
var IsPostLoadingFunc = (0, import_react.createContext)({
  isLoading: false,
  setIsLoading: () => {
  }
});
var currentUrl = (0, import_react.createContext)({
  urlNow: "",
  setUrlNow: () => {
  }
});
var typingInput = (0, import_react.createContext)({
  typing: false,
  setTyping: () => {
  }
});
var Mode = (0, import_react.createContext)({
  isDarkMode: false,
  setIsDarkMode: () => {
  }
});
var PostsByTags = (0, import_react.createContext)({
  MyTagPostsHook: [],
  setMyTagPostsHook: () => {
  }
});
var speakingTimeOut = (0, import_react.createContext)({
  speechTimeout: null,
  setSpeechTimeout: () => {
  }
});
var mySearchInput = (0, import_react.createContext)({
  searchInput: "",
  setSearchInput: () => {
  }
});
var ContextProvider = ({
  children
}) => {
  _s();
  const [postData, setPostData] = (0, import_react.useState)([]);
  const [latestPostData, setLatestPostData] = (0, import_react.useState)([]);
  const [postsMeta, setPostsMeta] = (0, import_react.useState)([]);
  const [popularPostData, setPopularPostData] = (0, import_react.useState)([]);
  const [page, setPage] = (0, import_react.useState)(1);
  const [showSpin, setShowSpin] = (0, import_react.useState)(null);
  const [searchInput, setSearchInput] = (0, import_react.useState)("");
  const [typing, setTyping] = (0, import_react.useState)(false);
  const [isDarkMode, setIsDarkMode] = (0, import_react.useState)(false);
  const [MyTagPostsHook, setMyTagPostsHook] = (0, import_react.useState)([]);
  const [speechTimeout, setSpeechTimeout] = (0, import_react.useState)(null);
  const [urlNow, setUrlNow] = (0, import_react.useState)("home");
  const [isLoading, setIsLoading] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(postdata.Provider, { value: {
    postData,
    setPostData
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(latestPost.Provider, { value: {
    latestPostData,
    setLatestPostData
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(postsMetaContext.Provider, { value: {
    postsMeta,
    setPostsMeta
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(popularPost.Provider, { value: {
    popularPostData,
    setPopularPostData
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(myPage.Provider, { value: {
    page,
    setPage
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(showSpiner.Provider, { value: {
    showSpin,
    setShowSpin
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mySearchInput.Provider, { value: {
    searchInput,
    setSearchInput
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(typingInput.Provider, { value: {
    typing,
    setTyping
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mode.Provider, { value: {
    isDarkMode,
    setIsDarkMode
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PostsByTags.Provider, { value: {
    MyTagPostsHook,
    setMyTagPostsHook
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(speakingTimeOut.Provider, { value: {
    speechTimeout,
    setSpeechTimeout
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(currentUrl.Provider, { value: {
    urlNow,
    setUrlNow
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IsPostLoadingFunc.Provider, { value: {
    isLoading,
    setIsLoading
  }, children }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 152,
    columnNumber: 19
  }, this) }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 148,
    columnNumber: 19
  }, this) }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 144,
    columnNumber: 19
  }, this) }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 140,
    columnNumber: 19
  }, this) }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 136,
    columnNumber: 19
  }, this) }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 132,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 128,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 124,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 120,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 116,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 112,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 108,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/context/ContextProvider.tsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
};
_s(ContextProvider, "w4AynPPMKTD7hWN/MK/8VPkbmRM=");
_c = ContextProvider;
var ContextProvider_default = ContextProvider;
var _c;
$RefreshReg$(_c, "ContextProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/react-loading-skeleton/dist/index.js
var import_react2 = __toESM(require_react(), 1);
"use client";
var SkeletonThemeContext = import_react2.default.createContext({});
var defaultEnableAnimation = true;
function styleOptionsToCssProperties({ baseColor, highlightColor, width, height, borderRadius, circle, direction, duration, enableAnimation = defaultEnableAnimation }) {
  const style = {};
  if (direction === "rtl")
    style["--animation-direction"] = "reverse";
  if (typeof duration === "number")
    style["--animation-duration"] = `${duration}s`;
  if (!enableAnimation)
    style["--pseudo-element-display"] = "none";
  if (typeof width === "string" || typeof width === "number")
    style.width = width;
  if (typeof height === "string" || typeof height === "number")
    style.height = height;
  if (typeof borderRadius === "string" || typeof borderRadius === "number")
    style.borderRadius = borderRadius;
  if (circle)
    style.borderRadius = "50%";
  if (typeof baseColor !== "undefined")
    style["--base-color"] = baseColor;
  if (typeof highlightColor !== "undefined")
    style["--highlight-color"] = highlightColor;
  return style;
}
function Skeleton({ count = 1, wrapper: Wrapper, className: customClassName, containerClassName, containerTestId, circle = false, style: styleProp, ...originalPropsStyleOptions }) {
  var _a, _b, _c2;
  const contextStyleOptions = import_react2.default.useContext(SkeletonThemeContext);
  const propsStyleOptions = { ...originalPropsStyleOptions };
  for (const [key, value] of Object.entries(originalPropsStyleOptions)) {
    if (typeof value === "undefined") {
      delete propsStyleOptions[key];
    }
  }
  const styleOptions = {
    ...contextStyleOptions,
    ...propsStyleOptions,
    circle
  };
  const style = {
    ...styleProp,
    ...styleOptionsToCssProperties(styleOptions)
  };
  let className = "react-loading-skeleton";
  if (customClassName)
    className += ` ${customClassName}`;
  const inline = (_a = styleOptions.inline) !== null && _a !== void 0 ? _a : false;
  const elements = [];
  const countCeil = Math.ceil(count);
  for (let i = 0; i < countCeil; i++) {
    let thisStyle = style;
    if (countCeil > count && i === countCeil - 1) {
      const width = (_b = thisStyle.width) !== null && _b !== void 0 ? _b : "100%";
      const fractionalPart = count % 1;
      const fractionalWidth = typeof width === "number" ? width * fractionalPart : `calc(${width} * ${fractionalPart})`;
      thisStyle = { ...thisStyle, width: fractionalWidth };
    }
    const skeletonSpan = import_react2.default.createElement("span", { className, style: thisStyle, key: i }, "\u200C");
    if (inline) {
      elements.push(skeletonSpan);
    } else {
      elements.push(import_react2.default.createElement(
        import_react2.default.Fragment,
        { key: i },
        skeletonSpan,
        import_react2.default.createElement("br", null)
      ));
    }
  }
  return import_react2.default.createElement("span", { className: containerClassName, "data-testid": containerTestId, "aria-live": "polite", "aria-busy": (_c2 = styleOptions.enableAnimation) !== null && _c2 !== void 0 ? _c2 : defaultEnableAnimation }, Wrapper ? elements.map((el, i) => import_react2.default.createElement(Wrapper, { key: i }, el)) : elements);
}
function SkeletonTheme({ children, ...styleOptions }) {
  return import_react2.default.createElement(SkeletonThemeContext.Provider, { value: styleOptions }, children);
}

export {
  postdata,
  latestPost,
  postsMetaContext,
  popularPost,
  showSpiner,
  typingInput,
  mySearchInput,
  ContextProvider_default,
  Skeleton,
  SkeletonTheme
};
//# sourceMappingURL=/build/_shared/chunk-X464S4WS.js.map
