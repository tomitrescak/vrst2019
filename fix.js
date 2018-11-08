const fs = require('fs');

// fix css
const cssDir = './out/_next/static/css/';

const files = fs.readdirSync(cssDir);
for (let file of files) {
  const path = cssDir + file;
  console.log('Fixing: ' + path);
  let source = fs.readFileSync(path, { encoding: 'utf-8' });
  source = source.replace(/\/static\//g, '/vrst2019/static/');
  fs.writeFileSync(path, source);
}
