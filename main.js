var menubar = require('menubar')

var mb = menubar({
    width: 300,
    height: 130,
})

mb.on('ready', function ready () {
  console.log('Starting Radio...')
})
