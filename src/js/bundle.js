/*eslint no-undef: "error"*/
/*eslint-env node*/

'use strict';

const concat = require('concat');

concat([
  'bundle/script1.js',
  'bundle/script2.js',
  'bundle/script3.js'
], 'script.js');
