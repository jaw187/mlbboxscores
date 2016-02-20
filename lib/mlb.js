'use strict';

// Load modules

const Wreck = require('wreck');
const Hoek = require('hoek');
const Insync = require('insync');


// Declare internals

const internals = {};


internals.mlb = require('./mlb.json');
internals.baseUrl = internals.mlb.protocol + '://' + internals.mlb.host + internals.mlb.basepath + '/';


internals.get = function (options, callback) {

    Hoek.assert(callback, 'Callback is required');

    if (!options.path) {
        return callback(new Error('Path is required'));
    }

    var url = internals.baseUrl + options.path + internals.mlb.files[options.which];
    Wreck.get(url, { timeout: 10000, json: true }, (err, response, payload) => {

        return callback(err, payload);
    });
};

internals.getScoreboard = function (options, callback) {

    options = options || {};
    options.which = 'scoreboard';

    return internals.get(options, callback);
};


internals.getBoxscores = function (options, callback) {

    options = options || {};

    const games = Hoek.reach(options, 'scoreboard.data.games.game');

    if (!(options.path && games)) {
        return callback(new Error('Path and Scoreboard with games are required'));
    }

    var getBoxscore = function (game, next) {

        const boxscoreOptions = {
            path: options.path + 'gid_' + game.gameday + '/',
            which: 'boxscore'
        };

        return internals.get(boxscoreOptions, (err, result) => {

            if (result === 'GameDay - 404 Not Found') {
                return next(null, {});
            }

            const boxscore = Hoek.reach(result, 'data.boxscore');

            if (boxscore) {
                boxscore.path = options.path;
                boxscore.gameday = game.gameday;
            }

            return next(err, boxscore);
        });
    };

    Insync.map(games, getBoxscore, (err, boxscores) => {

        return callback(err, boxscores);
    });
};


module.exports = internals.Boxscores = function (options) {

    this.options = options;
    this.plays = [];
};


internals.Boxscores.prototype.get = function (callback) {

    const self = this;

    const getScoreboard = function (next) {

        internals.getScoreboard(self.options, (err, scoreboard) => {

            self.options.scoreboard = scoreboard;
            return next(err);
        });
    };

    const getBoxscores = function (next) {

        internals.getBoxscores(self.options, (err, boxscores) => {

            self.options.boxscores = boxscores;
            return next(err);
        });
    };

    Insync.series([
        getScoreboard,
        getBoxscores
    ], (err) => {

        return callback(err, self.options.boxscores);
    });
};
