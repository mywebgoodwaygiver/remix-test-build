import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Meta, Links, Outlet, ScrollRestoration, Scripts, Link, useParams, useLoaderData, json } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createContext, useState, useEffect, useContext, useRef } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer, toast } from "react-toastify";
import { marked } from "marked";
import axios from "axios";
import { IoSearchSharp } from "react-icons/io5/index.esm.js";
import { FaChevronDown } from "react-icons/fa/index.esm.js";
import { SlFire } from "react-icons/sl/index.esm.js";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const postdata = createContext({
  postData: [],
  setPostData: () => {
  }
});
const latestPost = createContext({
  latestPostData: [],
  setLatestPostData: () => {
  }
});
const postsMetaContext = createContext({
  postsMeta: [],
  setPostsMeta: () => {
  }
});
const popularPost = createContext({
  popularPostData: [],
  setPopularPostData: () => {
  }
});
const myPage = createContext({
  page: 1,
  setPage: () => {
  }
});
const showSpiner = createContext({
  showSpin: null,
  setShowSpin: () => {
  }
});
const IsPostLoadingFunc = createContext({
  isLoading: false,
  setIsLoading: () => {
  }
});
const currentUrl = createContext({
  urlNow: "",
  setUrlNow: () => {
  }
});
const typingInput = createContext({
  typing: false,
  setTyping: () => {
  }
});
const Mode = createContext({
  isDarkMode: false,
  setIsDarkMode: () => {
  }
});
const PostsByTags = createContext({
  MyTagPostsHook: [],
  setMyTagPostsHook: () => {
  }
});
const speakingTimeOut = createContext({
  speechTimeout: null,
  setSpeechTimeout: () => {
  }
});
const mySearchInput = createContext({
  searchInput: "",
  setSearchInput: () => {
  }
});
const ContextProvider = ({ children }) => {
  const [postData, setPostData] = useState([]);
  const [latestPostData, setLatestPostData] = useState([]);
  const [postsMeta, setPostsMeta] = useState([]);
  const [popularPostData, setPopularPostData] = useState([]);
  const [page, setPage] = useState(1);
  const [showSpin, setShowSpin] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [MyTagPostsHook, setMyTagPostsHook] = useState([]);
  const [speechTimeout, setSpeechTimeout] = useState(null);
  const [urlNow, setUrlNow] = useState("home");
  const [isLoading, setIsLoading] = useState(false);
  return /* @__PURE__ */ jsx(postdata.Provider, { value: { postData, setPostData }, children: /* @__PURE__ */ jsx(latestPost.Provider, { value: { latestPostData, setLatestPostData }, children: /* @__PURE__ */ jsx(postsMetaContext.Provider, { value: { postsMeta, setPostsMeta }, children: /* @__PURE__ */ jsx(
    popularPost.Provider,
    {
      value: { popularPostData, setPopularPostData },
      children: /* @__PURE__ */ jsx(myPage.Provider, { value: { page, setPage }, children: /* @__PURE__ */ jsx(showSpiner.Provider, { value: { showSpin, setShowSpin }, children: /* @__PURE__ */ jsx(
        mySearchInput.Provider,
        {
          value: { searchInput, setSearchInput },
          children: /* @__PURE__ */ jsx(typingInput.Provider, { value: { typing, setTyping }, children: /* @__PURE__ */ jsx(Mode.Provider, { value: { isDarkMode, setIsDarkMode }, children: /* @__PURE__ */ jsx(PostsByTags.Provider, { value: { MyTagPostsHook, setMyTagPostsHook }, children: /* @__PURE__ */ jsx(speakingTimeOut.Provider, { value: { speechTimeout, setSpeechTimeout }, children: /* @__PURE__ */ jsx(currentUrl.Provider, { value: { urlNow, setUrlNow }, children: /* @__PURE__ */ jsx(IsPostLoadingFunc.Provider, { value: { isLoading, setIsLoading }, children }) }) }) }) }) })
        }
      ) }) })
    }
  ) }) }) });
};
const LiveReload = () => null;
function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateTheme = () => {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        setTheme(systemTheme);
      };
      updateTheme();
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateTheme);
      return () => {
        window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", updateTheme);
      };
    }
  }, []);
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ jsxs("head", {
        children: [
          /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
          /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
          /* @__PURE__ */ jsx(Meta, {}),
          /* @__PURE__ */ jsx(Links, {})
        ]
      }),
      /* @__PURE__ */ jsx("body", { children: /* @__PURE__ */ jsx(ContextProvider, { children: /* @__PURE__ */ jsxs(SkeletonTheme, {
        baseColor: theme === "light" ? "#171717" : "#ffffff",
        highlightColor: theme === "light" ? "#444" : "#777777",
        children: [
          /* @__PURE__ */ jsx(
            ToastContainer,
            {
              position: "top-right",
              autoClose: 5e3,
              hideProgressBar: false,
              newestOnTop: false,
              closeOnClick: true,
              rtl: false,
              pauseOnFocusLoss: true,
              draggable: true,
              pauseOnHover: true,
              theme: "dark"
            }
          ),
          /* @__PURE__ */ jsx(Outlet, {}),
          /* @__PURE__ */ jsx(ScrollRestoration, {}),
          /* @__PURE__ */ jsx(LiveReload, {}),
          /* @__PURE__ */ jsx(Scripts, {})
        ]
      }) }) })
    ]
  });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
