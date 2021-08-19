const config = require('./config');
const { TwitterHydrator } = require('./twitter-hydrator');

async function run() {
    config.debug = true;

    if (config.debug) {
        process.env.NODE_ENV = "development"; // for the rate-limiter
    }

    let rootDir = 'H:/twitter/anita-rehydrate';
    let source = rootDir + '/ids';
    let dest = rootDir + '/tweets';
    let twitterKeys = require('./twitter-api-keys'); // module.exports = [{key: "KEY", secret: "SECRET", userToken: "OPTIONAL", userSecret: "OPTIONAL"}, ...];

    await TwitterHydrator.execute(source, dest, twitterKeys);
}

run();
