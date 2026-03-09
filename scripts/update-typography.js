const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Headings
content = content.replace(/className="text-\[1\.25rem\] text-\[#f5f5f5\] font-bold tracking-tight mb-6 leading-snug"/g, 'className="heading-1 text-[#f5f5f5] mb-6"');
content = content.replace(/className="text-2xl md:text-3xl font-bold"/g, 'className="heading-3"');
content = content.replace(/className="text-3xl font-bold"/g, 'className="heading-2"');
content = content.replace(/className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4"/g, 'className="heading-1 mb-4"');
content = content.replace(/className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6"/g, 'className="heading-1 mb-6"');
content = content.replace(/className="text-xl font-bold"/g, 'className="heading-4"');
content = content.replace(/className="text-lg font-bold text-\[#f5f5f5\]"/g, 'className="heading-5 text-[#f5f5f5]"');
content = content.replace(/className="text-2xl font-bold mb-4 flex items-center gap-2"/g, 'className="heading-3 mb-4 flex items-center gap-2"');
content = content.replace(/className="font-bold text-base mb-4 border-b border-\[#262626\] pb-2"/g, 'className="heading-5 mb-4 border-b border-[#262626] pb-2"');
content = content.replace(/className="text-2xl md:text-3xl font-bold mb-2"/g, 'className="heading-3 mb-2"');
content = content.replace(/className="text-lg font-bold mb-3"/g, 'className="heading-5 mb-3"');
content = content.replace(/className="text-lg font-bold mb-4"/g, 'className="heading-5 mb-4"');
content = content.replace(/className="text-xl font-bold mb-4"/g, 'className="heading-4 mb-4"');

// Body Text
content = content.replace(/className="text-\[#f5f5f5\] text-\[1rem\] space-y-4 mb-8 leading-relaxed"/g, 'className="body-base text-[#f5f5f5] space-y-4 mb-8"');
content = content.replace(/className="text-\[#a3a3a3\] text-lg max-w-2xl"/g, 'className="body-lg text-[#a3a3a3] max-w-2xl"');
content = content.replace(/className="text-\[#d4d4d4\] text-lg leading-relaxed"/g, 'className="body-lg text-[#d4d4d4]"');
content = content.replace(/className="text-\[#a3a3a3\] leading-relaxed mb-4"/g, 'className="body-base text-[#a3a3a3] mb-4"');
content = content.replace(/className="text-\[#a3a3a3\] mb-6 leading-relaxed flex-grow line-clamp-2"/g, 'className="body-base text-[#a3a3a3] mb-6 flex-grow line-clamp-2"');
content = content.replace(/className="text-sm text-\[#d4d4d4\] leading-relaxed"/g, 'className="body-sm text-[#d4d4d4]"');
content = content.replace(/className="text-sm text-\[#d4d4d4\] mb-4 leading-relaxed"/g, 'className="body-sm text-[#d4d4d4] mb-4"');

// Labels
content = content.replace(/className="text-xs font-mono text-\[#f5f5f5\] font-semibold uppercase tracking-wider cursor-pointer"/g, 'className="label-base text-[#f5f5f5] cursor-pointer"');
content = content.replace(/className="text-accent font-mono text-xs uppercase tracking-wider"/g, 'className="label-base text-accent"');
content = content.replace(/className="text-sm font-mono text-\[#a3a3a3\] uppercase tracking-wider mb-3 border-b border-\[#262626\] pb-2"/g, 'className="label-lg text-[#a3a3a3] mb-3 border-b border-[#262626] pb-2"');
content = content.replace(/className="text-xs font-mono text-\[#a3a3a3\] uppercase tracking-wider mb-2"/g, 'className="label-base text-[#a3a3a3] mb-2"');
content = content.replace(/className="text-accent font-mono text-sm"/g, 'className="label-lg text-accent"');
content = content.replace(/className="text-accent font-mono text-xs mb-4 border border-accent\/20 bg-accent\/5 inline-block px-2 py-1 self-start"/g, 'className="label-base text-accent mb-4 border border-accent/20 bg-accent/5 inline-block px-2 py-1 self-start"');
content = content.replace(/className="text-accent font-mono text-xs mb-3 border border-accent\/20 bg-accent\/5 inline-block px-2 py-1 self-start"/g, 'className="label-base text-accent mb-3 border border-accent/20 bg-accent/5 inline-block px-2 py-1 self-start"');
content = content.replace(/className="text-\[#a3a3a3\] font-mono text-sm uppercase tracking-wider"/g, 'className="label-lg text-[#a3a3a3]"');
content = content.replace(/className="absolute -top-3 -right-3 bg-accent text-\[#00191c\] text-\[10px\] font-bold px-2 py-1 uppercase tracking-wider z-10 shadow-lg"/g, 'className="label-sm absolute -top-3 -right-3 bg-accent text-[#00191c] px-2 py-1 z-10 shadow-lg"');
content = content.replace(/className="block mb-1 text-xs uppercase tracking-wider"/g, 'className="label-base block mb-1"');
content = content.replace(/className="text-xs font-mono text-\[#a3a3a3\] uppercase"/g, 'className="label-base text-[#a3a3a3]"');
content = content.replace(/className="text-accent font-bold text-sm tracking-wide uppercase"/g, 'className="label-lg text-accent"');

fs.writeFileSync('src/App.tsx', content);
console.log('Replacements complete');
