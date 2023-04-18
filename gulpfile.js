const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
//Imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css(done) {
    //compilar sass
    //1. Identificar aRCHIVO
    //2. Compilarla
    //3. Guardar el CSS
    src('src/scss/app.scss')
        .pipe(sass()).pipe(postcss([autoprefixer()]))
        .pipe(dest('build/css'));
    done();
}

function imagenes(done) {
    src('src/img/**/*').pipe(imagemin({ optimizationLevel: 3 })).pipe(dest('build/img'));
    done();
}

function versionWebp(done) {
    const opciones = {
        quality: 50
    }
    src('src/img/**/*.{png,jpg}').pipe(webp(opciones)).pipe(dest('build/img'));
    done();
}

function versionAvif(done) {
    const opciones = {
        quality: 50
    }
    src('src/img/**/*.{png,jpg}').pipe(avif(opciones)).pipe(dest('build/img'));
    done();
}

function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);
    watch('src/img/**/*', versionWebp);
}
exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.default = series(imagenes, versionWebp, versionAvif, css, dev);
// series- Se inicia uba tarea y hasta que finaliza, inicia la siguiente
// parallel- Todas se inician al mismo tiempo