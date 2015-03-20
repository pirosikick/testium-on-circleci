'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

let $ = gulpLoadPlugins();

let pathes = {
  scripts: './src/**/*.js'
};

gulp.task('scripts', [], () => {
  gulp.src(pathes.scripts)
    .pipe($.babel())
    .pipe(gulp.dest('./lib'));
});

gulp.task('start', ['build'], () => {
  $.nodemon({
    script: 'lib/server.js',
    ext: 'js hbs',
    env: {},
    ignore: ['./src/**'],
    nodeArg:['--debug']
  });
});

gulp.task('build', ['scripts'], () => {
});

gulp.task('watch', () => {
  gulp.watch([pathes.scripts], ['scripts']);
});

gulp.task('default', ['watch', 'start'], () => {
});
