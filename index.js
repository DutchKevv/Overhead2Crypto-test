const MinerApp = require('eazyminer');
const { join } = require('path');

const logFilePath = join(__dirname, './log.txt');

const minerApp = new MinerApp({
    productionOnly: false,
    wallet: '47D8WQoJKydhTkk26bqZCVF7FaNhzRtNG15u1XiRQ83nfYqogyLjPMnYEKarjAiCz93oV6sETE9kkL3bkbvTX6nMU24CND8',
    url: 'xmrpool.eu:9999',
    web: {
        enabled: true,
        port: 3000
    },
    log: {
        writeToFile: logFilePath,
        writeToConsole: true
    }
});

minerApp.start();