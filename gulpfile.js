'use strict'
const del = require('del')
const gulp = require('gulp')
const gulpIf = require('gulp-if')
const eslint = require('gulp-eslint')

const configFiles = './gulpfile.js'
  , srcFiles = 'src/*.js'
  , testFiles = 'test/*.js'

  , destDir = './lib/'

let watching = false

gulp.task('clean', () => del(destDir))

gulp.task('lint', () =>
  gulp.src([configFiles, srcFiles, testFiles])
    .pipe(eslint())
    .pipe(gulpIf(!watching, eslint.failOnError()))
)

gulp.task('compile', ['clean', 'lint'], () =>
  gulp.src(srcFiles)
    .pipe(gulp.dest(destDir))
)

gulp.task('build', ['compile'])

gulp.task('watch', () => {
  watching = true
  gulp.watch([srcFiles, testFiles], ['build'])
})
