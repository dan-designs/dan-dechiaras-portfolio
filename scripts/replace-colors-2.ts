import fs from 'fs';

let appTsx = fs.readFileSync('src/App.tsx', 'utf8');
appTsx = appTsx.replace(/#181901/g, '#111202');
fs.writeFileSync('src/App.tsx', appTsx);

let indexCss = fs.readFileSync('src/index.css', 'utf8');
indexCss = indexCss.replace(/#181901/g, '#111202');
fs.writeFileSync('src/index.css', indexCss);

console.log('Colors replaced successfully!');
