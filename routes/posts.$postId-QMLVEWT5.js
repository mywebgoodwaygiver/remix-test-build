import {
  Q
} from "/build/_shared/chunk-4DA2SSES.js";
import {
  MyNavbar_default,
  Spinner_default
} from "/build/_shared/chunk-WDTU4PRT.js";
import {
  Skeleton,
  latestPost,
  popularPost,
  postsMetaContext
} from "/build/_shared/chunk-X464S4WS.js";
import "/build/_shared/chunk-4DSOLGGP.js";
import {
  StopPoint_default
} from "/build/_shared/chunk-EWMFGWSO.js";
import {
  Link,
  useLoaderData,
  useParams
} from "/build/_shared/chunk-FADGM52I.js";
import "/build/_shared/chunk-H36SQQE5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  createHotContext
} from "/build/_shared/chunk-Y7MK6QGA.js";
import "/build/_shared/chunk-N4FG5RPV.js";
import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/routes/posts.$postId.tsx
var import_react5 = __toESM(require_react(), 1);

// app/components/AfterPage.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AfterPage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AfterPage.tsx"
  );
}
var MySkeleton = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex my-2 hover:scale-105 hover:border-2 hover:border-blue-400 rounded-md shadow-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { width: 142, height: 80 }, void 0, false, {
      fileName: "app/components/AfterPage.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 w-[95%] ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { count: 1 }, void 0, false, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 32,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 w-[70%] ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { count: 1 }, void 0, false, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 33,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 w-[35%] ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { count: 1 }, void 0, false, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 34,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AfterPage.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AfterPage.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/AfterPage.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c = MySkeleton;
var AfterPage = () => {
  _s();
  const {
    latestPostData
  } = (0, import_react.useContext)(latestPost);
  const {
    popularPostData
  } = (0, import_react.useContext)(popularPost);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-white dark:bg-gray-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "maincontainerAfterPage sm:grid sm:grid-cols-2 dark:bg-gray-900 dark:text-white sm:gap-3 pb-4 px-4  mx-auto max-w-screen-xl text-center rounded bg-gray-50 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      borderColor: "wheat"
    }, className: "latestContainer    border-4   pl-0.5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center latestContant", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold  border-b-2 border-dashed border-pink-500 text-2xl text-start block pl-2 pb-1", children: "Latest" }, void 0, false, {
          fileName: "app/components/AfterPage.tsx",
          lineNumber: 57,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { width: 32, height: 32, className: "h-8 w-8 ml-2 dark:filter dark:invert", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlh9PF0i_UKcoE9U8SWHNG7CX2BhNeoLXmeIa-ACRdKv4VRGfgwri13zzQ4qf8XLce6TyEMX5C6A74F3JoxcQPwJcxRB_9sDZlztXBRR1e1MuUdmLGiw4CzE8_KsRu824nYp1R5Wr0teLnBGR5OIO-A-CUi3J6hWxKGxv5x7JdD2iSj9qlV6_zysZHBhA/w400-h400/latesticon.png", alt: "new img" }, void 0, false, {
          fileName: "app/components/AfterPage.tsx",
          lineNumber: 60,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this),
      !latestPostData.length ? Array(4).fill(0).map(() => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MySkeleton, {}, void 0, false, {
          fileName: "app/components/AfterPage.tsx",
          lineNumber: 65,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/AfterPage.tsx",
          lineNumber: 64,
          columnNumber: 20
        }, this);
      }) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: latestPostData.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/posts${post.link}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex my-2 hover:scale-105 hover:border-2 duration-300 transition-transform hover:border-blue-400 rounded-md shadow-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { width: 142, height: 80, className: " latestCotainerImage h-20 border-2 border-black rounded-sm", src: `${post.thumbnail}`, alt: "" }, void 0, false, {
          fileName: "app/components/AfterPage.tsx",
          lineNumber: 71,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "infoInText font-medium flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " w-auto pl-4 text-start", children: post.title }, void 0, false, {
            fileName: "app/components/AfterPage.tsx",
            lineNumber: 74,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "views pl-4	 flex justify-start items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { className: "px-2 text-blue-500", children: "Views" }, void 0, false, {
              fileName: "app/components/AfterPage.tsx",
              lineNumber: 78,
              columnNumber: 27
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 pr-0.5 font-bold text-gray-800 dark:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }, void 0, false, {
                fileName: "app/components/AfterPage.tsx",
                lineNumber: 83,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" }, void 0, false, {
                fileName: "app/components/AfterPage.tsx",
                lineNumber: 84,
                columnNumber: 31
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/AfterPage.tsx",
              lineNumber: 81,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/components/AfterPage.tsx",
              lineNumber: 79,
              columnNumber: 27
            }, this),
            post.views
          ] }, void 0, true, {
            fileName: "app/components/AfterPage.tsx",
            lineNumber: 77,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/AfterPage.tsx",
          lineNumber: 73,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this) }, post._id, false, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 68,
        columnNumber: 45
      }, this)) }, void 0, false, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 67,
        columnNumber: 16
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AfterPage.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      borderColor: "wheat"
    }, className: "PopularContainer border-4 border-blue-500 pl-0.5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold  border-b-2 border-dashed border-lime-500 text-2xl text-start block pl-2 pb-1", children: "Popular" }, void 0, false, {
          fileName: "app/components/AfterPage.tsx",
          lineNumber: 101,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { width: 32, height: 32, className: "h-8 w-8 ml-2 dark:filter dark:invert", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgocEYbDmzkXPOlV29vgpn4ORGtpIQAIDuNd0jo6C_DWlflju-monJC7rRyKeJnGRCXxV3aaS4Tpec0OEST2b5DOdLcvrGU_pLS01UYeQ_o0QJT6V-WE_u6AFbF_z3lfpdyYJ1E8vet06S2LSTHaA79LmO2bQN2U6Jd3hYlHTgYv5vsuOHoJDSoiqCXGC0/w400-h400/popularicon.png", alt: "popular img" }, void 0, false, {
          fileName: "app/components/AfterPage.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this),
      !popularPostData.length ? Array(4).fill(0).map(() => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MySkeleton, {}, void 0, false, {
          fileName: "app/components/AfterPage.tsx",
          lineNumber: 109,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/AfterPage.tsx",
          lineNumber: 108,
          columnNumber: 20
        }, this);
      }) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: popularPostData.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/posts${post.link}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex my-2 hover:scale-105 hover:border-2 hover:border-blue-400 rounded-md shadow-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { width: 142, height: 80, className: "h-20 border-2 border-black rounded-sm", src: `${post.thumbnail}`, alt: "" }, void 0, false, {
          fileName: "app/components/AfterPage.tsx",
          lineNumber: 114,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "infoInText font-medium flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-full  text-start pl-4", children: post.title }, void 0, false, {
            fileName: "app/components/AfterPage.tsx",
            lineNumber: 117,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "views pl-4	 flex justify-start items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { className: "px-2 text-blue-500", children: "Views" }, void 0, false, {
              fileName: "app/components/AfterPage.tsx",
              lineNumber: 121,
              columnNumber: 27
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 pr-0.5 font-bold text-gray-800 dark:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }, void 0, false, {
                fileName: "app/components/AfterPage.tsx",
                lineNumber: 126,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" }, void 0, false, {
                fileName: "app/components/AfterPage.tsx",
                lineNumber: 127,
                columnNumber: 31
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/AfterPage.tsx",
              lineNumber: 124,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/components/AfterPage.tsx",
              lineNumber: 122,
              columnNumber: 27
            }, this),
            post.views
          ] }, void 0, true, {
            fileName: "app/components/AfterPage.tsx",
            lineNumber: 120,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/AfterPage.tsx",
          lineNumber: 116,
          columnNumber: 23
        }, this),
        " "
      ] }, void 0, true, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 113,
        columnNumber: 21
      }, this) }, post._id, false, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 112,
        columnNumber: 46
      }, this)) }, void 0, false, {
        fileName: "app/components/AfterPage.tsx",
        lineNumber: 111,
        columnNumber: 16
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AfterPage.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AfterPage.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/AfterPage.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/AfterPage.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
};
_s(AfterPage, "bm0ZwwmmMt3H7bFMoQVNW1+jl04=");
_c2 = AfterPage;
var AfterPage_default = AfterPage;
var _c;
var _c2;
$RefreshReg$(_c, "MySkeleton");
$RefreshReg$(_c2, "AfterPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Related.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Related.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Related.tsx"
  );
  import.meta.hot.lastModified = "1704271257274.9336";
}
var Related = ({
  props: {
    MyPostsByTags
  }
}) => {
  let uniquePostsSet = new Set(MyPostsByTags.map((post) => post.link));
  console.log("uniquePostsSet =>>>> \u{1F970}\u{1F970}\u{1F970}\u{1F970}\u{1F970}", uniquePostsSet, "And MyPostsByTags length=>>>>> ", MyPostsByTags.length);
  let uniquePostsArray = Array.from(uniquePostsSet).map((link) => MyPostsByTags.find((post) => post.link === link)).filter((post) => post !== void 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    uniquePostsArray && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "bg-blue-100 rounded-sm dark:bg-gray-900 px-1 drop-shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-2 px-0 mx-auto max-w-screen-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "my-3 px-2.5 inline text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white", children: [
          "Related",
          " "
        ] }, void 0, true, {
          fileName: "app/components/Related.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "h-8 w-8 dark:filter dark:invert", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgocEYbDmzkXPOlV29vgpn4ORGtpIQAIDuNd0jo6C_DWlflju-monJC7rRyKeJnGRCXxV3aaS4Tpec0OEST2b5DOdLcvrGU_pLS01UYeQ_o0QJT6V-WE_u6AFbF_z3lfpdyYJ1E8vet06S2LSTHaA79LmO2bQN2U6Jd3hYlHTgYv5vsuOHoJDSoiqCXGC0/w400-h400/popularicon.png", alt: "" }, void 0, false, {
          fileName: "app/components/Related.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Related.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      uniquePostsArray && !uniquePostsArray.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Spinner_default, {}, void 0, false, {
          fileName: "app/components/Related.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-center font-bold", children: "Oh! No length " }, void 0, false, {
          fileName: "app/components/Related.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Related.tsx",
        lineNumber: 45,
        columnNumber: 61
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-2 mb-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2", children: uniquePostsArray && uniquePostsArray.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "px-2.5 text-2xl font-bold ", children: "0" }, void 0, false, {
        fileName: "app/components/Related.tsx",
        lineNumber: 50,
        columnNumber: 70
      }, this) : uniquePostsArray.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hover:shadow-lg  hover:scale-105 duration-300 transition-transform hover:border hover:border-1.5 hover:border-blue-300 items-center flex flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/posts${post.link}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { width: 650, height: 650, className: "w-full rounded-lg ", src: `${post.thumbnail}`, alt: "Bonnie Avatar" }, void 0, false, {
          fileName: "app/components/Related.tsx",
          lineNumber: 52,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Related.tsx",
          lineNumber: 51,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-lighter tracking-tight text-gray-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-[700]", children: [
          post.title,
          " "
        ] }, void 0, true, {
          fileName: "app/components/Related.tsx",
          lineNumber: 56,
          columnNumber: 27
        }, this) }, void 0, false, {
          fileName: "app/components/Related.tsx",
          lineNumber: 55,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/Related.tsx",
          lineNumber: 54,
          columnNumber: 23
        }, this)
      ] }, post._id, true, {
        fileName: "app/components/Related.tsx",
        lineNumber: 50,
        columnNumber: 151
      }, this)) }, void 0, false, {
        fileName: "app/components/Related.tsx",
        lineNumber: 49,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Related.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Related.tsx",
      lineNumber: 37,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StopPoint_default, {}, void 0, false, {
      fileName: "app/components/Related.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Related.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_c3 = Related;
var Related_default = Related;
var _c3;
$RefreshReg$(_c3, "Related");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.tsx"
  );
  import.meta.hot.lastModified = "1704556614667.013";
}
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: " bg-white pt-4 dark:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-4 max-w-screen-xl border-t-2 border-black dark:border-none px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "md:flex md:justify-between mt-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-6 md:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3XnABTUt4Qc9bJpf67KlHp0T06Tc4UuwbFeNBOs95cQ5CaoWitFztCbjNXMkqbQGig4QpEqZMJlNh8cDvkll7n7M_9km8jZRCZbWEcxIAM98aWZ-aCkEr0NprFxi9kKoTpFYZt_ghD5rSf_QvUl-f3fSWuErxi81MLrTcqQyT2OFmYMtTHMPQJ_8FzRo/w640-h640/Copy%20of%20GWG%20(192%20x%20192%20px).png", className: "mr-3 h-10 rounded-full", alt: "Good Way Giver Logo" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white", children: "Good Way Giver" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 30,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 28,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 footerulLinks", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white", children: "Services" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 37,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { target: "_blank", to: "https://shop.goodwaygiver.site/", className: "hover:underline hover:ml-1.5 ", children: "Shop" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 42,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 41,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { target: "_blank", to: "https://shop.goodwaygiver.site/", className: "hover:underline hover:ml-1.5 ", children: "Affiliated Shop" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 47,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 46,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 40,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white", children: "Follow us" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { target: "_blank", to: "https://www.youtube.com/@GoodWayGiver", className: "hover:underline hover:ml-1.5  ", children: "YouTube" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 59,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 58,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { target: "_blank", to: "https://instagram.com/goodwaygivertech?igshid=OGQ5ZDc2ODk2ZA==", className: "hover:underline hover:ml-1.5 ", children: "Instagram" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 64,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 63,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { target: "_blank", to: "https://www.facebook.com/goodwaygiver?mibextid=ZbWKwL", className: "hover:underline hover:ml-1.5  ", children: "FaceBook" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 69,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 57,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white", children: "More" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { target: "_blank", to: "/about", className: "hover:underline hover:ml-1.5  ", children: "About Me" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 81,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { target: "_blank", to: "/contax", className: "hover:underline hover:ml-1.5 ", children: "Contact Me" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 86,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 85,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white", children: "Legal" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/privacy-policy", target: "_blank", className: "hover:underline hover:ml-1.5 ", children: "Privacy Policy" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 98,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 97,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/privacy-policy", target: "_blank", className: "hover:underline hover:ml-1.5 ", children: "Terms & Conditions" }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 103,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 102,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 96,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", { className: " border-gray-200 sm:mx-auto dark:border-gray-500" }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 112,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " my-3 socel-media-icons sm:flex sm:items-center sm:justify-between sm:flex-row ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm font-semibold text-gray-500 sm:text-center dark:text-gray-400", children: [
        "\xA9 2023",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", className: "hover:underline ", children: "Good Way Giver" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this),
        ". All Well"
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " flex mt-4 space-x-6 sm:justify-center sm:items-center sm:mt-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "https://www.facebook.com/goodwaygiver?mibextid=ZbWKwL", target: "_blank", className: "text-gray-500 hover:text-gray-900 dark:hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-6 h-6", fill: "blue", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { fillRule: "evenodd", d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 125,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 124,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "https://www.youtube.com/@GoodWayGiver", target: "_blank", className: "text-gray-500 hover:text-gray-900 dark:hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-6 h-6", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "red", viewBox: "0 0 20 14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { fillRule: "evenodd", d: "M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 131,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 130,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 129,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "https://instagram.com/goodwaygivertech?igshid=OGQ5ZDc2ODk2ZA==", target: "_blank", className: "text-gray-500 hover:text-gray-900 dark:hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-6 h-6", fill: "red", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { fillRule: "evenodd", d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 137,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 135,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", { className: " mb-1 border-gray-200 sm:mx-auto dark:border-white  " }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 142,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c4 = Footer;
var Footer_default = Footer;
var _c4;
$RefreshReg$(_c4, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PageFormate.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PageFormate.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PageFormate.tsx"
  );
  import.meta.hot.lastModified = "1704359580807.9504";
}
var PageFormate = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MyNavbar_default, {}, void 0, false, {
      fileName: "app/components/PageFormate.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AfterPage_default, {}, void 0, false, {
      fileName: "app/components/PageFormate.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/components/PageFormate.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PageFormate.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c5 = PageFormate;
var PageFormate_default = PageFormate;
var _c5;
$RefreshReg$(_c5, "PageFormate");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/posts.$postId.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/posts.$postId.tsx"
  );
}
var meta = ({ data }) => {
  const { post } = data;
  let mydata = post.meta;
  return [
    { title: mydata.title },
    { name: "description", content: mydata.description },
    { name: "application-name", content: "Good Way Giver Blog" },
    { name: "author", content: "Shivam Kumar" },
    { name: "generator", content: "Remix.js" },
    { name: "keywords", content: mydata.tags },
    { name: "referrer", content: "origin-when-cross-origin" },
    { name: "creator", content: "Shivam Kumar" },
    { name: "publisher", content: "Shivam Kumar" },
    { name: "robots", content: "index, follow" },
    {
      name: "googlebot",
      content: "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
    },
    {
      rel: "canonical",
      href: `https://www.goodwaygiver.site/posts/${mydata.link}`
    },
    {
      rel: "alternate",
      type: "application/rss+xml",
      href: "https://www.davegray.codes/feed.xml"
    },
    {
      name: "google-site-verification",
      content: "py8IGKH0Z-P_AY-wa8R7GiHbXxS12LA_Q3mbD-QmUuk"
    },
    { name: "yandex-verification", content: "953e838be963cb87" },
    { property: "og:title", content: mydata.title },
    {
      property: "og:description",
      content: mydata.description
    },
    {
      property: "og:url",
      content: `https://www.goodwaygiver.site/posts/${mydata.link}`
    },
    { property: "og:site_name", content: "Good Way Giver Blog" },
    {
      property: "og:image",
      content: mydata.image
    },
    {
      property: "og:image:secure_url",
      content: mydata.image
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    {
      property: "og:image:alt",
      content: `Preview image for ${mydata.title}`
    },
    { property: "og:type", content: "article" },
    { property: "article:published_time", content: `${mydata.date}` },
    { property: "article:modified_time", content: `${mydata.modified}` },
    { property: "article:author", content: "Shivam Kumar" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@goodwaygiver" },
    { name: "twitter:creator", content: "@goodwaygiver" },
    { name: "twitter:title", content: mydata.title },
    {
      name: "twitter:description",
      content: mydata.description
    },
    {
      name: "twitter:image",
      content: mydata.image
    },
    {
      name: "twitter:image:alt",
      content: `Preview image for ${mydata.title}`
    },
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon",
      sizes: "48x48"
    },
    {
      rel: "icon",
      href: "/icon.svg?3c76353a766c6496",
      type: "image/svg+xml",
      sizes: "any"
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-icon.png?ebbb82dc3cc1b5eb",
      type: "image/png",
      sizes: "180x180"
    }
    // Add more meta tags as needed
  ];
};
function posts() {
  const params = useParams();
  const { postId } = params;
  const { postsMeta, setPostsMeta } = (0, import_react5.useContext)(postsMetaContext);
  const [post, setPost] = (0, import_react5.useState)(null);
  let myloaderdata = useLoaderData();
  console.log("myloaderdata=>>>>>>>>> \u{1F4F2}\u{1F4F2}\u{1F4F2}\u{1F4F2}\u{1F4F2}\u{1F4F2}\u{1F4F2}\u{1F4F2}", myloaderdata.post);
  (0, import_react5.useEffect)(() => {
    setPost(myloaderdata.post);
    setPostsMeta(myloaderdata.postsMeta);
  }, [postId]);
  if (!post) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PageFormate_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full max-w-2xl mx-auto pt-[1rem]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full rounded my-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Skeleton, { height: 64 * 4, width: "100%", className: "rounded" }, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 169,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Skeleton, { count: 3 }, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 172,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 171,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "w-[70%] mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Skeleton, { count: 1 }, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 175,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 174,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Skeleton, { count: 4 }, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 178,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 177,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "w-[70%] mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Skeleton, { count: 1 }, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 181,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 180,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Skeleton, { count: 5 }, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 184,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 183,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "w-[70%] mb-2", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Skeleton, { count: 1 }, void 0, false, {
          fileName: "app/routes/posts.$postId.tsx",
          lineNumber: 188,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 186,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts.$postId.tsx",
      lineNumber: 168,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.$postId.tsx",
      lineNumber: 167,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.$postId.tsx",
      lineNumber: 166,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.$postId.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this);
  }
  const { meta: meta2, content } = post;
  console.log("tags=***>>>>>", meta2.tags);
  const myTags = post.meta.tags;
  console.log("myTags =>>>>>>> \u274C\u274C\u274C\u274C\u274C\u274C", myTags);
  const TagsPosts = [];
  if (!postsMeta) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "there are no Posts" }, void 0, false, {
      fileName: "app/routes/posts.$postId.tsx",
      lineNumber: 203,
      columnNumber: 12
    }, this);
  }
  myTags.forEach((tag) => {
    const tagPosts = postsMeta.filter((post2) => post2.tags?.includes(tag) ?? []);
    if (tagPosts.length > 0) {
      tagPosts.forEach((tagPost) => {
        TagsPosts.push(tagPost);
      });
    }
  });
  const notify = (text) => {
    Q.success(text, {
      position: "top-right",
      autoClose: 3e3,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: void 0
    });
  };
  const handleCodeClick = async (event) => {
    const codeElement = event.currentTarget;
    const codeText = codeElement.textContent || "";
    try {
      await navigator.clipboard.writeText(codeText);
      notify("Code successfully copied to clipboard");
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
      notify("Failed to copy code to clipboard");
    }
  };
  const codeElements = document.getElementsByTagName("pre");
  for (let i = 0; i < codeElements.length; i++) {
    const codeElement = codeElements[i];
    codeElement.style.cursor = "pointer";
    codeElement.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      handleCodeClick(
        event
      );
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MyNavbar_default, {}, void 0, false, {
      fileName: "app/routes/posts.$postId.tsx",
      lineNumber: 260,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mainPostContainer pt-[1rem] block px-3  prose prose-2xl prose-pr:m-12 prose-code:border-blue-700  mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-4 mb-0 text-[1.5rem] dark:text-[ghostwhite] text-gray-900 sm:text-[2rem] lg:text-[3rem] ", children: meta2.title }, void 0, false, {
          fileName: "app/routes/posts.$postId.tsx",
          lineNumber: 263,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "p",
          {
            style: { fontSize: "16px" },
            className: "mt-0 text-sm font-[ubuntu] font-[500]",
            children: [
              meta2.modified.split(" ")[0],
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "underline ml-1 text-white font-[ubuntu] font-[400]", children: "By Shivam." }, void 0, false, {
                fileName: "app/routes/posts.$postId.tsx",
                lineNumber: 274,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-sm ml-1 font-[400]", children: [
                " ",
                ", \u{1F4D6} ",
                meta2.readTime,
                " min Read"
              ] }, void 0, true, {
                fileName: "app/routes/posts.$postId.tsx",
                lineNumber: 277,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/posts.$postId.tsx",
            lineNumber: 269,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "article",
        {
          className: " myPostContentInArticle\n          prose-blockquote:bg-accent/20 \n          prose-blockquote:p-2\n          prose-blockquote:px-6\n          ]\n          prose-blockquote:border-accent\n          prose-blockquote:not-italic\n          prose-blockquote:rounded-r-lg\n\n          prose-li:marker:text-accent\n\n          dark:prose-invert\n          dark:prose-blockquote:border-accentDark\n          dark:prose-blockquote:bg-accentDark/20\n          dark:prose-li:marker:text-accentDark\n\n          first-letter:text-3xl\n          sm:first-letter:text-5xl\n          ",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: content } }, void 0, false, {
            fileName: "app/routes/posts.$postId.tsx",
            lineNumber: 322,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/posts.$postId.tsx",
          lineNumber: 283,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/posts.$postId.tsx",
      lineNumber: 261,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Related_default, { props: { MyPostsByTags: TagsPosts } }, void 0, false, {
      fileName: "app/routes/posts.$postId.tsx",
      lineNumber: 327,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.$postId.tsx",
      lineNumber: 326,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "afterPage", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AfterPage_default, {}, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 330,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/routes/posts.$postId.tsx",
        lineNumber: 331,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts.$postId.tsx",
      lineNumber: 329,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts.$postId.tsx",
    lineNumber: 259,
    columnNumber: 5
  }, this);
}
export {
  posts as default,
  meta
};
//# sourceMappingURL=/build/routes/posts.$postId-QMLVEWT5.js.map
