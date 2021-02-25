const { series } = require('gulp')
const gulp =  require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        /* Assim com existe a função pipe que server para tranformar um arquivo dentro 
        de um workflow(pipeline) - PODEMOS UTILIZAR a função .on para interceptar a ocorrência
        de um evento e tomar uma ação */
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

    return cb()
}

module.exports.default = series(padrao)