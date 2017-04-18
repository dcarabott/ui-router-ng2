System.config({
    transpiler: 'typescript',
    paths: {
        'babel': 'node_modules/babel-core/browser.js',
        'typescript': 'node_modules/typescript/lib/typescript.js',
        'systemjs': 'node_modules/systemjs/dist/system.src.js',
        'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
        'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
        'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js',
        'rxjs': 'node_modules/rxjs/bundles/Rx.js',
        '@angular': 'node_modules/@angular',

        'sn-ui-router-ng2': 'src/index.ts'
    },
    map: {
        'sn-ui-router-core': 'node_modules/sn-ui-router-core/lib',
    },
    packages: {
        'src': { defaultExtension: 'ts' },

        'sn-ui-router-core':       { main: 'index.js', defaultExtension: 'js' },
        '@angular/core':        { main: 'index.js', defaultExtension: 'js' },
        '@angular/compiler':    { main: 'index.js', defaultExtension: 'js' },
        '@angular/common':      { main: 'index.js', defaultExtension: 'js' },
        '@angular/http':        { main: 'index.js', defaultExtension: 'js' },
        '@angular/testing':     { main: 'index.js', defaultExtension: 'js' },
        '@angular/platform-browser': { main: 'index.js', defaultExtension: 'js' },
        '@angular/platform-browser-dynamic': { main: 'index.js', defaultExtension: 'js' }
    }
});
