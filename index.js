const { parse } = require('csv-parse')
const fs = require ('fs')

fs.createReadStream('kepler_data.csv')
    .on('data', (data) => {
        resourceLimits.push(data);
    })
    .on('end', () =>);
