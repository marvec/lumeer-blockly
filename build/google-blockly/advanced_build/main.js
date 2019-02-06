goog.provide('BlocklyMain');
// Messages (in some language)
goog.require('Blockly.Msg.en');
// Core
goog.require('Blockly');
// Blocks
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

var BLOCKLY_TOOLBOX = `<xml id="toolbox" style="display: none"><category name="Documents" custom="DOCUMENT_VARIABLES" colour="#00B388"></category><category name="Links" custom="LINKS" colour="#2c3e50"></category><category name="Loops" colour="#e74c3c"><block type="foreach_document_array"></block></category><sep></sep><category name="Controls" colour="%{BKY_LOOPS_HUE}"><block type="controls_if"></block><block type="controls_ifelse"></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_repeat"></block></category><category name="Logic" colour="%{BKY_LOGIC_HUE}"><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_boolean"></block><block type="logic_negate"></block><block type="logic_null"></block><block type="logic_ternary"></block></category><category name="Math" colour="%{BKY_MATH_HUE}"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_change"><value name="DELTA"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_on_list"></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Text" colour="%{BKY_TEXTS_HUE}"><block type="text"></block><block type="text_join"></block><block type="text_append"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="text_length"><value name="VALUE"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_isEmpty"><value name="VALUE"><shadow type="text"><field name="TEXT"></field></shadow></value></block><block type="text_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value><value name="FIND"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_charAt"><value name="VALUE"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value></block><block type="text_getSubstring"><value name="STRING"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value></block><block type="text_changeCase"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_trim"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block></category><category name="Lists" colour="260"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"></block><block type="lists_getIndex"></block><block type="lists_setIndex"></block><block type="lists_getSublist"></block><block type="lists_split"><value name="DELIM"><shadow type="text"><field name="TEXT">,</field></shadow></value></block><block type="lists_sort"></block></category><category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}"></category></xml>`;

Blockly.init = function(id = '') {
  Blockly.HSV_VALUE = 0.85;
  return Blockly.inject('blocklyDiv'+id, {
    'toolbox': BLOCKLY_TOOLBOX
  });
};

//window.addEventListener('load', BlocklyMain.init);
