
let project_folder = "dist"; //это переменная конечной папки
let source_folder = "#src"; //это переменная исходной папки

let path = {
    build: {   //это пути вывода файлов
        html: project_folder + "/", 
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {   //это папка с исходниками 
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"], //это исключение создания файлов html в конечной папке
        css: source_folder + "/scss/style.scss",
        js: source_folder + "/js/script.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {   //за этими файлами будем следить
        html: source_folder + "/**/*.html", 
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'), //это переменные для плагинов
    gulp = require('gulp'),
    browsersync = require("browser-sync").create(), //это плагин для liveServer
    fileinclude = require("gulp-file-include"), //это плагин для сбора html из элементов header,footer...
    del = require("del"), //это плагин для удаления прочих файлов кроме index.html
    scss = require("gulp-sass"), //это плагин для создания и watch за scss файлами
    autoprefixer = require("gulp-autoprefixer"), //это плагин для создания автопрефиксов
    group_media = require("gulp-group-css-media-queries"), //это плагин для группировки медиа-запросов
    clean_css = require("gulp-clean-css"), //это плагин для сжатия css
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify-es").default;
    
function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

function html() { //это функция копирования из исходной папки в dist файлов html
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() { //это функция копирования из исходной папки в dist файлов css
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded" //это несжатый вывод в css
            })
        )
        .pipe(group_media()) //это группировка медиа-запросов
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true //это каскадный вывод автопрефиксов к свойствам
            })
        )
        .pipe(dest(path.build.css)) //это выгрузка файла css
        .pipe(clean_css())
        .pipe(
            rename({
                extname: ".min.css" //это добавление сжатой версии css файла
            })
        )
        .pipe(dest(path.build.css)) //это выгрузка файла css
        .pipe(browsersync.stream()) //это watch sass
}

function js() { //это функция копирования из исходной папки в dist файлов javascript
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(
            rename({
                extname: ".min.js" //это добавление сжатой версии js файла
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images() { //это функция копирования из исходной папки в dist файлов img
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function watchFiles(params) {
    gulp.watch([path.watch.html], html); //это слежка за html файлами 
    gulp.watch([path.watch.css], css); //это слежка за css файлами
    gulp.watch([path.watch.js], js); //это слежка за css файлами
}

function clean(params) {
    return del(path.clean); //это удаление прочих файлов кроме index.html
}

let build = gulp.series(clean, gulp.parallel(js, css, html));
let watch = gulp.parallel(build, watchFiles, browserSync);
//это сценарий выполнения

exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
