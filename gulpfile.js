var gulp = require('gulp'),
	less = require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	csso = require('gulp-csso');

gulp.task('less', function () {
	return gulp
		.src('less/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['Android >= 4', 'Chrome >= 20', 'Firefox >= 15', 'Explorer >= 8', 'iOS >= 6', 'Safari >= 5.1', 'Opera >= 15'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		//.pipe(csso(true))
		.pipe(gulp.dest('css/'))
});

gulp.task('watch', function () {
	gulp.watch(['less/*.less', 'less/stabfort/**/*.less'], ['less'])
});

gulp.task('default', ['less']);