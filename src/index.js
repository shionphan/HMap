const HMap = {}
HMap.version = require('../package.json').version
import {ol, proj4} from './constants'
import Map from './map/Map'
import Layer from './layer/Layer'
import Feature from './feature/feature'
import CoordsTransform from './plugins/CoordsTransform'
// import Ol3Echarts from './plugins/Ol3Echarts'
import LayerSwitcher from './plugins/LayerSwitcher'
// import CustomCircle from './plugins/CustomCircle'
import MeasureTool from './plugins/MeasureTool'
import LayerSpyglass from './interaction/LayerSpyglass'
import MisplacesGlass from './interaction/MisplacesGlass'
import GeomCoder from './plugins/GeomCoder'
// import Plot from './plot/index'
import * as utils from './utils/utils'

HMap.ol = ol
HMap.proj4 = proj4
HMap.Map = Map
HMap.Utils = utils
// HMap.Plot = Plot
HMap.Layer = Layer
HMap.Feature = Feature
HMap.CoordsTransform = CoordsTransform
// HMap.Ol3Echarts = Ol3Echarts
HMap.LayerSwitcher = LayerSwitcher
// HMap.CustomCircle = CustomCircle
HMap.MeasureTool = MeasureTool
HMap.LayerSpyglass = LayerSpyglass
HMap.MisplacesGlass = MisplacesGlass
HMap.GeomCoder = GeomCoder

/**
 * Inherit the prototype methods from one constructor into another.
 *
 * Usage:
 *
 *     function ParentClass(a, b) { }
 *     ParentClass.prototype.foo = function(a) { }
 *
 *     function ChildClass(a, b, c) {
 *       // Call parent constructor
 *       ParentClass.call(this, a, b);
 *     }
 *     HMap.inherits(ChildClass, ParentClass);
 *
 *     var child = new ChildClass('a', 'b', 'see');
 *     child.foo(); // This works.
 *
 * @param {!Function} childCtor Child constructor.
 * @param {!Function} parentCtor Parent constructor.
 * @function
 * @api
 */
HMap.inherits = function (childCtor, parentCtor) {
  childCtor.prototype = Object.create(parentCtor.prototype)
  childCtor.prototype.constructor = childCtor
}

/**
 * A reusable function, used e.g. as a default for callbacks.
 *
 * @return {undefined} Nothing.
 */
HMap.nullFunction = function () {
}

export default HMap