async function getPostByName(fileName) {
  console.log("hello bro i am in findbyname");
  function readTime(inputString) {
    const wordsPerMinute = 200;
    const totalWords = inputString.trim().split(/\s+/).length;
    const totalMinutes = Math.ceil(totalWords / wordsPerMinute);
    return totalMinutes;
  }
  try {
    const response = await fetch(`https://add-post-data-locally-backend-goodwaygiver.vercel.app/post/getPostData/${fileName}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post data. Status: ${response.status}`);
    }
    const responseJson1 = await response.json();
    const responseJson = responseJson1.post;
    if (!responseJson) {
      throw new Error(`Invalid response format. Missing post data.`);
    }
    const result = await marked(responseJson.data);
    const readTimeIs = readTime(responseJson.data);
    const blogPostObj = {
      meta: {
        id: fileName.replace(/\.mdx$/, ""),
        title: responseJson.title,
        date: responseJson.datecreated,
        tags: responseJson.tags,
        image: responseJson.thumbnail,
        link: responseJson.link,
        description: responseJson.description,
        modified: responseJson.dateupdated,
        readTime: readTimeIs
      },
      content: result
    };
    return blogPostObj;
  } catch (error) {
    console.error("Error in getPostByName:", error);
    throw error;
  }
}
async function getPostsMeta() {
  try {
    const response = await fetch("https://add-post-data-locally-backend-goodwaygiver.vercel.app/post/getPostsMeta");
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const responseJson = await response.json();
    const posts2 = [];
    await Promise.all(
      responseJson.map(async (metaobj) => {
        try {
          posts2.push(metaobj);
        } catch (error) {
          console.error("Error pushing post to array:", error);
        }
      })
    );
    const finalReturn = posts2.sort((a, b) => a.datecreated < b.datecreated ? 1 : -1);
    console.log("finalReturn =>>>>>> 💗💗💗💗💗💗", finalReturn.length);
    return responseJson;
  } catch (error) {
    console.error("An error occurred:", error);
    return void 0;
  }
}
const MySkeleton = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: " flex my-2 hover:scale-105 hover:border-2 hover:border-blue-400 rounded-md shadow-lg", children: [
    /* @__PURE__ */ jsx(
      Skeleton,
      {
        width: 142,
        height: 80
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-2 w-[95%] ml-2", children: /* @__PURE__ */ jsx(Skeleton, { count: 1 }) }),
      /* @__PURE__ */ jsx("p", { className: "mb-2 w-[70%] ml-2", children: /* @__PURE__ */ jsx(Skeleton, { count: 1 }) }),
      /* @__PURE__ */ jsx("p", { className: "mb-2 w-[35%] ml-2", children: /* @__PURE__ */ jsx(Skeleton, { count: 1 }) })
    ] })
  ] }) });
};
const AfterPage = () => {
  const { latestPostData } = useContext(latestPost);
  const { popularPostData } = useContext(popularPost);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "bg-white dark:bg-gray-900 dark:text-white", children: /* @__PURE__ */ jsxs("div", { className: "maincontainerAfterPage sm:grid sm:grid-cols-2 dark:bg-gray-900 dark:text-white sm:gap-3 pb-4 px-4  mx-auto max-w-screen-xl text-center rounded bg-gray-50 flex flex-col", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: { borderColor: "wheat" },
        className: "latestContainer    border-4   pl-0.5",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center latestContant", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold  border-b-2 border-dashed border-pink-500 text-2xl text-start block pl-2 pb-1", children: "Latest" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                width: 32,
                height: 32,
                className: "h-8 w-8 ml-2 dark:filter dark:invert",
                src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlh9PF0i_UKcoE9U8SWHNG7CX2BhNeoLXmeIa-ACRdKv4VRGfgwri13zzQ4qf8XLce6TyEMX5C6A74F3JoxcQPwJcxRB_9sDZlztXBRR1e1MuUdmLGiw4CzE8_KsRu824nYp1R5Wr0teLnBGR5OIO-A-CUi3J6hWxKGxv5x7JdD2iSj9qlV6_zysZHBhA/w400-h400/latesticon.png",
                alt: "new img"
              }
            )
          ] }),
          !latestPostData.length ? Array(4).fill(0).map(() => {
            return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(MySkeleton, {}) });
          }) : /* @__PURE__ */ jsx("div", { children: latestPostData.map((post) => /* @__PURE__ */ jsx(Link, { to: `/posts${post.link}`, children: /* @__PURE__ */ jsxs("div", { className: " flex my-2 hover:scale-105 hover:border-2 duration-300 transition-transform hover:border-blue-400 rounded-md shadow-lg", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                width: 142,
                height: 80,
                className: " latestCotainerImage h-20 border-2 border-black rounded-sm",
                src: `${post.thumbnail}`,
                alt: ""
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "infoInText font-medium flex flex-col", children: [
              /* @__PURE__ */ jsx("span", { className: " w-auto pl-4 text-start", children: post.title }),
              /* @__PURE__ */ jsxs("span", { className: "views pl-4	 flex justify-start items-center", children: [
                /* @__PURE__ */ jsx("b", { className: "px-2 text-blue-500", children: "Views" }),
                " ",
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-5 h-5 pr-0.5 font-bold text-gray-800 dark:text-white",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 14",
                    children: /* @__PURE__ */ jsxs(
                      "g",
                      {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        children: [
                          /* @__PURE__ */ jsx("path", { d: "M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }),
                          /* @__PURE__ */ jsx("path", { d: "M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" })
                        ]
                      }
                    )
                  }
                ),
                post.views
              ] })
            ] })
          ] }) }, post._id)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: { borderColor: "wheat" },
        className: "PopularContainer border-4 border-blue-500 pl-0.5",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold  border-b-2 border-dashed border-lime-500 text-2xl text-start block pl-2 pb-1", children: "Popular" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                width: 32,
                height: 32,
                className: "h-8 w-8 ml-2 dark:filter dark:invert",
                src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgocEYbDmzkXPOlV29vgpn4ORGtpIQAIDuNd0jo6C_DWlflju-monJC7rRyKeJnGRCXxV3aaS4Tpec0OEST2b5DOdLcvrGU_pLS01UYeQ_o0QJT6V-WE_u6AFbF_z3lfpdyYJ1E8vet06S2LSTHaA79LmO2bQN2U6Jd3hYlHTgYv5vsuOHoJDSoiqCXGC0/w400-h400/popularicon.png",
                alt: "popular img"
              }
            )
          ] }),
          !popularPostData.length ? Array(4).fill(0).map(() => {
            return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(MySkeleton, {}) });
          }) : /* @__PURE__ */ jsx("div", { children: popularPostData.map((post) => /* @__PURE__ */ jsx(Link, { to: `/posts${post.link}`, children: /* @__PURE__ */ jsxs("div", { className: " flex my-2 hover:scale-105 hover:border-2 hover:border-blue-400 rounded-md shadow-lg", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                width: 142,
                height: 80,
                className: "h-20 border-2 border-black rounded-sm",
                src: `${post.thumbnail}`,
                alt: ""
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "infoInText font-medium flex flex-col", children: [
              /* @__PURE__ */ jsx("span", { className: "w-full  text-start pl-4", children: post.title }),
              /* @__PURE__ */ jsxs("span", { className: "views pl-4	 flex justify-start items-center", children: [
                /* @__PURE__ */ jsx("b", { className: "px-2 text-blue-500", children: "Views" }),
                " ",
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-5 h-5 pr-0.5 font-bold text-gray-800 dark:text-white",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 14",
                    children: /* @__PURE__ */ jsxs(
                      "g",
                      {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        children: [
                          /* @__PURE__ */ jsx("path", { d: "M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }),
                          /* @__PURE__ */ jsx("path", { d: "M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" })
                        ]
                      }
                    )
                  }
                ),
                post.views
              ] })
            ] }),
            " "
          ] }) }, post._id)) })
        ]
      }
    )
  ] }) }) });
};
const StopPoint = ({ style }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: `bg-white ${style ? style : "dark:bg-gray-900"} mb-2`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center dark:-mb-2", children: [
    /* @__PURE__ */ jsx("hr", { className: "border-t-4 border-blue-600 w-44 dark:border-white rounded-l-full" }),
    /* @__PURE__ */ jsx("b", { className: "font-normal dark:text-white px-1.5", children: "»»⋇⋆★⋆⋇»»" }),
    /* @__PURE__ */ jsx("hr", { className: "border-t-4 border-blue-600 w-44 dark:border-white rounded-r-full" })
  ] }) }) });
};
const StopPoint$1 = StopPoint;
const Spinner = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { role: "status", className: "flex items-center justify-center m-4", children: [
    /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", className: "w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
      /* @__PURE__ */ jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Loading..." })
  ] }) });
};
const Spinner$1 = Spinner;
const Related = ({ props: { MyPostsByTags } }) => {
  let uniquePostsSet = new Set(MyPostsByTags.map((post) => post.link));
  console.log(
    "uniquePostsSet =>>>> 🥰🥰🥰🥰🥰",
    uniquePostsSet,
    "And MyPostsByTags length=>>>>> ",
    MyPostsByTags.length
  );
  let uniquePostsArray = Array.from(uniquePostsSet).map((link) => MyPostsByTags.find((post) => post.link === link)).filter((post) => post !== void 0);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    uniquePostsArray && /* @__PURE__ */ jsx("section", { className: "bg-blue-100 rounded-sm dark:bg-gray-900 px-1 drop-shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "py-2 px-0 mx-auto max-w-screen-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
        /* @__PURE__ */ jsxs("h2", { className: "my-3 px-2.5 inline text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white", children: [
          "Related",
          " "
        ] }),
        " ",
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-8 w-8 dark:filter dark:invert",
            src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgocEYbDmzkXPOlV29vgpn4ORGtpIQAIDuNd0jo6C_DWlflju-monJC7rRyKeJnGRCXxV3aaS4Tpec0OEST2b5DOdLcvrGU_pLS01UYeQ_o0QJT6V-WE_u6AFbF_z3lfpdyYJ1E8vet06S2LSTHaA79LmO2bQN2U6Jd3hYlHTgYv5vsuOHoJDSoiqCXGC0/w400-h400/popularicon.png",
            alt: ""
          }
        )
      ] }),
      uniquePostsArray && !uniquePostsArray.length ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Spinner$1, {}),
        /* @__PURE__ */ jsx("h1", { className: "text-center font-bold", children: "Oh! No length " })
      ] }) : /* @__PURE__ */ jsx("div", { className: "grid gap-2 mb-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2", children: uniquePostsArray && uniquePostsArray.length === 0 ? /* @__PURE__ */ jsx("h1", { className: "px-2.5 text-2xl font-bold ", children: "0" }) : uniquePostsArray.map((post) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "hover:shadow-lg  hover:scale-105 duration-300 transition-transform hover:border hover:border-1.5 hover:border-blue-300 items-center flex flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700",
          children: [
            /* @__PURE__ */ jsx(Link, { to: `/posts${post.link}`, children: /* @__PURE__ */ jsx(
              "img",
              {
                width: 650,
                height: 650,
                className: "w-full rounded-lg ",
                src: `${post.thumbnail}`,
                alt: "Bonnie Avatar"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsx("h3", { className: "text-sm font-lighter tracking-tight text-gray-900 dark:text-white", children: /* @__PURE__ */ jsxs("span", { className: "font-[700]", children: [
              post.title,
              " "
            ] }) }) })
          ]
        },
        post._id
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(StopPoint$1, {})
  ] });
};
const commonrequest = async ({
  method,
  url,
  body,
  header
}) => {
  const config = {
    method,
    url,
    headers: header ? header : {
      "Content-Type": "application/json"
    },
    data: body
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error.message;
  }
};
const BASE_URL = "https://add-post-data-locally-backend-goodwaygiver.vercel.app";
const getPostsFunc = async (search) => {
  return await commonrequest({
    method: "GET",
    url: `${BASE_URL}/post/getAllPost?search=${search}`
  });
};
const getLatestPostFunc = async () => {
  return await commonrequest({
    method: "GET",
    url: `${BASE_URL}/post/getLatest`
  });
};
const getPopularPostFunc = async () => {
  return await commonrequest({
    method: "GET",
    url: `${BASE_URL}/post/getPopular`
  });
};
const sendEmail = async (body) => {
  return await commonrequest({
    method: "POST",
    url: `${BASE_URL}/post/sendemail/`,
    body
  });
};
function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { typing, setTyping } = useContext(typingInput);
  const [urlNow, setUrlNow] = useState("home");
  const handleClick = (e) => {
    const anchorElement = e.target;
    setUrlNow(anchorElement.id);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { postData, setPostData } = useContext(postdata);
  const { searchInput, setSearchInput } = useContext(mySearchInput);
  const { showSpin, setShowSpin } = useContext(showSpiner);
  const [tempInp, setTempInp] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const isInputEmpty = (inputValue) => /^\s*$/.test(inputValue);
  const focusInput = () => {
    if (typing === true && inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handlesetUrl = (url) => {
    console.log("Link clicked", url);
  };
  const changeInpValue = (e) => {
    const search = e.target.value;
    console.log("Search value:", search);
    setTyping(true);
    const searchempty = isInputEmpty(search);
    console.log(searchempty);
    if (!searchempty) {
      setTempInp(search);
      console.log("searchInput =<>>>>", tempInp);
    }
    const isempty = isInputEmpty(tempInp);
    if (isempty) {
      setShowSpin(false);
      return setPostData([]);
    }
  };
  const handleAfterEvent = async () => {
    let trimedtempInp = tempInp.trim();
    setSearchInput(trimedtempInp.length === 1 ? "" : trimedtempInp);
    setIsSearchOpen(false);
    setShowSpin(true);
    const response = await getPostsFunc(searchInput);
    let data;
    if (typeof response === "string") {
      console.error("Error:", response);
    } else {
      data = response.data;
    }
    console.log("data.postdata: ", data.postdata);
    setPostData(data.postdata);
    setShowSpin(false);
  };
  const handleSeachPost = async (e) => {
    e.preventDefault();
    handleAfterEvent();
  };
  const { setLatestPostData } = useContext(latestPost);
  const { setPopularPostData } = useContext(popularPost);
  const handleIsSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const getLatestPost = async () => {
    const response = await getLatestPostFunc();
    let data;
    if (typeof response === "string") {
      console.error("Error:", response);
    } else {
      data = response.data;
    }
    console.log(data);
    setLatestPostData(data);
  };
  const getPopularPost = async () => {
    const response = await getPopularPostFunc();
    let data;
    if (typeof response === "string") {
      console.error("Error:", response);
    } else {
      data = response.data;
    }
    console.log(data);
    setPopularPostData(data);
  };
  const handleKeyDownSearch = async (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      e.preventDefault();
      handleAfterEvent();
    }
  };
  useEffect(() => {
    getLatestPost();
    getPopularPost();
    focusInput();
  }, []);
  console.log("urlNow ", urlNow);
  const { postsMeta, setPostsMeta } = useContext(postsMetaContext);
  const runThisFuncForPostsMeta = async () => {
    const response = await getPostsMeta();
    if (response) {
      console.log("response=>>>>>😆", response);
    }
    let data = [];
    if (typeof response === "string") {
      console.error("Error:", response);
    } else {
      data = response;
    }
    console.log("PostsMetaData =>>>>>>⚠⚠⚠⚠⚠⚠⚠⚠", data);
    setPostsMeta(data);
  };
  useEffect(() => {
    runThisFuncForPostsMeta();
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mb-[3rem]", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("header", { className: "bg-gray-50 mb-6 md:mb-4 ", children: /* @__PURE__ */ jsxs("nav", { className: "flex shadow-lg z-30 justify-between fixed top-0 bg-gray-50  dark:bg-gray-900 dark:shadow-blue-300 dark:shadow-sm items-center w-[100%] mx-auto px-1 py-3 ", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            width: 40,
            height: 40,
            src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3XnABTUt4Qc9bJpf67KlHp0T06Tc4UuwbFeNBOs95cQ5CaoWitFztCbjNXMkqbQGig4QpEqZMJlNh8cDvkll7n7M_9km8jZRCZbWEcxIAM98aWZ-aCkEr0NprFxi9kKoTpFYZt_ghD5rSf_QvUl-f3fSWuErxi81MLrTcqQyT2OFmYMtTHMPQJ_8FzRo/w640-h640/Copy%20of%20GWG%20(192%20x%20192%20px).png",
            className: "h-10 mr-1 rounded-full",
            alt: "GoodWayGiver Logo"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "self-center text-xl sm:2xl font-semibold whitespace-nowrap dark:text-white", children: [
          /* @__PURE__ */ jsx("b", { className: "text-blue-500", children: "G" }),
          "ood",
          /* @__PURE__ */ jsx("b", { className: "text-[coral]", children: "W" }),
          "ay",
          /* @__PURE__ */ jsx("b", { className: "text-[#ff00bb]", children: "G" }),
          "iver"
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `nav-links duration-500 md:static fixed justify-center  left-0 text-justify bg-gray-50 dark:bg-gray-900 dark:text-white md:min-h-fit  w-[100%] ${isMenuOpen ? "top-[65px]" : "top-[-100%] "} md:w-auto flex w-full items-center `,
          children: /* @__PURE__ */ jsxs("ul", { className: "flex md:flex-row flex-col items-start md:items-center font-normal gap-4 font-[Actor] ", children: [
            /* @__PURE__ */ jsx("li", { className: "font-semibold text-lg", children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/",
                className: `block  ${urlNow === "home" ? "text-blue-700 dark:text-white underline underline-offset-8" : "text-black"}   dark:hover:text-white dark:text-gray-400 hover:text-blue-500 hover:underline hover:underline-offset-8`,
                onClick: handleClick,
                id: "home",
                children: "Home"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "font-semibold text-lg", children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/about",
                className: `block  ${urlNow === "about" ? "text-blue-700 dark:text-white underline underline-offset-8" : "text-black"}   dark:hover:text-white dark:text-gray-400 hover:text-blue-500 hover:underline hover:underline-offset-8`,
                onClick: handleClick,
                id: "about",
                children: "About"
              }
            ) }),
            /* @__PURE__ */ jsx(
              "li",
              {
                className: "font-semibold text-lg",
                onClick: () => handlesetUrl("services"),
                children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/services",
                    className: `block  ${urlNow === "services" ? "text-blue-700 dark:text-white underline underline-offset-8" : "text-black"}   dark:hover:text-white dark:text-gray-400 hover:text-blue-500 hover:underline hover:underline-offset-8`,
                    onClick: handleClick,
                    id: "services",
                    children: "Services"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("li", { className: "font-semibold text-lg    ", children: /* @__PURE__ */ jsx(
              "div",
              {
                children: /* @__PURE__ */ jsxs("div", { className: "dropdown dropdown-hover", children: [
                  /* @__PURE__ */ jsxs(
                    "label",
                    {
                      tabIndex: 0,
                      className: `dark:hover:text-white hover:text-blue-500 dark:text-gray-400 ${urlNow === "contact" ? "text-blue-700 dark:text-white underline underline-offset-8" : "text-black"}  font-semibold text-lg inline-flex bg-none  border-0 w-full justify-center items-center  rounded-md   `,
                      children: [
                        "More",
                        /* @__PURE__ */ jsx(
                          FaChevronDown,
                          {
                            className: ` h-4 w-4 mt-1 ml-0.5 text-gray-400`,
                            "aria-hidden": "true"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "ul",
                    {
                      tabIndex: 0,
                      className: "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52",
                      children: [
                        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                          Link,
                          {
                            to: "/contact",
                            className: `p-1 text-sm flex items-center  hover:text-white dark:hover:text-white hover:bg-blue-500 rounded-md  w-[100%]  ${urlNow === "contact" ? "text-white bg-blue-500 dark:bg-blue-500 rounded-md" : "text-black dark:text-white"}   dark:hover:text-white`,
                            onClick: handleClick,
                            id: "contact",
                            children: /* @__PURE__ */ jsx(
                              "p",
                              {
                                title: "Contact me",
                                className: "theme-controller btn btn-sm btn-block btn-ghost justify-start pr-1",
                                children: "Contact"
                              }
                            )
                          }
                        ) }),
                        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                          Link,
                          {
                            to: "https://shop.goodwaygiver.site",
                            target: "_blank",
                            className: "mt-1 p-1 text-sm flex items-center  hover:text-white dark:hover:text-white hover:bg-blue-500 rounded-md  w-[100%] ",
                            children: /* @__PURE__ */ jsx(
                              "p",
                              {
                                title: "Go to Our Shop",
                                className: "theme-controller btn btn-sm btn-block btn-ghost justify-start pr-1",
                                children: "Shop 🛍️"
                              }
                            )
                          }
                        ) })
                      ]
                    }
                  )
                ] })
              }
            ) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-[0.6rem]", children: [
        /* @__PURE__ */ jsxs("form", { children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "default-search",
              className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",
              children: "Search"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: `relative hidden md:flex md:items-center `, children: [
            /* @__PURE__ */ jsx("div", { className: "absolute   inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: `w-4 h-4 text-gray-500  dark:text-gray-400 hidden md:block `,
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 20 20",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "default-search mySearch",
                className: "block w-full h-[38px] px-4 pl-10 text-sm border-r-0 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                placeholder: "Search....",
                ref: inputRef,
                style: { borderRadius: "12px 0px 0px 45px" },
                onKeyDown: handleKeyDownSearch,
                onChange: (e) => changeInpValue(e)
              }
            ),
            " ",
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                style: { borderRadius: "0px 43px 12px 0px" },
                onClick: (e) => handleSeachPost(e),
                className: "text-white  bg-gradient-to-r from-blue-500 border-l-0 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-[0.55rem] text-center m-0",
                children: "Search"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          IoSearchSharp,
          {
            className: "h-6 w-6 cursor-pointer block md:hidden dark:text-white",
            onClick: handleIsSearchOpen
          }
        ),
        !isMenuOpen && /* @__PURE__ */ jsx(
          "svg",
          {
            onClick: toggleMenu,
            className: "text-3xl focus:ring-4  cursor-pointer block md:hidden w-6 h-6 text-gray-800 dark:text-white",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 17 14",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M1 1h15M1 7h15M1 13h15"
              }
            )
          }
        ),
        isMenuOpen && /* @__PURE__ */ jsx(
          "svg",
          {
            onClick: toggleMenu,
            className: "w-5 h-5 text-gray-800 focus:ring-4  dark:text-white md:w-0",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 14 14",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              }
            )
          }
        )
      ] })
    ] }) }) }),
    isSearchOpen && /* @__PURE__ */ jsxs("div", { className: "serachforphone", children: [
      /* @__PURE__ */ jsxs("form", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "default-search",
            className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",
            children: "Search"
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `fixed w-[100%] top-[3.5rem] z-[30] bg-gray-50 flex items-center
            p-[3px] md:hidden dark:bg-gray-900`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute   inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: `w-4 h-4   text-gray-500  dark:text-gray-400 block
                ml-2`,
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 20 20",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "default-search mySearch text-semibold",
                  className: "block w-full h-[38px] px-4 pl-10 text-sm border-r-0 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  placeholder: "Search ...",
                  required: true,
                  ref: inputRef,
                  onChange: (e) => changeInpValue(e),
                  onKeyDown: handleKeyDownSearch,
                  style: { borderRadius: "12px 0px 0px 45px" }
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  style: { borderRadius: "0px 43px 12px 0px" },
                  type: "button",
                  onClick: (e) => handleSeachPost(e),
                  className: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br m-0 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-[0.55rem] text-center ",
                  children: "Search"
                }
              )
            ]
          }
        )
      ] }),
      " "
    ] })
  ] }) });
}
const Footer = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("footer", { className: " bg-white pt-4 dark:bg-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "mx-4 max-w-screen-xl border-t-2 border-black dark:border-none px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:flex md:justify-between mt-2 ", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 md:mb-0", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3XnABTUt4Qc9bJpf67KlHp0T06Tc4UuwbFeNBOs95cQ5CaoWitFztCbjNXMkqbQGig4QpEqZMJlNh8cDvkll7n7M_9km8jZRCZbWEcxIAM98aWZ-aCkEr0NprFxi9kKoTpFYZt_ghD5rSf_QvUl-f3fSWuErxi81MLrTcqQyT2OFmYMtTHMPQJ_8FzRo/w640-h640/Copy%20of%20GWG%20(192%20x%20192%20px).png",
            className: "mr-3 h-10 rounded-full",
            alt: "Good Way Giver Logo"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white", children: "Good Way Giver" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 footerulLinks", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white", children: "Services" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ jsx("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ jsx(
              Link,
              {
                target: "_blank",
                to: "https://shop.goodwaygiver.site/",
                className: "hover:underline hover:ml-1.5 ",
                children: "Shop"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                target: "_blank",
                to: "https://shop.goodwaygiver.site/",
                className: "hover:underline hover:ml-1.5 ",
                children: "Affiliated Shop"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white", children: "Follow us" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ jsx("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ jsx(
              Link,
              {
                target: "_blank",
                to: "https://www.youtube.com/@GoodWayGiver",
                className: "hover:underline hover:ml-1.5  ",
                children: "YouTube"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ jsx(
              Link,
              {
                target: "_blank",
                to: "https://instagram.com/goodwaygivertech?igshid=OGQ5ZDc2ODk2ZA==",
                className: "hover:underline hover:ml-1.5 ",
                children: "Instagram"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ jsx(
              Link,
              {
                target: "_blank",
                to: "https://www.facebook.com/goodwaygiver?mibextid=ZbWKwL",
                className: "hover:underline hover:ml-1.5  ",
                children: "FaceBook"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white", children: "More" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ jsx("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ jsx(
              Link,
              {
                target: "_blank",
                to: "/about",
                className: "hover:underline hover:ml-1.5  ",
                children: "About Me"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ jsx(
              Link,
              {
                target: "_blank",
                to: "/contax",
                className: "hover:underline hover:ml-1.5 ",
                children: "Contact Me"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white", children: "Legal" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ jsx("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/privacy-policy",
                target: "_blank",
                className: "hover:underline hover:ml-1.5 ",
                children: "Privacy Policy"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { className: "mb-1.5  md:mb-2 lg:mb-4 sm:mb-1.5", children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/privacy-policy",
                target: "_blank",
                className: "hover:underline hover:ml-1.5 ",
                children: "Terms & Conditions"
              }
            ) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: " border-gray-200 sm:mx-auto dark:border-gray-500" }),
    /* @__PURE__ */ jsxs("div", { className: " my-3 socel-media-icons sm:flex sm:items-center sm:justify-between sm:flex-row ", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-semibold text-gray-500 sm:text-center dark:text-gray-400", children: [
        "© 2023",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:underline ", children: "Good Way Giver" }),
        ". All Well"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " flex mt-4 space-x-6 sm:justify-center sm:items-center sm:mt-0", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "https://www.facebook.com/goodwaygiver?mibextid=ZbWKwL",
            target: "_blank",
            className: "text-gray-500 hover:text-gray-900 dark:hover:text-white",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-6 h-6",
                fill: "blue",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                    clipRule: "evenodd"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "https://www.youtube.com/@GoodWayGiver",
            target: "_blank",
            className: "text-gray-500 hover:text-gray-900 dark:hover:text-white",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-6 h-6",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "red",
                viewBox: "0 0 20 14",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z",
                    clipRule: "evenodd"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "https://instagram.com/goodwaygivertech?igshid=OGQ5ZDc2ODk2ZA==",
            target: "_blank",
            className: "text-gray-500 hover:text-gray-900 dark:hover:text-white",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-6 h-6",
                fill: "red",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                    clipRule: "evenodd"
                  }
                )
              }
            )
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: " mb-1 border-gray-200 sm:mx-auto dark:border-white  " })
  ] }) }) });
};
const PageFormate = ({ children }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(MyNavbar, {}),
    children,
    /* @__PURE__ */ jsx(AfterPage, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const loader = async ({ params }) => {
  try {
    const myresponse = await getPostByName(params.postId);
    const response = await getPostsMeta();
    return json({ post: myresponse, postsMeta: response, loading: false });
  } catch (error) {
    console.log(error);
  }
};
const meta$2 = ({ data }) => {
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
function posts$1() {
  const params = useParams();
  const { postId } = params;
  const { postsMeta, setPostsMeta } = useContext(postsMetaContext);
  const [post, setPost] = useState(null);
  let myloaderdata = useLoaderData();
  console.log("myloaderdata=>>>>>>>>> 📲📲📲📲📲📲📲📲", myloaderdata.post);
  useEffect(() => {
    setPost(myloaderdata.post);
    setPostsMeta(myloaderdata.postsMeta);
  }, [postId]);
  if (!post) {
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(PageFormate, { children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-2xl mx-auto pt-[1rem]", children: /* @__PURE__ */ jsxs("div", { className: "w-full rounded my-4", children: [
      /* @__PURE__ */ jsx(Skeleton, { height: 64 * 4, width: "100%", className: "rounded" }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Skeleton, { count: 3 }) }),
      /* @__PURE__ */ jsx("p", { className: "w-[70%] mb-2", children: /* @__PURE__ */ jsx(Skeleton, { count: 1 }) }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Skeleton, { count: 4 }) }),
      /* @__PURE__ */ jsx("p", { className: "w-[70%] mb-2", children: /* @__PURE__ */ jsx(Skeleton, { count: 1 }) }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Skeleton, { count: 5 }) }),
      /* @__PURE__ */ jsxs("p", { className: "w-[70%] mb-2", children: [
        " ",
        /* @__PURE__ */ jsx(Skeleton, { count: 1 })
      ] })
    ] }) }) }) });
  }
  const { meta: meta2, content } = post;
  console.log("tags=***>>>>>", meta2.tags);
  const myTags = post.meta.tags;
  console.log("myTags =>>>>>>> ❌❌❌❌❌❌", myTags);
  const TagsPosts = [];
  if (!postsMeta) {
    return /* @__PURE__ */ jsx("h1", { children: "there are no Posts" });
  }
  myTags.forEach((tag) => {
    const tagPosts = postsMeta.filter((post2) => {
      var _a;
      return ((_a = post2.tags) == null ? void 0 : _a.includes(tag)) ?? [];
    });
    if (tagPosts.length > 0) {
      tagPosts.forEach((tagPost) => {
        TagsPosts.push(tagPost);
      });
    }
  });
  const notify = (text) => {
    toast.success(text, {
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(MyNavbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "mainPostContainer pt-[1rem] block px-3  prose prose-2xl prose-pr:m-12 prose-code:border-blue-700  mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mt-4 mb-0 text-[1.5rem] dark:text-[ghostwhite] text-gray-900 sm:text-[2rem] lg:text-[3rem] ", children: meta2.title }),
        /* @__PURE__ */ jsxs(
          "p",
          {
            style: { fontSize: "16px" },
            className: "mt-0 text-sm font-[ubuntu] font-[500]",
            children: [
              meta2.modified.split(" ")[0],
              /* @__PURE__ */ jsx("span", { className: "underline ml-1 text-white font-[ubuntu] font-[400]", children: "By Shivam." }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm ml-1 font-[400]", children: [
                " ",
                ", 📖 ",
                meta2.readTime,
                " min Read"
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "article",
        {
          className: " myPostContentInArticle\n          prose-blockquote:bg-accent/20 \n          prose-blockquote:p-2\n          prose-blockquote:px-6\n          ]\n          prose-blockquote:border-accent\n          prose-blockquote:not-italic\n          prose-blockquote:rounded-r-lg\n\n          prose-li:marker:text-accent\n\n          dark:prose-invert\n          dark:prose-blockquote:border-accentDark\n          dark:prose-blockquote:bg-accentDark/20\n          dark:prose-li:marker:text-accentDark\n\n          first-letter:text-3xl\n          sm:first-letter:text-5xl\n          ",
          children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: content } })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Related, { props: { MyPostsByTags: TagsPosts } }) }),
    /* @__PURE__ */ jsxs("div", { className: "afterPage", children: [
      /* @__PURE__ */ jsx(AfterPage, {}),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: posts$1,
  loader,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const meta$1 = () => {
  return [
    { title: "Services Page" },
    { name: "description", content: "Welcome to Services" }
  ];
};
const ServicesPage = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "mr-auto place-self-center  lg:col-span-7", children: [
      /* @__PURE__ */ jsx("h1", { className: "max-w-2xl mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white", children: "Our Services" }),
      /* @__PURE__ */ jsx("h1", { className: "max-w-2xl mb-2 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white", children: "1. Good Way Giver Shop" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-2xl mb-6 mx-4 font-semibold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400", children: "This is our eCommerce website, where you'll discover a fantastic selection of products handpicked just for you. We've joined Amazon's affiliate program to bring you the best deals and top-quality items. It's as simple as this: you browse, you shop, and we earn a little something for helping you find what you need and a better product." }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          target: "_blank",
          href: "https://shop.goodwaygiver.site",
          className: "inline-flex mx-4  items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-blue-200  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
          children: [
            /* @__PURE__ */ jsx("b", { className: "px-1 ", children: "Go To Shop" }),
            " ",
            /* @__PURE__ */ jsxs(
              "svg",
              {
                className: "w-6 h-6 dark:filter dark:invert hover:text-white text-gray-800 dark:text-white",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "#ff ",
                viewBox: "0 0 18 18",
                children: [
                  /* @__PURE__ */ jsx("path", { d: "M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" }),
                  /* @__PURE__ */ jsx("path", { d: "m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" })
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: " flex justify-center lg:mt-0 lg:col-span-5 lg:flex", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "rounded-full mt-auto w-auto h-[250px]",
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbquYFtQINQQt3iga7xmwBxMtuG_HMVMEiEVai00VSXCIlslyWBwnPOIwtSsqFHjlVljGVIhvIsDn4_44Rix8-oU9EaW48LbnVi-kQLbbYx4K_ciiaV09XXCEhHMjK0BIG-xK6-tGHHUx3GCa3EEhA7T5UvMd_BawTHAiH952VyQidThDOP-uvQAaLijQ/s320/logogif.gif",
        alt: "GWG Logo"
      }
    ) })
  ] }) }) });
};
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ServicesPage,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const ContactPage = () => {
  const [mailOptions, setMailOptions] = useState({
    subject: "",
    from: "",
    text: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [errWSent, setErrWSent] = useState(false);
  const handleChange = (e) => {
    setMailOptions({ ...mailOptions, [e.target.name]: e.target.value });
    setAlertMessage("");
  };
  const showAlert = (message) => {
    setAlertMessage(message);
  };
  const handleSendAgain = () => {
    setSending(false);
  };
  const sendEmailFunc = async (e) => {
    e == null ? void 0 : e.preventDefault();
    if (!mailOptions.subject || !mailOptions.from || !mailOptions.text) {
      showAlert("Please fill in all required fields.");
      return;
    }
    setSending(true);
    const response = await sendEmail(mailOptions);
    let data;
    if (typeof response === "string") {
      console.error("Error:", response);
      return setErrWSent(true);
    } else {
      data = response.data;
    }
    console.log("response=>>>", response);
    console.log(data);
    if (response.status === 200) {
      setSent(true);
    } else {
      setErrWSent(true);
    }
    setMailOptions({
      subject: "",
      from: "",
      text: ""
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mx-4 lg:mx-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "  dark:text-white w-full lg:text-2xl shadow-lg rounded-md py-8 font-medium bg-gray-50 dark:bg-slate-800", children: [
      /* @__PURE__ */ jsxs("span", { className: " w-full  text-justify text-gray-400", children: [
        "Hey, if you are seeing any bugs, spelling mistakes, or errors in the content, please inform me using the contact information below. I will definitely respond and fix any issues. Also you want to inform me something you can contact to me. You will get responece within 12 hours. Email ",
        "=>",
        " ",
        /* @__PURE__ */ jsx("b", { className: "text-gray-100 text-underline", children: "contact@goodwaygiver.site" }),
        " ",
        /* @__PURE__ */ jsx(Link, { className: "text-blue-500", target: "_blank", to: "mailto:contact%40goodwaygiver.site", children: "Contect Now" })
      ] }),
      /* @__PURE__ */ jsx(StopPoint$1, { style: "dark:bg-slate-800" }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          id: "send-message",
          className: "px-4 flex flex-col justify-center min-h-screen max-w-md mx-auto",
          children: [
            /* @__PURE__ */ jsxs("span", { className: "block pt-2 text-start text-white font-bold  text-xl", children: [
              "Contact Now - Fill this form",
              " "
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative py-3 sm:mx-auto sm:min-w-[35rem] my-4", children: [
              /* @__PURE__ */ jsx("div", { className: "to-light-blue-500 absolute inset-0 -skew-y-6 transform rounded-3xl bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0" }),
              /* @__PURE__ */ jsx("div", { className: "relative rounded-3xl bg-white p-20 px-4 py-10 shadow-lg", children: /* @__PURE__ */ jsxs("form", { children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "name",
                      className: "mb-2 block text-sm font-medium text-gray-600",
                      children: "Full Name"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "name",
                      name: "name",
                      className: "w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
                  /* @__PURE__ */ jsxs(
                    "label",
                    {
                      htmlFor: "title",
                      className: "mb-2 block text-sm font-medium text-gray-600",
                      children: [
                        "Title / Subject ",
                        /* @__PURE__ */ jsx("span", { className: "text-red-600", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "title",
                      name: "subject",
                      className: "w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800",
                      required: true,
                      value: mailOptions.subject,
                      onChange: handleChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
                  /* @__PURE__ */ jsxs(
                    "label",
                    {
                      htmlFor: "email",
                      className: "mb-2 block text-sm font-medium text-gray-600",
                      children: [
                        "Email",
                        /* @__PURE__ */ jsx("span", { className: "text-red-600", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      id: "email",
                      name: "from",
                      className: "w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800",
                      required: true,
                      value: mailOptions.from,
                      onChange: handleChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
                  /* @__PURE__ */ jsxs(
                    "label",
                    {
                      htmlFor: "message",
                      className: "mb-2 block text-sm font-medium text-gray-600",
                      children: [
                        "Messages",
                        /* @__PURE__ */ jsx("span", { className: "text-red-600", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      id: "message",
                      name: "text",
                      rows: 6,
                      className: "w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 ",
                      required: true,
                      value: mailOptions.text,
                      onChange: handleChange
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
                  alertMessage && /* @__PURE__ */ jsx("div", { className: "custom-alert", children: /* @__PURE__ */ jsx("p", { className: "block mx-auto mb-1 text-semibold text-[red]", children: alertMessage }) }),
                  !sent && !sending && /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2",
                      onClick: () => sendEmailFunc(),
                      children: "Send Message"
                    }
                  ),
                  sending && /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2",
                      children: "Sending..."
                    }
                  ),
                  sent && /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-lime-400 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2",
                        children: "Sent Successfully"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2",
                        onClick: handleSendAgain,
                        children: "Send Again"
                      }
                    )
                  ] }),
                  errWSent && /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                    " ",
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-red-600 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-red-600 focus:ring-offset-2",
                        children: "Error while sending"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2",
                        onClick: handleSendAgain,
                        children: "Send Again"
                      }
                    )
                  ] })
                ] })
              ] }) })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(StopPoint$1, { style: "dark:bg-slate-800" })
  ] }) });
};
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContactPage
}, Symbol.toStringTag, { value: "Module" }));
const Typewriter = ({ words, speed = 100, textStyle }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    const typingInterval = speed;
    const type = () => {
      const word = words[currentWordIndex];
      setCurrentWord((prevWord) => {
        if (isDeleting) {
          if (prevWord.length > 0) {
            return prevWord.slice(0, -1);
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            return "";
          }
        } else {
          if (prevWord.length < word.length) {
            return word.slice(0, prevWord.length + 1);
          } else {
            setIsDeleting(true);
            return prevWord;
          }
        }
      });
    };
    const cursorInterval = 500;
    const toggleCursor = () => {
      setCursorVisible((prev) => !prev);
    };
    const typingIntervalId = setInterval(type, typingInterval);
    const cursorIntervalId = setInterval(toggleCursor, cursorInterval);
    return () => {
      clearInterval(typingIntervalId);
      clearInterval(cursorIntervalId);
    };
  }, [currentWord, currentWordIndex, isDeleting, speed, words]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "p",
    {
      className: `typing-effect block text-center h-6 ${currentWordIndex === 0 ? ` ${textStyle || "text-red-500"}` : currentWordIndex === 1 ? "text-blue-500" : currentWordIndex === 2 ? "text-red-500" : ""}`,
      children: [
        currentWord,
        cursorVisible && /* @__PURE__ */ jsx("b", { className: "pl-1 text-red-500", children: "|" })
      ]
    }
  ) });
};
const Typewriter$1 = Typewriter;
const HighLites = () => {
  const words = ["Good Way Giver", "Good Way Giver Shop"];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "highlights mb-2  md:mt-[24px] py-2 text-center  flex justify-center items-center dark:bg-gray-900 dark:text-white dark:border dark:border-white dark:rounded-sm", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: " logoimg rounded-full w-[8rem] m-[9px] md:w-52",
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbquYFtQINQQt3iga7xmwBxMtuG_HMVMEiEVai00VSXCIlslyWBwnPOIwtSsqFHjlVljGVIhvIsDn4_44Rix8-oU9EaW48LbnVi-kQLbbYx4K_ciiaV09XXCEhHMjK0BIG-xK6-tGHHUx3GCa3EEhA7T5UvMd_BawTHAiH952VyQidThDOP-uvQAaLijQ/s320/logogif.gif",
        alt: ""
      }
    ),
    /* @__PURE__ */ jsxs("div", { style: { width: "70%" }, className: " contants flex flex-col", children: [
      /* @__PURE__ */ jsxs("span", { className: "textHighLight ml-2 text-sm lg:text-lg font-bold", children: [
        " ",
        "Welcome to our tech blog, where we provide easy tutorials on smartphones and many more and share brilliant hacks and insights to simplify your digital life."
      ] }),
      /* @__PURE__ */ jsx("span", { className: "my-1 text-blue-600 font-medium", children: "Contact :- contact@goodwaygiver.site" }),
      /* @__PURE__ */ jsx("div", { style: { color: "black" }, className: " typeMyLogo font-extrabold text-xl mt-2", children: /* @__PURE__ */ jsx(Typewriter$1, { textStyle: "text-black dark:text-white", words, speed: 150 }) })
    ] })
  ] }) });
};
const HighLites$1 = HighLites;
const PostSkeleton = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: { width: "100%" },
      className: "latestpost p-3 items-center md:flex md:flex-col block xl:flex xl:flex-row text-start bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700",
      children: [
        /* @__PURE__ */ jsx("figure", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsx(Skeleton, { height: 200, width: 300 }) }),
        /* @__PURE__ */ jsxs("div", { className: "pl-5 pr-2 mainContentsPost md:w-full", children: [
          /* @__PURE__ */ jsx(Skeleton, { height: 30, width: 200, style: { marginBottom: "10px" } }),
          /* @__PURE__ */ jsx(Skeleton, { height: 80, style: { marginBottom: "10px" } }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx(Skeleton, { height: 30, width: 150 }),
            /* @__PURE__ */ jsx(Skeleton, { height: 20, width: 30 })
          ] })
        ] })
      ]
    }
  );
};
const SkeletonForPopCard = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "hover:shadow-lg hover:scale-105 duration-300 transition-transform hover:border hover:border-1.5 hover:border-blue-300 items-center flex flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700", children: [
    /* @__PURE__ */ jsx("figure", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsx(Skeleton, { height: 180, width: 300 }) }),
    /* @__PURE__ */ jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsx("h3", { className: "text-sm font-[600] tracking-tight text-gray-900 dark:text-white", children: /* @__PURE__ */ jsx(Skeleton, { height: 15, count: 2, width: 300, style: { marginTop: "1px" } }) }) })
  ] }) });
};
const Latest = () => {
  const { latestPostData } = useContext(latestPost);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: " dark:bg-gray-900 bg-[azure] drop-shadow-md px-1 font-sans pb-3 ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex  items-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "my-3 px-2.5 inline text-2xl tracking-tight font-extrabold  text-gray-900 dark:text-white", children: [
          "Latest",
          " "
        ] }),
        " ",
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-8 w-8 dark:filter dark:invert",
            src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlh9PF0i_UKcoE9U8SWHNG7CX2BhNeoLXmeIa-ACRdKv4VRGfgwri13zzQ4qf8XLce6TyEMX5C6A74F3JoxcQPwJcxRB_9sDZlztXBRR1e1MuUdmLGiw4CzE8_KsRu824nYp1R5Wr0teLnBGR5OIO-A-CUi3J6hWxKGxv5x7JdD2iSj9qlV6_zysZHBhA/w400-h400/latesticon.png",
            alt: "new"
          }
        )
      ] }),
      latestPostData && latestPostData.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid gap-8 mt-2 md:grid-cols-2 mb-2 ", children: latestPostData.map((post, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          style: { width: "100%" },
          className: "latestpost p-3 hover:shadow-lg hover:scale-105 duration-400 transition-transform hover:border hover:border-1.5 hover:border-blue-300 items-center md:flex md:flex-col block xl:flex xl:flex-row text-start bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700",
          children: [
            /* @__PURE__ */ jsx("figure", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsx(
              "img",
              {
                className: "h-auto max-w-full rounded-lg hover:scale-105 duration-300 transition-transform",
                src: `${post.thumbnail}`,
                alt: "image description"
              }
            ) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "pl-5 pr-2 mainContentsPost md:w-full",
                style: {},
                children: /* @__PURE__ */ jsxs(Link, { to: `/posts${post.link}`, children: [
                  /* @__PURE__ */ jsx("h3", { className: "mytitle text-md font-bold my-2 tracking-[0.03] text-gray-900 dark:text-white", children: /* @__PURE__ */ jsx("p", { children: post.title }) }),
                  /* @__PURE__ */ jsx("p", { className: "mb-2 mydescription lg:text-[15px] font-[400] text-gray-600 dark:text-gray-400 description", children: post.description }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        className: "text-gray-900 -z-1 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:animate-none hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-3 py-1 text-center m-0",
                        children: "Continue Reading »»"
                      }
                    ),
                    /* @__PURE__ */ jsxs("span", { className: "flex items-ceneter", children: [
                      /* @__PURE__ */ jsx(SlFire, { className: "w-5 h-5 pr-0.5 text-gray-800 dark:text-white" }),
                      /* @__PURE__ */ jsxs("p", { className: "inline-block dark:text-white pl-[2px] text-sm", children: [
                        " ",
                        post.views
                      ] })
                    ] })
                  ] })
                ] })
              }
            )
          ]
        },
        post._id
      )) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-8 mt-2 md:grid-cols-2 mb-2 ", children: [...Array(4)].map((index) => /* @__PURE__ */ jsx(PostSkeleton, {})) })
    ] }),
    /* @__PURE__ */ jsx(StopPoint$1, {})
  ] });
};
const Latest$1 = Latest;
const Popular = () => {
  const { popularPostData } = useContext(popularPost);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-blue-100 rounded-sm  dark:bg-gray-900 px-1 drop-shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "py-2 px-0 mx-auto max-w-screen-xl ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex  items-center mb-4", children: [
        /* @__PURE__ */ jsxs("h2", { className: "my-3 px-2.5 inline text-2xl tracking-tight font-extrabold  text-gray-900 dark:text-white", children: [
          "Popular",
          " "
        ] }),
        " ",
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-8 w-8 dark:filter dark:invert",
            src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgocEYbDmzkXPOlV29vgpn4ORGtpIQAIDuNd0jo6C_DWlflju-monJC7rRyKeJnGRCXxV3aaS4Tpec0OEST2b5DOdLcvrGU_pLS01UYeQ_o0QJT6V-WE_u6AFbF_z3lfpdyYJ1E8vet06S2LSTHaA79LmO2bQN2U6Jd3hYlHTgYv5vsuOHoJDSoiqCXGC0/w400-h400/popularicon.png",
            alt: "popular logo"
          }
        )
      ] }),
      popularPostData && popularPostData.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid gap-2 mb-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2", children: popularPostData.map((post, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "hover:shadow-lg hover:scale-105 duration-300 transition-transform hover:border hover:border-1.5 hover:border-blue-300 items-center flex flex-col bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700",
          children: /* @__PURE__ */ jsxs(Link, { to: `/posts${post.link}`, children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "w-full rounded-lg",
                src: `${post.thumbnail}`,
                alt: "Bonnie Avatar"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsx("h3", { className: "text-sm font-[600] tracking-tight text-gray-900 dark:text-white", children: /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
              post.title,
              " "
            ] }) }) })
          ] })
        },
        post._id
      )) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-2 mb-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 mt-0", children: [...Array(4)].map((index) => /* @__PURE__ */ jsx(SkeletonForPopCard, {})) })
    ] }) }),
    /* @__PURE__ */ jsx(StopPoint$1, {})
  ] });
};
const Popular$1 = Popular;
const ConnectWithMeMedia = () => {
  const words = ["#YouTube", "#FaceBook", "#Instagram"];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 rounded shadow-lg p-4 dark:bg-gray-900 dark:border dark:border-white ", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl  block text-center font-semibold dark:text-white", children: "Feel Connected With Me On" }),
    /* @__PURE__ */ jsx(Typewriter$1, { words }),
    /* @__PURE__ */ jsx("section", { className: "bg-gray-100 dark:bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "py-4 px-4  mx-auto max-w-screen-xl text-center lg:py-8 lg:px-4", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex justify-around",
        style: { display: "flex", justifyContent: "space-around" },
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-center text-gray-500  dark:text-gray-400", children: /* @__PURE__ */ jsxs(Link, { target: "_blank", to: "https://youtube.com/@goodwaygiver", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "mx-auto mb-4 w-12 h-auto rounded-full border border-red-500 p-1",
                src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtjm00gGaVKpffquELDG8a7fkQtD4sQu0brKoX0Ui9ianXLfJ4SSmtdDn9E1KB-gYXHrV75Ji5Y-tu6kLiPEiHAZechmKMFEgqZ-z18h2KaB4k5YD2Qz4lrri_W_ufvPodsmHa-M2-CL4Lz_0fC2S84YVdOP7s4O4JjuLF1RDZBbfVwRrW6szC0knixI8/s240/unnamed%20(2).webp",
                alt: "Bonnie Avatar"
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white", children: /* @__PURE__ */ jsx("b", { children: "Good Way Giver" }) }),
            /* @__PURE__ */ jsx("p", { children: "YouTube" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "text-center text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "https://www.facebook.com/goodwaygiver?mibextid=ZbWKwL",
              target: "_blank",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "mx-auto mb-4 w-12 h-auto rounded-full border border-blue-300 p-1",
                    src: "https://play-lh.googleusercontent.com/LYXR81vaeuI2KIy4xQarox4qAYnrkWnmKOwl1JoLIJuCRUoK9dqPGAAjELsAf1J_qw=w240-h480-rw",
                    alt: "Helene Avatar"
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white", children: /* @__PURE__ */ jsx("b", { children: "Good Way Giver" }) }),
                /* @__PURE__ */ jsx("p", { children: "FaceBook" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "text-center text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "https://instagram.com/goodwaygivertech?igshid=OGQ5ZDc2ODk2ZA==",
              target: "_blank",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "mx-auto mb-4 w-12 h-auto border border-red-500 rounded-full p-1",
                    src: "https://play-lh.googleusercontent.com/h9THn4Ou1Qz9_CpTVxtatkF8yZV9YP2T3D6-ZxMvsnV0TbLL_LiVIMmTprcosjq0SPHu=w240-h480-rw",
                    alt: "Jese Avatar"
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white", children: /* @__PURE__ */ jsx("b", { children: "Good Way Giver" }) }),
                /* @__PURE__ */ jsx("p", { children: "Instagram" })
              ]
            }
          ) })
        ]
      }
    ) }) })
  ] }) });
};
const ConnectWithMeMedia$1 = ConnectWithMeMedia;
const NoSearchResults = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "w-[100%] flex flex-col justify-center items-center", children: [
    "   ",
    /* @__PURE__ */ jsx("section", { className: "bg-[azure] dark:bg-gray-900 ", children: /* @__PURE__ */ jsx("div", { className: "py-8 px-4 mx-auto  lg:py-16 lg:px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-screen-sm text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-4xl tracking-tight font-extrabold lg:text-6xl text-primary-600  text-[red] dark:text-primary-500 dark:text-white", children: "No Results found" }),
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white", children: "Something's missing." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "text-white font-extrabold bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
          children: "No Search Results"
        }
      )
    ] }) }) })
  ] }) });
};
const NoSearchResults$1 = NoSearchResults;
const ForSearch = () => {
  const { postData } = useContext(postdata);
  const { showSpin } = useContext(showSpiner);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-[azure] dark:bg-gray-900 pb-3 mt-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "my-4 px-2.5 inline text-2xl tracking-tight font-extrabold  text-gray-900 dark:text-white", children: [
          "Search Results",
          " "
        ] }),
        " ",
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-6 w-6 dark:filter dark:invert",
            src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsEeJRnoySeHJb0vdjra9h3neT5FnmlJabvzW0SMbU-zTwfaAQgtCFfUuaW-0YHbEQZwfuai-Iah1xiNhct3ASNQLn36DHadBgv2weHln_6SPZMOCXwUsMfLSOpC1vaDcD-u4oLx5f5IBI1ZANWT6YrlVZis_EjoClblmOZ_1Sh9nNOHAcxMqZs-UcfXI/w640-h640/result%20success.png",
            alt: ""
          }
        )
      ] }),
      showSpin ? /* @__PURE__ */ jsx(Spinner$1, {}) : !postData.length ? /* @__PURE__ */ jsx(NoSearchResults$1, {}) : /* @__PURE__ */ jsx("div", { className: "grid gap-8 mt-2  md:grid-cols-2 mb-2 ", children: postData.length && postData.map((post) => {
        return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
          "div",
          {
            style: { width: "100%" },
            className: "searchPosts p-3 hover:shadow-lg hover:scale-105 duration-400 transition-transform hover:border hover:border-1.5  hover:border-blue-300 items-center md:flex md:flex-col block xl:flex xl:flex-row   text-start  bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700",
            children: [
              /* @__PURE__ */ jsx("figure", { className: "max-w-md mx-auto  inline-block overflow-hidden", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "h-auto max-w-full rounded-lg  hover:scale-105 duration-300 transition-transform",
                  src: `${post.thumbnail}`,
                  alt: "image description"
                }
              ) }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: " pl-5 pr-2 mainContentsPost md:w-full",
                  style: {},
                  children: /* @__PURE__ */ jsxs(Link, { to: `/posts${post.link}`, children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-md mytitle font-bold my-1 tracking-[0.03] text-gray-900 dark:text-white", children: /* @__PURE__ */ jsxs("p", { children: [
                      " ",
                      post.title
                    ] }) }),
                    /* @__PURE__ */ jsx("p", { className: "mt-[5px] mydescription lg:text-[15px] font-[400] text-gray-600 dark:text-gray-400 description", children: post.description }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center ", children: [
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "button",
                          className: "text-gray-900 animate-pulse 	-z-1 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:animate-none hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-1 text-center m-0 ",
                          children: "Continue Reading »»"
                        }
                      ),
                      /* @__PURE__ */ jsxs("span", { className: " flex items-ceneter", children: [
                        /* @__PURE__ */ jsx(SlFire, { className: "w-5 h-5 pr-0.5 text-gray-800 dark:text-white" }),
                        /* @__PURE__ */ jsxs("p", { className: "inline-block dark:text-white pl-[2px] text-sm", children: [
                          " ",
                          post.views
                        ] })
                      ] })
                    ] })
                  ] })
                }
              )
            ]
          }
        ) }, post.id);
      }) })
    ] }),
    /* @__PURE__ */ jsx(StopPoint$1, {})
  ] });
};
const ForSeach = ForSearch;
const HomePage = () => {
  useContext(postdata);
  const { searchInput } = useContext(mySearchInput);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { style: { width: "100%" }, className: "m-0 p-0", children: /* @__PURE__ */ jsx("section", { className: "bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "py-1 px-4 mx-auto max-w-screen-xl lg:py-1 lg:px-6 ", children: [
    /* @__PURE__ */ jsxs("div", { className: ` highlightsMainDiv ${!searchInput.length ? "block" : "hidden"} mt-[1rem] bg-blue-50 rounded-sm `, children: [
      " ",
      /* @__PURE__ */ jsx(HighLites$1, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `${!searchInput.length ? "block" : "hidden"}`, children: [
      " ",
      /* @__PURE__ */ jsx(Latest$1, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: `${!searchInput.length ? "block" : "hidden"}`, children: /* @__PURE__ */ jsx(Popular$1, {}) }),
    /* @__PURE__ */ jsxs("div", { className: `${!searchInput.length ? "block" : "hidden"}`, children: [
      " ",
      /* @__PURE__ */ jsx(ConnectWithMeMedia$1, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `${!searchInput.length ? "hidden" : "block"}`, children: [
      " ",
      /* @__PURE__ */ jsx(ForSeach, {})
    ] })
  ] }) }) }) });
};
const HomePage$1 = HomePage;
const meta = () => {
  return [
    { title: "Good Way Giver" },
    { name: "description", content: "Hi 👋, I'm Shivam. Welcome to our tech blog, where we provide easy tutorials on smartphones and many more and share brilliant hacks and insights to simplify your digital life." },
    { name: "application-name", content: "Good Way Giver Blog" },
    { name: "author", content: "Shivam Kumar" },
    { name: "generator", content: "Remix.js" },
    { name: "keywords", content: "Good Way Giver, good way giver, good way giver youtube, good way giver blog, good way giver site, good way giver website, good way giver tech, Good Way Giver Blog" },
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
      href: `https://www.goodwaygiver.site`
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
    { property: "og:title", content: "Good Way Giver" },
    {
      property: "og:description",
      content: "Hi 👋, I'm Shivam. Welcome to our tech blog, where we provide easy tutorials on smartphones and many more and share brilliant hacks and insights to simplify your digital life."
    },
    {
      property: "og:url",
      content: `https://www.goodwaygiver.site`
    },
    { property: "og:site_name", content: "Good Way Giver Blog" },
    {
      property: "og:image",
      content: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrcjG6b5PKgxUM1nQPHWar4G7j5zUG2361ss8cZdonJwAAXScn98ZaJZ7k_ahqAV-6pTxx0yv8XvEoWa65vFe0e4NzgA7NPhoIO6H_Dm78hGF1ZL2pctq8Xjd5fn8DawDujzRC7GXog-JnMet0otk5gYJ31DBTsRX8nxB5pwoXnCdiig4JnXDDyVr1Kkg/w640-h640/GWG.png"
    },
    {
      property: "og:image:secure_url",
      content: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrcjG6b5PKgxUM1nQPHWar4G7j5zUG2361ss8cZdonJwAAXScn98ZaJZ7k_ahqAV-6pTxx0yv8XvEoWa65vFe0e4NzgA7NPhoIO6H_Dm78hGF1ZL2pctq8Xjd5fn8DawDujzRC7GXog-JnMet0otk5gYJ31DBTsRX8nxB5pwoXnCdiig4JnXDDyVr1Kkg/w640-h640/GWG.png"
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    {
      property: "og:image:alt",
      content: `Preview image for Good Way Giver`
    },
    { property: "og:type", content: "article" },
    // { property: "article:published_time", content: `` },
    // { property: "article:modified_time", content: `` },
    { property: "article:author", content: "Shivam Kumar" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@goodwaygiver" },
    { name: "twitter:creator", content: "@goodwaygiver" },
    { name: "twitter:title", content: "Good Way Giver" },
    {
      name: "twitter:description",
      content: "Hi 👋, I'm Shivam. Welcome to our tech blog, where we provide easy tutorials on smartphones and many more and share brilliant hacks and insights to simplify your digital life."
    },
    {
      name: "twitter:image",
      content: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrcjG6b5PKgxUM1nQPHWar4G7j5zUG2361ss8cZdonJwAAXScn98ZaJZ7k_ahqAV-6pTxx0yv8XvEoWa65vFe0e4NzgA7NPhoIO6H_Dm78hGF1ZL2pctq8Xjd5fn8DawDujzRC7GXog-JnMet0otk5gYJ31DBTsRX8nxB5pwoXnCdiig4JnXDDyVr1Kkg/w640-h640/GWG.png"
    },
    {
      name: "twitter:image:alt",
      content: `Preview image for Good Way Giver`
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
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(MyNavbar, {}),
    /* @__PURE__ */ jsx(HomePage$1, {})
  ] });
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const AboutPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "mr-auto place-self-center lg:col-span-7", children: [
        /* @__PURE__ */ jsx("h1", { className: "max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white", children: "About Me" }),
        /* @__PURE__ */ jsx("p", { className: "max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 font-medium", children: "I'm Shivam Kumar, I am from India and I am a Full Stack Web App Developer also I am a youtuber I create Tech related Videos on there." }),
        /* @__PURE__ */ jsxs("div", { className: "iknow mb-4 border font-medium text-gray-400 rounded py-1 px-1 text-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "iknow flex items-center", children: [
            " ",
            /* @__PURE__ */ jsx("p", { className: "font-bold text-xl md:text-md py-3 pr-1.5", children: "I Know" }),
            " ",
            /* @__PURE__ */ jsxs(
              "svg",
              {
                style: { color: "#00a7ff" },
                className: "w-6 h-6 text-gray-800 dark:text-white",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "#0eff0e",
                viewBox: "0 0 20 20",
                children: [
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      fill: "currentColor",
                      d: "m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      fill: "#fff",
                      d: "M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("input", { defaultChecked: true, readOnly: true, type: "checkbox", className: "mr-1 rounded " }),
          /* @__PURE__ */ jsx("p", { className: "mr-1 inline-block", children: "React." }),
          /* @__PURE__ */ jsx("input", { defaultChecked: true, readOnly: true, type: "checkbox", className: "mr-1 rounded " }),
          " ",
          /* @__PURE__ */ jsx("p", { className: "mr-1 inline-block", children: "NextJs." }),
          /* @__PURE__ */ jsx("input", { defaultChecked: true, readOnly: true, type: "checkbox", className: "mr-1 rounded" }),
          /* @__PURE__ */ jsx("p", { className: "mr-1 inline-block", children: "JavaScript." }),
          /* @__PURE__ */ jsx("input", { defaultChecked: true, readOnly: true, type: "checkbox", className: "mr-1 rounded" }),
          /* @__PURE__ */ jsx("p", { className: "mr-1 inline-block", children: "TypeScript." }),
          /* @__PURE__ */ jsx("input", { defaultChecked: true, readOnly: true, type: "checkbox", className: "mr-1 rounded" }),
          /* @__PURE__ */ jsx("p", { className: "mr-1 inline-block", children: "NodeJs." }),
          /* @__PURE__ */ jsx("input", { defaultChecked: true, readOnly: true, type: "checkbox", className: "mr-1 rounded" }),
          /* @__PURE__ */ jsx("p", { className: "mr-1 inline-block", children: "Express." }),
          /* @__PURE__ */ jsx("input", { defaultChecked: true, readOnly: true, type: "checkbox", className: "mr-1 rounded" }),
          /* @__PURE__ */ jsx("p", { className: "mr-1 inline-block", children: "Tailwind." }),
          /* @__PURE__ */ jsx("input", { defaultChecked: true, readOnly: true, type: "checkbox", className: "mr-1 rounded" }),
          " ",
          /* @__PURE__ */ jsx("p", { className: "mr-1 inline-block", children: "Bootstrap." }),
          /* @__PURE__ */ jsx("input", { defaultChecked: true, readOnly: true, type: "checkbox", className: "mr-1 rounded" }),
          /* @__PURE__ */ jsx("p", { className: "mr-1 inline-block", children: "React Bootstrap." })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            target: "_blank",
            href: "https://shop.goodwaygiver.site",
            className: "inline-flex   items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-blue-200  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
            children: [
              /* @__PURE__ */ jsx("b", { className: "px-1 ", children: "Contact Me" }),
              " ",
              /* @__PURE__ */ jsx("b", { className: "dark:filter dark:invert", children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  className: "w-6 h-6 hover:text-white text-gray-800 dark:text-white",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "#ff dark:#fff",
                  viewBox: "0 0 18 18",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" }),
                    /* @__PURE__ */ jsx("path", { d: "m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" })
                  ]
                }
              ) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: " flex justify-center lg:mt-0 lg:col-span-5 lg:flex", children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "rounded-full w-20 h-20",
          src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbquYFtQINQQt3iga7xmwBxMtuG_HMVMEiEVai00VSXCIlslyWBwnPOIwtSsqFHjlVljGVIhvIsDn4_44Rix8-oU9EaW48LbnVi-kQLbbYx4K_ciiaV09XXCEhHMjK0BIG-xK6-tGHHUx3GCa3EEhA7T5UvMd_BawTHAiH952VyQidThDOP-uvQAaLijQ/s320/logogif.gif",
          alt: "GWG Logo"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(StopPoint$1, {})
  ] });
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutPage
}, Symbol.toStringTag, { value: "Module" }));
function posts() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: posts
}, Symbol.toStringTag, { value: "Module" }));
const CopyToClipboard = () => {
  useEffect(() => {
    const handleCodeClick = (event) => {
      const codeElement = event.currentTarget;
      const codeText = codeElement.textContent || "";
      const textarea = document.createElement("textarea");
      textarea.value = codeText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      alert("Text copied to clipboard:\n" + codeText);
    };
    const codeElements = document.getElementsByTagName("code");
    for (let i = 0; i < codeElements.length; i++) {
      const codeElement = codeElements[i];
      codeElement.style.cursor = "pointer";
      codeElement.addEventListener("click", handleCodeClick);
    }
    return () => {
      for (let i = 0; i < codeElements.length; i++) {
        const codeElement = codeElements[i];
        codeElement.removeEventListener("click", handleCodeClick);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "prose prose-2xl", children: [
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Introduction:" }),
      " MongoDB is a powerful and flexible NoSQL database that you can now install on your Android phone with the help of Termux. Termux is a powerful terminal emulator for Android that opens up a world of possibilities for command-line functionality. In this step-by-step guide, we'll walk you through the process of installing MongoDB on your Android device using Termux. Let's get started!"
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Step 1: Install Termux from Google Play Store:" }),
      ' Go to the Google Play Store on your Android device, search for "Termux," and install the application. Termux provides a Linux-like terminal on your Android, enabling you to run various commands.'
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Step 2: Open Termux and Update Packages:" }),
      " Open Termux and type the following command to ensure that your package repositories are up to date:"
    ] }),
    /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { className: "language-bash", children: "pkg update && pkg upgrade" }) }),
    /* @__PURE__ */ jsx("p", { children: "Press Enter and wait for the process to complete." }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Step 3: Install MongoDB:" }),
      " Now, let's install MongoDB. Type the following command and press Enter:"
    ] }),
    /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { className: "language-bash", children: "pkg install mongodb" }) }),
    /* @__PURE__ */ jsx("p", { children: "This command will download and install MongoDB on your Android device." }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Step 4: Start MongoDB Service:" }),
      " After the installation is complete, start the MongoDB service by running the following command:"
    ] }),
    /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { className: "language-bash", children: "termux-setup-storage" }) }),
    /* @__PURE__ */ jsx("p", { children: "This command will set up storage access for Termux. Grant the necessary permissions." }),
    /* @__PURE__ */ jsx("p", { children: "Now, start the MongoDB service with:" }),
    /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { className: "language-bash", children: "mongod" }) }),
    /* @__PURE__ */ jsx("p", { children: "MongoDB is now running on your Android device!" }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Step 5: Connect to MongoDB:" }),
      " Open a new Termux session (you can open a new window or tab within the app) and connect to the MongoDB server using the following command:"
    ] }),
    /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { className: "language-bash", children: "mongo" }) }),
    /* @__PURE__ */ jsx("p", { children: "Congratulations! You are now connected to your MongoDB server on your Android phone." }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Step 6: Create a Database:" }),
      " Let's create a new database. In the MongoDB shell, type:"
    ] }),
    /* @__PURE__ */ jsx("p", { children: "perlCopy code" }),
    /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { className: "language-bash", children: "use mydatabase" }) }),
    /* @__PURE__ */ jsx("p", { children: 'Replace "mydatabase" with the desired name for your database.' }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Step 7: Start Using MongoDB:" }),
      " Now you can start creating collections and documents in your MongoDB database just like you would on a regular MongoDB server."
    ] }),
    /* @__PURE__ */ jsx("p", { children: "That's it! You've successfully installed MongoDB on your Android phone using Termux. Explore the world of mobile database management with MongoDB at your fingertips. Happy coding!" })
  ] });
};
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CopyToClipboard
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-gXibhwV4.js", "imports": ["/assets/jsx-runtime-vcCcxsHL.js", "/assets/index-9mIUPUcS.js", "/assets/components-d_Semb9D.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-R38dttU6.js", "imports": ["/assets/jsx-runtime-vcCcxsHL.js", "/assets/index-9mIUPUcS.js", "/assets/components-d_Semb9D.js", "/assets/index-mfzvuM8w.js", "/assets/react-toastify.esm-1JfMC2yc.js"], "css": ["/assets/root-twGyZxvj.css"] }, "routes/posts.$postId": { "id": "routes/posts.$postId", "parentId": "routes/posts", "path": ":postId", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/posts._postId-goeAy85a.js", "imports": ["/assets/jsx-runtime-vcCcxsHL.js", "/assets/index-9mIUPUcS.js", "/assets/index-mfzvuM8w.js", "/assets/Apis-wLhAyKKJ.js", "/assets/components-d_Semb9D.js", "/assets/MyNavbar-0guKYTLw.js", "/assets/StopPoint-Tk_V2Tj1.js", "/assets/react-toastify.esm-1JfMC2yc.js"], "css": ["/assets/MyNavbar-nVa3URRZ.css"] }, "routes/services": { "id": "routes/services", "parentId": "root", "path": "services", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/services-mWaUpVs0.js", "imports": ["/assets/jsx-runtime-vcCcxsHL.js"], "css": [] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contact-F6eVEpXR.js", "imports": ["/assets/jsx-runtime-vcCcxsHL.js", "/assets/index-9mIUPUcS.js", "/assets/StopPoint-Tk_V2Tj1.js", "/assets/Apis-wLhAyKKJ.js", "/assets/components-d_Semb9D.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-G2uy1d41.js", "imports": ["/assets/jsx-runtime-vcCcxsHL.js", "/assets/index-9mIUPUcS.js", "/assets/index-mfzvuM8w.js", "/assets/Apis-wLhAyKKJ.js", "/assets/components-d_Semb9D.js", "/assets/MyNavbar-0guKYTLw.js", "/assets/StopPoint-Tk_V2Tj1.js"], "css": ["/assets/MyNavbar-nVa3URRZ.css"] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-S9Zj4sJj.js", "imports": ["/assets/jsx-runtime-vcCcxsHL.js", "/assets/StopPoint-Tk_V2Tj1.js"], "css": [] }, "routes/posts": { "id": "routes/posts", "parentId": "root", "path": "posts", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/posts-S5uCVKau.js", "imports": ["/assets/jsx-runtime-vcCcxsHL.js", "/assets/index-9mIUPUcS.js"], "css": [] }, "routes/test": { "id": "routes/test", "parentId": "root", "path": "test", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/test-8TUw9LYz.js", "imports": ["/assets/jsx-runtime-vcCcxsHL.js"], "css": [] } }, "url": "/assets/manifest-db64634e.js", "version": "db64634e" };
const assetsBuildDirectory = "build/client";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/posts.$postId": {
    id: "routes/posts.$postId",
    parentId: "routes/posts",
    path: ":postId",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route4
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/test": {
    id: "routes/test",
    parentId: "root",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
};
