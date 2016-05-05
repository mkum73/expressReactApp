var browserSync = require('browser-sync');
var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
/*var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var reactify = require('reactify');*/

gulp.task('default',function(){
	var server = new LiveServer('server/main.js');
	server.start();
});
/*
gulp.task('serve', ['live-server'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
		port: 9001
	});
});
*/
