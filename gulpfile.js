var gulp = require('gulp');
var run = require('gulp-run');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('watch', function() {
	gulp.watch(__dirname + '/src/*', batch(function(events, cb) {
		(new run.Command('node ' + __dirname + '/node_modules/.bin/tsc')).exec(function() {
			cb();
		});
	}));
});