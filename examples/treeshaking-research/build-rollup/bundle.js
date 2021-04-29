import React, { forwardRef } from 'react';
import ReactDom from 'react-dom';
import * as glamorDefault from 'glamor';
import glamorDefault__default from 'glamor';

var colorsBlue = {
  1: '#D9F1FF',
  2: '#B9E4FD',
  3: '#8ED1F6',
  4: '#58B9EB',
  5: '#2EA0D6',
  6: '#0084BD',
  7: '#0074AB',
  8: '#006395',
  9: '#005685',
  10: '#00446B'
};
var colorsGreen = {
  1: '#D9FAE5',
  2: '#ADF0C8',
  3: '#82E2AB',
  4: '#57D08E',
  5: '#2BB970',
  6: '#009E52',
  7: '#008F46',
  8: '#007C3A',
  9: '#00672E',
  10: '#005724'
};
var colorsYellow = {
  1: '#FFFBCC',
  2: '#FFF7A8',
  3: '#FFF380',
  4: '#FFEB57',
  5: '#FFDF29',
  6: '#FAD000',
  7: '#E2B500',
  8: '#CC9E00',
  9: '#B28300',
  10: '#946500'
};
var colorsRed = {
  1: '#FFD6D6',
  2: '#FFB3B3',
  3: '#FF8A8A',
  4: '#F86968',
  5: '#E94A3F',
  6: '#D21C09',
  7: '#C00F00',
  8: '#AB0600',
  9: '#920000',
  10: '#750000'
};
var colorsTextIcon = {
  highOnDark: 'rgba(255, 255, 255, 0.95)',
  highOnLight: 'rgba(0, 0, 0, 0.90)',
  lowOnDark: 'rgba(255, 255, 255, 0.70)',
  lowOnLight: 'rgba(0, 0, 0, 0.65)'
};

var __assign$2 = undefined && undefined.__assign || function () {
  __assign$2 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign$2.apply(this, arguments);
};

function keyMirror() {
  var inputs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    inputs[_i] = arguments[_i];
  }

  var mirrored = inputs.reduce(function (acc, key) {
    var _a;

    return __assign$2(__assign$2({}, acc), (_a = {}, _a[key] = key, _a));
  }, {});
  return Object.freeze(mirrored);
}

var colors = keyMirror('blue', 'green', 'red', 'textIconHighOnDark', 'textIconHighOnLight', 'textIconLowOnDark', 'textIconLowOnLight', 'yellow');
var sizes = keyMirror('xSmall', 'small', 'medium', 'large');
var widths = {
  xSmall: '16px',
  small: '20px',
  medium: '24px',
  large: '48px'
};

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
var stylesheet = (_a = {}, _a[".psds-icon"] = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > svg': {
    fill: 'currentColor',
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
}, _a['.psds-icon--color-textIconHighOnDark'] = (_b = {}, _b["& > svg"] = {
  fill: colorsTextIcon.highOnDark
}, _b), _a['.psds-icon--color-textIconLowOnDark'] = (_c = {}, _c["& > svg"] = {
  fill: colorsTextIcon.lowOnDark
}, _c), _a['.psds-icon--color-textIconHighOnLight'] = (_d = {}, _d["& > svg"] = {
  fill: colorsTextIcon.highOnLight
}, _d), _a['.psds-icon--color-textIconLowOnLight'] = (_e = {}, _e["& > svg"] = {
  fill: colorsTextIcon.lowOnLight
}, _e), _a['.psds-icon--color-red'] = (_f = {}, _f["& > svg"] = {
  fill: colorsRed[6]
}, _f), _a['.psds-icon--color-blue'] = (_g = {}, _g["& > svg"] = {
  fill: colorsBlue[6]
}, _g), _a['.psds-icon--color-green'] = (_h = {}, _h["& > svg"] = {
  fill: colorsGreen[6]
}, _h), _a['.psds-icon--color-yellow'] = (_j = {}, _j["& > svg"] = {
  fill: colorsYellow[6]
}, _j), _a);

var __assign$1 = undefined && undefined.__assign || function () {
  __assign$1 = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign$1.apply(this, arguments);
};

var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var glamor = glamorDefault__default || glamorDefault;
var style = {
  icon: function (props) {
    return glamor.css(stylesheet['.psds-icon'], stylesheet[".psds-icon--size-" + props.size], stylesheet[".psds-icon--color-" + props.color]);
  }
};
var Icon = React.forwardRef(function (props, ref) {
  var _a = props.size,
      size = _a === void 0 ? sizes.medium : _a,
      color = props.color,
      rest = __rest$1(props, ["size", "color"]);

  return React.createElement("div", __assign$1({}, style.icon({
    color: color,
    size: size
  }), rest, {
    ref: ref
  }));
});
Icon.displayName = 'Icon';
Icon.colors = colors;
Icon.sizes = sizes;

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var CodeIcon$1 = forwardRef(function (props, ref) {
  var ariaLabel = props["aria-label"],
      rest = __rest(props, ['aria-label']);

  return React.createElement(Icon, __assign({}, rest, {
    ref: ref
  }), React.createElement("svg", __assign({
    "aria-label": "code icon",
    viewBox: "0 0 24 24",
    role: 'img'
  }, ariaLabel && {
    'aria-label': ariaLabel
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.266 4.311l.94.342a.5.5 0 01.299.641l-5.13 14.096a.5.5 0 01-.641.299l-.94-.343a.5.5 0 01-.299-.64l5.13-14.096a.5.5 0 01.641-.299zm1.791 11.044l.798.793a.5.5 0 00.706-.002l3.788-3.802a.5.5 0 000-.707L17.56 7.853a.5.5 0 00-.706 0l-.796.794a.5.5 0 000 .708l2.642 2.639-2.644 2.654a.5.5 0 00.001.707zm-8.706.793l.797-.793a.5.5 0 00.001-.707l-2.644-2.654 2.642-2.64a.5.5 0 000-.707l-.795-.794a.5.5 0 00-.707 0l-3.788 3.784a.5.5 0 00-.001.707l3.788 3.802a.5.5 0 00.707.002z"
  })));
});
CodeIcon$1.displayName = "CodeIcon";
CodeIcon$1.colors = Icon.colors;
CodeIcon$1.sizes = Icon.sizes;

var mountNode = document.getElementById("app");
ReactDom.render( /*#__PURE__*/React.createElement(CodeIcon, null), mountNode);

export { CodeIcon$1 as CodeIcon };
