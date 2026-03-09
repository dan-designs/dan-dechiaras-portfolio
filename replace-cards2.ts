import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Add overflow-hidden to the article cards
content = content.replace(/<article className="bg-\[#0C0D00\] border border-\[#737373\] rounded-2xl flex flex-col group relative hover:border-\[#a3a3a3\] transition-colors cursor-pointer"/g, '<article className="bg-[#0C0D00] border border-[#737373] rounded-2xl overflow-hidden flex flex-col group relative hover:border-[#a3a3a3] transition-colors cursor-pointer"');

content = content.replace(/<article className="group relative flex flex-col bg-\[#0C0D00\] border border-\[#737373\] rounded-2xl hover:border-\[#a3a3a3\] transition-colors cursor-pointer"/g, '<article className="group relative flex flex-col bg-[#0C0D00] border border-[#737373] rounded-2xl overflow-hidden hover:border-[#a3a3a3] transition-colors cursor-pointer"');

// Replace rounded-sm with rounded-2xl for the inner card
content = content.replace(/<div className="bg-\[#111202\] border border-\[#737373\] p-4 rounded-sm">/g, '<div className="bg-[#111202] border border-[#737373] p-4 rounded-2xl">');

fs.writeFileSync('src/App.tsx', content);
console.log("Replaced successfully!");
