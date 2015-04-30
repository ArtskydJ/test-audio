var path = require('path')
var files = require('./')
var filePath = path.dirname( require.resolve('./') )

files.forEach(function (file) {
	console.log( path.join(filePath, file.name), '\n ', file )
})
