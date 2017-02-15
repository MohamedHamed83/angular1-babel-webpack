import gulp from 'gulp';
import del from 'del';
import Dgeni from 'dgeni';
const root = 'src/';
const paths = {
  dist: './dist/',
  distDocs: './docs/build',
  docs: './docs/app/*.js'

};

gulp.task('cleanDocs', cb => del(paths.distDocs + '**/**/*', cb));

gulp.task('copyDocs', () => {
  return gulp.src(paths.docs)
    .pipe(gulp.dest(paths.distDocs + '/src'));
});

gulp.task('dgeni', () => {
    var dgeni = new Dgeni([require('./docs/config/index')]);
    return dgeni.generate();
});
