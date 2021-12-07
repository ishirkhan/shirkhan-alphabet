const TRANSLATIONAL_MARK$1 = "/";
const SEPARATE_MARK = "h";
const SYLLABIFY_MARK = "`";
const READABILITY_MARK = "'";
const HEMZE = "\u0626";
const table$1 = [
  {
    ug: "\u0626",
    uly: "x",
    khan: "x",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0627",
    uly: "a",
    khan: "a",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06D5",
    uly: "e",
    khan: "e",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06D0",
    uly: "\xEB",
    khan: "eh",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u0649",
    uly: "i",
    khan: "i",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u0648",
    uly: "o",
    khan: "o",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06C7",
    uly: "u",
    khan: "u",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06C6",
    uly: "\xF6",
    khan: "c",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u06C8",
    uly: "\xFC",
    khan: "v",
    volwes: true,
    punctuation: false
  },
  {
    ug: "\u0628",
    uly: "b",
    khan: "b",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u067E",
    uly: "p",
    khan: "p",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u062A",
    uly: "t",
    khan: "t",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u062C",
    uly: "j",
    khan: "j",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0686",
    uly: "ch",
    khan: "ch",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u062E",
    uly: "x",
    khan: "kh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u062F",
    uly: "d",
    khan: "d",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0631",
    uly: "r",
    khan: "r",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0632",
    uly: "z",
    khan: "z",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0698",
    uly: "zh",
    khan: "zh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0633",
    uly: "s",
    khan: "s",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0634",
    uly: "sh",
    khan: "sh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u063A",
    uly: "gh",
    khan: "gh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0642",
    uly: "q",
    khan: "q",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0641",
    uly: "f",
    khan: "f",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0643",
    uly: "k",
    khan: "k",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u06AF",
    uly: "g",
    khan: "g",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u06AD",
    uly: "ng",
    khan: "ng",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0644",
    uly: "l",
    khan: "l",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0645",
    uly: "m",
    khan: "m",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0646",
    uly: "n",
    khan: "n",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u0646",
    uly: "n",
    khan: "n" + SEPARATE_MARK,
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u06BE",
    uly: "h",
    khan: "wh",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u06CB",
    uly: "w",
    khan: "w",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u064A",
    uly: "y",
    khan: "y",
    volwes: false,
    punctuation: false
  },
  {
    ug: "\u061F",
    uly: "?",
    khan: "?",
    volwes: false,
    punctuation: true
  }
];
function volwes() {
  return table$1.filter((item) => item.volwes);
}
function isVolwes(char, key = "khan") {
  return volwes().map((item) => item[key]).includes(char);
}
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function bail(error) {
  if (error) {
    throw error;
  }
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var isBuffer = function isBuffer2(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
};
var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray = function isArray2(arr) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(arr);
  }
  return toStr.call(arr) === "[object Array]";
};
var isPlainObject$1 = function isPlainObject(obj) {
  if (!obj || toStr.call(obj) !== "[object Object]") {
    return false;
  }
  var hasOwnConstructor = hasOwn.call(obj, "constructor");
  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  }
  var key;
  for (key in obj) {
  }
  return typeof key === "undefined" || hasOwn.call(obj, key);
};
var setProperty = function setProperty2(target, options) {
  if (defineProperty && options.name === "__proto__") {
    defineProperty(target, options.name, {
      enumerable: true,
      configurable: true,
      value: options.newValue,
      writable: true
    });
  } else {
    target[options.name] = options.newValue;
  }
};
var getProperty = function getProperty2(obj, name) {
  if (name === "__proto__") {
    if (!hasOwn.call(obj, name)) {
      return void 0;
    } else if (gOPD) {
      return gOPD(obj, name).value;
    }
  }
  return obj[name];
};
var extend = function extend2() {
  var options, name, src, copy, copyIsArray, clone;
  var target = arguments[0];
  var i = 1;
  var length = arguments.length;
  var deep = false;
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  }
  if (target == null || typeof target !== "object" && typeof target !== "function") {
    target = {};
  }
  for (; i < length; ++i) {
    options = arguments[i];
    if (options != null) {
      for (name in options) {
        src = getProperty(target, name);
        copy = getProperty(options, name);
        if (target !== copy) {
          if (deep && copy && (isPlainObject$1(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isPlainObject$1(src) ? src : {};
            }
            setProperty(target, { name, newValue: extend2(deep, clone, copy) });
          } else if (typeof copy !== "undefined") {
            setProperty(target, { name, newValue: copy });
          }
        }
      }
    }
  }
  return target;
};
function isPlainObject2(value) {
  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
function trough() {
  const fns = [];
  const pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next(null, ...values);
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index2 < values.length) {
        if (output[index2] === null || output[index2] === void 0) {
          output[index2] = values[index2];
        }
      }
      values = output;
      if (fn) {
        wrap(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError("Expected `middelware` to be a function, not " + middelware);
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware(...parameters);
    } catch (error) {
      const exception = error;
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}
var own$2 = {}.hasOwnProperty;
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if (own$2.call(value, "position") || own$2.call(value, "type")) {
    return position(value.position);
  }
  if (own$2.call(value, "start") || own$2.call(value, "end")) {
    return position(value);
  }
  if (own$2.call(value, "line") || own$2.call(value, "column")) {
    return point(value);
  }
  return "";
}
function point(point2) {
  return index(point2 && point2.line) + ":" + index(point2 && point2.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}
class VFileMessage extends Error {
  constructor(reason, place, origin) {
    var parts = [null, null];
    var position2 = {
      start: { line: null, column: null },
      end: { line: null, column: null }
    };
    var index2;
    super();
    if (typeof place === "string") {
      origin = place;
      place = null;
    }
    if (typeof origin === "string") {
      index2 = origin.indexOf(":");
      if (index2 === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index2);
        parts[1] = origin.slice(index2 + 1);
      }
    }
    if (place) {
      if ("type" in place || "position" in place) {
        if (place.position) {
          position2 = place.position;
        }
      } else if ("start" in place || "end" in place) {
        position2 = place;
      } else if ("line" in place || "column" in place) {
        position2.start = place;
      }
    }
    this.name = stringifyPosition(place) || "1:1";
    this.message = typeof reason === "object" ? reason.message : reason;
    this.stack = typeof reason === "object" ? reason.stack : "";
    this.reason = this.message;
    this.line = position2.start.line;
    this.column = position2.start.column;
    this.source = parts[0];
    this.ruleId = parts[1];
    this.position = position2;
    this.file;
    this.fatal;
    this.url;
    this.note;
  }
}
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;
const path = { basename, dirname, extname, join, sep: "/" };
function basename(path2, ext) {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath$1(path2);
  let start = 0;
  let end = -1;
  let index2 = path2.length;
  let seenNonSlash;
  if (ext === void 0 || ext.length === 0 || ext.length > path2.length) {
    while (index2--) {
      if (path2.charCodeAt(index2) === 47) {
        if (seenNonSlash) {
          start = index2 + 1;
          break;
        }
      } else if (end < 0) {
        seenNonSlash = true;
        end = index2 + 1;
      }
    }
    return end < 0 ? "" : path2.slice(start, end);
  }
  if (ext === path2) {
    return "";
  }
  let firstNonSlashEnd = -1;
  let extIndex = ext.length - 1;
  while (index2--) {
    if (path2.charCodeAt(index2) === 47) {
      if (seenNonSlash) {
        start = index2 + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        seenNonSlash = true;
        firstNonSlashEnd = index2 + 1;
      }
      if (extIndex > -1) {
        if (path2.charCodeAt(index2) === ext.charCodeAt(extIndex--)) {
          if (extIndex < 0) {
            end = index2;
          }
        } else {
          extIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }
  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path2.length;
  }
  return path2.slice(start, end);
}
function dirname(path2) {
  assertPath$1(path2);
  if (path2.length === 0) {
    return ".";
  }
  let end = -1;
  let index2 = path2.length;
  let unmatchedSlash;
  while (--index2) {
    if (path2.charCodeAt(index2) === 47) {
      if (unmatchedSlash) {
        end = index2;
        break;
      }
    } else if (!unmatchedSlash) {
      unmatchedSlash = true;
    }
  }
  return end < 0 ? path2.charCodeAt(0) === 47 ? "/" : "." : end === 1 && path2.charCodeAt(0) === 47 ? "//" : path2.slice(0, end);
}
function extname(path2) {
  assertPath$1(path2);
  let index2 = path2.length;
  let end = -1;
  let startPart = 0;
  let startDot = -1;
  let preDotState = 0;
  let unmatchedSlash;
  while (index2--) {
    const code = path2.charCodeAt(index2);
    if (code === 47) {
      if (unmatchedSlash) {
        startPart = index2 + 1;
        break;
      }
      continue;
    }
    if (end < 0) {
      unmatchedSlash = true;
      end = index2 + 1;
    }
    if (code === 46) {
      if (startDot < 0) {
        startDot = index2;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      preDotState = -1;
    }
  }
  if (startDot < 0 || end < 0 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
function join(...segments) {
  let index2 = -1;
  let joined;
  while (++index2 < segments.length) {
    assertPath$1(segments[index2]);
    if (segments[index2]) {
      joined = joined === void 0 ? segments[index2] : joined + "/" + segments[index2];
    }
  }
  return joined === void 0 ? "." : normalize(joined);
}
function normalize(path2) {
  assertPath$1(path2);
  const absolute = path2.charCodeAt(0) === 47;
  let value = normalizeString(path2, !absolute);
  if (value.length === 0 && !absolute) {
    value = ".";
  }
  if (value.length > 0 && path2.charCodeAt(path2.length - 1) === 47) {
    value += "/";
  }
  return absolute ? "/" + value : value;
}
function normalizeString(path2, allowAboveRoot) {
  let result = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let index2 = -1;
  let code;
  let lastSlashIndex;
  while (++index2 <= path2.length) {
    if (index2 < path2.length) {
      code = path2.charCodeAt(index2);
    } else if (code === 47) {
      break;
    } else {
      code = 47;
    }
    if (code === 47) {
      if (lastSlash === index2 - 1 || dots === 1)
        ;
      else if (lastSlash !== index2 - 1 && dots === 2) {
        if (result.length < 2 || lastSegmentLength !== 2 || result.charCodeAt(result.length - 1) !== 46 || result.charCodeAt(result.length - 2) !== 46) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf("/");
            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = "";
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
              }
              lastSlash = index2;
              dots = 0;
              continue;
            }
          } else if (result.length > 0) {
            result = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          result = result.length > 0 ? result + "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += "/" + path2.slice(lastSlash + 1, index2);
        } else {
          result = path2.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (code === 46 && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }
  return result;
}
function assertPath$1(path2) {
  if (typeof path2 !== "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(path2));
  }
}
const proc = { cwd };
function cwd() {
  return "/";
}
function isUrl(fileURLOrPath) {
  return fileURLOrPath !== null && typeof fileURLOrPath === "object" && fileURLOrPath.href && fileURLOrPath.origin;
}
function urlToPath(path2) {
  if (typeof path2 === "string") {
    path2 = new URL(path2);
  } else if (!isUrl(path2)) {
    const error = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + path2 + "`");
    error.code = "ERR_INVALID_ARG_TYPE";
    throw error;
  }
  if (path2.protocol !== "file:") {
    const error = new TypeError("The URL must be of scheme file");
    error.code = "ERR_INVALID_URL_SCHEME";
    throw error;
  }
  return getPathFromURLPosix(path2);
}
function getPathFromURLPosix(url) {
  if (url.hostname !== "") {
    const error = new TypeError('File URL host must be "localhost" or empty on darwin');
    error.code = "ERR_INVALID_FILE_URL_HOST";
    throw error;
  }
  const pathname = url.pathname;
  let index2 = -1;
  while (++index2 < pathname.length) {
    if (pathname.charCodeAt(index2) === 37 && pathname.charCodeAt(index2 + 1) === 50) {
      const third = pathname.charCodeAt(index2 + 2);
      if (third === 70 || third === 102) {
        const error = new TypeError("File URL path must not include encoded / characters");
        error.code = "ERR_INVALID_FILE_URL_PATH";
        throw error;
      }
    }
  }
  return decodeURIComponent(pathname);
}
const order = ["history", "path", "basename", "stem", "extname", "dirname"];
class VFile {
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (typeof value === "string" || isBuffer(value)) {
      options = { value };
    } else if (isUrl(value)) {
      options = { path: value };
    } else {
      options = value;
    }
    this.data = {};
    this.messages = [];
    this.history = [];
    this.cwd = proc.cwd();
    this.value;
    this.stored;
    this.result;
    this.map;
    let index2 = -1;
    while (++index2 < order.length) {
      const prop2 = order[index2];
      if (prop2 in options && options[prop2] !== void 0) {
        this[prop2] = prop2 === "history" ? [...options[prop2]] : options[prop2];
      }
    }
    let prop;
    for (prop in options) {
      if (!order.includes(prop))
        this[prop] = options[prop];
    }
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(path2) {
    if (isUrl(path2)) {
      path2 = urlToPath(path2);
    }
    assertNonEmpty(path2, "path");
    if (this.path !== path2) {
      this.history.push(path2);
    }
  }
  get dirname() {
    return typeof this.path === "string" ? path.dirname(this.path) : void 0;
  }
  set dirname(dirname2) {
    assertPath(this.basename, "dirname");
    this.path = path.join(dirname2 || "", this.basename);
  }
  get basename() {
    return typeof this.path === "string" ? path.basename(this.path) : void 0;
  }
  set basename(basename2) {
    assertNonEmpty(basename2, "basename");
    assertPart(basename2, "basename");
    this.path = path.join(this.dirname || "", basename2);
  }
  get extname() {
    return typeof this.path === "string" ? path.extname(this.path) : void 0;
  }
  set extname(extname2) {
    assertPart(extname2, "extname");
    assertPath(this.dirname, "extname");
    if (extname2) {
      if (extname2.charCodeAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (extname2.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = path.join(this.dirname, this.stem + (extname2 || ""));
  }
  get stem() {
    return typeof this.path === "string" ? path.basename(this.path, this.extname) : void 0;
  }
  set stem(stem) {
    assertNonEmpty(stem, "stem");
    assertPart(stem, "stem");
    this.path = path.join(this.dirname || "", stem + (this.extname || ""));
  }
  toString(encoding) {
    return (this.value || "").toString(encoding);
  }
  message(reason, place, origin) {
    const message = new VFileMessage(reason, place, origin);
    if (this.path) {
      message.name = this.path + ":" + message.name;
      message.file = this.path;
    }
    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  info(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = null;
    return message;
  }
  fail(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = true;
    throw message;
  }
}
function assertPart(part, name) {
  if (part && part.includes(path.sep)) {
    throw new Error("`" + name + "` cannot be a path: did not expect `" + path.sep + "`");
  }
}
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error("`" + name + "` cannot be empty");
  }
}
function assertPath(path2, name) {
  if (!path2) {
    throw new Error("Setting `" + name + "` requires `path` to be set too");
  }
}
const unified = base().freeze();
const own$1 = {}.hasOwnProperty;
function base() {
  const transformers = trough();
  const attachers = [];
  let namespace = {};
  let frozen;
  let freezeIndex = -1;
  processor.data = data;
  processor.Parser = void 0;
  processor.Compiler = void 0;
  processor.freeze = freeze;
  processor.attachers = attachers;
  processor.use = use;
  processor.parse = parse;
  processor.stringify = stringify;
  processor.run = run;
  processor.runSync = runSync;
  processor.process = process;
  processor.processSync = processSync;
  return processor;
  function processor() {
    const destination = base();
    let index2 = -1;
    while (++index2 < attachers.length) {
      destination.use(...attachers[index2]);
    }
    destination.data(extend(true, {}, namespace));
    return destination;
  }
  function data(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", frozen);
        namespace[key] = value;
        return processor;
      }
      return own$1.call(namespace, key) && namespace[key] || null;
    }
    if (key) {
      assertUnfrozen("data", frozen);
      namespace = key;
      return processor;
    }
    return namespace;
  }
  function freeze() {
    if (frozen) {
      return processor;
    }
    while (++freezeIndex < attachers.length) {
      const [attacher, ...options] = attachers[freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[1] = void 0;
      }
      const transformer = attacher.call(processor, ...options);
      if (typeof transformer === "function") {
        transformers.use(transformer);
      }
    }
    frozen = true;
    freezeIndex = Number.POSITIVE_INFINITY;
    return processor;
  }
  function use(value, ...options) {
    let settings;
    assertUnfrozen("use", frozen);
    if (value === null || value === void 0)
      ;
    else if (typeof value === "function") {
      addPlugin(value, ...options);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings);
    }
    return processor;
    function add(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...options2] = value2;
          addPlugin(plugin, ...options2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      addList(result.plugins);
      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings);
      }
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins === null || plugins === void 0)
        ;
      else if (Array.isArray(plugins)) {
        while (++index2 < plugins.length) {
          const thing = plugins[index2];
          add(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, value2) {
      let index2 = -1;
      let entry;
      while (++index2 < attachers.length) {
        if (attachers[index2][0] === plugin) {
          entry = attachers[index2];
          break;
        }
      }
      if (entry) {
        if (isPlainObject2(entry[1]) && isPlainObject2(value2)) {
          value2 = extend(true, entry[1], value2);
        }
        entry[1] = value2;
      } else {
        attachers.push([...arguments]);
      }
    }
  }
  function parse(doc) {
    processor.freeze();
    const file = vfile(doc);
    const Parser = processor.Parser;
    assertParser("parse", Parser);
    if (newable(Parser, "parse")) {
      return new Parser(String(file), file).parse();
    }
    return Parser(String(file), file);
  }
  function stringify(node, doc) {
    processor.freeze();
    const file = vfile(doc);
    const Compiler2 = processor.Compiler;
    assertCompiler("stringify", Compiler2);
    assertNode(node);
    if (newable(Compiler2, "compile")) {
      return new Compiler2(node, file).compile();
    }
    return Compiler2(node, file);
  }
  function run(node, doc, callback) {
    assertNode(node);
    processor.freeze();
    if (!callback && typeof doc === "function") {
      callback = doc;
      doc = void 0;
    }
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      transformers.run(node, vfile(doc), done);
      function done(error, tree, file) {
        tree = tree || node;
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(tree);
        } else {
          callback(null, tree, file);
        }
      }
    }
  }
  function runSync(node, file) {
    let result;
    let complete;
    processor.run(node, file, done);
    assertDone("runSync", "run", complete);
    return result;
    function done(error, tree) {
      bail(error);
      result = tree;
      complete = true;
    }
  }
  function process(doc, callback) {
    processor.freeze();
    assertParser("process", processor.Parser);
    assertCompiler("process", processor.Compiler);
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      const file = vfile(doc);
      processor.run(processor.parse(file), file, (error, tree, file2) => {
        if (error || !tree || !file2) {
          done(error);
        } else {
          const result = processor.stringify(tree, file2);
          if (result === void 0 || result === null)
            ;
          else if (looksLikeAVFileValue(result)) {
            file2.value = result;
          } else {
            file2.result = result;
          }
          done(error, file2);
        }
      });
      function done(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          callback(null, file2);
        }
      }
    }
  }
  function processSync(doc) {
    let complete;
    processor.freeze();
    assertParser("processSync", processor.Parser);
    assertCompiler("processSync", processor.Compiler);
    const file = vfile(doc);
    processor.process(file, done);
    assertDone("processSync", "process", complete);
    return file;
    function done(error) {
      complete = true;
      bail(error);
    }
  }
}
function newable(value, name) {
  return typeof value === "function" && value.prototype && (keys(value.prototype) || name in value.prototype);
}
function keys(value) {
  let key;
  for (key in value) {
    if (own$1.call(value, key)) {
      return true;
    }
  }
  return false;
}
function assertParser(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `Parser`");
  }
}
function assertCompiler(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `Compiler`");
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error("Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
}
function assertNode(node) {
  if (!isPlainObject2(node) || typeof node.type !== "string") {
    throw new TypeError("Expected node, got `" + node + "`");
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(value && typeof value === "object" && "message" in value && "messages" in value);
}
function looksLikeAVFileValue(value) {
  return typeof value === "string" || isBuffer(value);
}
function unherit(Super) {
  const Of = class extends Super {
  };
  const proto = Of.prototype;
  let key;
  for (key in proto) {
    const value = proto[key];
    if (value && typeof value === "object") {
      proto[key] = "concat" in value ? value.concat() : Object.assign({}, value);
    }
  }
  return Of;
}
var nlcstToString_1 = nlcstToString;
function nlcstToString(node, separator) {
  var sep = separator || "";
  var values;
  var length;
  var children;
  if (!node || !("length" in node) && !node.type) {
    throw new Error("Expected node, not `" + node + "`");
  }
  if (typeof node.value === "string") {
    return node.value;
  }
  children = "length" in node ? node : node.children;
  length = children.length;
  if (length === 1 && "value" in children[0]) {
    return children[0].value;
  }
  values = [];
  while (length--) {
    values[length] = nlcstToString(children[length], sep);
  }
  return values.join(sep);
}
var arrayIterate = iterate$1;
var own = {}.hasOwnProperty;
function iterate$1(values, callback, context) {
  var index2 = -1;
  var result;
  if (!values) {
    throw new Error("Iterate requires that |this| not be " + values);
  }
  if (!own.call(values, "length")) {
    throw new Error("Iterate requires that |this| has a `length`");
  }
  if (typeof callback !== "function") {
    throw new Error("`callback` must be a function");
  }
  while (++index2 < values.length) {
    if (!(index2 in values)) {
      continue;
    }
    result = callback.call(context, values[index2], index2, values);
    if (typeof result === "number") {
      if (result < 0) {
        index2 = 0;
      }
      index2 = result - 1;
    }
  }
}
var iterate = arrayIterate;
var unistUtilModifyChildren = modifierFactory;
function modifierFactory(callback) {
  return iteratorFactory(wrapperFactory(callback));
}
function iteratorFactory(callback) {
  return iterator;
  function iterator(parent) {
    var children = parent && parent.children;
    if (!children) {
      throw new Error("Missing children in `parent` for `modifier`");
    }
    iterate(children, callback, parent);
  }
}
function wrapperFactory(callback) {
  return wrapper;
  function wrapper(value, index2) {
    return callback(value, index2, this);
  }
}
var modifyChildren = unistUtilModifyChildren;
var mergeInitialWordSymbol = modifyChildren(function(child, index2, parent) {
  var children;
  var next;
  if (child.type !== "SymbolNode" && child.type !== "PunctuationNode" || nlcstToString_1(child) !== "&") {
    return;
  }
  children = parent.children;
  next = children[index2 + 1];
  if (index2 > 0 && children[index2 - 1].type === "WordNode" || !(next && next.type === "WordNode")) {
    return;
  }
  children.splice(index2, 1);
  next.children.unshift(child);
  if (next.position && child.position) {
    next.position.start = child.position.start;
  }
  return index2 - 1;
});
var mergeFinalWordSymbol = modifyChildren(function(child, index2, parent) {
  var children;
  var previous;
  var next;
  if (index2 > 0 && (child.type === "SymbolNode" || child.type === "PunctuationNode") && nlcstToString_1(child) === "-") {
    children = parent.children;
    previous = children[index2 - 1];
    next = children[index2 + 1];
    if ((!next || next.type !== "WordNode") && previous && previous.type === "WordNode") {
      children.splice(index2, 1);
      previous.children.push(child);
      if (previous.position && child.position) {
        previous.position.end = child.position.end;
      }
      return index2;
    }
  }
});
var affixSymbol = /^([!"').?\u00BB\u0F3B\u0F3D\u169C\u2019\u201D\u2026\u203A\u203D\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21\u2E23\u2E25\u2E27\u2E29\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63\]}])\1*$/;
var newLine = /^[ \t]*((\r?\n|\r)[\t ]*)+$/;
var newLineMulti = /^[ \t]*((\r?\n|\r)[\t ]*){2,}$/;
var terminalMarker = /^([!.?\u2026\u203D]+)$/;
var wordSymbolInner = /^([&'\-.:=?@\u00AD\u00B7\u2010\u2011\u2019\u2027]|_+)$/;
var numerical = /^(?:[\d\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9])+$/;
var digitStart = /^\d/;
var lowerInitial = /^(?:[a-z\u00B5\u00DF-\u00F6\u00F8-\u00FF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C3\uA7C8\uA7CA\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43])/;
var surrogates = /[\uD800-\uDFFF]/;
var punctuation = /[!"'-),-/:;?[-\]_{}\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u201F\u2022-\u2027\u2032-\u203A\u203C-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
var word = /[\dA-Za-z\u00AA\u00B2\u00B3\u00B5\u00B9\u00BA\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1AC0\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u20D0-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA827\uA82C\uA830-\uA835\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE6\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC52-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF3B]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF]/;
var whiteSpace = /[\t-\r \u0085\u00A0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
var mergeInnerWordSymbol = modifyChildren(function(child, index2, parent) {
  var siblings;
  var sibling;
  var previous;
  var last;
  var position2;
  var tokens;
  var queue;
  if (index2 > 0 && (child.type === "SymbolNode" || child.type === "PunctuationNode")) {
    siblings = parent.children;
    previous = siblings[index2 - 1];
    if (previous && previous.type === "WordNode") {
      position2 = index2 - 1;
      tokens = [];
      queue = [];
      while (siblings[++position2]) {
        sibling = siblings[position2];
        if (sibling.type === "WordNode") {
          tokens = tokens.concat(queue, sibling.children);
          queue = [];
        } else if ((sibling.type === "SymbolNode" || sibling.type === "PunctuationNode") && wordSymbolInner.test(nlcstToString_1(sibling))) {
          queue.push(sibling);
        } else {
          break;
        }
      }
      if (tokens.length > 0) {
        if (queue.length > 0) {
          position2 -= queue.length;
        }
        siblings.splice(index2, position2 - index2);
        previous.children = previous.children.concat(tokens);
        last = tokens[tokens.length - 1];
        if (previous.position && last.position) {
          previous.position.end = last.position.end;
        }
        return index2;
      }
    }
  }
});
var slash = "/";
var mergeInnerWordSlash = modifyChildren(function(child, index2, parent) {
  var siblings = parent.children;
  var previous;
  var next;
  var previousValue;
  var nextValue;
  var queue;
  var tail;
  var count;
  previous = siblings[index2 - 1];
  next = siblings[index2 + 1];
  if (previous && previous.type === "WordNode" && (child.type === "SymbolNode" || child.type === "PunctuationNode") && nlcstToString_1(child) === slash) {
    previousValue = nlcstToString_1(previous);
    tail = child;
    queue = [child];
    count = 1;
    if (next && next.type === "WordNode") {
      nextValue = nlcstToString_1(next);
      tail = next;
      queue = queue.concat(next.children);
      count++;
    }
    if (previousValue.length < 3 && (!nextValue || nextValue.length < 3)) {
      previous.children = previous.children.concat(queue);
      siblings.splice(index2, count);
      if (previous.position && tail.position) {
        previous.position.end = tail.position.end;
      }
      return index2;
    }
  }
});
var mergeInitialisms = modifyChildren(function(child, index2, parent) {
  var siblings;
  var previous;
  var children;
  var position2;
  var otherChild;
  var isAllDigits;
  var value;
  if (index2 > 0 && nlcstToString_1(child) === ".") {
    siblings = parent.children;
    previous = siblings[index2 - 1];
    children = previous.children;
    if (previous.type === "WordNode" && children && children.length !== 1 && children.length % 2 !== 0) {
      position2 = children.length;
      isAllDigits = true;
      while (children[--position2]) {
        otherChild = children[position2];
        value = nlcstToString_1(otherChild);
        if (position2 % 2 === 0) {
          if (value.length > 1) {
            return;
          }
          if (!numerical.test(value)) {
            isAllDigits = false;
          }
        } else if (value !== ".") {
          if (position2 < children.length - 2) {
            break;
          } else {
            return;
          }
        }
      }
      if (!isAllDigits) {
        siblings.splice(index2, 1);
        children.push(child);
        if (previous.position && child.position) {
          previous.position.end = child.position.end;
        }
        return index2;
      }
    }
  }
});
var mergeWords = modifyChildren(function(child, index2, parent) {
  var siblings = parent.children;
  var next;
  if (child.type === "WordNode") {
    next = siblings[index2 + 1];
    if (next && next.type === "WordNode") {
      siblings.splice(index2 + 1, 1);
      child.children = child.children.concat(next.children);
      if (next.position && child.position) {
        child.position.end = next.position.end;
      }
      return index2;
    }
  }
});
var unistUtilVisitChildren = visitChildren;
function visitChildren(callback) {
  return visitor;
  function visitor(parent) {
    var index2 = -1;
    var children = parent && parent.children;
    if (!children) {
      throw new Error("Missing children in `parent` for `visitor`");
    }
    while (++index2 in children) {
      callback(children[index2], index2, parent);
    }
  }
}
var visitChildren$1 = unistUtilVisitChildren;
var patchPosition = visitChildren$1(function(child, index2, node) {
  var siblings = node.children;
  if (!child.position) {
    return;
  }
  if (index2 < 1 && (!node.position || !node.position.start)) {
    patch(node);
    node.position.start = child.position.start;
  }
  if (index2 === siblings.length - 1 && (!node.position || !node.position.end)) {
    patch(node);
    node.position.end = child.position.end;
  }
});
function patch(node) {
  if (!node.position) {
    node.position = {};
  }
}
var mergeNonWordSentences = modifyChildren(function(child, index2, parent) {
  var children = child.children;
  var position2 = -1;
  var previous;
  var next;
  while (children[++position2]) {
    if (children[position2].type === "WordNode") {
      return;
    }
  }
  previous = parent.children[index2 - 1];
  if (previous) {
    previous.children = previous.children.concat(children);
    parent.children.splice(index2, 1);
    if (previous.position && child.position) {
      previous.position.end = child.position.end;
    }
    return index2;
  }
  next = parent.children[index2 + 1];
  if (next) {
    next.children = children.concat(next.children);
    if (next.position && child.position) {
      next.position.start = child.position.start;
    }
    parent.children.splice(index2, 1);
  }
});
var mergeAffixSymbol = modifyChildren(function(child, index2, parent) {
  var children = child.children;
  var first;
  var second;
  var previous;
  if (children && children.length > 0 && index2 > 0) {
    first = children[0];
    second = children[1];
    previous = parent.children[index2 - 1];
    if ((first.type === "SymbolNode" || first.type === "PunctuationNode") && affixSymbol.test(nlcstToString_1(first))) {
      previous.children.push(children.shift());
      if (first.position && previous.position) {
        previous.position.end = first.position.end;
      }
      if (second && second.position && child.position) {
        child.position.start = second.position.start;
      }
      return index2 - 1;
    }
  }
});
var mergeInitialLowerCaseLetterSentences = modifyChildren(function(child, index2, parent) {
  var children = child.children;
  var position2;
  var node;
  var siblings;
  var previous;
  if (children && children.length > 0 && index2 > 0) {
    position2 = -1;
    while (children[++position2]) {
      node = children[position2];
      if (node.type === "WordNode") {
        if (!lowerInitial.test(nlcstToString_1(node))) {
          return;
        }
        siblings = parent.children;
        previous = siblings[index2 - 1];
        previous.children = previous.children.concat(children);
        siblings.splice(index2, 1);
        if (previous.position && child.position) {
          previous.position.end = child.position.end;
        }
        return index2;
      }
      if (node.type === "SymbolNode" || node.type === "PunctuationNode") {
        return;
      }
    }
  }
});
var mergeInitialDigitSentences = modifyChildren(function(child, index2, parent) {
  var children = child.children;
  var siblings = parent.children;
  var previous = siblings[index2 - 1];
  var head = children[0];
  if (previous && head && head.type === "WordNode" && digitStart.test(nlcstToString_1(head))) {
    previous.children = previous.children.concat(children);
    siblings.splice(index2, 1);
    if (previous.position && child.position) {
      previous.position.end = child.position.end;
    }
    return index2;
  }
});
var abbreviationPrefix = new RegExp("^([0-9]{1,3}|[a-z]|al|ca|cap|cca|cent|cf|cit|con|cp|cwt|ead|etc|ff|fl|ibid|id|nem|op|pro|seq|sic|stat|tem|viz)$");
var mergePrefixExceptions = modifyChildren(function(child, index2, parent) {
  var children = child.children;
  var period;
  var node;
  var next;
  if (children && children.length > 1) {
    period = children[children.length - 1];
    if (period && nlcstToString_1(period) === ".") {
      node = children[children.length - 2];
      if (node && node.type === "WordNode" && abbreviationPrefix.test(nlcstToString_1(node).toLowerCase())) {
        node.children.push(period);
        children.pop();
        if (period.position && node.position) {
          node.position.end = period.position.end;
        }
        next = parent.children[index2 + 1];
        if (next) {
          child.children = children.concat(next.children);
          parent.children.splice(index2 + 1, 1);
          if (next.position && child.position) {
            child.position.end = next.position.end;
          }
          return index2 - 1;
        }
      }
    }
  }
});
var mergeAffixExceptions = modifyChildren(function(child, index2, parent) {
  var children = child.children;
  var node;
  var position2;
  var value;
  var previousChild;
  if (!children || children.length === 0 || index2 < 1) {
    return;
  }
  position2 = -1;
  while (children[++position2]) {
    node = children[position2];
    if (node.type === "WordNode") {
      return;
    }
    if (node.type === "SymbolNode" || node.type === "PunctuationNode") {
      value = nlcstToString_1(node);
      if (value !== "," && value !== ";") {
        return;
      }
      previousChild = parent.children[index2 - 1];
      previousChild.children = previousChild.children.concat(children);
      if (previousChild.position && child.position) {
        previousChild.position.end = child.position.end;
      }
      parent.children.splice(index2, 1);
      return index2;
    }
  }
});
var mergeRemainingFullStops = visitChildren$1(function(child) {
  var children = child.children;
  var position2 = children.length;
  var hasFoundDelimiter = false;
  var grandchild;
  var previous;
  var next;
  var nextNext;
  while (children[--position2]) {
    grandchild = children[position2];
    if (grandchild.type !== "SymbolNode" && grandchild.type !== "PunctuationNode") {
      if (grandchild.type === "WordNode") {
        hasFoundDelimiter = true;
      }
      continue;
    }
    if (!terminalMarker.test(nlcstToString_1(grandchild))) {
      continue;
    }
    if (!hasFoundDelimiter) {
      hasFoundDelimiter = true;
      continue;
    }
    if (nlcstToString_1(grandchild) !== ".") {
      continue;
    }
    previous = children[position2 - 1];
    next = children[position2 + 1];
    if (previous && previous.type === "WordNode") {
      nextNext = children[position2 + 2];
      if (next && nextNext && next.type === "WhiteSpaceNode" && nlcstToString_1(nextNext) === ".") {
        continue;
      }
      children.splice(position2, 1);
      previous.children.push(grandchild);
      if (grandchild.position && previous.position) {
        previous.position.end = grandchild.position.end;
      }
      position2--;
    } else if (next && next.type === "WordNode") {
      children.splice(position2, 1);
      next.children.unshift(grandchild);
      if (grandchild.position && next.position) {
        next.position.start = grandchild.position.start;
      }
    }
  }
});
var makeInitialWhiteSpaceSiblings = visitChildren$1(function(child, index2, parent) {
  var children = child.children;
  var next;
  if (children && children.length > 0 && children[0].type === "WhiteSpaceNode") {
    parent.children.splice(index2, 0, children.shift());
    next = children[0];
    if (next && next.position && child.position) {
      child.position.start = next.position.start;
    }
  }
});
var makeFinalWhiteSpaceSiblings = modifyChildren(function(child, index2, parent) {
  var children = child.children;
  var previous;
  if (children && children.length > 0 && children[children.length - 1].type === "WhiteSpaceNode") {
    parent.children.splice(index2 + 1, 0, child.children.pop());
    previous = children[children.length - 1];
    if (previous && previous.position && child.position) {
      child.position.end = previous.position.end;
    }
    return index2;
  }
});
var breakImplicitSentences = modifyChildren(function(child, index2, parent) {
  var children;
  var position2;
  var tail;
  var head;
  var end;
  var insertion;
  var node;
  if (child.type !== "SentenceNode") {
    return;
  }
  children = child.children;
  position2 = 0;
  while (++position2 < children.length - 1) {
    node = children[position2];
    if (node.type !== "WhiteSpaceNode" || !newLineMulti.test(nlcstToString_1(node))) {
      continue;
    }
    child.children = children.slice(0, position2);
    insertion = {
      type: "SentenceNode",
      children: children.slice(position2 + 1)
    };
    tail = children[position2 - 1];
    head = children[position2 + 1];
    parent.children.splice(index2 + 1, 0, node, insertion);
    if (child.position && tail.position && head.position) {
      end = child.position.end;
      child.position.end = tail.position.end;
      insertion.position = { start: head.position.start, end };
    }
    return index2 + 1;
  }
});
var removeEmptyNodes = modifyChildren(function(child, index2, parent) {
  if ("children" in child && child.children.length === 0) {
    parent.children.splice(index2, 1);
    return index2;
  }
});
function tokenizerFactory(childType, expression) {
  return tokenizer;
  function tokenizer(node) {
    var children = [];
    var tokens = node.children;
    var type = node.type;
    var index2 = -1;
    var lastIndex = tokens.length - 1;
    var start = 0;
    var first;
    var last;
    var parent;
    while (++index2 < tokens.length) {
      if (index2 === lastIndex || tokens[index2].type === childType && expression.test(nlcstToString_1(tokens[index2]))) {
        first = tokens[start];
        last = tokens[index2];
        parent = { type, children: tokens.slice(start, index2 + 1) };
        if (first.position && last.position) {
          parent.position = {
            start: first.position.start,
            end: last.position.end
          };
        }
        children.push(parent);
        start = index2 + 1;
      }
    }
    return children;
  }
}
function parserFactory(options) {
  var type = options.type;
  var tokenizerProperty = options.tokenizer;
  var delimiter = options.delimiter;
  var tokenize = delimiter && tokenizerFactory(options.delimiterType, delimiter);
  return parser;
  function parser(value) {
    var children = this[tokenizerProperty](value);
    return { type, children: tokenize ? tokenize(children) : children };
  }
}
class ParseLatin {
  constructor(doc, file) {
    var value = file || doc;
    this.doc = value ? String(value) : null;
  }
  run(key, nodes) {
    var wareKey = key + "Plugins";
    var plugins = this[wareKey];
    var index2 = -1;
    if (plugins) {
      while (plugins[++index2]) {
        plugins[index2](nodes);
      }
    }
    return nodes;
  }
  parse(value) {
    return this.tokenizeRoot(value || this.doc);
  }
  tokenize(value) {
    var parser = this;
    var tokens = [];
    var index2 = 0;
    var offset = 0;
    var line = 1;
    var column = 1;
    var character;
    var queue;
    var previous;
    var left;
    var right;
    var eater;
    if (value === null || value === void 0) {
      value = "";
    } else if (value instanceof String) {
      value = value.toString();
    }
    if (typeof value !== "string") {
      if ("length" in value && (!value[0] || value[0].type)) {
        return value;
      }
      throw new Error("Illegal invocation: '" + value + "' is not a valid argument for 'ParseLatin'");
    }
    if (!value) {
      return tokens;
    }
    eater = this.position ? eat : noPositionEat;
    previous = "";
    queue = "";
    while (index2 < value.length) {
      character = value.charAt(index2);
      if (whiteSpace.test(character)) {
        right = "WhiteSpace";
      } else if (punctuation.test(character)) {
        right = "Punctuation";
      } else if (word.test(character)) {
        right = "Word";
      } else {
        right = "Symbol";
      }
      tick();
      previous = character;
      character = "";
      left = right;
      right = null;
      index2++;
    }
    tick();
    return tokens;
    function tick() {
      if (left === right && (left === "Word" || left === "WhiteSpace" || character === previous || surrogates.test(character))) {
        queue += character;
      } else {
        if (queue) {
          parser["tokenize" + left](queue, eater);
        }
        queue = character;
      }
    }
    function eat(subvalue) {
      var pos = position2();
      update(subvalue);
      return apply;
      function apply(...input) {
        return pos(add(...input));
      }
    }
    function noPositionEat() {
      return add;
    }
    function add(node, parent) {
      if (parent) {
        parent.children.push(node);
      } else {
        tokens.push(node);
      }
      return node;
    }
    function position2() {
      var before = now();
      function patch2(node) {
        node.position = new Position(before);
        return node;
      }
      return patch2;
    }
    function update(subvalue) {
      var character2 = -1;
      var lastIndex = -1;
      offset += subvalue.length;
      while (++character2 < subvalue.length) {
        if (subvalue.charAt(character2) === "\n") {
          lastIndex = character2;
          line++;
        }
      }
      if (lastIndex < 0) {
        column += subvalue.length;
      } else {
        column = subvalue.length - lastIndex;
      }
    }
    function Position(start) {
      this.start = start;
      this.end = now();
    }
    function now() {
      return { line, column, offset };
    }
  }
}
ParseLatin.prototype.position = true;
ParseLatin.prototype.tokenizeSymbol = createTextFactory("Symbol");
ParseLatin.prototype.tokenizeWhiteSpace = createTextFactory("WhiteSpace");
ParseLatin.prototype.tokenizePunctuation = createTextFactory("Punctuation");
ParseLatin.prototype.tokenizeSource = createTextFactory("Source");
ParseLatin.prototype.tokenizeText = createTextFactory("Text");
ParseLatin.prototype.use = useFactory(function(context, key, plugins) {
  context[key] = context[key].concat(plugins);
});
ParseLatin.prototype.useFirst = useFactory(function(context, key, plugins) {
  context[key] = plugins.concat(context[key]);
});
pluggable(ParseLatin, "tokenizeWord", function(value, eat) {
  var add = (eat || noopEat)("");
  var parent = { type: "WordNode", children: [] };
  this.tokenizeText(value, eat, parent);
  return add(parent);
});
pluggable(ParseLatin, "tokenizeSentence", parserFactory({ type: "SentenceNode", tokenizer: "tokenize" }));
pluggable(ParseLatin, "tokenizeParagraph", parserFactory({
  type: "ParagraphNode",
  delimiter: terminalMarker,
  delimiterType: "PunctuationNode",
  tokenizer: "tokenizeSentence"
}));
pluggable(ParseLatin, "tokenizeRoot", parserFactory({
  type: "RootNode",
  delimiter: newLine,
  delimiterType: "WhiteSpaceNode",
  tokenizer: "tokenizeParagraph"
}));
ParseLatin.prototype.use("tokenizeSentence", [
  mergeInitialWordSymbol,
  mergeFinalWordSymbol,
  mergeInnerWordSymbol,
  mergeInnerWordSlash,
  mergeInitialisms,
  mergeWords,
  patchPosition
]);
ParseLatin.prototype.use("tokenizeParagraph", [
  mergeNonWordSentences,
  mergeAffixSymbol,
  mergeInitialLowerCaseLetterSentences,
  mergeInitialDigitSentences,
  mergePrefixExceptions,
  mergeAffixExceptions,
  mergeRemainingFullStops,
  makeInitialWhiteSpaceSiblings,
  makeFinalWhiteSpaceSiblings,
  breakImplicitSentences,
  removeEmptyNodes,
  patchPosition
]);
ParseLatin.prototype.use("tokenizeRoot", [
  makeInitialWhiteSpaceSiblings,
  makeFinalWhiteSpaceSiblings,
  removeEmptyNodes,
  patchPosition
]);
function createTextFactory(type) {
  type += "Node";
  return createText;
  function createText(value, eat, parent) {
    if (value === null || value === void 0) {
      value = "";
    }
    return (eat || noopEat)(value)({ type, value: String(value) }, parent);
  }
}
function pluggable(Constructor, key, callback) {
  Constructor.prototype[key] = function(...input) {
    return this.run(key, callback.apply(this, input));
  };
}
function useFactory(callback) {
  return use;
  function use(key, plugins) {
    var wareKey;
    if (!(key in this)) {
      throw new Error("Illegal Invocation: Unsupported `key` for `use(key, plugins)`. Make sure `key` is a supported function");
    }
    if (!plugins) {
      return;
    }
    wareKey = key + "Plugins";
    plugins = typeof plugins === "function" ? [plugins] : plugins.concat();
    if (!this[wareKey]) {
      this[wareKey] = [];
    }
    callback(this, wareKey, plugins);
  }
}
function noopAdd(node, parent) {
  if (parent) {
    parent.children.push(node);
  }
  return node;
}
function noopEat() {
  return noopAdd;
}
function retextLatin() {
  Object.assign(this, { Parser: unherit(ParseLatin) });
}
function toString(node, separator = "") {
  let index2 = -1;
  if (!node || !Array.isArray(node) && !node.type) {
    throw new Error("Expected node, not `" + node + "`");
  }
  if (typeof node.value === "string")
    return node.value;
  const children = (Array.isArray(node) ? node : node.children) || [];
  if (children.length === 1 && "value" in children[0]) {
    return children[0].value;
  }
  const values = [];
  while (++index2 < children.length) {
    values[index2] = toString(children[index2], separator);
  }
  return values.join(separator);
}
function retextStringify() {
  Object.assign(this, { Compiler });
}
function Compiler(tree) {
  return toString(tree);
}
const retext = unified().use(retextLatin).use(retextStringify).freeze();
const convert = function(test) {
  if (test === void 0 || test === null) {
    return ok;
  }
  if (typeof test === "string") {
    return typeFactory(test);
  }
  if (typeof test === "object") {
    return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
  }
  if (typeof test === "function") {
    return castFactory(test);
  }
  throw new Error("Expected function, string, or object as test");
};
function anyFactory(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].call(this, ...parameters))
        return true;
    }
    return false;
  }
}
function propsFactory(check) {
  return castFactory(all);
  function all(node) {
    let key;
    for (key in check) {
      if (node[key] !== check[key])
        return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(...parameters) {
    return Boolean(check.call(this, ...parameters));
  }
}
function ok() {
  return true;
}
function color(d) {
  return d;
}
const CONTINUE = true;
const SKIP = "skip";
const EXIT = false;
const visitParents = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  const is = convert(test);
  const step = reverse ? -1 : 1;
  factory(tree, null, [])();
  function factory(node, index2, parents) {
    const value = typeof node === "object" && node !== null ? node : {};
    let name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = [];
      let subresult;
      let offset;
      let grandparents;
      if (!test || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP) {
        offset = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT) {
            return subresult;
          }
          offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return [value];
}
const visit = function(tree, test, visitor, reverse) {
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};
const TRANSLATIONAL_MARK = "/";
let stopConvert = false;
function handleBoundaryNode(node, index2, parent) {
  if (node.type !== "PunctuationNode" && node.type !== "SymbolNode")
    return;
  if (node.value !== TRANSLATIONAL_MARK)
    return;
  if (index2 > 0) {
    const preNode = parent.children[index2 - 1];
    if ((preNode == null ? void 0 : preNode.value) && preNode.value === "<") {
      return;
    }
  }
  stopConvert = !stopConvert;
  node.value = "";
}
function handleChildrenNode(node, converter, index2, parent) {
  if (node.type === "WhiteSpaceNode")
    return node;
  if (node.type === "PunctuationNode")
    handleBoundaryNode(node, index2, parent);
  if (!stopConvert && (node == null ? void 0 : node.value)) {
    node.value = converter(node.value);
  }
  if (!(node == null ? void 0 : node.children))
    return node;
  node.children.forEach((childNode, i) => {
    handleChildrenNode(childNode, converter, i, node);
  });
  return node;
}
function TextConverter(converter) {
  stopConvert = false;
  return (tree) => {
    visit(tree, "SentenceNode", (node, index2, parent) => {
      handleChildrenNode(node, converter, index2, parent);
    });
  };
}
function escapeSpecialCharacters(specialChars) {
  const regex = /[\^\$\.\*\+\?\|\\\/\[\]\{\}\=\!\:\-\,\(\)]/gi;
  const match = specialChars.match(regex);
  if (match) {
    for (let item of match) {
      specialChars = specialChars.replace(new RegExp(`\\${item}`, "gi"), `\\${item}`);
    }
  }
  return specialChars;
}
function replaceAll(str, target, replacement) {
  target = escapeSpecialCharacters(target);
  return str.replace(new RegExp(target, "ig"), replacement);
}
class Base {
  constructor(table2, hemze = "x") {
    __publicField$1(this, "type");
    this.table = table2;
    this.hemze = hemze;
  }
  orderedTable() {
    return this.table.sort((a, b) => {
      var _a, _b;
      return ((_a = b[this.type]) == null ? void 0 : _a.length) - ((_b = a[this.type]) == null ? void 0 : _b.length);
    });
  }
  getMap() {
    const kvmap = {};
    this.orderedTable().forEach((item) => kvmap[item[this.type]] = item.ug);
    return kvmap;
  }
  fromUg(uword) {
    Object.entries(this.getMap()).forEach(([key, value]) => uword = replaceAll(uword, value, key));
    return uword;
  }
  toUg(word2) {
    Object.entries(this.getMap()).forEach(([key, value]) => word2 = replaceAll(word2, key, value));
    const volwes2 = this.table.filter((item) => item.volwes).map((item) => item.ug);
    return volwes2.includes(word2[0]) ? this.hemze + word2 : word2;
  }
  toUgText(text) {
    return retext().use(TextConverter, (word2) => this.toUg(word2)).processSync(text).value.toString();
  }
}
class Khan extends Base {
  constructor() {
    super(...arguments);
    __publicField$1(this, "type", "khan");
  }
  fromUg(uword) {
    uword = replaceAll(uword, "\u0646\u06AF", "\u0646h\u06AF");
    let word2 = super.fromUg(uword);
    word2 = replaceAll(word2, "nh", "n");
    const hemze = this.table.filter((item) => item.ug === this.hemze)[0].khan;
    if (word2 && word2[0] === hemze) {
      word2 = word2.slice(1, word2.length);
    }
    return word2;
  }
}
class Uly extends Base {
  constructor() {
    super(...arguments);
    __publicField$1(this, "type", "uly");
  }
}
const khan = new Khan(table$1, HEMZE);
function ug2khan(word2) {
  return khan.fromUg(word2);
}
function khan2ug(word2) {
  return khan.toUg(word2);
}
function khanText2ug(text) {
  return khan.toUgText(text);
}
const uly = new Uly(table$1, HEMZE);
function ug2uly(word2) {
  return uly.fromUg(word2);
}
function uly2ug(word2) {
  return uly.toUg(word2);
}
function ulyText2ug(text) {
  return uly.toUgText(text);
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const BOUND_FLAG = String.fromCharCode(0);
const table = [
  {
    uchar: "\u0626",
    volwes: false,
    uly: BOUND_FLAG,
    khan: "?"
  },
  {
    uchar: "\u0627",
    volwes: true,
    uly: "a",
    khan: "a"
  },
  {
    uchar: "\u06D5",
    volwes: true,
    uly: "e",
    khan: "e"
  },
  {
    uchar: "\u06D0",
    volwes: true,
    uly: "\xEB",
    khan: "eh"
  },
  {
    uchar: "\u0649",
    volwes: true,
    uly: "i",
    khan: "i"
  },
  {
    uchar: "\u0648",
    volwes: true,
    uly: "o",
    khan: "o"
  },
  {
    uchar: "\u06C7",
    volwes: true,
    uly: "u",
    khan: "u"
  },
  {
    uchar: "\u06C6",
    volwes: true,
    uly: "\xF6",
    khan: "c"
  },
  {
    uchar: "\u06C8",
    volwes: true,
    uly: "\xFC",
    khan: "v"
  },
  {
    uchar: "\u0628",
    volwes: false,
    uly: "b",
    khan: "b"
  },
  {
    uchar: "\u067E",
    volwes: false,
    uly: "p",
    khan: "p"
  },
  {
    uchar: "\u062A",
    volwes: false,
    uly: "t",
    khan: "t"
  },
  {
    uchar: "\u062C",
    volwes: false,
    uly: "j",
    khan: "j"
  },
  {
    uchar: "\u0686",
    volwes: false,
    uly: "ch",
    khan: "ch"
  },
  {
    uchar: "\u062E",
    volwes: false,
    uly: "x",
    khan: "kh"
  },
  {
    uchar: "\u062F",
    volwes: false,
    uly: "d",
    khan: "d"
  },
  {
    uchar: "\u0631",
    volwes: false,
    uly: "r",
    khan: "r"
  },
  {
    uchar: "\u0632",
    volwes: false,
    uly: "z",
    khan: "z"
  },
  {
    uchar: "\u0698",
    volwes: false,
    uly: "zh",
    khan: "zh"
  },
  {
    uchar: "\u0633",
    volwes: false,
    uly: "s",
    khan: "s"
  },
  {
    uchar: "\u0634",
    volwes: false,
    uly: "sh",
    khan: "sh"
  },
  {
    uchar: "\u063A",
    volwes: false,
    uly: "gh",
    khan: "gh"
  },
  {
    uchar: "\u0642",
    volwes: false,
    uly: "q",
    khan: "q"
  },
  {
    uchar: "\u0641",
    volwes: false,
    uly: "f",
    khan: "f"
  },
  {
    uchar: "\u0643",
    volwes: false,
    uly: "k",
    khan: "k"
  },
  {
    uchar: "\u06AF",
    volwes: false,
    uly: "g",
    khan: "g"
  },
  {
    uchar: "\u06AD",
    volwes: false,
    uly: "ng",
    khan: "ng"
  },
  {
    uchar: "\u0644",
    volwes: false,
    uly: "l",
    khan: "l"
  },
  {
    uchar: "\u0645",
    volwes: false,
    uly: "m",
    khan: "m"
  },
  {
    uchar: "\u0646",
    volwes: false,
    uly: "n",
    khan: "n"
  },
  {
    uchar: "\u06BE",
    volwes: false,
    uly: "h",
    khan: "x"
  },
  {
    uchar: "\u06CB",
    volwes: false,
    uly: "w",
    khan: "w"
  },
  {
    uchar: "\u064A",
    volwes: false,
    uly: "y",
    khan: "y"
  }
];
class Syllable {
  constructor() {
    __publicField(this, "_table");
    this._table = table;
  }
  getTable() {
    return this._table;
  }
  tokenize(word2) {
    const volwes2 = this._table.filter((item) => item.volwes).map((item) => item.uchar);
    return word2.split("").map((char) => volwes2.indexOf(char) !== -1 ? 1 : 0).join("");
  }
  tokenToGroup(token) {
    return token.replaceAll("1", "1#").split("#");
  }
  groupToPositional(group) {
    return group.reverse().map((item, index2) => {
      if (index2 === 0 || index2 === group.length - 1)
        return item;
      switch (item.replace("1", "").length) {
        case 1:
          return "#" + item;
        case 2:
          return [item[0], "#", item.slice(1, 3)].join("");
        case 3:
          return [item[0], "#", item.slice(1, 3), item.slice(-1)].join("");
        case 4:
          return [item[0], "#", item.slice(1, 3), "#", item.slice(-1)].join("");
        case 5:
          return [item[0], "#", item.slice(1, 4), "#", item.slice(-1)].join("");
        default:
          return item;
      }
    }).reverse();
  }
  positinalGroupToWord(positinalGroup, word2) {
    const syllableList = [];
    let counter = 0;
    positinalGroup.join("").split("").forEach((item, index2) => {
      if (item === "#") {
        counter += 1;
        syllableList.push("#");
        return;
      }
      syllableList.push(word2[index2 - counter]);
    });
    return syllableList.join("").split("#");
  }
  syllable(word2) {
    const token = this.tokenize(word2);
    let group = this.tokenToGroup(token);
    const positionalGroup = this.groupToPositional(group);
    const sylableWord = this.positinalGroupToWord(positionalGroup, word2);
    return sylableWord;
  }
}
function syllableUg(word2) {
  return new Syllable().syllable(word2);
}
export { Base as BaseConverter, HEMZE, Khan as KhanConverter, READABILITY_MARK, SEPARATE_MARK, SYLLABIFY_MARK, TRANSLATIONAL_MARK$1 as TRANSLATIONAL_MARK, Uly as UlyConverter, isVolwes, khan2ug, khanText2ug, syllableUg, table$1 as table, ug2khan, ug2uly, Syllable as ugSyllable, uly2ug, ulyText2ug, volwes };
