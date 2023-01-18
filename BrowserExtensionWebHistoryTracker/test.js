var fs = require('fs');
fs.writeFile('new_file.csv', 'a,b,c,d,\ne,f,g,h', function (err) {
if (err) throw err;
console.log('Saved!');
});