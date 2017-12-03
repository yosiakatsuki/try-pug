var gulp = require('gulp');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

var src_pug = [
  './src/pug/**/*.pug',
  '!./src/pug/**/_*.pug'
];


gulp.task('pug', function(){
  return gulp.src(src_pug)
  .pipe(plumber({
    errorHandler: function(err){
      console.log(err.messageFormatted);
      this.emit('end');
    }
  }))
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'));
});

gulp.task('watch',['pug'],function() {
	watch( './src/pug/**/*.pug', function(event) {
		gulp.start('pug');
	});
});
