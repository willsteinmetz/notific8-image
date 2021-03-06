/*
 * @author Will Steinmetz
 * notific8 Javascript plug-in - build task
 * Copyright (c)2013-2016, Will Steinmetz
 * Licensed under the BSD license.
 * http://opensource.org/licenses/BSD-3-Clause
 */

module.exports = {
  options: {
    sourceMap: true,
    presets: [ 'es2015' ]
  },
  dist: {
    files: {
      'dist/notific8-image.js': 'src/js/notific8-image.js'
    }
  }
};
