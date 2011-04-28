/*global Packages HTMLStyleElement window XMLHttpRequest HTMLStyleElement Document*/
/*jslint nomen: false */
var Ext = {};
Ext.data = {};
/**
 * @constructor
 */
Ext.data.Node = function (settings) {};
/**
 * @param {!Ext.data.Node|!Object} node
 * @return {!Ext.data.Node}
 */
Ext.data.Node.prototype.appendChild = function (node) {};
/**
 * @type {!Array.<Ext.data.Node>}
 */
Ext.data.Node.prototype.childNodes = [];
/**
 * @return {!Ext.tree.TreeNodeUI}
 */
Ext.data.Node.prototype.getUI = function () {};
/**
 * @param {!string} attribute
 * @param {*} value
 * @param {boolean=} deep
 * @return {Ext.data.Node}
 */
Ext.data.Node.prototype.findChild = function (attribute, value, deep) {};
/**
 * @type {!Object}
 */
Ext.data.Node.prototype.attributes = {};
Ext.tree = {};
/**
 * @constructor
 */
Ext.tree.TreeNodeUI = function (settings) {};
/**
 * @constructor
 */
Ext.tree.TreePanel = function (settings) {};
/**
 * @return {!Ext.data.Node}
 */
Ext.tree.TreePanel.prototype.getRootNode = function () {};
/**
 * @constructor
 */
Ext.BoxComponent = function (settings) {};
/**
 * @return {!Ext.Element}
 */
Ext.BoxComponent.prototype.getEl = function () {};
/**
 * @type {!Ext.Element}
 */
Ext.BoxComponent.prototype.el;
/**
 * @constructor
 */
Ext.Button = function (settings) {};
/**
 * @constructor
 */
Ext.Element = function (settings) {};
/**
 * @type {!Element}
 */
Ext.Element.prototype.dom;
Ext.QuickTips = {};
/**
 * @return {undefined}
 */
Ext.QuickTips.init = function () {};
/**
 * @constructor
 */
Ext.Slider = function (settings) {};
/**
 * @constructor
 */
Ext.TabPanel = function (settings) {};
/**
 * @param {!Object} component
 * @return {undefined}
 */
Ext.TabPanel.prototype.add = function (component) {};
/**
 * @param {!string} prop
 * @param {!string} value
 * @return {!Array}
 */
Ext.TabPanel.prototype.find = function (prop, value) {};
/**
 * @return {!Ext.BoxComponent}
 */
Ext.TabPanel.prototype.getActiveTab = function () {};
/**
 * @param {!Ext.BoxComponent} tab
 * @return {undefined}
 */
Ext.TabPanel.prototype.setActiveTab = function (tab) {};
/**
 * @constructor
 */
Ext.Viewport = function (settings) {};
Ext.onReady = function (callback) {};
