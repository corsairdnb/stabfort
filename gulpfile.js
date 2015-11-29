var gulp = require('gulp'),
	less = require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	csso = require('gulp-csso'),
	svgSprite = require('gulp-svg-sprite');

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

var svgSpriteConfig                  = {
	shape               : {
		dimension       : {         // Set maximum dimensions
			maxWidth    : 32,
			maxHeight   : 32
		},
		spacing         : {         // Add padding
			padding     : 10
		},
		//dest            : 'out/intermediate-svg'    // Keep the intermediate files
	},
	mode                : {
		view            : {         // Activate the «view» mode
			bust        : false,
			render      : {
				less    : true      // Activate Sass output (with default options)
			}
		},
		symbol          : true      // Activate the «symbol» mode
	}
};

gulp.task('svg', function () {
	gulp.src('img/svg/*.svg')
		.pipe(svgSprite(svgSpriteConfig))
		.pipe(gulp.dest('img/svg_sprites'));
});

gulp.task('watch', function () {
	gulp.watch(['less/*.less', 'less/stabfort/**/*.less'], ['less'])
});

gulp.task('default', ['less']);