/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour input field.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.FieldColour');

goog.require('Blockly.Field');
goog.require('Blockly.utils');

goog.require('goog.style');


/**
 * Class for a colour input field.
 * @param {string} colour The initial colour in '#rrggbb' format.
 * @param {Function=} opt_validator A function that is executed when a new
 *     colour is selected.  Its sole argument is the new colour value.  Its
 *     return value becomes the selected colour, unless it is undefined, in
 *     which case the new colour stands, or it is null, in which case the change
 *     is aborted.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldColour = function(colour, opt_validator) {
  Blockly.FieldColour.superClass_.constructor.call(this, colour, opt_validator);
  this.setText(Blockly.Field.NBSP + Blockly.Field.NBSP + Blockly.Field.NBSP);
};
goog.inherits(Blockly.FieldColour, Blockly.Field);

/**
 * Construct a FieldColour from a JSON arg object.
 * @param {!Object} options A JSON object with options (colour).
 * @returns {!Blockly.FieldColour} The new field instance.
 * @package
 * @nocollapse
 */
Blockly.FieldColour.fromJson = function(options) {
  return new Blockly.FieldColour(options['colour']);
};

/**
 * Array of colours used by this field.  If null, use the global list.
 * @type {Array.<string>}
 * @private
 */
Blockly.FieldColour.prototype.colours_ = null;

/**
 * Array of colour tooltips used by this field.  If null, use the global list.
 * @type {Array.<string>}
 * @private
 */
Blockly.FieldColour.prototype.titles_ = null;

/**
 * Number of colour columns used by this field.  If 0, use the global setting.
 * By default use the global constants for columns.
 * @type {number}
 * @private
 */
Blockly.FieldColour.prototype.columns_ = 0;

/**
 * Install this field on a block.
 */
Blockly.FieldColour.prototype.init = function() {
  Blockly.FieldColour.superClass_.init.call(this);
  this.borderRect_.style['fillOpacity'] = 1;
  this.setValue(this.getValue());
};

/**
 * Mouse cursor style when over the hotspot that initiates the editor.
 */
Blockly.FieldColour.prototype.CURSOR = 'default';

/**
 * Close the colour picker if this input is being deleted.
 */
Blockly.FieldColour.prototype.dispose = function() {
  Blockly.WidgetDiv.hideIfOwner(this);
  Blockly.FieldColour.superClass_.dispose.call(this);
};

/**
 * Return the current colour.
 * @return {string} Current colour in '#rrggbb' format.
 */
Blockly.FieldColour.prototype.getValue = function() {
  return this.colour_;
};

/**
 * Set the colour.
 * @param {string} colour The new colour in '#rrggbb' format.
 */
Blockly.FieldColour.prototype.setValue = function(colour) {
  if (this.sourceBlock_ && Blockly.Events.isEnabled() &&
      this.colour_ != colour) {
    Blockly.Events.fire(new Blockly.Events.BlockChange(
        this.sourceBlock_, 'field', this.name, this.colour_, colour));
  }
  this.colour_ = colour;
  if (this.borderRect_) {
    this.borderRect_.style.fill = colour;
  }
};

/**
 * Get the text from this field.  Used when the block is collapsed.
 * @return {string} Current text.
 */
