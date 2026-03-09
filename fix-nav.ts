import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Fix nav buttons centering
content = content.replace(/pb-1 border-b-2/g, 'pt-1.5 pb-1 border-b-2');

// Revert border color
content = content.replace(/border-\[#737373\]/g, 'border-[#262626]');

fs.writeFileSync('src/App.tsx', content);
console.log("Fixed successfully!");
