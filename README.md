test-audio
==========

[![Build Status](https://travis-ci.org/ArtskydJ/test-audio.svg)](https://travis-ci.org/ArtskydJ/test-audio)
[![Dependency Status](https://david-dm.org/artskydj/test-audio.svg)](https://david-dm.org/artskydj/test-audio)
[![devDependency Status](https://david-dm.org/artskydj/test-audio/dev-status.svg)](https://david-dm.org/artskydj/test-audio#info=devDependencies)

A small collection of ogg, wav, and flac files, for testing!

# example

```js
var path = require('path')
var files = require('test-audio')
var filePath = path.dirname( require.resolve('test-audio') )

files.forEach(function (file) {
	console.log( path.join(filePath, file.name), '\n ', file )
})
```
```
C:\Users\Michael\Github\javascript\test-audio\test_1.ogg
  { name: 'test_1.ogg', bytes: 32652, type: 'ogg' }
C:\Users\Michael\Github\javascript\test-audio\test_2.ogg
  { name: 'test_2.ogg', bytes: 288992, type: 'ogg' }
C:\Users\Michael\Github\javascript\test-audio\test_3.ogg
  { name: 'test_3.ogg', bytes: 248486, type: 'ogg' }
C:\Users\Michael\Github\javascript\test-audio\test_4.wav
  { name: 'test_4.wav', bytes: 23868, type: 'wav' }
C:\Users\Michael\Github\javascript\test-audio\test_5.wav
  { name: 'test_5.wav', bytes: 222310, type: 'wav' }
C:\Users\Michael\Github\javascript\test-audio\test_6.wav
  { name: 'test_6.wav', bytes: 2915288, type: 'wav' }
C:\Users\Michael\Github\javascript\test-audio\test_7.flac
  { name: 'test_7.flac', bytes: 2370313, type: 'flac' }
```

# api

```js
var files = require('test-audio')
```

# `files`

`files` is an array of objects. Each object represents a test audio file, and has the following properties:

- `name` is the file name, e.g. `'test_4.wav'`
- `bytes` is the size of the file in bytes, e.g. `23868`
- `type` is the extension of the file, e.g. `'wav'`

# install

With [npm](http://nodejs.org/download) do:

```
npm install test-audio
```
