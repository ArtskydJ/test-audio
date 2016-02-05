var fs = require('fs')
var path = require('path')

module.exports = function () {
	var audioDir = path.join(__dirname, 'audio')

	var array = fs.readdirSync(audioDir).map(function(filename) {
		var audioFile = path.join(audioDir, filename)
		var stats = fs.statSync(audioFile)

		return {
			name: filename,
			bytes: stats.size,
			type: path.extname(filename).slice(1),
			path: audioFile
		}
	})

	array.forEach(function (obj) {
		array[obj.type] = obj
	})

	return array
}
