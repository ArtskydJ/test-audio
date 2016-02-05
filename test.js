var test = require('tape')
var fs = require('fs')
var path = require('path')
var mm = require('musicmetadata')
var audioFiles = require('./')()

test('correct returned result', function (t) {
	t.plan(audioFiles.length * 3)

	fs.readdirSync('./audio').forEach(function (filename, index) {
		var stat = fs.statSync('./audio/' + filename)
		var meta = audioFiles[index]
		var ext = path.extname(filename)

		t.ok(stat.isFile(), filename + ' is a file')
		t.equal(stat.size, meta.bytes, filename + ' is ' + meta.bytes + ' bytes')
		t.equal(ext, '.' + meta.type, filename + ' is a ' + meta.type)
	})
	t.end()
})

test('exact returned result', function (t) {
	t.deepEqual(audioFiles[0], { name: '30047__corsica-s__drippy.flac', bytes: 24686, type: 'flac', path: audioFiles[0].path })
	t.deepEqual(audioFiles[1], { name: '50775__smcameron__drips2.ogg',  bytes: 67338, type: 'ogg',  path: audioFiles[1].path })
	t.deepEqual(audioFiles[2], { name: '75344__neotone__drip2.wav',     bytes: 36792, type: 'wav',  path: audioFiles[2].path })
	t.deepEqual(audioFiles[3], { name: '8000__cfork__cf-fx-bloibb.mp3', bytes: 23302, type: 'mp3',  path: audioFiles[3].path })
	t.deepEqual(audioFiles[0], audioFiles.flac)
	t.deepEqual(audioFiles[1], audioFiles.ogg)
	t.deepEqual(audioFiles[2], audioFiles.wav)
	t.deepEqual(audioFiles[3], audioFiles.mp3)
	t.end()
})

test('music tags', function (t) {
	var testAudioFiles = audioFiles.filter(function (meta) {
		return meta.type !== 'wav'
	})
	t.plan(testAudioFiles.length * 5)

	var expectMetadata = {
		'30047__corsica-s__drippy.flac': { artist: 'corsica', title: 'drippy', album: 'test drips', trackNumber: 1 },
		'50775__smcameron__drips2.ogg': { artist: 'Stephen M. Cameron', title: 'drips2', album: 'test drips', trackNumber: 2 },
		'8000__cfork__cf-fx-bloibb.mp3': { artist: 'cfork.net', title: 'cf_FX_bloibb', album: 'test drips', trackNumber: 4 }
	}

	testAudioFiles.forEach(function (meta) {
		mm(fs.createReadStream(meta.path), function (err, tags) {
			t.notOk(err)
			t.equal(tags.artist[0], expectMetadata[meta.name].artist)
			t.equal(tags.title, expectMetadata[meta.name].title)
			t.equal(tags.album, expectMetadata[meta.name].album)
			t.equal(tags.track.no, expectMetadata[meta.name].trackNumber)
		})
	})
})
