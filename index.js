const fs = require('fs'),
    spawn = require('child_process').spawn,
    sort = spawn('sort', ['input.csv']);

const writer = fs.createWriteStream('out.csv');

sort.stdout.on('data', function (data) {
  writer.write(data)
});

sort.on('exit', function (code) {
  if (code) console.log(code); //if some error
  writer.end();
});

