var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	concatCss = require('gulp-concat-css'),
	cleanCss = require('gulp-clean-css');

gulp.task('scriptcomponents', function(){
	return gulp.src('js/canvasanimation/anidriver.js')
		.pipe(browserify())
		.pipe(rename('drivermiddle.js'))
		.pipe(uglify())
		.pipe(gulp.dest('Demo'));
});

gulp.task('processcss', function(){
	return gulp.src(['css/components/*.css', 'css/loader.css'])
		   .pipe(concatCss("css/files.css"))
		   .pipe(rename('bundle.css'))
		   .pipe(cleanCss())
		   .pipe(gulp.dest('Demo/'));
});

gulp.task('watch', function(){
	gulp.watch('js/canvasanimation/anidriver.js', ['scriptcomponents']);
	gulp.watch('css/components/*.css', ['processcss']);
});

gulp.task('default', ['scriptcomponents', 'processcss','watch']);