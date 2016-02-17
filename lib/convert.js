// Load modules


// Declare internals

var internals = {};


module.exports = internals.Convert = function (rawPlays) {

    var convertPlay = function (rawPlay) {

        var players = internals.generatePlayerhash(rawPlays);

        var play = {
            batter: rawPlay.batter,
            pitcher: rawPlay.pitcher,
            event: {
                id: +rawPlay.event_num,
                description: rawPlay.event
            },
            pitches: rawPlay.pitches.length,
            rbi: +rawPlay.rbi || 0,
            totalbases: +rawPlay.b
        }
    };


};

{
    "_id": {
        "$oid": "55555d7574c8d1546f27562b"
    },
    "home_team_runs": "0",
    "des": "Peter Bourjos flies out to left fielder Michael Brantley.  ",
    "b": "0",
    "event_num": "6",
    "b3": "",
    "pitcher": "545333",
    "b2": "",
    "o": "1",
    "batter": "488721",
    "des_es": "Peter Bourjos batea elevado de out a jardinero izquierdo Michael Brantley.  ",
    "event_es": "Elevado de Out",
    "num": "1",
    "start_tfs_zulu": "2015-05-14T16:10:46Z",
    "s": "1",
    "event": "Flyout",
    "b1": "",
    "play_guid": "6eb6f2af-eeda-4a1a-8c97-1875c229af69",
    "pitch": [
        {
            "start_speed": "94.0",
            "des": "Called Strike",
            "sv_id": "150514_121104",
            "pitch_type": "FF",
            "type": "S",
            "des_es": "Strike cantado"
        },
        {
            "start_speed": "93.0",
            "des": "In play, out(s)",
            "sv_id": "150514_121116",
            "pitch_type": "FF",
            "type": "X",
            "des_es": "En juego, out(s)"
        }
    ],
    "away_team_runs": "0",
    "start_tfs": "161046",
    "inningNumber": "1",
    "batterNumber": 1,
    "path": "year_2015/month_05/day_14/",
    "gameday": "2015_05_14_slnmlb_clemlb_1"
}


{
    "_id": {
        "$oid": "55555d7574c8d1546f27567e"
    },
    "home_team_runs": "2",
    "des": "Grady Sizemore singles on a ground ball to center fielder Starling Marte.   Freddy Galvis scores.    Ryan Howard to 3rd.    Cesar Hernandez to 2nd.  ",
    "b": "0",
    "event_num": "94",
    "b3": "429667",
    "score": "T",
    "pitcher": "474699",
    "b2": "514917",
    "o": "1",
    "batter": "429713",
    "des_es": "Grady Sizemore pega sencillo con rodado a jardinero central Starling Marte.   Freddy Galvis anota  Ryan Howard a 3ra.    Cesar Hernandez a 2da.  ",
    "rbi": "1",
    "event_es": "Sencillo",
    "num": "11",
    "start_tfs_zulu": "2015-05-14T17:30:38Z",
    "s": "0",
    "event": "Single",
    "b1": "429713",
    "play_guid": "2f9a4f8c-e36e-4e3b-8e4a-662d830b22d2",
    "pitch": {
        "start_speed": "84.8",
        "des": "In play, run(s)",
        "sv_id": "150514_133133",
        "pitch_type": "CH",
        "type": "X",
        "des_es": "En juego, carrera(s)"
    },
    "away_team_runs": "0",
    "start_tfs": "173038",
    "inningNumber": "1",
    "batterNumber": 6,
    "path": "year_2015/month_05/day_14/",
    "gameday": "2015_05_14_pitmlb_phimlb_1"
}
