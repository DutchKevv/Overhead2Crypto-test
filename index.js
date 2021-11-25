const MinerApp = require('overhead2crypto');
const minerApp = new MinerApp();

// miner.loadMiner('stratum');
minerApp.controller.loadMiner('stratum');

minerApp.start();