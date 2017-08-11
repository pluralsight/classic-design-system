// adapted from: https://github.com/jakearchibald/svgomg/blob/9d09a4d255b0daa2cd39fdde59553d5154e770f1/src/js/svgo-worker/index.js
const svg2js = require('svgo/lib/svgo/svg2js')
const JsApi = require('svgo/lib/svgo/jsAPI')
const js2svg = require('svgo/lib/svgo/js2svg')
const plugins = require('svgo/lib/svgo/plugins')

// the order is from https://github.com/svg/svgo/blob/master/.svgo.yml
var pluginsData = {
  removeDoctype: require('svgo/plugins/removeDoctype'),
  removeXMLProcInst: require('svgo/plugins/removeXMLProcInst'),
  removeComments: require('svgo/plugins/removeComments'),
  removeMetadata: require('svgo/plugins/removeMetadata'),
  removeEditorsNSData: require('svgo/plugins/removeEditorsNSData'),
  cleanupAttrs: require('svgo/plugins/cleanupAttrs'),
  convertStyleToAttrs: require('svgo/plugins/convertStyleToAttrs'),
  cleanupIDs: require('svgo/plugins/cleanupIDs'),
  removeRasterImages: require('svgo/plugins/removeRasterImages'),
  removeUselessDefs: require('svgo/plugins/removeUselessDefs'),
  cleanupNumericValues: require('svgo/plugins/cleanupNumericValues'),
  cleanupListOfValues: require('svgo/plugins/cleanupListOfValues'),
  convertColors: require('svgo/plugins/convertColors'),
  removeUnknownsAndDefaults: require('svgo/plugins/removeUnknownsAndDefaults'),
  removeNonInheritableGroupAttrs: require('svgo/plugins/removeNonInheritableGroupAttrs'),
  removeUselessStrokeAndFill: require('svgo/plugins/removeUselessStrokeAndFill'),
  removeViewBox: require('svgo/plugins/removeViewBox'),
  cleanupEnableBackground: require('svgo/plugins/cleanupEnableBackground'),
  removeHiddenElems: require('svgo/plugins/removeHiddenElems'),
  removeEmptyText: require('svgo/plugins/removeEmptyText'),
  convertShapeToPath: require('svgo/plugins/convertShapeToPath'),
  moveElemsAttrsToGroup: require('svgo/plugins/moveElemsAttrsToGroup'),
  moveGroupAttrsToElems: require('svgo/plugins/moveGroupAttrsToElems'),
  collapseGroups: require('svgo/plugins/collapseGroups'),
  convertPathData: require('svgo/plugins/convertPathData'),
  convertTransform: require('svgo/plugins/convertTransform'),
  removeEmptyAttrs: require('svgo/plugins/removeEmptyAttrs'),
  removeEmptyContainers: require('svgo/plugins/removeEmptyContainers'),
  mergePaths: require('svgo/plugins/mergePaths'),
  removeUnusedNS: require('svgo/plugins/removeUnusedNS'),
  transformsWithOnePath: require('svgo/plugins/transformsWithOnePath'),
  sortAttrs: require('svgo/plugins/sortAttrs'),
  removeTitle: require('svgo/plugins/removeTitle'),
  removeDesc: require('svgo/plugins/removeDesc'),
  removeDimensions: require('svgo/plugins/removeDimensions')
}
console.log('pluginDatat', pluginsData)

function optimizePluginsArray(plugins) {
  var prev

  plugins = plugins.map(function(item) {
    return [item]
  })

  plugins = plugins.filter(function(item) {
    if (prev && item[0].type === prev[0].type) {
      prev.push(item[0])
      return false
    }

    prev = item
    return true
  })

  return plugins
}

// TODO: rm
var optimisedPluginsData = optimizePluginsArray(
  Object.keys(pluginsData).map(p => pluginsData[p])
)

function getDimensions(parsedSvg) {
  var svgEl = parsedSvg.content.filter(function(el) {
    return el.isElem('svg')
  })[0]

  if (!svgEl) {
    return {}
  }

  if (svgEl.hasAttr('width') && svgEl.hasAttr('height')) {
    return {
      width: parseFloat(svgEl.attr('width').value),
      height: parseFloat(svgEl.attr('height').value)
    }
  }

  if (svgEl.hasAttr('viewBox')) {
    let viewBox = svgEl.attr('viewBox').value.split(/(?:,\s*|\s+)/)

    return {
      width: parseFloat(viewBox[2]),
      height: parseFloat(viewBox[3])
    }
  }

  return {}
}

function* multipassCompress(settings) {
  var svg = parsedSvg.clone()
  var svgData
  var previousDataLength

  while (svgData === undefined || svgData.length != previousDataLength) {
    previousDataLength = svgData && svgData.length
    plugins(svg, optimisedPluginsData)
    svgData = js2svg(svg, {
      indent: '  ',
      pretty: settings.pretty
    }).data

    yield {
      data: svgData,
      dimensions: getDimensions(svg)
    }
  }
}

var parsedSvg
var multipassInstance

module.exports = data => {
  parsedSvg = null
  multipassInstance = null

  svg2js(data, function(p) {
    parsedSvg = p
  })

  if (parsedSvg.error) {
    throw Error(parsedSvg.error)
  }

  // TODO: rm?
  getDimensions(parsedSvg)

  const activePlugins = [
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    // 'convertStyleToAttrs',
    'cleanupIDs',
    // 'removeRasterImages',
    'removeUselessDefs',
    'cleanupNumericValues',
    'cleanupListOfValues',
    // 'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    // 'removeViewBox',
    // 'cleanupEnableBackground',
    // 'removeHiddenElems',
    // 'removeEmptyText',
    // 'convertShapeToPath',
    // 'moveElemsAttrsToGroup',
    // 'moveGroupAttrsToElems',
    'collapseGroups',
    // 'convertPathData',
    // 'convertTransform',
    // 'removeEmptyAttrs',
    // 'removeEmptyContainers',
    // 'mergePaths',
    'removeUnusedNS',
    // 'transformsWithOnePath',
    // 'sortAttrs',
    'removeTitle',
    'removeDesc',
    'removeDimensions'
  ]

  const settings = {
    floatPrecision: 4,
    plugins: activePlugins.reduce((acc, pluginName) => {
      acc[pluginName] = true
      return acc
    }, {})
  }

  // activate/deactivate plugins
  Object.keys(settings.plugins).forEach(pluginName => {
    pluginsData[pluginName].active = settings.plugins[pluginName]
  })

  // float precision
  ;[
    'cleanupNumericValues',
    'cleanupListOfValues',
    'convertPathData',
    // Not including this by default, it seems to break SVGs really badly at lower numbers.
    // TODO: make "use global precision" off by default when it comes to transforms
    //'convertTransform',
    'transformsWithOnePath'
  ].forEach(pluginName => {
    pluginsData[pluginName].params.floatPrecision = Number(
      settings.floatPrecision
    )
  })
  multipassInstance = multipassCompress(settings)
  return multipassInstance.next().value
}
