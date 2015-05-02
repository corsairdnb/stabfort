var gulp = require('gulp'),
	less = require('gulp-less'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch');

var lessPath = 'less/',
	lessImportsPath = lessPath + 'imports/',
	lessMainPath = lessPath + 'stabfort/main/**/*',
	bootstrapPath = 'less/bootstrap/less/',
	cssOutputPath = 'css/';

gulp.task('less', function () {
	return gulp.src(lessMainPath)
		.pipe(less({
			paths: [bootstrapPath, lessImportsPath]
		}))
		.pipe(gulp.dest(cssOutputPath))
});

gulp.task('watch', function () {
	return gulp.src(lessMainPath)
		.pipe(watch(lessMainPath))
		.pipe(plumber())
		.pipe(less({
			paths: [bootstrapPath]
		}))
		.pipe(gulp.dest(cssOutputPath))
});