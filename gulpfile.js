'use strict';

var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	nodemon = require('gulp-nodemon');

var source = require('vinyl-source-stream'),
	browserify = require('browserify'),
	babelify = require('babelify');

gulp.task('build', function () {
	return browserify({entries: 'src/js/main.js', extensions: ['.js'], debug: false})
        .transform(babelify)
        .bundle()
        .pipe(plumber())
        .pipe(source('main.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('serve', ['build'], function () {
	nodemon({
		'script': 'server.js',
		'watch': 'public'
	});
});

gulp.task('watch', function () {
    gulp.watch('src/js/**/*.js', ['build']);
});

gulp.task('default', ['serve', 'watch']);