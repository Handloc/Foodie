// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bxIRe":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "af599da5850bd9e5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1GgH0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _recipeView = require("./views/recipeView");
var _recipeViewDefault = parcelHelpers.interopDefault(_recipeView);
var _pageView = require("./views/pageView");
var _pageViewDefault = parcelHelpers.interopDefault(_pageView);
var _searchView = require("./views/searchView");
var _searchViewDefault = parcelHelpers.interopDefault(_searchView);
var _resultsView = require("./views/resultsView");
var _resultsViewDefault = parcelHelpers.interopDefault(_resultsView);
var _bookmarksView = require("./views/bookmarksView");
var _bookmarksViewDefault = parcelHelpers.interopDefault(_bookmarksView);
var _paginationView = require("./views/paginationView");
var _paginationViewDefault = parcelHelpers.interopDefault(_paginationView);
var _addRecipeView = require("./views/addRecipeView");
var _addRecipeViewDefault = parcelHelpers.interopDefault(_addRecipeView);
var _config = require("./config");
if (module.hot) module.hot.accept();
async function ShowRecipe() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeViewDefault.default).spinner();
        (0, _resultsViewDefault.default).update(_model.getSearchResultPage());
        (0, _bookmarksViewDefault.default).update(_model.state.bookmarks);
        await _model.loadRecipe(id);
        const recipe = _model.state.recipe;
        (0, _recipeViewDefault.default).spinner();
        (0, _recipeViewDefault.default).render(recipe);
    } catch (err) {
        (0, _recipeViewDefault.default).renderError();
    }
}
async function SearchResults() {
    try {
        const query = (0, _searchViewDefault.default).getQuery();
        if (!query) return;
        await _model.loadSearchResults(query);
        (0, _resultsViewDefault.default).render(_model.getSearchResultPage());
        (0, _paginationViewDefault.default).render(_model.state.search);
    } catch (err) {
        console.log(err);
    }
}
function controlPagination(goToPage) {
    (0, _resultsViewDefault.default).render(_model.getSearchResultPage(goToPage));
    (0, _paginationViewDefault.default).render(_model.state.search);
}
function controlServings(newServings) {
    _model.updateServings(newServings);
    (0, _recipeViewDefault.default).update(_model.state.recipe);
}
function controlBookmarks() {
    if (!_model.state.recipe.bookmarked) _model.addBookmark(_model.state.recipe);
    else _model.removeBookmark(_model.state.recipe.id);
    (0, _recipeViewDefault.default).update(_model.state.recipe);
    (0, _bookmarksViewDefault.default).render(_model.state.bookmarks);
}
function renderBookmarks() {
    (0, _bookmarksViewDefault.default).render(_model.state.bookmarks);
}
async function addRecipe(newRecipe) {
    try {
        (0, _addRecipeViewDefault.default).spinner();
        await _model.uploadRecipe(newRecipe);
        console.log(_model.state.recipe);
        (0, _recipeViewDefault.default).render(_model.state.recipe);
        (0, _addRecipeViewDefault.default).renderMessage();
        (0, _bookmarksViewDefault.default).render(_model.state.bookmarks);
        window.history.pushState(null, "", `#${_model.state.recipe.id}`);
        setTimeout(function() {
            (0, _addRecipeViewDefault.default).toggleWindow();
        }, (0, _config.MODAL_CLOSE_SEC) * 1000);
    } catch (err) {
        console.error(err);
        (0, _addRecipeViewDefault.default).renderError(err.message);
    }
}
function init() {
    (0, _bookmarksViewDefault.default).addHandlerRender(renderBookmarks);
    (0, _recipeViewDefault.default).addHandlerRender(ShowRecipe);
    (0, _recipeViewDefault.default).addHandlerUpdateServings(controlServings);
    (0, _recipeViewDefault.default).addHandlerBookmark(controlBookmarks);
    (0, _searchViewDefault.default).addHandlerSearch(SearchResults);
    (0, _paginationViewDefault.default).addHandlerClick(controlPagination);
    (0, _pageViewDefault.default).pageEventListeners();
    (0, _addRecipeViewDefault.default).addHandlerUpload(addRecipe);
}
init();

},{"./model":"Py0LO","./views/recipeView":"9VMBE","./views/pageView":"bcxWh","./views/searchView":"jYSxB","./views/resultsView":"lUePn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/paginationView":"2gpFT","./views/bookmarksView":"1Cvmo","./views/addRecipeView":"j6U8d","./config":"4Wc5b"}],"Py0LO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultPage", ()=>getSearchResultPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "removeBookmark", ()=>removeBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
var _config = require("./config");
// import { getJSON, sendJSON } from "./helpers";
var _helpers = require("./helpers");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1
    },
    bookmarks: []
};
function createRecipeObject(data) {
    const recipe = data.data.recipe;
    return {
        id: recipe.id,
        title: recipe.title,
        author: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...recipe.key && {
            key: recipe.key
        }
    };
}
async function loadRecipe(id) {
    try {
        const data = await (0, _helpers.AJAX)(`${(0, _config.API_URL)}${id}?key=${(0, _config.KEY)}`);
        state.recipe = createRecipeObject(data);
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (err) {
        throw err;
    }
}
async function loadSearchResults(query) {
    try {
        state.search.query = query;
        const data = await (0, _helpers.AJAX)(`${(0, _config.API_URL)}?search=${query}&key=${(0, _config.KEY)}`);
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url
            };
        });
        state.search.page = 1;
    } catch (err) {
        throw err;
    }
}
function getSearchResultPage(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * (0, _helpers.setResultsPerPage)();
    const end = page * (0, _helpers.setResultsPerPage)();
    return state.search.results.slice(start, end);
}
function updateServings(numOfServings) {
    state.recipe.ingredients.forEach((ingredient)=>ingredient.quantity = ingredient.quantity * numOfServings / state.recipe.servings);
    state.recipe.servings = numOfServings;
}
function persistBookmarks() {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
}
function addBookmark(recipe) {
    state.bookmarks.push(recipe);
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    persistBookmarks();
}
function removeBookmark(id) {
    const index = state.bookmarks.findIndex((element)=>element.id === id);
    state.bookmarks.splice(index, 1);
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmarks();
}
async function uploadRecipe(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "").map((ing)=>{
            const ingredientsArray = ing[1].split(",").map((element)=>element.trim());
            if (ingredientsArray.length !== 3) throw new Error("Wrong ingredient format.");
            const [quantity, unit, description] = ingredientsArray;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients
        };
        const data = await (0, _helpers.AJAX)(`${(0, _config.API_URL)}?key=${(0, _config.KEY)}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    } catch (err) {
        throw err;
    }
}
function init() {
    const storage = localStorage.getItem("bookmarks");
    if (storage) state.bookmarks = JSON.parse(storage);
}
init();

},{"./config":"4Wc5b","./helpers":"6s1be","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Wc5b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "RES_PER_PAGE_650", ()=>RES_PER_PAGE_650);
parcelHelpers.export(exports, "RES_PER_PAGE_1000", ()=>RES_PER_PAGE_1000);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const KEY = "e8c6c4de-0ac3-4a2b-98c8-5275cf6cc007";
const TIMEOUT_SEC = 3;
const RES_PER_PAGE = 4;
const RES_PER_PAGE_650 = 5;
const RES_PER_PAGE_1000 = 4;
const MODAL_CLOSE_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6s1be":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
parcelHelpers.export(exports, "setResultsPerPage", ()=>setResultsPerPage);
var _config = require("./config");
function timeout(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error("Request took to long"));
        }, s * 1000);
    });
}
async function AJAX(url, uploadData) {
    try {
        const fetchPromise = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const response = await Promise.race([
            fetchPromise,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await response.json();
        return data;
    } catch (err) {
        throw err;
    }
}
function setResultsPerPage() {
    let resultsPerPage = (0, _config.RES_PER_PAGE);
    if (window.matchMedia("(min-width: 650px").matches) resultsPerPage = (0, _config.RES_PER_PAGE_650);
    if (window.matchMedia("(min-width: 1000px").matches) resultsPerPage = (0, _config.RES_PER_PAGE_1000);
    return resultsPerPage;
}

},{"./config":"4Wc5b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9VMBE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fracty = require("fracty");
var _fractyDefault = parcelHelpers.interopDefault(_fracty);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class recipeView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector("#recipe-container");
    _errorMessage = "There is no recipe that you are looking for. Try another one";
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((event)=>window.addEventListener(event, handler));
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const servingsButton = e.target.closest(".servings-button");
            if (!servingsButton) return;
            const updateTo = +servingsButton.dataset.updateTo;
            if (updateTo > 0) handler(updateTo);
        });
    }
    addHandlerBookmark(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const button = e.target.closest(".fa-bookmark");
            if (!button) return;
            handler();
        });
    }
    _generateMarkup() {
        return `
      <div class="recipe-title">${this._data.title}</div>
      <div class="recipe-image-container">
        <img src="${this._data.image}" class="recipe-image" />
      </div>
      <div class="info-container">
        <div class="cooking-time-container">
          <i class="fa-solid fa-clock"></i>
          <a><b>${this._data.cookingTime}</b> MINUTES</a>
        </div>
        <div class="servings-container">
          <i class="fa-solid fa-person"></i>
          <a> <b>${this._data.servings}</b> SERVINGS</a>
          <i class="fa-solid servings-button fa-circle-minus" data-update-to="${this._data.servings - 1}"></i>
          <i class="fa-solid servings-button fa-circle-plus" data-update-to="${this._data.servings + 1}"></i>
        </div>
        <div class="servings-buttons-container">
          <i class="fa-solid fa-user ${this._data.key ? "" : "hidden"}"></i>
          <i class="fa-${this._data.bookmarked ? "solid" : "regular"} fa-bookmark"></i>
        </div>
      </div>
      <div class="ingredients-title">INGREDIENTS</div>
      <div class="ingredients-container">
        ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}       

        <div class="instructions">
          <div class="instructions-title">HOW TO COOK IT</div>
          <div class="instructions-description">
            This recipe was created by <b>${this._data.author}</b>. <br />Check out
            directions at their website.
          </div>
          <div class="instructions-button" onclick="window.location='${this._data.sourceUrl}'">
            <a>DIRECTIONS</a> <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    `;
    }
    _generateMarkupIngredient(ingredient) {
        return `
      <div class="ingredient">
        <i class="fa-solid fa-square-check"></i>
        <a class="ingredient-quantity">
          ${ingredient.quantity ? (0, _fractyDefault.default)(ingredient.quantity) : ""}
        </a>
        <a class="ingredient-unit">${ingredient.unit}</a>
        <a>${ingredient.description}</a>
      </div>
    `;
    }
}
exports.default = new recipeView();

},{"fracty":"hJO4d","./View":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hJO4d":[function(require,module,exports) {
// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
module.exports = function(number) {
    let type;
    if (number < 0) {
        number = Math.abs(number);
        type = "-";
    } else type = "";
    if (number === undefined) return `Your input was undefined.`;
    if (isNaN(number)) return `"${number}" is not a number.`;
    if (number == 9999999999999999) return `${type}9999999999999999`;
    if (number > 9999999999999999) return `Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.`;
    if (Number.isInteger(number)) return `${type}${number}`;
    if (number < .000001) return "0";
    const numberString = number.toString();
    const entry = numberString.split(".");
    let integer = entry[0];
    let decimal;
    if (decimal == "0" && integer !== "0") return integer;
    else if (decimal == "0" && integer == "0") return "0";
    else if (numberString.length >= 17) decimal = entry[1].slice(0, entry[1].length - 1);
    else decimal = entry[1];
    if (decimal == "99" && integer !== "0") return `${integer} 99/100`;
    else if (decimal == "99" && integer == "0") return `99/100`;
    else if (1 - parseFloat(`.${decimal}`) < .0011) decimal = "999";
    if (decimal == undefined) return integer;
    const decimalRev = decimal.split("").reverse().join(""); //Reverse the string to look for patterns.
    const patternSearch = /^(\d+)\1{1,2}/; //This greedy regex matches the biggest pattern that starts at the beginning of the string (at the end, in the case of the reversed string). A lazy regex doesn't work because it only identifies subpatterns in cases where subpatterns exist (e.g. '88' in '388388388388'), thus pattern capture must be greedy.
    let pattern = decimalRev.match(patternSearch); //If there's a pattern, it's full sequence is in [0] of this array and the single unit is in [1] but it may still need to be reduced further.
    if (pattern && decimal.length > 2) {
        let patternSequence = pattern[0].split("").reverse().join("");
        let endPattern = pattern[1].split("").reverse().join("");
        if (endPattern.length > 1) {
            let endPatternArray = endPattern.split("");
            let testSingleUnit = 1;
            for(let i = 0; i < endPatternArray.length; i++)testSingleUnit /= endPatternArray[0] / endPatternArray[i];
            if (testSingleUnit === 1) endPattern = endPatternArray[0];
        }
        if (endPattern.length > 1 && endPattern.length % 2 === 0) endPattern = parseInt(endPattern.slice(0, endPattern.length / 2), 10) - parseInt(endPattern.slice(endPattern.length / 2, endPattern.length), 10) === 0 ? endPattern.slice(0, endPattern.length / 2) : endPattern;
        return yesRepeat(decimal, endPattern, patternSequence, integer, type); //Begin calculating the numerator and denominator for decimals that have a pattern.
    } else return noRepeat(decimal, integer, type); //Begin calculating the numerator and denominator for decimals that don't have a pattern.
};
//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function yesRepeat(decimal, endPattern, patternSequence, integer, type) {
    const rep = true; //The numerator repeats.
    const nonPatternLength = decimal.length - patternSequence.length >= 1 ? decimal.length - patternSequence.length : 1; //Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
    const decimalMultiplier2 = Math.pow(10, nonPatternLength); //Second multiplier to use.
    const float = parseFloat(`0.${decimal}`); //Convert the decimal input to a floating point number.
    const decimalMultiplier1 = Math.pow(10, endPattern.length); //Find the right multiplier to use for both numerator and denominator, which will later have 1 subtracted from it in the case of the denominator.
    const numerator = Math.round((float * decimalMultiplier1 - float) * Math.pow(10, nonPatternLength)); //Find the numerator to be used in calculating the fraction that contains a repeating trailing sequence.
    const denominator = (decimalMultiplier1 - 1) * decimalMultiplier2; //Caluculate the denominator using the equation for repeating trailing sequences.
    return reduce(numerator, denominator, integer, type, rep); //Further reduce the numerator and denominator.
}
//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function noRepeat(decimal, integer, type) {
    const rep = false; //The numerator doesn't repeat.
    const numerator = parseInt(decimal, 10); //Numerator begins as decimal input converted into an integer.
    const denominator = Math.pow(10, decimal.length); //Denominator begins as 10 to the power of the length of the numerator.
    return reduce(numerator, denominator, integer, type, rep); //Reduce the numerator and denominator.
}
//FRACTY REDUCES THE FRACTION.
function reduce(numerator, denominator, integer, type, rep) {
    const primeNumberArray = [
        2,
        3,
        5
    ]; //If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
    if (rep === true) {
        for(let i = 3; i * i <= numerator; i += 2)if (numerator % i === 0) primeNumberArray.push(i);
    }
    let j = 0; //Initialize counter over the prime number array for the while loop.
    let comDenom = 1; //Initialize the common denominator.
    let num = numerator; //Initialize the numerator.
    let den = denominator; //Initialize the denominator.
    while(j <= primeNumberArray.length)if (num % primeNumberArray[j] === 0 && den % primeNumberArray[j] === 0) {
        comDenom = comDenom * primeNumberArray[j];
        num = num / primeNumberArray[j];
        den = den / primeNumberArray[j];
    } else j++;
    return returnStrings(den, num, integer, type);
}
//FRACTY RETURNS THE REDUCED FRACTION AS A STRING.
function returnStrings(den, num, integer, type) {
    if (den === 1 && num === 1) {
        integer = `${type}${(parseInt(integer) + 1).toString()}`; //Add 1 to the integer and return a string without a fraction.
        return `${integer}`;
    } else if (num === 0) return `${type}${integer}`;
    else if (integer == "0") return `${type}${num}/${den}`;
    else return `${type}${integer} ${num}/${den}`; //If there's an integer and a fraction return both.
}

},{}],"iS7pi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spinnerGif = require("url:/icons/spinner.gif");
var _spinnerGifDefault = parcelHelpers.interopDefault(_spinnerGif);
class View {
    _data;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const currentElements = Array.from(this._parentElement.querySelectorAll("*"));
        newElements.forEach((newElement, i)=>{
            const currentElement = currentElements[i];
            // Update changed text
            if (!newElement.isEqualNode(currentElement) && newElement.firstChild?.nodeValue.trim() !== "") currentElement.textContent = newElement.textContent;
            // Update changed attributes
            if (!newElement.isEqualNode(currentElement)) Array.from(newElement.attributes).forEach((attribute)=>currentElement.setAttribute(attribute.name, attribute.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderError(error = this._errorMessage) {
        const markup = `
      <div class="error">
        <a>${error}</a>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this._message) {
        const markup = `
      <div class="success-message">
        <a>${message}</a>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    spinner() {
        const markup = `
      <div class="spinner">
        <img src="${(0, _spinnerGifDefault.default)}" />
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"url:/icons/spinner.gif":"3129t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3129t":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("f3nP6") + "spinner.df33b5d8.gif" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bcxWh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const searchBarContainer = document.querySelector(".search-bar-container");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const overlay = document.querySelector("#overlay");
const menuButton = document.querySelector(".fa-bars");
const menuContainer = document.querySelector(".menu-container");
const addRecipeButton = document.querySelector(".fa-pen-to-square");
const addRecipeModal = document.querySelector(".add-recipe-modal");
const bookmarksButton = document.querySelector(".open-bookmarks");
const bookmarksModal = document.querySelector(".bookmarks-container");
const bookmarks = document.querySelectorAll(".bookmarks");
class pageView {
    pageEventListeners() {
        searchIcon.addEventListener("click", function() {
            searchBarContainer.classList.toggle("hidden");
            overlay.classList.toggle("hidden");
        });
        searchBarContainer.addEventListener("submit", function() {
            searchBarContainer.classList.toggle("hidden");
            overlay.classList.toggle("hidden");
        });
        bookmarks.forEach((res)=>res.addEventListener("click", function() {
                bookmarksModal.classList.add("hidden");
                overlay.classList.add("hidden");
            }));
        menuButton.addEventListener("click", function() {
            menuContainer.classList.toggle("hidden");
            overlay.classList.toggle("hidden");
        });
        addRecipeButton.parentElement.addEventListener("click", function() {
            menuContainer.classList.toggle("hidden");
            addRecipeModal.classList.toggle("hidden");
        });
        bookmarksButton.parentElement.addEventListener("click", function() {
            menuContainer.classList.toggle("hidden");
            bookmarksModal.classList.toggle("hidden");
        });
        overlay.addEventListener("click", function() {
            if (!addRecipeModal.classList.contains("hidden")) addRecipeModal.classList.add("hidden");
            if (!searchBarContainer.classList.contains("hidden")) searchBarContainer.classList.add("hidden");
            if (!menuContainer.classList.contains("hidden")) menuContainer.classList.add("hidden");
            if (!bookmarksModal.classList.contains("hidden")) bookmarksModal.classList.add("hidden");
            overlay.classList.toggle("hidden");
        });
    }
}
exports.default = new pageView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jYSxB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class searchView {
    _parentElement = document.querySelector(".search-bar-container");
    getQuery() {
        const queryValue = this._parentElement.querySelector("#search-bar").value;
        this._clearInput();
        return queryValue;
    }
    _clearInput() {
        this._parentElement.querySelector("#search-bar").value = "";
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new searchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lUePn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
class resultsView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = "No recipes found";
    _generateMarkup() {
        return this._data.map((result)=>(0, _previewViewDefault.default).render(result, false)).join("");
    }
}
exports.default = new resultsView();

},{"./View":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./previewView":"loIL3"}],"loIL3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class previewView extends (0, _viewDefault.default) {
    _parentElement = "";
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return `
    <div class="result ${this._data.id === id ? "active-result" : ""}" onclick="window.location='#${this._data.id}'">
      <div class="result-image-container">
        <img src="${this._data.image}" class="result-image" />
      </div>
      <div class="result-title-container" >
        <a class="result-title">${this._data.title}</a>
      </div>
    </div>
  `;
    }
}
exports.default = new previewView();

},{"./View":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2gpFT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _helpers = require("../helpers");
class paginationView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector("#pagination-container");
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".page-button");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const currentPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / (0, _helpers.setResultsPerPage)());
        // Page 1 with more pages
        if (currentPage === 1 && numPages > 1) return `<button data-goto="${currentPage + 1}" class="page-button next-page-button">Page ${currentPage + 1}</button>`;
        // Last page
        if (currentPage === numPages && numPages > 1) return `<button data-goto="${currentPage - 1}" class="page-button previous-page-button">Page ${currentPage - 1}</button>`;
        // Other page
        if (currentPage < numPages) return `
        <button data-goto="${currentPage - 1}" class="page-button previous-page-button">Page ${currentPage - 1}</button>
        <button data-goto="${currentPage + 1}" class="page-button next-page-button">Page ${currentPage + 1}</button>
      `;
        // Only one page
        return ``;
    }
}
exports.default = new paginationView();

},{"./View":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../helpers":"6s1be"}],"1Cvmo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
class bookmarksView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".bookmarks");
    _errorMessage = "No bookmarked recipes found";
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkup() {
        return this._data.map((bookmark)=>(0, _previewViewDefault.default).render(bookmark, false)).join("");
    }
}
exports.default = new bookmarksView();

},{"./View":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./previewView":"loIL3"}],"j6U8d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class addRecipeView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".upload-form");
    _overlay = document.querySelector("#overlay");
    _addRecipeModal = document.querySelector(".add-recipe-modal");
    _message = "Recipe was successfully uploaded";
    toggleWindow() {
        this._overlay.classList.toggle("hidden");
        this._addRecipeModal.classList.toggle("hidden");
    }
    addHandlerUpload(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArray = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArray);
            handler(data);
        });
    }
    _generateMarkup() {}
}
exports.default = new addRecipeView();

},{"./View":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bxIRe","1GgH0"], "1GgH0", "parcelRequire26b5")

//# sourceMappingURL=index.850bd9e5.js.map
