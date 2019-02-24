'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const image = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const watch = require('gulp-watch');
const runSequence = require('run-sequence');

gulp.task('html', e=>{
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(reload({stream: true}));
});

gulp.task('fonts', e=>{
    return gulp.src('./src/css/layout/fonts/**')
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({stream: true}));
});

gulp.task('svg', e=>{
    return gulp.src(['./src/img/sprite.svg', './src/img/map-marker.svg'])
    .pipe(gulp.dest('./build/img'))
    .pipe(reload({stream: true}));
});

gulp.task('js', e=>{
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./build/js'))
    .pipe(reload({stream: true}));
});

gulp.task('video', e=>{
    return gulp.src('./src/video/RobotsypPynkyyBrein.mp4')
    .pipe(gulp.dest('./build/video'))
    .pipe(reload({stream: true}));
});

gulp.task('sass', function () {
    return gulp.src('./src/css/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/css'));
  });


gulp.task('image', e=>{
    return gulp.src(['./src/img/*.png', './src/img/*.jpg','./src/img/favicon.ico'])
    .pipe(image())
    .pipe(gulp.dest('build/img'))
    .pipe(reload({stream: true}));
});

gulp.task('clean', e=>{
    return del('./build');
});

gulp.task('server', e=>{
    browserSync.init ({
        server: {
            baseDir: 'build'
        },
        open: true
    });
});
gulp.task('watch', e=>{
    gulp.watch('./src/*.html', e =>{
        gulp.start('html');
    });
    gulp.watch('./src/css/*.scss', e =>{
        gulp.start('sass');
    });
    gulp.watch('./src/img/**', e =>{
        gulp.start('img');
    });
    gulp.watch('./src/js/**', e =>{
        gulp.start('js');
    });
    gulp.watch('./src/css/layout/fonts/**', e =>{
        gulp.start('fonts');
    });
});
gulp.task('default', e => {
    runSequence(
        'clean',
        'fonts',
        'svg',
        'html',
        'image',
        'sass',
        'js',
        'video',
        'watch',
        'server'
    )
});