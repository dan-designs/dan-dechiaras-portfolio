import fs from 'fs';

let appTsx = fs.readFileSync('src/App.tsx', 'utf8');
appTsx = appTsx.replace(/#00191c/g, '#181901');
appTsx = appTsx.replace(/#111111/g, '#0C0D00');
fs.writeFileSync('src/App.tsx', appTsx);

let indexCss = fs.readFileSync('src/index.css', 'utf8');
indexCss = indexCss.replace(/#000E10/g, '#181901');
indexCss = indexCss.replace(/#00E5FF/g, '#D5DB56');
indexCss = indexCss.replace(/#00B4D8/g, '#B5BB46');
fs.writeFileSync('src/index.css', indexCss);

console.log('Colors replaced successfully!');
