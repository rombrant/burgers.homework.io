'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
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
    .pipe(gulp.dest('./build/css/layout/fonts'))
    .pipe(reload({stream: true}));
});

gulp.task('js', e=>{
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./build/js'))
    .pipe(reload({stream: true}));
});
gulp.task('maincss', e=>{
    return gulp.src('./src/css/main.css')
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({stream: true}));
});

gulp.task('sass', e=>{
    return gulp.src('./src/css/layout/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./build/css/layout'))
    .pipe(reload({stream: true}));
});

gulp.task('image', e=>{
    return gulp.src('./src/img/*')
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
    gulp.watch('./src/css/layout/*.scss', e =>{
        gulp.start('sass');
    });
    gulp.watch('./src/img/**', e =>{
        gulp.start('img');
    });
    gulp.watch('./src/js/**', e =>{
        gulp.start('js');
    });
    gulp.watch('./src/css/main.css', e =>{
        gulp.start('maincss');
    });
    gulp.watch('./src/css/layout/fonts/**', e =>{
        gulp.start('fonts');
    });
});
gulp.task('default', e => {
    runSequence(
        'clean',
        'fonts',
        'html',
        'image',
        'sass',
        'js',
        'maincss',
        'watch',
        'server'
    )
});