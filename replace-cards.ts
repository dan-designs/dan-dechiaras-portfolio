import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace image border radius
content = content.replace(/rounded-\[2rem\]/g, 'rounded-2xl');

// Add rounded-2xl to cards
content = content.replace(/bg-\[#0C0D00\] border border-\[#737373\]/g, 'bg-[#0C0D00] border border-[#737373] rounded-2xl');

// Replace the Design & Leadership Ethos heading
content = content.replace(
  /<div className="mb-12">\s*<h2 id="ethos-heading" className="heading-3 mb-6">Design & Leadership Ethos<\/h2>/,
  '<div className="mb-12 flex flex-col items-center text-center">\n          <h2 id="ethos-heading" className="heading-3 mb-6">Design & Leadership Ethos</h2>'
);

fs.writeFileSync('src/App.tsx', content);
console.log("Replaced successfully!");
