import {
  sendEmail
} from "/build/_shared/chunk-4DSOLGGP.js";
import {
  StopPoint_default
} from "/build/_shared/chunk-EWMFGWSO.js";
import {
  Link
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

// app/routes/contact.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/contact.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contact.tsx"
  );
  import.meta.hot.lastModified = "1704263662270.1533";
}
var ContactPage = () => {
  _s();
  const [mailOptions, setMailOptions] = (0, import_react.useState)({
    subject: "",
    from: "",
    text: ""
  });
  const [sending, setSending] = (0, import_react.useState)(false);
  const [sent, setSent] = (0, import_react.useState)(false);
  const [alertMessage, setAlertMessage] = (0, import_react.useState)("");
  const [errWSent, setErrWSent] = (0, import_react.useState)(false);
  const handleChange = (e) => {
    setMailOptions({
      ...mailOptions,
      [e.target.name]: e.target.value
    });
    setAlertMessage("");
  };
  const showAlert = (message) => {
    setAlertMessage(message);
  };
  const handleSendAgain = () => {
    setSending(false);
  };
  const sendEmailFunc = async (e) => {
    e?.preventDefault();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-4 lg:mx-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "  dark:text-white w-full lg:text-2xl shadow-lg rounded-md py-8 font-medium bg-gray-50 dark:bg-slate-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " w-full  text-justify text-gray-400", children: [
        "Hey, if you are seeing any bugs, spelling mistakes, or errors in the content, please inform me using the contact information below. I will definitely respond and fix any issues. Also you want to inform me something you can contact to me. You will get responece within 12 hours. Email ",
        "=>",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { className: "text-gray-100 text-underline", children: "contact@goodwaygiver.site" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-blue-500", target: "_blank", to: "mailto:contact%40goodwaygiver.site", children: "Contect Now" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StopPoint_default, { style: "dark:bg-slate-800" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "send-message", className: "px-4 flex flex-col justify-center min-h-screen max-w-md mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block pt-2 text-start text-white font-bold  text-xl", children: [
          "Contact Now - Fill this form",
          " "
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative py-3 sm:mx-auto sm:min-w-[35rem] my-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "to-light-blue-500 absolute inset-0 -skew-y-6 transform rounded-3xl bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative rounded-3xl bg-white p-20 px-4 py-10 shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "mb-2 block text-sm font-medium text-gray-600", children: "Full Name" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 110,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "name", name: "name", className: "w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 113,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "mb-2 block text-sm font-medium text-gray-600", children: [
                "Title / Subject ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-600", children: "*" }, void 0, false, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 117,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 116,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "title", name: "subject", className: "w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800", required: true, value: mailOptions.subject, onChange: handleChange }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 119,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 115,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "mb-2 block text-sm font-medium text-gray-600", children: [
                "Email",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-600", children: "*" }, void 0, false, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 123,
                  columnNumber: 26
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 122,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "from", className: "w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800", required: true, value: mailOptions.from, onChange: handleChange }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 125,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 121,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "message", className: "mb-2 block text-sm font-medium text-gray-600", children: [
                "Messages",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-600", children: "*" }, void 0, false, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 129,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 128,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "message", name: "text", rows: 6, className: "w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 ", required: true, value: mailOptions.text, onChange: handleChange }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 131,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 127,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
              alertMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "custom-alert", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "block mx-auto mb-1 text-semibold text-[red]", children: alertMessage }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 135,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 134,
                columnNumber: 36
              }, this),
              !sent && !sending && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2", onClick: () => sendEmailFunc(), children: "Send Message" }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 139,
                columnNumber: 41
              }, this),
              sending && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2", children: "Sending..." }, void 0, false, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 142,
                columnNumber: 31
              }, this),
              sent && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-lime-400 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2", children: "Sent Successfully" }, void 0, false, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 146,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2", onClick: handleSendAgain, children: "Send Again" }, void 0, false, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 149,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 145,
                columnNumber: 28
              }, this),
              errWSent && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2", children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-red-600 px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-red-600 focus:ring-offset-2", children: "Error while sending" }, void 0, false, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 153,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "to-light-blue-500 hover:to-light-blue-600 w-full rounded-md bg-gradient-to-r from-cyan-400px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r hover:from-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-gray-800 focus:ring-offset-2", onClick: handleSendAgain, children: "Send Again" }, void 0, false, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 156,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 153,
                columnNumber: 32
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 108,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 107,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StopPoint_default, { style: "dark:bg-slate-800" }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 87,
    columnNumber: 10
  }, this);
};
_s(ContactPage, "5tW19hRNXO+VgvFcTjHtn0DJGB4=");
_c = ContactPage;
var contact_default = ContactPage;
var _c;
$RefreshReg$(_c, "ContactPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  contact_default as default
};
//# sourceMappingURL=/build/routes/contact-44APIK4U.js.map
