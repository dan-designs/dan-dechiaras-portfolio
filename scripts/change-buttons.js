const fs = require('fs');
const filePath = './src/App.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const button1Target = '          View Project <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />';
const button1Replacement = '          <div className="inline-flex w-full items-center justify-between font-bold text-white bg-transparent border border-[#333] rounded-sm px-4 py-3 group-hover:bg-accent group-hover:text-[#111202] group-hover:border-accent transition-all duration-300">\\n            <span>View Project</span>\\n            <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />\\n          </div>';

const button2Target = '          Read More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />';
const button2Replacement = '          <div className="inline-flex w-full items-center justify-between font-bold text-white bg-transparent border border-[#333] rounded-sm px-4 py-3 group-hover:bg-accent group-hover:text-[#111202] group-hover:border-accent transition-all duration-300">\\n            <span>Read More</span>\\n            <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />\\n          </div>';

content = content.replace(button1Target, button1Replacement);
content = content.replace(button2Target, button2Replacement);

content = content.replace(
  '<div className="mt-auto flex items-center text-sm text-[#a3a3a3] group-hover:text-accent transition-colors font-mono uppercase tracking-wider">',
  '<div className="mt-auto w-full flex items-center text-sm text-[#a3a3a3] transition-colors font-mono uppercase tracking-wider">'
);

content = content.replace(
  '<div className="mt-auto mb-6 flex items-center text-sm text-[#a3a3a3] group-hover:text-accent transition-colors font-mono uppercase tracking-wider">',
  '<div className="mt-auto mb-6 w-full flex items-center text-sm text-[#a3a3a3] transition-colors font-mono uppercase tracking-wider">'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Replaced buttons!");
