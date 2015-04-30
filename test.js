var test = require('tape')
var fs = require('fs')
var path = require('path')
var audioFiles = require('./')
var RE = /^test_\d+\.\w+/

var audioFiles2 = audioFiles.reduce(function (memo, file) {
	memo[file.name] = {
		bytes: file.bytes,
		type: file.type
	}
	return memo
}, {})

test('helpers', function (t) {
	t.ok( RE.test('test_1.ogg') )
	t.ok( RE.test('test_379.cool') )
	t.ok( RE.test('test_00.ridiculous') )
	t.notOk( RE.test('test_.ogg') )
	t.notOk( RE.test('test98.ogg') )
	t.notOk( RE.test('test_64.') )
	t.notOk( RE.test('test_6') )
	t.notOk( RE.test('test.js') )
	t.notOk( RE.test('WATtest_3.wav') )
	t.end()
})

test('every audio file is included and has correct metadata', function (t) {
	t.plan(audioFiles.length * 3)

	var filenames = fs.readdirSync('./')

	filenames.filter(RE.test.bind(RE)).forEach(function (filename) {
		var stat = fs.statSync(filename)
		var meta = audioFiles2[filename]
		var ext = path.extname(filename)

		t.ok(stat.isFile(), filename + ' is a file')
		t.equal(stat.size, meta.bytes, filename + ' is ' + meta.bytes + ' bytes')
		t.equal(ext, '.' + meta.type, filename + ' is a ' + meta.type)
	})
	t.end()
})
