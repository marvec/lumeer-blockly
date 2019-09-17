#!/bin/sh
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
