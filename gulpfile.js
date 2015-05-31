var gulp = require('gulp'),
	less = require('gulp-less'),
	watch = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
	return gulp
		.src('less/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['Android >= 4', 'Chrome >= 20', 'Firefox >= 15', 'Explorer >= 8', 'iOS >= 6', 'Opera >= 15'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css/'))
});

gulp.task('watch', function () {
	gulp.watch(['less/*.less', 'less/stabfort/**/*.less'], ['less'])
});

gulp.task('default', ['less']);