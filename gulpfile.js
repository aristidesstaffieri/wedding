var gulp  = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var server = require('gulp-develop-server');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');

var options = {
    path: 'app.js'
};

var serverFiles = [
    'public/js/*.js',
    'public/views/*.ejs',
    'public/stylesheets/**/*.scss'
];

gulp.task( 'server:start', function() {
    server.listen( options, livereload.listen );
});

// Run before deployment and publish build folder
gulp.task('build', function() {
	gulp.src('public/js/**/*.js')
	.pipe(concat('app.js'))
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});

gulp.task('minify', function() {
	sass('public/stylesheets/', {})
	.pipe(plumber())
	.pipe(gulp.dest('build/stylesheets'))
	.pipe(minifycss())
	.pipe(gulp.dest('build/stylesheets'));
});

gulp.task('styles', function() {
	sass('public/stylesheets/', {})
	.pipe(plumber())
	.pipe(gulp.dest('public/stylesheets/'))
	.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('public/stylesheets/**/*.scss', ['styles']);
});


gulp.task('default', ['styles', 'watch', 'server:start'], function() {
	function restart( file ) {
		server.changed( function( error ) {
			if( ! error ) livereload.changed( file.path );
		});
	}

    	gulp.watch( serverFiles ).on( 'change', restart );
});