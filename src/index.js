// How to load css via browserify?

// By default, this will fail.
// Node only knows how to require .js / .json / .node files.
//var css = require('./index.css');

// One workaround is to load it as a file, using fs.

// Another solution is to use a browserify transform such as https://www.npmjs.com/package/browserify-css
// browserify -t browserify-css src/index.js
// The transform is applied BEFORE any require() calls are made, so the css is inlined as a string (instead of as a require).
// It also handily adds some js that inserts the css into the page onload.

// BUT... by default, browserify only applies the transform to top-level files (i.e. NOT to files in other modules).
// For example, if your css is in a node_modules directory, it will fail:
//var css = require('rc-slider/assets/index.css');

// Loading the css as if it were a top-level file won't work, as browserify still doesn't apply the transform
//var css = require('../node_modules/rc-slider/assets/index.css');

// There are 2 workarounds:

// 1. Intermediate css file
//    i.e. load the css indirectly, via an "@import" in a top-level css file.
//    i.e. the file MUST start with "/", or "./" or "../";
//    i.e. see example in https://www.npmjs.com/package/browserify-css#1-how-do-i-include-css-files-located-inside-the-node-modules-folder
//var css = require('/src/index.css');

// 2. Global transform
//    i.e. tell browserify to apply the browserify-css transform globally (across all modules)
//    browserify -g browserify-css src/index.js
//    note that this option must be specified by the commandline (it is not possible to add it in the package.json)
var css = require('rc-slider/assets/index.css');

var React = require('react');
var Slider = require('rc-slider');

function onChange(v){
  console.log(v);
}

React.render(<div style={{width:400,margin:100}}><Slider onChange={onChange}/></div>, document.getElementById('container'));
