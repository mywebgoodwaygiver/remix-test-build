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

// app/routes/test.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/test.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/test.tsx"
  );
  import.meta.hot.lastModified = "1704512410530.6218";
}
var CopyToClipboard = () => {
  _s();
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose prose-2xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Introduction:" }, void 0, false, {
        fileName: "app/routes/test.tsx",
        lineNumber: 56,
        columnNumber: 46
      }, this),
      " MongoDB is a powerful and flexible NoSQL database that you can now install on your Android phone with the help of Termux. Termux is a powerful terminal emulator for Android that opens up a world of possibilities for command-line functionality. In this step-by-step guide, we'll walk you through the process of installing MongoDB on your Android device using Termux. Let's get started!"
    ] }, void 0, true, {
      fileName: "app/routes/test.tsx",
      lineNumber: 56,
      columnNumber: 43
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Step 1: Install Termux from Google Play Store:" }, void 0, false, {
        fileName: "app/routes/test.tsx",
        lineNumber: 57,
        columnNumber: 16
      }, this),
      ' Go to the Google Play Store on your Android device, search for "Termux," and install the application. Termux provides a Linux-like terminal on your Android, enabling you to run various commands.'
    ] }, void 0, true, {
      fileName: "app/routes/test.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Step 2: Open Termux and Update Packages:" }, void 0, false, {
        fileName: "app/routes/test.tsx",
        lineNumber: 58,
        columnNumber: 16
      }, this),
      " Open Termux and type the following command to ensure that your package repositories are up to date:"
    ] }, void 0, true, {
      fileName: "app/routes/test.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "language-bash", children: "pkg update && pkg upgrade" }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 59,
      columnNumber: 18
    }, this) }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Press Enter and wait for the process to complete." }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Step 3: Install MongoDB:" }, void 0, false, {
        fileName: "app/routes/test.tsx",
        lineNumber: 62,
        columnNumber: 16
      }, this),
      " Now, let's install MongoDB. Type the following command and press Enter:"
    ] }, void 0, true, {
      fileName: "app/routes/test.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "language-bash", children: "pkg install mongodb" }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 63,
      columnNumber: 18
    }, this) }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This command will download and install MongoDB on your Android device." }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Step 4: Start MongoDB Service:" }, void 0, false, {
        fileName: "app/routes/test.tsx",
        lineNumber: 66,
        columnNumber: 16
      }, this),
      " After the installation is complete, start the MongoDB service by running the following command:"
    ] }, void 0, true, {
      fileName: "app/routes/test.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "language-bash", children: "termux-setup-storage" }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 67,
      columnNumber: 18
    }, this) }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This command will set up storage access for Termux. Grant the necessary permissions." }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Now, start the MongoDB service with:" }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "language-bash", children: "mongod" }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 71,
      columnNumber: 18
    }, this) }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "MongoDB is now running on your Android device!" }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Step 5: Connect to MongoDB:" }, void 0, false, {
        fileName: "app/routes/test.tsx",
        lineNumber: 74,
        columnNumber: 16
      }, this),
      " Open a new Termux session (you can open a new window or tab within the app) and connect to the MongoDB server using the following command:"
    ] }, void 0, true, {
      fileName: "app/routes/test.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "language-bash", children: "mongo" }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 75,
      columnNumber: 18
    }, this) }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Congratulations! You are now connected to your MongoDB server on your Android phone." }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Step 6: Create a Database:" }, void 0, false, {
        fileName: "app/routes/test.tsx",
        lineNumber: 78,
        columnNumber: 16
      }, this),
      " Let's create a new database. In the MongoDB shell, type:"
    ] }, void 0, true, {
      fileName: "app/routes/test.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "perlCopy code" }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "language-bash", children: "use mydatabase" }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 80,
      columnNumber: 18
    }, this) }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: 'Replace "mydatabase" with the desired name for your database.' }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Step 7: Start Using MongoDB:" }, void 0, false, {
        fileName: "app/routes/test.tsx",
        lineNumber: 83,
        columnNumber: 16
      }, this),
      " Now you can start creating collections and documents in your MongoDB database just like you would on a regular MongoDB server."
    ] }, void 0, true, {
      fileName: "app/routes/test.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "That's it! You've successfully installed MongoDB on your Android phone using Termux. Explore the world of mobile database management with MongoDB at your fingertips. Happy coding!" }, void 0, false, {
      fileName: "app/routes/test.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/test.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
};
_s(CopyToClipboard, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = CopyToClipboard;
var test_default = CopyToClipboard;
var _c;
$RefreshReg$(_c, "CopyToClipboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  test_default as default
};
//# sourceMappingURL=/build/routes/test-KDNGFNPN.js.map
