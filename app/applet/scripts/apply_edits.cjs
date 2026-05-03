const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Em dashes
content = content.replace(/ — /g, ' - ');
content = content.replace(/—/g, '-');

// 2. Remove traction placeholder
const tractionRegex = /<div className="bg-\[#1e1e1e\] border border-accent\/20 border-dashed p-8 rounded-lg text-center my-6">\s*<div className="font-mono text-xs tracking-\[0\.15em\] uppercase text-accent\/80 mb-2">Image Placeholder - Traction<\/div>\s*<div className="text-sm text-\[#888\]">Analytics or usage dashboard.*<\/div>\s*<\/div>/g;
content = content.replace(tractionRegex, '');

// 3. Version info Update in "TestFlight Submission & Approval" or Outcomes
content = content.replace(
  "V1 shipped to the Apple App Store. Development did not pause - V2 was immediately scoped and is currently in the Apple review process while the Android closed beta track is being fulfilled.",
  "Version 1 shipped to the Apple App Store. Development did not pause. The second version of the native app has already rolled out, expanding the feature set. Meanwhile, we are now on version 4 of the promoter PWA. Once the foundation was established and I could begin testing, I was able to make rapid, progressive improvements."
);

// 4. Update Images
// a: main image/hero
content = content.replace(
  /"https:\/\/placehold.co\/1200x675\/111202\/D4FF00\?text=Infolines\+Hero"/g,
  '"https://res.cloudinary.com/datad8tms/image/upload/v1777847231/Main-Hero_on_home_and_top_kdcrn1.png"'
);

// Replace figmaLink: "https://www.figma.com/proto/mock-link", -> "https://www.infolines.io"
content = content.replace(
  /figmaLink: "https:\/\/www\.figma\.com\/proto\/mock-link"/g,
  'figmaLink: "https://www.infolines.io"'
);

// 5b: attendee and promoter experience replaces "High-fidelity app screenshots..."
const screenshotRegex = /<div className="bg-\[#1e1e1e\] border border-accent\/20 border-dashed p-8 rounded-lg text-center my-6">\s*<div className="font-mono text-xs tracking-\[0\.15em\] uppercase text-accent\/80 mb-2">Image Placement<\/div>\s*<div className="text-sm text-\[#888\]">High-fidelity app screenshots: the event feed, an event detail page, and the promoter dashboard.*<\/div>\s*<\/div>/;
content = content.replace(screenshotRegex, `<img src="https://res.cloudinary.com/datad8tms/image/upload/v1777847231/side_by_side_mphhvj.png" alt="Infolines dual interfaces" className="w-full rounded-lg my-6 border border-white/10" />`);

// 5c: designs vs real replaces "Side-by-side: A complex Figma screen on the left..."
const designRealRegex = /<div className="bg-\[#1e1e1e\] border border-accent\/20 border-dashed p-8 rounded-lg text-center my-6">\s*<div className="font-mono text-xs tracking-\[0\.15em\] uppercase text-accent\/80 mb-2">Image Placement<\/div>\s*<div className="text-sm text-\[#888\]">Side-by-side: A complex Figma screen on the left.*<\/div>\s*<\/div>/;
content = content.replace(designRealRegex, `<img src="https://res.cloudinary.com/datad8tms/image/upload/v1777847231/design_vs_live_bi3wuc.png" alt="Figma design vs Expo live simulator" className="w-full rounded-lg my-6 border border-white/10" />`);

// 5d: old poster vs app replaces "Split-screen: Left - a vintage rave flyer aesthetic \/ Right - the Infolines app feed."
const splitScreenRegex = /<div className="bg-\[#1e1e1e\] border border-accent\/20 border-dashed p-8 rounded-lg text-center my-8">\s*<div className="font-mono text-xs tracking-\[0\.15em\] uppercase text-accent\/80 mb-2">Image Placement<\/div>\s*<div className="text-sm text-\[#888\]">Split-screen: Left - a vintage rave flyer aesthetic \/ Right - the Infolines app feed.*<\/div>\s*<\/div>/;
content = content.replace(splitScreenRegex, `<img src="https://res.cloudinary.com/datad8tms/image/upload/v1777847231/Splitscreen-left_and_right_ux8kce.png" alt="Vintage flyer versus modern app interface" className="w-full rounded-lg my-8 border border-white/10" />`);

// 5e: architecture replaces "Architectural diagram: Vite PWA \+ Expo App..."
const archRegex = /<div className="bg-\[#1e1e1e\] border border-accent\/20 border-dashed p-8 rounded-lg text-center my-8">\s*<div className="font-mono text-xs tracking-\[0\.15em\] uppercase text-accent\/80 mb-2">Image Placement<\/div>\s*<div className="text-sm text-\[#888\]">Architectural diagram: Vite PWA \+ Expo App both feeding into Supabase.*<\/div>\s*<\/div>/;
content = content.replace(archRegex, `<img src="https://res.cloudinary.com/datad8tms/image/upload/v1777847231/infolines_architecture_diagram_1_ajgi2k.png" alt="Infolines Architecture Map" className="w-full rounded-lg my-8 border border-white/10" />`);

// 5f: prompt workflow replaces "Screenshot or diagram of the actual prompt workflow"
const promptRegex = /<div className="bg-\[#1e1e1e\] border border-accent\/20 border-dashed p-8 rounded-lg text-center my-6">\s*<div className="font-mono text-xs tracking-\[0\.15em\] uppercase text-accent\/80 mb-2">Image Placement<\/div>\s*<div className="text-sm text-\[#888\]">Screenshot or diagram of the actual prompt workflow.*<\/div>\s*<\/div>/;
content = content.replace(promptRegex, `<img src="https://res.cloudinary.com/datad8tms/image/upload/v1777847231/Prompt_workflow_oc26p7.png" alt="Prompt workflow visualization" className="w-full rounded-lg my-6 border border-white/10" />`);

// 5g: sprint outline replaces "Horizontal visual timeline..."
const timelineRegex = /<div className="bg-\[#1e1e1e\] border border-accent\/20 border-dashed p-8 rounded-lg text-center my-6">\s*<div className="font-mono text-xs tracking-\[0\.15em\] uppercase text-accent\/80 mb-2">Image Placement<\/div>\s*<div className="text-sm text-\[#888\]">Horizontal visual timeline with the same milestones rendered graphically.*<\/div>\s*<\/div>/;
content = content.replace(timelineRegex, `<img src="https://res.cloudinary.com/datad8tms/image/upload/v1777847230/Timeline_aupcwn.png" alt="Visual 4-week sprint timeline" className="w-full rounded-lg my-6 border border-white/10" />`);

// We also need to change "Request Case Study" to maybe "Visit Website" or similar
// Let's find out what the button code is.
// I will just replace "Request Case Study" -> "Visit Website" if it exists, or maybe "View Live App".
// And ensure 5 projects are shown on the home page instead of 4 projects.
content = content.replace(/{PROJECTS\.slice\(0, 4\)\.map\(project => \(/g, '{PROJECTS.slice(0, 5).map(project => (');
// Actually, earlier the user might have asked to show 5 projects so it's already {PROJECTS.map(project => (}.
// Let's make sure:
content = content.replace(/{PROJECTS\.slice\(0, 4\)/g, '{PROJECTS.slice(0, 5)');


fs.writeFileSync('src/App.tsx', content, 'utf8');
