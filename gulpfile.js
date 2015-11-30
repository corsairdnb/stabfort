var gulp = require('gulp'),
	less = require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	csso = require('gulp-csso'),
	svgSprite = require('gulp-svg-sprite'),
	fs = require('fs');

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

var svgSpriteConfig = {
	shape: {
		dimension: {
			maxWidth: 50,
			maxHeight: 50
		},
		spacing: {
			padding: 1
		}
	},
	mode: {
		view: {
			bust: false,
			render: {
				less: true
			}
		}
	}
};

gulp.task('svg', function () {
	fs.readdir('./img/svg/', function(err, files){
		for (var i in files) {
			var dirName = files[i],
				dirPath = './img/svg/' + dirName,
				stats = fs.lstatSync(dirPath);
			if (stats.isDirectory()) {
				var svgSpriteConfig = {
					shape: {
						dimension: {
							maxWidth: 50,
							maxHeight: 50
						},
						spacing: {
							padding: 1
						}
					},
					mode: {
						view: {
							bust: false,
							render: {
								less: true
							}
						}
					}
				};
				gulp.src(dirPath + '/*.svg')
					.pipe(svgSprite(svgSpriteConfig))
					.pipe(gulp.dest('./less/stabfort/_sprites/svg/' + dirName));
			}
		}
	});
});

gulp.task('watch', function () {
	gulp.watch(['less/*.less', 'less/stabfort/**/*.less'], ['less'])
});

gulp.task('default', ['less']);