#!/bin/sh

java -jar closure-compiler.jar --js='main.cs.js' \
  --js='../blocks/**.js' \
  --js='../core/**.js' \
  --js='../generators/**.js' \
  --js='../msg/js/cs.js' \
  --js='../../closure-library/closure/goog/**.js' \
  --js='../../closure-library/third_party/closure/goog/**.js' \
  --generate_exports \
  --externs ../externs/svg-externs.js \
  --compilation_level SIMPLE_OPTIMIZATIONS \
  --dependency_mode=STRICT --entry_point=BlocklyMain \
  --js_output_file blockly.cs.js

cp blockly.cs.js blockly.cs.orig.js
uglifyjs blockly.cs.js -o blockly.cs.min.js

java -jar closure-compiler.jar --js='main.en.js' \
  --js='../blocks/**.js' \
  --js='../core/**.js' \
  --js='../generators/**.js' \
  --js='../msg/js/en.js' \
  --js='../../closure-library/closure/goog/**.js' \
  --js='../../closure-library/third_party/closure/goog/**.js' \
  --generate_exports \
  --externs ../externs/svg-externs.js \
  --compilation_level SIMPLE_OPTIMIZATIONS \
  --dependency_mode=STRICT --entry_point=BlocklyMain \
  --js_output_file blockly.en.js

cp blockly.en.js blockly.en.orig.js
uglifyjs blockly.en.js -o blockly.en.min.js
