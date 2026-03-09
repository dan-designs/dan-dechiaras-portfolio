import fs from 'fs';

let appTsx = fs.readFileSync('src/App.tsx', 'utf8');
appTsx = appTsx.replace(/#262626/g, '#737373');
appTsx = appTsx.replace(/#404040/g, '#a3a3a3');
fs.writeFileSync('src/App.tsx', appTsx);

console.log('Border colors replaced successfully!');
