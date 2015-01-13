/*
 * lintel-contrib-modals
 * https://github.com/lintelio/lintel-contrib-modals
 *
 * Copyright (c) 2015 Marius Craciunoiu
 * Licensed under the MIT license.
 */


'use strict';

module.exports = function (grunt) {
  var lintel = {
    test: 'test',
    dist: 'dist'
  };

  // Load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    lintel: lintel,

    // Compile sass
    sass: {
      options: {
        sourceMap: true,
        includePaths: [
          'bower_components/lintel/sass',
          'bower_components',
          'sass'
        ]
      },
      dist: {
        files: {
          '<%= lintel.dist %>/modals.css': 'sass/lintel-core-loader.scss'
        }
      }
    },

    // Autoprefix sass
    autoprefixer: {
      dist: {
        src: '<%= lintel.dist %>/modals.css'
      }
    },

    // Minify css
    cssmin: {
      // TODO: sourcemap
      dist: {
        src: '<%= lintel.dist %>/modals.css',
        dest: '<%= lintel.dist %>/modals.min.css'
      }
    },

    // Lint css
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      dist: {
        src: ['<%= lintel.dist %>/modals.css']
      }
    },

    // Start test server
    connect: {
      test: {
        options: {
          base: [
            './',
            '<%= lintel.dist %>',
            '<%= lintel.test %>/fixtures'
          ],
          livereload: true,
          port: 4554
        }
      }
    },

    // Remove previous screenshots and clear dist folder
    clean: {
      dist: ['<%= lintel.dist %>'],
      tests: ['<%= lintel.test %>/tmp']
    },

    // Take new screenshots
    webshot: {
      xs: {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals.html',
          savePath: '<%= lintel.test %>/tmp/xs.png',
          windowSize: {
              width: 320,
              height: 568
          },
          shotSize: {
              width: 320,
              height: 'all'
          }
        }
      },
      sm: {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals.html',
          savePath: '<%= lintel.test %>/tmp/sm.png',
          windowSize: {
              width: 480,
              height: 568
          },
          shotSize: {
              width: 480,
              height: 'all'
          }
        }
      },
      md: {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals.html',
          savePath: '<%= lintel.test %>/tmp/md.png',
          windowSize: {
              width: 768,
              height: 1024
          },
          shotSize: {
              width: 768,
              height: 'all'
          }
        }
      },
      lg: {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals.html',
          savePath: '<%= lintel.test %>/tmp/lg.png',
          windowSize: {
              width: 1024,
              height: 768
          },
          shotSize: {
              width: 1024,
              height: 'all'
          }
        }
      },
      xl: {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals.html',
          savePath: '<%= lintel.test %>/tmp/xl.png',
          windowSize: {
              width: 1280,
              height: 800
          },
          shotSize: {
              width: 1280,
              height: 'all'
          }
        }
      },
      "2xl": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals.html',
          savePath: '<%= lintel.test %>/tmp/2xl.png',
          windowSize: {
              width: 1440,
              height: 900
          },
          shotSize: {
              width: 1440,
              height: 'all'
          }
        }
      },
      "3xl": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals.html',
          savePath: '<%= lintel.test %>/tmp/3xl.png',
          windowSize: {
              width: 1680,
              height: 1050
          },
          shotSize: {
              width: 1680,
              height: 'all'
          }
        }
      },
      max: {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals.html',
          savePath: '<%= lintel.test %>/tmp/max.png',
          windowSize: {
              width: 1920,
              height: 1080
          },
          shotSize: {
              width: 1920,
              height: 'all'
          }
        }
      },
      "flexbox-xs": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-flexbox.html',
          savePath: '<%= lintel.test %>/tmp/flexbox/xs.png',
          windowSize: {
              width: 320,
              height: 568
          },
          shotSize: {
              width: 320,
              height: 'all'
          }
        }
      },
      "flexbox-sm": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-flexbox.html',
          savePath: '<%= lintel.test %>/tmp/flexbox/sm.png',
          windowSize: {
              width: 480,
              height: 568
          },
          shotSize: {
              width: 480,
              height: 'all'
          }
        }
      },
      "flexbox-md": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-flexbox.html',
          savePath: '<%= lintel.test %>/tmp/flexbox/md.png',
          windowSize: {
              width: 768,
              height: 1024
          },
          shotSize: {
              width: 768,
              height: 'all'
          }
        }
      },
      "flexbox-lg": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-flexbox.html',
          savePath: '<%= lintel.test %>/tmp/flexbox/lg.png',
          windowSize: {
              width: 1024,
              height: 768
          },
          shotSize: {
              width: 1024,
              height: 'all'
          }
        }
      },
      "flexbox-xl": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-flexbox.html',
          savePath: '<%= lintel.test %>/tmp/flexbox/xl.png',
          windowSize: {
              width: 1280,
              height: 800
          },
          shotSize: {
              width: 1280,
              height: 'all'
          }
        }
      },
      "flexbox-2xl": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-flexbox.html',
          savePath: '<%= lintel.test %>/tmp/flexbox/2xl.png',
          windowSize: {
              width: 1440,
              height: 900
          },
          shotSize: {
              width: 1440,
              height: 'all'
          }
        }
      },
      "flexbox-3xl": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-flexbox.html',
          savePath: '<%= lintel.test %>/tmp/flexbox/3xl.png',
          windowSize: {
              width: 1680,
              height: 1050
          },
          shotSize: {
              width: 1680,
              height: 'all'
          }
        }
      },
      "flexbox-max": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-flexbox.html',
          savePath: '<%= lintel.test %>/tmp/flexbox/max.png',
          windowSize: {
              width: 1920,
              height: 1080
          },
          shotSize: {
              width: 1920,
              height: 'all'
          }
        }
      },
      "one-xs": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-one.html',
          savePath: '<%= lintel.test %>/tmp/one/xs.png',
          windowSize: {
              width: 320,
              height: 568
          },
          shotSize: {
              width: 320,
              height: 'all'
          }
        }
      },
      "one-sm": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-one.html',
          savePath: '<%= lintel.test %>/tmp/one/sm.png',
          windowSize: {
              width: 480,
              height: 568
          },
          shotSize: {
              width: 480,
              height: 'all'
          }
        }
      },
      "one-md": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-one.html',
          savePath: '<%= lintel.test %>/tmp/one/md.png',
          windowSize: {
              width: 768,
              height: 1024
          },
          shotSize: {
              width: 768,
              height: 'all'
          }
        }
      },
      "one-lg": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-one.html',
          savePath: '<%= lintel.test %>/tmp/one/lg.png',
          windowSize: {
              width: 1024,
              height: 768
          },
          shotSize: {
              width: 1024,
              height: 'all'
          }
        }
      },
      "one-xl": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-one.html',
          savePath: '<%= lintel.test %>/tmp/one/xl.png',
          windowSize: {
              width: 1280,
              height: 800
          },
          shotSize: {
              width: 1280,
              height: 'all'
          }
        }
      },
      "one-2xl": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-one.html',
          savePath: '<%= lintel.test %>/tmp/one/2xl.png',
          windowSize: {
              width: 1440,
              height: 900
          },
          shotSize: {
              width: 1440,
              height: 'all'
          }
        }
      },
      "one-3xl": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-one.html',
          savePath: '<%= lintel.test %>/tmp/one/3xl.png',
          windowSize: {
              width: 1680,
              height: 1050
          },
          shotSize: {
              width: 1680,
              height: 'all'
          }
        }
      },
      "one-max": {
        options: {
          siteType: 'url',
          site: 'http://localhost:4554/modals-one.html',
          savePath: '<%= lintel.test %>/tmp/one/max.png',
          windowSize: {
              width: 1920,
              height: 1080
          },
          shotSize: {
              width: 1920,
              height: 'all'
          }
        }
      }
    },

    // Lint js
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: {
        src: ['js/**/*.js']
      }
    },

    // Minify js
    uglify: {
      options: {
        mangle: true,
        compress: true,
        preserveComments: 'some',
        sourceMap: true,
      },
      individual: {
        files: [{
          expand: true,
          cwd: 'js',
          src: '**/*.js',
          dest: 'dist/'
        }]
      },
      concat: {
        files: {
          'dist/modals.min.js': ['js/**/*.js']
        }
      }
    },

    // Copy files
    copy: {
      js: {
        files: [{
          expand: true,
          cwd: 'js/',
          src: ['**/*.js'],
          dest: 'dist/'
        }]
      }
    },

    // Run tests
    nodeunit: {
      tests: ['<%= lintel.test %>/*_test.js']
    },

    // Watch for changes
    watch: {
      sass: {
        files: [
          'sass/**/*.scss'
        ],
        tasks: ['sass-compile']
      },
      js: {
        files: [
          'js/**/*.js'
        ],
        tasks: ['js-compile']
      },
      livereload: {
        files: [
          '<%= lintel.dist %>/**/*.css',
          '<%= lintel.dist %>/**/*.js'
        ],
        options: {
          livereload: true
        }
      },
    },

    // Notify of changes
    notify: {
      sass: {
        options: {
          title: 'lintel-contrib-modals',
          message: 'SASS Compiled'
        }
      },
      js: {
        options: {
          title: 'lintel-contrib-modals',
          message: 'JS Compiled'
        }
      }
    }

  });

  grunt.registerTask('sass-compile', ['sass:dist', 'autoprefixer:dist', 'cssmin:dist', 'csslint', 'notify:sass']);

  grunt.registerTask('js-compile', ['copy:js', 'jshint', 'uglify:concat', 'notify:js']);


    grunt.registerTask('test', ['clean:dist', 'sass-compile', 'js-compile', 'connect', 'clean:tests', 'webshot', 'nodeunit']);


  // By default, lint and run all tests.
  grunt.registerTask('default', ['test', 'watch']);

};
