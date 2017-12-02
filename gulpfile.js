var pug = require('gulp-pug');
var plumber = require('gulp-plumber');

var src_pug = [
  './src/pug/**/*.pug',
  '!./src/pug/**/_*.pug'
];


gulp.task('pug', () => {
  return gulp.src(src_pug)
  .pipe(plumber({
    errorHandler: (err) => {
      console.log(err.messageFormatted);
      this.emit('end');
    }
  }))
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'));
});
