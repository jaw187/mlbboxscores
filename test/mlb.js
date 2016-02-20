// Load modules

var Code = require('code');
var Lab = require('lab');

var Mlb = require('../');

// Declare internals

var internals = {};


// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('Plays', function () {

    it('Can get boxscores', function (done) {

        var options = {
            path: 'year_2011/month_07/day_23/'
        };

        var mlb = new Mlb(options);

        mlb.get(function (err, boxscores) {

            expect(err).to.not.exist();

            expect(boxscores).to.exist();
            expect(boxscores.length).to.exist();

            done();
        });
    });

    it('Can get boxscores on day with one game', function (done) {

        var options = {
            path: 'year_2015/month_04/day_05/'
        };

        var mlb = new Mlb(options);

        mlb.get(function (err, boxscores) {

            expect(err).to.not.exist();

            expect(boxscores).to.exist();
            expect(boxscores.length).to.exist();

            done();
        });
    });
});
