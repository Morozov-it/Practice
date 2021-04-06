let project_folder = "dist"; //это переменная конечной папки
let source_folder = "#src"; //это переменная исходной папки

let path = {
    build: {   //это пути вывода файлов
        html: progect_folder + "/", 
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {   //это папка с исходниками 
        html: source_folder + "/", 
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
    