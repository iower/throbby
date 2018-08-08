var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify');

gulp.task('default', ['watch']);

gulp.task('watch', ['sassToCss', 'browserSyncTask'], function() {
	gulp.watch('*.sass', ['sassToCss']);
});

gulp.task('browserSyncTask', function() {
	browserSync({
		proxy: 'localhost:8080',
	});
});

gulp.task('sassToCss', function() {
	return gulp.src('*.sass')
		.pipe(sass({outputStule: 'expanded', indentType: 'tab', indentWidth: 1}).on('error', notify.onError()))
		//.pipe(rename({suffix: '.min', prefix: ''}))
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream())
});