Blockly.FieldColour.prototype.getText = function() {
  var colour = this.colour_;
  // Try to use #rgb format if possible, rather than #rrggbb.
  var m = colour.match(/^#(.)\1(.)\2(.)\3$/);
  if (m) {
    colour = '#' + m[1] + m[2] + m[3];
  }
  return colour;
};

/**
 * An array of colour strings for the palette.
 * Copied from goog.ui.ColorPicker.SIMPLE_GRID_COLORS
 * All colour pickers use this unless overridden with setColours.
 * @type {!Array.<string>}
 */
Blockly.FieldColour.COLOURS = [
  '#000000', '#263238', '#37474f', '#455a64', '#546e7a', '#607d8b', '#78909c', '#90a4ae', '#b0bec5', '#cfd8dc', '#eceff1', '#ffffff',
  '#101010', '#212121', '#424242', '#616161', '#757575', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#eeeeee', '#f5f5f5', '#fafafa', '#00b388',

  '#f44336', // red
  '#e91e63', // pink
  '#9c27b0', // purple
  '#673ab7', // deep-purple
  '#3f51b5', // indigo
  '#2196f3', // blue
  '#03a9f4', // light-blue
  '#009688', // teal
  '#4caf50', // green
  '#8bc34a', // light-green
  '#ffeb3b', // yellow
  '#ff5722', // deep-orange

  // 100
  '#ffcdd2', // red
  '#f8bbd0', // pink
  '#e1bee7', // purple
  '#d1c4e9', // deep-purple
  '#c5cae9', // indigo
  '#bbdefb', // blue
  '#b3e5fc', // light-blue
  '#b2dfdb', // teal
  '#c8e6c9', // green
  '#dcedc8', // light-green
  '#fff9c4', // yellow
  '#ffccbc', // deep-orange

  // 200
  '#ef9a9a', // red
  '#f48fb1', // pink
  '#ce93d8', // purple
  '#b39ddb', // deep-purple
  '#9fa8da', // indigo
  '#90caf9', // blue
  '#81d4fa', // light-blue
  '#80cbc4', // teal
  '#a5d6a7', // green
  '#c5e1a5', // light-green
  '#fff59d', // yellow
  '#ffab91', // deep-orange

  // 300
  '#e57373', // red
  '#f06292', // pink
  '#ba68c8', // purple
  '#9575cd', // deep-purple
  '#7986cb', // indigo
  '#64b5f6', // blue
  '#4fc3f7', // light-blue
  '#4db6ac', // teal
  '#81c784', // green
  '#aed581', // light-green
  '#fff176', // yellow
  '#ff8a65', // deep-orange

  // 400
  '#ef5350', // red
  '#ec407a', // pink
  '#ab47bc', // purple
  '#7e57c2', // deep-purple
  '#5c6bc0', // indigo
  '#42a5f5', // blue
  '#29b6f6', // light-blue
  '#26a69a', // teal
  '#66bb6a', // green
  '#9ccc65', // light-green
  '#ffee58', // yellow
  '#ff7043', // deep-orange

  // 600
  '#e53935', // red
  '#d81b60', // pink
  '#8e24aa', // purple
  '#5e35b1', // deep-purple
  '#3949ab', // indigo
  '#1e88e5', // blue
  '#039be5', // light-blue
  '#00897b', // teal
  '#43a047', // green
  '#7cb342', // light-green
  '#fdd835', // yellow
  '#f4511e', // deep-orange

  // 700
  '#d32f2f', // red
  '#c2185b', // pink
  '#7b1fa2', // purple
  '#512da8', // deep-purple
  '#303f9f', // indigo
  '#1976d2', // blue
  '#0288d1', // light-blue
  '#00796b', // teal
  '#388e3c', // green
  '#689f38', // light-green
  '#fbc02d', // yellow
  '#e64a19', // deep-orange

  // 800
  '#c62828', // red
  '#ad1457', // pink
  '#6a1b9a', // purple
  '#4527a0', // deep-purple
  '#283593', // indigo
  '#1565c0', // blue
  '#0277bd', // light-blue
  '#00695c', // teal
  '#2e7d32', // green
  '#558b2f', // light-green
  '#f9a825', // yellow
  '#d84315', // deep-orange

  // 900
  '#b71c1c', // red
  '#880e4f', // pink
  '#4a148c', // purple
  '#311b92', // deep-purple
  '#1a237e', // indigo
  '#0d47a1', // blue
  '#01579b', // light-blue
  '#004d40', // teal
  '#1b5e20', // green
  '#33691e', // light-green
  '#f57f17', // yellow
  '#bf360c', // deep-orange
];

/**
 * An array of tooltip strings for the palette.  If not the same length as
 * COLOURS, the colour's hex code will be used for any missing titles.
 * All colour pickers use this unless overridden with setColours.
 * @type {!Array.<string>}
 */
Blockly.FieldColour.TITLES = [];

/**
 * Number of columns in the palette.
 * All colour pickers use this unless overridden with setColumns.
 */
Blockly.FieldColour.COLUMNS = 12;

/**
 * Set a custom colour grid for this field.
 * @param {Array.<string>} colours Array of colours for this block,
 *     or null to use default (Blockly.FieldColour.COLOURS).
 * @param {Array.<string>} opt_titles Optional array of colour tooltips,
 *     or null to use default (Blockly.FieldColour.TITLES).
 * @return {!Blockly.FieldColour} Returns itself (for method chaining).
 */
Blockly.FieldColour.prototype.setColours = function(colours, opt_titles) {
  this.colours_ = colours;
  if (opt_titles !== undefined) {
    this.titles_ = opt_titles;
  }
  return this;
};

/**
 * Set a custom grid size for this field.
 * @param {number} columns Number of columns for this block,
 *     or 0 to use default (Blockly.FieldColour.COLUMNS).
 * @return {!Blockly.FieldColour} Returns itself (for method chaining).
 */
Blockly.FieldColour.prototype.setColumns = function(columns) {
  this.columns_ = columns;
  return this;
};

/**
 * Create a palette under the colour field.
 * @private
 */
Blockly.FieldColour.prototype.showEditor_ = function() {
  Blockly.WidgetDiv.show(this, this.sourceBlock_.RTL,
      Blockly.FieldColour.widgetDispose_);

  // Record viewport dimensions before adding the widget.
  var viewportBBox = Blockly.utils.getViewportBBox();
  var anchorBBox = this.getScaledBBox_();

  // Create and add the colour picker, then record the size.
  var picker = this.createWidget_();
  Blockly.WidgetDiv.DIV.appendChild(picker);
  var paletteSize = goog.style.getSize(picker);

  // Position the picker to line up with the field.
  Blockly.WidgetDiv.positionWithAnchor(viewportBBox, anchorBBox, paletteSize,
      this.sourceBlock_.RTL);

  // Configure event handler on the table to listen for any event in a cell.
  Blockly.FieldColour.onUpWrapper_ = Blockly.bindEvent_(picker,
      'mouseup', this, this.onClick_);
};

/**
 * Handle a click on a colour cell.
 * @param {!Event} e Mouse event.
 * @private
 */
Blockly.FieldColour.prototype.onClick_ = function(e) {
  var cell = e.target;
  if (cell && !cell.label) {
    // The target element is the 'div', back out to the 'td'.
    cell = cell.parentNode;
  }
  var colour = cell && cell.label;
  Blockly.WidgetDiv.hide();
  if (this.sourceBlock_) {
    // Call any validation function, and allow it to override.
    colour = this.callValidator(colour);
  }
  if (colour !== null) {
    this.setValue(colour);
  }
};

/**
 * Create a colour picker widget.
 * @return {!Element} The newly created colour picker.
 * @private
 */
Blockly.FieldColour.prototype.createWidget_ = function() {
  var columns = this.columns_ || Blockly.FieldColour.COLUMNS;
  var colours = this.colours_ || Blockly.FieldColour.COLOURS;
  var titles = this.titles_ || Blockly.FieldColour.TITLES;
  var selectedColour = this.getValue();
  // Create the palette.
  var table = document.createElement('table');
  table.className = 'blocklyColourTable';
  var row;
  for (var i = 0; i < colours.length; i++) {
    if (i % columns == 0) {
      row = document.createElement('tr');
      table.appendChild(row);
    }
    var cell = document.createElement('td');
    row.appendChild(cell);
    var div = document.createElement('div');
    cell.appendChild(div);
    cell.label = colours[i];  // This becomes the value, if clicked.
    cell.title = titles[i] || colours[i];
    div.style.backgroundColor = colours[i];
    if (colours[i] == selectedColour) {
      div.className = 'blocklyColourSelected';
    }
  }
  return table;
};

/**
 * Hide the colour picker widget.
 * @private
 */
Blockly.FieldColour.widgetDispose_ = function() {
  if (Blockly.FieldColour.onUpWrapper_) {
    Blockly.unbindEvent_(Blockly.FieldColour.onUpWrapper_);
  }
  Blockly.Events.setGroup(false);
};

Blockly.Field.register('field_colour', Blockly.FieldColour);
