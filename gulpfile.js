var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var csso = require('gulp-csso');
var svgSprite = require('gulp-svg-sprite');
var fs = require('fs');
var path = require('path');
var cached = require('gulp-cached');
//var remember = require('gulp-remember');

gulp.task('less', function () {
	return gulp
		.src('less/*.less', { since: gulp.lastRun('less')} )
		.pipe(cached('less'))
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

//var svgSpriteConfig = {
//	shape: {
//		dimension: {
//			maxWidth: 50,
//			maxHeight: 50
//		},
//		spacing: {
//			padding: 1
//		}
//	},
//	mode: {
//		view: {
//			bust: false,
//			render: {
//				less: true
//			}
//		}
//	}
//};

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
						css: {
							dest: '.',
							common: 'svg-sprite-' + dirName,
							//mixin: 'svg-sprite-' + dirName,
							prefix: '.svg-icon-%s',
							dimensions: true,
							sprite: './sprite',
							bust: false,
							render: {
								less: true
							}
						}
					},
					dest: path.resolve('./less/stabfort/_sprites/svg/' + dirName)
				};
				gulp.src(dirPath + '/*.svg')
					.pipe(svgSprite(svgSpriteConfig))
					.pipe(gulp.dest('./less/stabfort/_sprites/svg/' + dirName));
			}
		}
	});
});

gulp.task('watcher', function () {
	return gulp.watch(
		['less/*.less', 'less/stabfort/**/*.less'],
		gulp.series('less')
	)
});

gulp.task('watch', gulp.series(
	'less', 'watcher'
));

gulp.task('default',
	gulp.series('less')
);