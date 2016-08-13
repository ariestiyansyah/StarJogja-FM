'use strict';

let menubar = require('menubar');
let mb = menubar({
    width: 300,
    height: 130,
});

mb.on('ready', function ready() {
    console.log('Starting Radio...');
});

