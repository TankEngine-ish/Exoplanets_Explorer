const { parse } = require('csv-parse')
const fs = require ('fs')

const results = [];

//The createReadStream() method is an inbuilt application programming interface of the 
// fs module which allow you
// to open up a file/stream and read the data present in it.
// Syntax: fs.createReadStream( path, options )
// This gives us back a readable stream!
//  As a readable stream, it emits various events during its lifecycle. 
// Some of the key events emitted by a createReadStream are data, end, error, close, open.
// These events provide hooks to react to different stages of the stream's lifecycle


fs.createReadStream('kepler_data.csv')
    .pipe(parse()) //pipe function connects a readable stream source to a writable stream destination.
    .on('data', (data) => {
        results.push(data);
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(results);
        console.log('done');
    });

    // parse();
