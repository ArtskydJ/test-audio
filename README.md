test-audio
==========

[![Build Status](https://travis-ci.org/ArtskydJ/test-audio.svg)](https://travis-ci.org/ArtskydJ/test-audio)

> A tiny collection of ogg, wav, flac, and mp3 files, for testing!

# example

```js
var testAudio = require('test-audio')()
console.log(testAudio)
```
```js
[ { name: '30047__corsica-s__drippy.flac',
    bytes: 24686,
    type: 'flac',
    path: 'C:\\Users\\Michael\\Github\\test-audio\\audio\\30047__corsica-s__drippy.flac' },
  { name: '50775__smcameron__drips2.ogg',
    bytes: 67338,
    type: 'ogg',
    path: 'C:\\Users\\Michael\\Github\\test-audio\\audio\\50775__smcameron__drips2.ogg' },
  { name: '75344__neotone__drip2.wav',
    bytes: 36792,
    type: 'wav',
    path: 'C:\\Users\\Michael\\Github\\test-audio\\audio\\75344__neotone__drip2.wav' },
  { name: '8000__cfork__cf-fx-bloibb.mp3',
    bytes: 23302,
    type: 'mp3',
    path: 'C:\\Users\\Michael\\Github\\test-audio\\audio\\8000__cfork__cf-fx-bloibb.mp3' } ]
```

# api

```js
var getTestAudio = require('test-audio')
```

# `var files = getTestAudio()`

`files` is an array of objects. Each object represents a test audio file, and has the following properties:

- `name` is the file name, e.g. `'test_4.wav'`
- `bytes` is the size of the file in bytes, e.g. `23868`
- `type` is the extension of the file, e.g. `'wav'`
- `path` is the absolute path of the file

# credits

The sound files and album image are public domain/licensed for commercial reuse.

- [cf_FD_bloibb.mp3](http://www.freesound.org/people/cfork/sounds/8000/)
- [drippy.flac](http://www.freesound.org/people/Corsica_S/sounds/30047/)
- [drips2.ogg](http://www.freesound.org/people/smcameron/sounds/50775/)
- [drip2.wav](http://www.freesound.org/people/Neotone/sounds/75344/)
- [album.jpg](http://orig15.deviantart.net/bece/f/2014/311/5/7/buster_s_adventures_4___scary_encounter_by_busterthefox-d85numc.jpg)

# install

With [npm](http://nodejs.org/download) do:

```
npm install test-audio
```

# license

[MIT](http://opensource.org/licenses/MIT)
