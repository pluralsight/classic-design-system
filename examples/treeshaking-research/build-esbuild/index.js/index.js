// src/index.jsx
import React3 from "react";
import ReactDOM from "react-dom";

// node_modules/@pluralsight/ps-design-system-core/dist/esm/js/colors.mjs
var colorsBlue = {
  1: "#D9F1FF",
  2: "#B9E4FD",
  3: "#8ED1F6",
  4: "#58B9EB",
  5: "#2EA0D6",
  6: "#0084BD",
  7: "#0074AB",
  8: "#006395",
  9: "#005685",
  10: "#00446B"
};
var colorsGreen = {
  1: "#D9FAE5",
  2: "#ADF0C8",
  3: "#82E2AB",
  4: "#57D08E",
  5: "#2BB970",
  6: "#009E52",
  7: "#008F46",
  8: "#007C3A",
  9: "#00672E",
  10: "#005724"
};
var colorsYellow = {
  1: "#FFFBCC",
  2: "#FFF7A8",
  3: "#FFF380",
  4: "#FFEB57",
  5: "#FFDF29",
  6: "#FAD000",
  7: "#E2B500",
  8: "#CC9E00",
  9: "#B28300",
  10: "#946500"
};
var colorsRed = {
  1: "#FFD6D6",
  2: "#FFB3B3",
  3: "#FF8A8A",
  4: "#F86968",
  5: "#E94A3F",
  6: "#D21C09",
  7: "#C00F00",
  8: "#AB0600",
  9: "#920000",
  10: "#750000"
};
var colorsTextIcon = {
  highOnDark: "rgba(255, 255, 255, 0.95)",
  highOnLight: "rgba(0, 0, 0, 0.90)",
  lowOnDark: "rgba(255, 255, 255, 0.70)",
  lowOnLight: "rgba(0, 0, 0, 0.65)"
};
var colorsPrimaryAction = {
  background: colorsBlue[7],
  textDarkTheme: colorsBlue[5],
  textLightTheme: colorsBlue[7]
};
var colorsStatus = {
  error: colorsRed[6],
  info: colorsBlue[6],
  success: colorsGreen[6],
  warning: colorsYellow[6]
};

// node_modules/@pluralsight/ps-design-system-util/dist/esm/key-mirror.mjs
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function keyMirror() {
  var inputs = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    inputs[_i] = arguments[_i];
  }
  var mirrored = inputs.reduce(function(acc, key) {
    var _a2;
    return __assign(__assign({}, acc), (_a2 = {}, _a2[key] = key, _a2));
  }, {});
  return Object.freeze(mirrored);
}

// node_modules/@pluralsight/ps-design-system-icon/dist/esm/vars/index.js
var colors = keyMirror("blue", "green", "red", "textIconHighOnDark", "textIconHighOnLight", "textIconLowOnDark", "textIconLowOnLight", "yellow");
var sizes = keyMirror("xSmall", "small", "medium", "large");
var widths = {
  xSmall: "16px",
  small: "20px",
  medium: "24px",
  large: "48px"
};

