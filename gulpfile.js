const gulp = require('gulp');
const sass = require('gulp-sass');
const browsersync = require('browser-sync');

gulp.task('sass', function() {
	return gulp.src('./assets/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function (){
	gulp.watch('./assets/sass/**/*.scss',gulp.series('sass'))
});