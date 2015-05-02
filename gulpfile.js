var gulp = require('gulp'),
	less = require('gulp-less'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	print = require('gulp-print');

var lessPath = 'less/',
	lessMainPath = lessPath + '*.less',
	cssOutputPath = 'css/';

gulp.task('watch', function () {
	return gulp.src(lessMainPath)
		.pipe(watch(lessMainPath))
		.pipe(plumber())
		.pipe(print(function(filepath) {
			var date = new Date(),
				dateformat = require('gulp/node_modules/gulp-util/node_modules/dateformat');
			return dateformat(date, 'HH:MM:ss') + ' ' + filepath;
		}))
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['Android >= 4', 'Chrome >= 20', 'Firefox >= 15', 'Explorer >= 8', 'iOS >= 6', 'Opera >= 15'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(cssOutputPath))
});