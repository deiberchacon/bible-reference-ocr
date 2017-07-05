'use strict';

module.exports = {
    scripts: {
        entry: './src/scripts/client/app.js',
        output: './dist/js/',
        watch: ['./src/scripts/client/**/*.js', './src/scripts/client/**/*.jsx']
    },
    styles: {
        entry: './src/styles/scss/app.scss',
        output: './dist/css/',
        watch: ['./src/styles/scss/**/*.scss','./src/styles/scss/**/*.css']
    },
    html: {
        entry: './src/index.html',
        output: './dist/',
        watch: './src/index.html'
    }
};
