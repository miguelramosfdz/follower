var lib_dir = process.env.JS_COV ? '../lib-cov/': '../lib/';

var youtube = require(lib_dir + 'youtube')
  , assert = require('assert');

describe('Youtube', function () {

    describe('#latestMedia', function () {

        it('should get the # of pins a url has', function (done) {
            youtube.latestMedia('TMZ', function (err, media) {
                assert.ifError(err);
                assert(Array.isArray(media) && media.length);
                media.forEach(function (item) {
                    assert(item.id);
                    assert(item.date.getTime() > 0);
                    assert(item.title);
                    assert(item.thumbnail);
                    assert(item.link);
                });
                done();
            });
        });

        it('should fail on an invalid username', function (done) {
            youtube.latestMedia(')(A*SD()AS*D)(@!', function (err) {
                assert(err);
                done();
            });
        });

    });

});