// node_modules/@pluralsight/ps-design-system-icon/dist/esm/css/index.js
var _a;
var _b;
var _c;
var _d;
var _e;
var _f;
var _g;
var _h;
var _j;
var css_default = (_a = {}, _a[".psds-icon"] = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  "& > svg": {
    fill: "currentColor",
    flex: 1
  }
}, _a[".psds-icon--size-" + sizes.xSmall] = {
  height: widths.xSmall,
  width: widths.xSmall
}, _a[".psds-icon--size-" + sizes.small] = {
  height: widths.small,
  width: widths.small
}, _a[".psds-icon--size-" + sizes.medium] = {
  height: widths.medium,
  width: widths.medium
}, _a[".psds-icon--size-" + sizes.large] = {
  height: widths.large,
  width: widths.large
}, _a[".psds-icon--color-textIconHighOnDark"] = (_b = {}, _b["& > svg"] = {
  fill: colorsTextIcon.highOnDark
}, _b), _a[".psds-icon--color-textIconLowOnDark"] = (_c = {}, _c["& > svg"] = {
  fill: colorsTextIcon.lowOnDark
}, _c), _a[".psds-icon--color-textIconHighOnLight"] = (_d = {}, _d["& > svg"] = {
  fill: colorsTextIcon.highOnLight
}, _d), _a[".psds-icon--color-textIconLowOnLight"] = (_e = {}, _e["& > svg"] = {
  fill: colorsTextIcon.lowOnLight
}, _e), _a[".psds-icon--color-red"] = (_f = {}, _f["& > svg"] = {
  fill: colorsRed[6]
}, _f), _a[".psds-icon--color-blue"] = (_g = {}, _g["& > svg"] = {
  fill: colorsBlue[6]
}, _g), _a[".psds-icon--color-green"] = (_h = {}, _h["& > svg"] = {
  fill: colorsGreen[6]
}, _h), _a[".psds-icon--color-yellow"] = (_j = {}, _j["& > svg"] = {
  fill: colorsYellow[6]
}, _j), _a);

// node_modules/@pluralsight/ps-design-system-icon/dist/esm/react/index.js
import glamorDefault, * as glamorExports from "glamor";
import React from "react";
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var glamor = glamorDefault || glamorExports;
var style = {
  icon: function(props) {
    return glamor.css(css_default[".psds-icon"], css_default[".psds-icon--size-" + props.size], css_default[".psds-icon--color-" + props.color]);
  }
};
var Icon = React.forwardRef(function(props, ref) {
  var _a2 = props.size, size = _a2 === void 0 ? sizes.medium : _a2, color = props.color, rest = __rest(props, ["size", "color"]);
  return React.createElement("div", __assign2({}, style.icon({color, size}), rest, {ref}));
});
Icon.displayName = "Icon";
Icon.colors = colors;
Icon.sizes = sizes;
var react_default = Icon;

// node_modules/@pluralsight/ps-design-system-icon/dist/esm/react/icons/CodeIcon.dist.js
import React2, {forwardRef} from "react";
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var CodeIcon2 = forwardRef(function(props, ref) {
  var ariaLabel = props["aria-label"], rest = __rest2(props, ["aria-label"]);
  return React2.createElement(react_default, __assign3({}, rest, {ref}), React2.createElement("svg", __assign3({"aria-label": "code icon", viewBox: "0 0 24 24", role: "img"}, ariaLabel && {"aria-label": ariaLabel}), React2.createElement("path", {fillRule: "evenodd", d: "M14.266 4.311l.94.342a.5.5 0 01.299.641l-5.13 14.096a.5.5 0 01-.641.299l-.94-.343a.5.5 0 01-.299-.64l5.13-14.096a.5.5 0 01.641-.299zm1.791 11.044l.798.793a.5.5 0 00.706-.002l3.788-3.802a.5.5 0 000-.707L17.56 7.853a.5.5 0 00-.706 0l-.796.794a.5.5 0 000 .708l2.642 2.639-2.644 2.654a.5.5 0 00.001.707zm-8.706.793l.797-.793a.5.5 0 00.001-.707l-2.644-2.654 2.642-2.64a.5.5 0 000-.707l-.795-.794a.5.5 0 00-.707 0l-3.788 3.784a.5.5 0 00-.001.707l3.788 3.802a.5.5 0 00.707.002z"})));
});
CodeIcon2.displayName = "CodeIcon";
CodeIcon2.colors = react_default.colors;
CodeIcon2.sizes = react_default.sizes;

// src/index.jsx
var mountNode = document.getElementById("app");
ReactDOM.render(/* @__PURE__ */ React3.createElement(CodeIcon, null), mountNode);
export {
  CodeIcon2 as CodeIcon
};
