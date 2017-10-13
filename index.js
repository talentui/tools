module.exports = {
    jest: require('./jest'),
    ts: require('./typescript/ts.json'),
    webpack: {
        dll: {
            naming: require('./webpack/dll-naming'),
            parser: require('./webpack/dll-parser')
        }
    }
}