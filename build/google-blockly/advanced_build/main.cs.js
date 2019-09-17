goog.provide('BlocklyMain');
// Messages (in some language)
goog.require('Blockly.Msg.cs');
// Core
goog.require('Blockly');
// Blocks
goog.require('Blockly.Constants.Colour');
goog.require('Blockly.Constants.Logic');
goog.require('Blockly.Constants.Loops');
goog.require('Blockly.Constants.Math');
goog.require('Blockly.Constants.Text');
goog.require('Blockly.Constants.Lists');
goog.require('Blockly.Constants.Variables');
goog.require('Blockly.Constants.VariablesDynamic');
goog.require('Blockly.Blocks.procedures');
goog.require('Blockly.JavaScript');
goog.require('Blockly.JavaScript.lists');
goog.require('Blockly.JavaScript.logic');
goog.require('Blockly.JavaScript.loops');
goog.require('Blockly.JavaScript.math');
goog.require('Blockly.JavaScript.procedures');
goog.require('Blockly.JavaScript.texts');
goog.require('Blockly.JavaScript.variablesDynamic');
goog.require('Blockly.JavaScript.variables');
goog.require('Blockly.FieldFA');

Blockly.init = function(id = '', toolbox) {
  Blockly.HSV_VALUE = 0.85;
  return Blockly.inject('blocklyDiv'+id, {
    'toolbox': toolbox
  });
};

//window.addEventListener('load', BlocklyMain.init);
