var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var runSequence = require('run-sequence');

gulp.task('build', function() {
    runSequence(
        'copy-files'
    )
});

gulp.task('copy-files', function() {
    var files = [
        './index.html',
        './README.md',
        './assets/**/*',
        './.travis.yml'
    ]
    return gulp.src(files, {
        base: './'
    }).pipe(gulp.dest('build/'))
})

gulp.task('minify-img', function() {
    return gulp.src('assets/img/src/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./assets/img/dest/'));
});
