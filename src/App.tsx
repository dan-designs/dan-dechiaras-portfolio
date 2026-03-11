import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, Keyboard, Zap, ArrowRight, CheckCircle2, Code2, 
  Briefcase, Disc, Wrench, Mail, Phone, Linkedin, Globe, 
  ChevronRight, ArrowLeft, BarChart3, Layers, Accessibility,
  Menu, X, ChevronDown, FileText, Download, Github, Instagram, Youtube,
  Minus, Plus
} from 'lucide-react';

// --- DATA ---

const PROJECTS: any[] = [
  { 
    id: 1, 
    title: "The Global Scale Engine", 
    metric: "Systems Architecture • Product Strategy", 
    tags: ["Design Leadership", "Engineering Transformation", "International Expansion"],
    problem: "How I led a 4-phase design and engineering transformation to de-risk the business and unlock international expansion for Campspot.",
    solution: "Led a 4-phase design and engineering transformation to scale the platform globally.",
    process: "Placeholder process text for The Global Scale Engine.",
    impact: "Successfully de-risked the business and unlocked international expansion for Campspot.",
    imageUrl: "https://res.cloudinary.com/datad8tms/image/upload/v1773077944/Systems_Project_xswb3k.png",
    altText: "Campspot Design System Collage",
    ariaLabel: "Campspot Design System documentation and Storybook component library",
    ariaDescribedBy: "systems-desc",
    ariaDescription: "A collage showing color palettes, Storybook UI, and semantic token tables for light and dark modes.",
    figmaLink: "https://www.figma.com/deck/E3s2BTPOfnlb4mzKE41koU",
    content: [
      {
        title: "01. The Strategic Context",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The Role:</strong> I served as the Design Leader overseeing the architectural overhaul and front-end refactor of our core product.</li>
            <li><strong className="text-white">The Team:</strong> 1 PM, 2 Architects, 2 Designers, 4 Engineers (Contract), 2 QAs (Contract).</li>
            <li><strong className="text-white">The Timeline:</strong> Brand Refresh Aug 2023 - Dec 2023, Design System & UI Kit Build: Nov 2023 - Dev 2024, FE Refactor(Dev): Jan 2025 - Sep 2026 (Cutover)</li>
            <li><strong className="text-white">The Mission:</strong> Execute a multi-year refresh and modernization effort to future-proof our CX while maintaining delivery of 0-to-1 and growth features. This is often referred to as "changing the engine while the plane is in the air." Our objective was to resolve years of technical and design debt to enable global market potential and secure public sector contracts.</li>
          </ul>
        )
      },
      {
        title: "2. Identifying the Opportunity",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The "Silent" Problem:</strong> While the company grew rapidly, we were operating with a fragmented UI and significant compliance gaps (WCAG 2.1 AA, GDPR) that created a legal liability and blocked our business goals.</li>
            <li><strong className="text-white">The Proof:</strong> I identified that our existing infrastructure was blocking us from migrating users into Campspot following a critical UK acquisition, while also preventing us from bidding on any major government contracts due to a lack of accessibility and responsiveness.</li>
            <li><strong className="text-white">The Gap:</strong> I discovered that the application’s lack of a unified design system and non-responsive codebase was slowing down feature delivery and creating a disjointed user experience across different regions.</li>
            <li><strong className="text-white">Selling the Vision:</strong> I pitched this as a <strong>"Global Scale Engine"</strong> to leadership, framing it not as a "reskin," but as a foundational necessity to de-risk the business and increase velocity across Design, Engineering, and QA.</li>
          </ul>
        )
      },
      {
        title: "3. The Solution & Execution",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The Hypothesis:</strong> We believed that by moving to a <strong>token-based design system</strong> and a refactored front-end (Storybook/Chromium instance), we could standardize the experience and drastically reduce the time-to-market for new features and unblock i18n and public sector goals.</li>
            <li><strong className="text-white">Systemic Thinking:</strong> I led the creation of a comprehensive design system from the ground up, ensuring every component was WCAG 2.1 AA compliant and fully responsive.</li>
            <li><strong className="text-white">Simplifying the Journey:</strong> I structured the project into four distinct phases—Brand Refresh, Design System Creation, Front-End Refactor, and Final Cut-Over—to maintain business continuity without downtime.</li>
          </ul>
        )
      },
      {
        title: "4. Validation & Iteration",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The Testing:</strong> We utilized <strong>Storybook</strong> for real-time component testing and accessibility audits to ensure our "engine" met international standards (EN 301 549).</li>
            <li><strong className="text-white">The Feedback:</strong> Early internal testing revealed that the transition to tokens required a major mental shift for the engineering team, leading me to create a dedicated onboarding process for the contract developers.</li>
            <li><strong className="text-white">The Pivot:</strong> We shifted from a traditional "big bang" launch to a <strong>parallel-run model</strong>, allowing us to test the new architecture in isolated environments before the final scheduled cut-over in September 2026.</li>
          </ul>
        )
      },
      {
        title: "5. Business Impact & Results",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">Primary Metric:</strong> <strong>35% projected increase</strong> in Product Design velocity.</li>
            <li><strong className="text-white">Secondary Metric:</strong> <strong>50% projected increase</strong> in Engineering efficiency and <strong>40%</strong> in QA speed.</li>
            <li><strong className="text-white">Efficiency Metric:</strong> <strong>100% compliance</strong> with WCAG 2.1 AA and GDPR, removing legal blockers for international expansion.</li>
            <li><strong className="text-white">The Human Connection:</strong> This initiative transformed our internal culture from reactive "firefighting" to a proactive, system-first mindset that empowered the entire R&D org.</li>
          </ul>
        )
      },
      {
        title: "6. Retrospective & Leadership Growth",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">What Didn’t Go Well:</strong> Managing a high ratio of contract resources required more documentation overhead than initially anticipated, which slightly delayed the initial Phase 1 rollout.</li>
            <li><strong className="text-white">Next Steps:</strong> Following the September 2026 cut-over, my priority is to leverage this new architecture to launch a localized version of the platform specifically for the UK market.</li>
            <li><strong className="text-white">The Leadership Takeaway:</strong> This project proved my ability to sell a technical "under-the-hood" initiative to executive leadership by anchoring it to growth and risk mitigation rather than just aesthetics.</li>
          </ul>
        )
      }
    ],
    metrics: [
      { label: "Velocity Delta", value: "+35%", description: "Projected increase in Product Design velocity." },
      { label: "Accessibility", value: "100%", description: "Compliance with WCAG 2.1 AA and GDPR." },
      { label: "Engineering Efficiency", value: "+50%", description: "Projected increase in Engineering efficiency." }
    ],
    images: [
      { url: "https://picsum.photos/seed/engine/800/400?blur=2", caption: "The 'Engine' Diagram: 4-phase roadmap" },
      { url: "https://picsum.photos/seed/storybook/800/400?blur=2", caption: "System Architecture: Storybook instance alongside Figma Token library" },
      { url: "https://picsum.photos/seed/responsive/800/400?blur=2", caption: "Responsive Comparison: Before/After of a complex table" },
      { url: "https://picsum.photos/seed/a11y/800/400?blur=2", caption: "Accessibility Audit View: Component with accessibility annotations" }
    ]
  },
  { 
    id: 2, 
    title: "AI-Driven Revenue Management", 
    metric: "Core Product • AI/ML UX • Education", 
    tags: ["AI", "Revenue Management", "Growth Strategy"],
    problem: "Users were leaving significant revenue on the table due to unintelligence dynamic pricing, while existing tools were not built for campgrounds.",
    solution: "A dual-interface system with a 'Strategic Dashboard' for high-literacy managers and a 'Guided Action' flow for novice owners, focusing on Explainable AI.",
    process: "Conducted intensive usability sessions focused on 'Trust Benchmarks'. Pivoted from a purely automated system to a 'Human-in-the-Loop' model based on feedback.",
    impact: "70% projected adoption rate within the first 6 months of the beta. $0 external API costs by utilizing our proprietary ML model.",
    imageUrl: "https://res.cloudinary.com/datad8tms/image/upload/v1773082886/Revnue_Management_k5jrlb.png",
    altText: "A layered presentation of the Campspot Revenue Management dashboard. It includes an inventory grid for campsite management, performance charts showing occupancy and revenue impact, and the \"Campspot Compass\" AI side panel, which provides automated suggestions for adjusting base rates and stay lengths.",
    ariaLabel: "Campspot Revenue Management dashboard with AI-powered pricing suggestions.",
    ariaDescribedBy: "revenue-desc",
    ariaDescription: "Interface showing an inventory grid and the Campspot Compass AI panel for automated rate optimizations.",
    figmaLink: "https://www.figma.com/deck/OBQiUAlZSqj1ACnmfuwk6E",
    content: [
      {
        title: "1. The Strategic Context",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The Role:</strong> I acted as the Lead Product Strategist, bridging the gap between Data Science and the end-user.</li>
            <li><strong className="text-white">The Team:</strong> 1 PM, 1 Product Designer, 2 Data Scientists, 2 Engineers 1, QA.</li>
            <li><strong className="text-white">The Timeline:</strong> 0-to-1 build over 8 months Jan 2025 - Aug 2025, moving from raw data models to a live, predictive feedback loop.</li>
            <li><strong className="text-white">The Mission:</strong> To democratize sophisticated revenue management for campground owners, moving them from "gut-feeling" pricing to data-backed strategy.</li>
          </ul>
        )
      },
      {
        title: "2. Identifying the Opportunity",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The "Silent" Problem:</strong> Our users were leaving significant revenue on the table due to static pricing, while external revenue management tools were too expensive and were built to work hotels vs campgrounds which have different setups and needs.</li>
            <li><strong className="text-white">More Details:</strong> Market research showed that "Novice" users were intimidated by revenue management, while "Pro" users felt handcuffed by our existing system's lack of granular control.</li>
            <li><strong className="text-white">The Gap:</strong> Most revenue management tools and competing AI features provide a "Price" without the "Why." I identified that building trust through Explainable AI was the only way to drive adoption in a risk-averse industry.</li>
            <li><strong className="text-white">Selling the Vision:</strong> I pitched this as "The Revenue Co-Pilot," framing it as a tool that doesn't just change prices but educates the user on market trends to maximize ROI.</li>
          </ul>
        )
      },
      {
        title: "3. Solution & Execution",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The Hypothesis:</strong> If we visualize the expected return and the logic behind an AI suggestion, users will feel confident enough to automate their most critical business lever.</li>
            <li><strong className="text-white">Systemic Thinking:</strong> I designed a dual-interface system: a "Strategic Dashboard" for high-literacy managers and a "Guided Action" flow for novice owners.</li>
            <li><strong className="text-white">Simplifying the Journey:</strong> We focused on real-time feedback loops where every manual override helped the proprietary ML model learn the user's specific business goals.</li>
          </ul>
        )
      },
      {
        title: "4. Validation & Iteration",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The Testing:</strong> We conducted intensive usability sessions focused on "Trust Benchmarks"—measuring how much information was required before a user felt safe clicking "Apply."</li>
            <li><strong className="text-white">The Feedback:</strong> Users initially felt overwhelmed by the data density. I led a pivot to "Progressive Disclosure," hiding the math unless the user explicitly asked to see the "Why."</li>
            <li><strong className="text-white">The Pivot:</strong> We shifted from a purely automated system to a "Human-in-the-Loop" model, allowing users to set guardrails that the AI had to respect.</li>
          </ul>
        )
      },
      {
        title: "5. Business Impact & Results",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">Primary Metric:</strong> 70% projected adoption rate within the first 6 months of the beta.</li>
            <li><strong className="text-white">Efficiency Metric:</strong> $0 external API costs by utilizing our proprietary ML model instead of 3rd party services.</li>
            <li><strong className="text-white">Secondary Metric:</strong> A significant increase in user confidence scores, with 85% of testers stating they felt "more in control" of their business.</li>
            <li><strong className="text-white">The Human Connection:</strong> We moved the needle from user anxiety to user empowerment, turning a complex financial task into a competitive advantage.</li>
          </ul>
        )
      },
      {
        title: "6. Retrospective & Leadership Growth",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">What Didn’t Go Well:</strong> The initial data visualizations were too academic. I had to learn to "speak hospitality" rather than "speak data science" to make the tool resonate.</li>
            <li><strong className="text-white">Next Steps:</strong> Enhancing the ML model to include hyper-local event data (festivals, weather) to further refine predictive accuracy.</li>
            <li><strong className="text-white">The Leadership Takeaway:</strong> This project proved I can lead in the "AI/ML" space by focusing on Human-Centric Trust rather than just technical capability.</li>
          </ul>
        )
      }
    ],
    metrics: [
      { label: "Adoption Rate", value: "70%", description: "Projected adoption rate within the first 6 months." },
      { label: "API Costs", value: "$0", description: "Utilized proprietary ML model instead of 3rd party services." },
      { label: "User Confidence", value: "+85%", description: "Testers felt 'more in control' of their business." }
    ]
  },
  { 
    id: 3, 
    title: "The Integration Marketplace", 
    metric: "Growth Design • Platform Strategy", 
    tags: ["Marketplace", "Integrations", "Growth Strategy"],
    problem: "We were losing market share to competitors because they had more integration offerings. 97% of exiting parks cited a specific missing integration as the main cause for finding a new tool.",
    solution: "A 'Marketplace & Middleware' strategy, focusing on high-volume connectors to double offerings in half the time.",
    process: "Created a 'Tiered Integration Framework'. Moved from a purely 'Internal Setup' to a 'Self-Service Install'.",
    impact: "97% 'Boomerang' rate—nearly all lost customers returned. 2x increase in total integration offerings compared to lead competitor.",
    imageUrl: "https://res.cloudinary.com/datad8tms/image/upload/v1773079971/IntegrationsHub_fi3bnp.png",
    altText: "A high-fidelity mockup of a laptop screen displaying the Campspot Integrations Hub. The interface highlights active third-party connections like Mailchimp and RemoteLock, alongside a marketplace section for discovering new app integrations such as Lattice and Rippling.",
    ariaLabel: "Campspot Integrations Hub interface on a laptop mockup.",
    ariaDescribedBy: "integrations-desc",
    ariaDescription: "High-fidelity view of the integrations marketplace featuring Mailchimp, RemoteLock, and other third-party connections.",
    figmaLink: "https://www.figma.com/deck/quMywYrtxPwtp2G2GeJnoO",
    content: [
      {
        title: "1. The Strategic Context",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The Role:</strong> I was the Platform Architect, responsible for transforming a closed system into an open ecosystem.</li>
            <li><strong className="text-white">The Team:</strong> I collaborated with Product Management and External Partners to define the standards for our marketplace.</li>
            <li><strong className="text-white">The Timeline:</strong> A fast-tracked, phased rollout designed to stem customer churn within two quarters.</li>
            <li><strong className="text-white">The Mission:</strong> To scale our partner ecosystem and provide parks with the "plug-and-play" utility they were demanding.</li>
          </ul>
        )
      },
      {
        title: "2. Identifying the Opportunity",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The "Silent" Problem:</strong> We were losing market share to competitors simply because they had more "logos" on their integration page, even if their core product was inferior.</li>
            <li><strong className="text-white">The Proof:</strong> An analysis of churned accounts revealed that 97% of lost parks cited a specific missing integration as their primary reason for leaving.</li>
            <li><strong className="text-white">The Gap:</strong> Our custom-build approach to integrations was a bottleneck. We were building slowly while the market was moving exponentially.</li>
            <li><strong className="text-white">Selling the Vision:</strong> I pitched a "Marketplace & Middleware" strategy, focusing on high-volume connectors to double our offerings in half the time.</li>
          </ul>
        )
      },
      {
        title: "3. Solution & Execution",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The Hypothesis:</strong> By utilizing middlewares and a standardized "App Store" UI, we could satisfy the majority of user requests while significantly reducing internal engineering strain.</li>
            <li><strong className="text-white">Systemic Thinking:</strong> I created a "Tiered Integration Framework," using Effort + Return vs. Request Volume to decide between a direct build or a middleware connection.</li>
            <li><strong className="text-white">Simplifying the Journey:</strong> I designed a self-service marketplace where users could discover, vet, and "Boomerang" back to our platform once their specific tool was supported.</li>
          </ul>
        )
      },
      {
        title: "4. Validation & Iteration",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The Testing:</strong> We launched a "Coming Soon" marketplace segment to track click-intent, using that data to prioritize which integrations to build next.</li>
            <li><strong className="text-white">The Feedback:</strong> Partners found our initial API documentation too rigid. I led a redesign of the developer portal to lower the barrier for entry.</li>
            <li><strong className="text-white">The Pivot:</strong> We moved from a purely "Internal Setup" to a "Self-Service Install," allowing parks to manage their own connections and reducing support tickets by 40%.</li>
          </ul>
        )
      },
      {
        title: "5. Business Impact & Results",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">Primary Metric:</strong> 97% "Boomerang" rate—nearly all lost customers returned once their required integration was live.</li>
            <li><strong className="text-white">Efficiency Metric:</strong> 2x increase in total integration offerings compared to our lead competitor.</li>
            <li><strong className="text-white">Secondary Metric:</strong> 60% reduction in manual engineering hours per integration by utilizing the middleware strategy.</li>
            <li><strong className="text-white">The Human Connection:</strong> We restored customer loyalty by listening to their operational needs and closing the "Utility Gap."</li>
          </ul>
        )
      },
      {
        title: "6. Retrospective & Leadership Growth",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">What Didn’t Go Well:</strong> We underestimated the "Quality Control" needed for 3rd party middlewares, which required a post-launch "Cleanup" phase for data consistency.</li>
            <li><strong className="text-white">Next Steps:</strong> Opening the marketplace to 3rd party developers to create a truly decentralized "App Store" for the camping industry.</li>
            <li><strong className="text-white">The Leadership Takeaway:</strong> This project demonstrated my ability to make defensive strategic moves that turn into offensive market-share wins.</li>
          </ul>
        )
      }
    ],
    metrics: [
      { label: "Boomerang Rate", value: "97%", description: "Lost customers returned once integration was live." },
      { label: "Integration Offerings", value: "2x", description: "Increase compared to lead competitor." },
      { label: "Engineering Hours", value: "-60%", description: "Reduction in manual engineering hours per integration." }
    ]
  },
  { 
    id: 4, 
    title: "Bulk Utility Metering & Pro Workflows", 
    metric: "Core Product • Optimization", 
    tags: ["Utility Metering", "Pro Workflows", "Feature Improvement"],
    problem: "Early architecture relied on 'Wizards' that were great for beginners but a nightmare for pros who had to enter hundreds of utility readings daily.",
    solution: "A custom, high-density grid system that supported keyboard shortcuts, bulk-pasting, and real-time validation.",
    process: "Ran 'Speed Trials' against the old Wizard vs. the New Sheet UI. Added 'Bulk Error Highlighting' based on feedback.",
    impact: "65% reduction in time-on-task for monthly utility billing. 80% reduction in manual data entry errors.",
    videoUrl: "https://res.cloudinary.com/datad8tms/video/upload/v1773080160/Screen_Recording_2026-03-09_at_2.15.01_PM_oqvyxp.mov",
    altText: "A screen recording demonstrating the Utility Metering workflow within the Campspot platform. The video shows a user selecting a \"Reading Date\" (February 27, 2023) to load a list of campsites and their corresponding electric meter data. It highlights two methods of data entry: manual input, where a user types a new value directly into the \"New Reading\" column, and bulk import, where a CSV file titled \"2-27-23.csv\" is uploaded to automatically populate the entire grid with updated readings and calculated costs.",
    ariaLabel: "Interactive demo of manual and bulk CSV utility metering workflows.",
    ariaDescribedBy: "utility-desc",
    ariaDescription: "A screen recording demonstrating how users select dates, enter meter readings manually, and perform bulk updates via CSV import.",
    figmaLink: "https://www.figma.com/deck/uxi3oVr1gMolCYCF2bbJev",
    content: [
      {
        title: "1. The Strategic Context",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The Role:</strong> I served as the Principal UX Architect for our "Power User" tools.</li>
            <li><strong className="text-white">The Team:</strong> I worked with front-end engineers to implement high-performance, keyboard-first UI patterns.</li>
            <li><strong className="text-white">The Timeline:</strong> A 6-month overhaul of legacy "Wizard" architectures.</li>
            <li><strong className="text-white">The Mission:</strong> To eliminate the "Click-Tax" on repetitive, high-density professional workflows.</li>
          </ul>
        )
      },
      {
        title: "2. Identifying the Opportunity",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The "Silent" Problem:</strong> Our early architecture relied on "Wizards" that were great for beginners but a nightmare for pros who had to enter hundreds of utility readings daily.</li>
            <li><strong className="text-white">The Proof:</strong> User shadowing showed that park managers were literally keeping Excel sheets on the side because our UI was too slow to use directly.</li>
            <li><strong className="text-white">The Gap:</strong> The "Wizard" model forced a linear, one-by-one path. The "Pro" user needed a non-linear, Bulk-Entry environment.</li>
            <li><strong className="text-white">Selling the Vision:</strong> I pitched the "Sheet-First Paradigm," moving away from "hand-holding" and toward "professional efficiency."</li>
          </ul>
        )
      },
      {
        title: "3. Solution & Execution",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The Hypothesis:</strong> If we provide a familiar, spreadsheet-like interface within the app, we can reduce time-on-task by over 50% and virtually eliminate "Excel Shadow-Work."</li>
            <li><strong className="text-white">Systemic Thinking:</strong> I designed a custom, high-density grid system that supported keyboard shortcuts, bulk-pasting, and real-time validation.</li>
            <li><strong className="text-white">Simplifying the Journey:</strong> I future-proofed the architecture to allow for Wild Energy IoT integration, where the "Sheet" would auto-populate via hardware.</li>
          </ul>
        )
      },
      {
        title: "4. Validation & Iteration",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">The Testing:</strong> We ran "Speed Trials" against the old Wizard vs. the New Sheet UI, measuring both speed and error rates in high-stress environments.</li>
            <li><strong className="text-white">The Feedback:</strong> Pros loved the speed but missed the "safety" of the wizard. I added "Bulk Error Highlighting" to show exactly which row had an issue without stopping the flow.</li>
            <li><strong className="text-white">The Pivot:</strong> We added a "Hardware Sync" toggle early in the UI to prepare users for the transition to automated metering.</li>
          </ul>
        )
      },
      {
        title: "5. Business Impact & Results",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">Primary Metric:</strong> 65% reduction in time-on-task for monthly utility billing.</li>
            <li><strong className="text-white">Efficiency Metric:</strong> 80% reduction in manual data entry errors through real-time validation.</li>
            <li><strong className="text-white">Secondary Metric:</strong> Significant increase in "NPS" from our highest-value, high-density park customers.</li>
            <li><strong className="text-white">The Human Connection:</strong> We gave park managers hours of their lives back, removing the most hated part of their monthly operational cycle.</li>
          </ul>
        )
      },
      {
        title: "6. Retrospective & Leadership Growth",
        body: (
          <ul className="list-disc pl-5 space-y-2 text-[#d4d4d4]">
            <li><strong className="text-white">What Didn’t Go Well:</strong> The "Keyboard-First" focus had a steep learning curve for our less technical users, requiring the addition of a "Hint Mode" toggle.</li>
            <li><strong className="text-white">Next Steps:</strong> Fully automating the sheet via the Wild Energy API to move from "Efficient Entry" to "Zero Entry."</li>
            <li><strong className="text-white">The Leadership Takeaway:</strong> This project proved that Senior Design isn't just about simplification; it's about providing the right level of complexity and power for the professional user.</li>
          </ul>
        )
      }
    ],
    metrics: [
      { label: "Time-on-Task", value: "-65%", description: "Reduction in time for monthly utility billing." },
      { label: "Data Entry Errors", value: "-80%", description: "Reduction in errors through real-time validation." },
      { label: "NPS", value: "Increased", description: "Significant increase from high-value customers." }
    ]
  }
];

// --- MAIN APP COMPONENT ---
const TITLES = ['/ Design Leader', '/ Founding IC', '/ Product Strategist', '/ UX Architect'];

const LANGUAGES = [
  { name: 'English', flag: '🇺🇸', code: 'en' },
  { name: 'Français', flag: '🇫🇷', code: 'fr' },
  { name: 'Español', flag: '🇪🇸', code: 'es' },
  { name: '日本語', flag: '🇯🇵', code: 'ja' }
];

const getInitialLanguage = () => {
  const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
  if (match && match[1]) {
    const code = match[1].split('/')[2];
    const lang = LANGUAGES.find(l => l.code === code);
    if (lang) return lang.name;
  }
  return 'English';
};

const LighthouseGauge = ({ score, label }: { score: number, label: string }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            className="text-[#262626]"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
          <circle
            className="text-accent"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
        </svg>
        <span className="absolute text-accent font-bold text-xl">{score}</span>
      </div>
      <span className="text-xs font-mono text-[#a3a3a3] uppercase tracking-wider text-center leading-tight">{label}</span>
    </div>
  );
};

const LighthouseFooter = () => {
  return (
    <div className="flex flex-col items-center md:items-start w-full">
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <h4 className="text-sm font-bold text-[#f5f5f5]">Audited via Google Lighthouse</h4>
        </div>
        
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:flex md:flex-row md:justify-between md:gap-4 w-full">
          <LighthouseGauge score={96} label="Performance" />
          <LighthouseGauge score={100} label="Accessibility" />
          <LighthouseGauge score={100} label="Best Practices" />
          <LighthouseGauge score={100} label="SEO" />
        </div>

        <p className="text-[10px] text-[#737373] text-center md:text-left md:whitespace-nowrap mt-2">
          Metrics based on desktop performance. Mobile performance may vary; other categories remain consistent.
        </p>
      </div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [showA11yFeatures, setShowA11yFeatures] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileWorkOpen, setIsMobileWorkOpen] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  
  const [language, setLanguage] = useState(getInitialLanguage);
  const [isI18nOpen, setIsI18nOpen] = useState(false);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById('google-translate-script')) return;
      
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'en,fr,es,ja', autoDisplay: false },
          'google_translate_element'
        );
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    addGoogleTranslateScript();
  }, []);

  const handleLanguageChange = (lang: typeof LANGUAGES[0]) => {
    setLanguage(lang.name);
    setIsI18nOpen(false);
    
    const domain = window.location.hostname;
    const domainParts = domain.split('.');
    
    // 1. ALWAYS clear existing cookies and storage first to ensure a clean slate
    // This prevents multiple conflicting googtrans cookies from existing on different domain levels
    const paths = ['/', '/en', '/fr', '/es', '/ja'];
    paths.forEach(p => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${p};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${p}; SameSite=None; Secure`;
      for (let i = 0; i < domainParts.length; i++) {
        const d = domainParts.slice(i).join('.');
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${p}; domain=${d};`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${p}; domain=${d}; SameSite=None; Secure`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${p}; domain=.${d};`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${p}; domain=.${d}; SameSite=None; Secure`;
      }
    });
    window.localStorage.removeItem('googtrans');
    window.sessionStorage.removeItem('googtrans');

    // 2. If not English, set the new language cookie
    if (lang.code !== 'en') {
      document.cookie = `googtrans=/en/${lang.code}; path=/;`;
      document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${domain};`;
      document.cookie = `googtrans=/en/${lang.code}; path=/; domain=.${domain};`;
      document.cookie = `googtrans=/en/${lang.code}; path=/; SameSite=None; Secure`;
      document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${domain}; SameSite=None; Secure`;
      document.cookie = `googtrans=/en/${lang.code}; path=/; domain=.${domain}; SameSite=None; Secure`;
    }
    
    if (window.location.hash.includes('googtrans')) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    
    window.location.reload();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    setIsMobileWorkOpen(false);
  }, [currentPage, selectedProject]);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setSelectedProject(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#111202] text-[#f5f5f5] selection:bg-accent selection:text-[#111202] font-sans">
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-[#111202] px-4 py-2 font-bold z-50 rounded-sm"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="h-[57px] border-b border-[#262626] sticky top-0 bg-[#111202]/90 backdrop-blur-md z-50">
        <div className="w-full px-8 h-full flex justify-between items-center relative">
          <button 
            onClick={() => navigateTo('welcome')}
            aria-label="Dan Dechiara, Design Leader, Founding IC, Product Strategist, UX Architect - Home"
            className="font-bold text-xl tracking-tight hover:text-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent z-10 flex items-center relative group notranslate"
          >
            <span aria-hidden="true" className="flex items-center">
              <span className="hidden lg:inline">Dan Dechiara</span>
              <span className="lg:hidden">Dan D</span>
              <div className="relative h-[1.2em] inline-flex text-accent text-left items-center justify-start min-w-[180px] ml-1 [perspective:1000px]">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={titleIndex}
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: -90, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute left-0 origin-center whitespace-nowrap"
                  >
                    {TITLES[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </span>
            {showA11yFeatures && (
              <A11yTooltip 
                title="Accessible Animation" 
                description="Animation is hidden from screen readers using aria-hidden. A static aria-label provides the full context once."
                position="bottom"
              />
            )}
          </button>
          
          <nav aria-label="Main Navigation" className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
            <ul className="flex space-x-8 text-sm pointer-events-auto">
              <li>
                <button 
                  onClick={() => navigateTo('welcome')} 
                  className={`transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent py-1 border-b-2 ${currentPage === 'welcome' ? 'text-accent border-accent font-bold' : 'border-transparent hover:text-accent font-semibold'}`}
                  aria-current={currentPage === 'welcome' ? 'page' : undefined}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('about')} 
                  className={`transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent py-1 border-b-2 ${currentPage === 'about' ? 'text-accent border-accent font-bold' : 'border-transparent hover:text-accent font-semibold'}`}
                  aria-current={currentPage === 'about' ? 'page' : undefined}
                >
                  About
                </button>
              </li>
              <li className="relative group">
                <button 
                  onClick={() => navigateTo('work')} 
                  className={`transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent py-1 border-b-2 flex items-center gap-1 ${currentPage === 'work' ? 'text-accent border-accent font-bold' : 'border-transparent hover:text-accent font-semibold'}`}
                  aria-current={currentPage === 'work' ? 'page' : undefined}
                >
                  Work <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="bg-[#0C0D00] border border-[#262626] rounded-2xl shadow-xl flex flex-col">
                    <button
                      onClick={() => navigateTo('work')}
                      className="w-full text-left px-4 py-3 text-sm font-bold text-[#f5f5f5] hover:text-accent hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-b border-[#262626] cursor-pointer"
                    >
                      All Work ({PROJECTS.length})
                    </button>
                    {PROJECTS.map(p => (
                      <button
                        key={p.id}
                        onClick={() => {
                          navigateTo('work');
                          setTimeout(() => window.dispatchEvent(new CustomEvent('open-project', { detail: p.id })), 50);
                        }}
                        className="w-full text-left px-4 py-3 pl-8 text-sm font-bold text-[#f5f5f5] hover:text-accent hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-b border-[#262626] last:border-0 cursor-pointer flex items-center gap-2"
                      >
                        <span className="font-bold shrink-0">-</span>
                        {p.title}
                      </button>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('connect')} 
                  className={`transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent py-1 border-b-2 ${currentPage === 'connect' ? 'text-accent border-accent font-bold' : 'border-transparent hover:text-accent font-semibold'}`}
                  aria-current={currentPage === 'connect' ? 'page' : undefined}
                >
                  Connect
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 z-10">
            <button 
              role="switch"
              aria-checked={showA11yFeatures}
              onClick={() => setShowA11yFeatures(!showA11yFeatures)}
              className="hidden md:flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/50 rounded-sm p-1 -m-1 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="label-base text-[#f5f5f5] cursor-pointer">
                A11Y X-RAY
              </span>
              <div 
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${showA11yFeatures ? 'bg-accent group-hover:bg-accent-dark' : 'bg-[#737373] group-hover:bg-[#a3a3a3]'}`}
              >
                <span className={`inline-block h-3 w-3 transform rounded-full bg-[#111202] transition-transform ${showA11yFeatures ? 'translate-x-5' : 'translate-x-1'}`} />
              </div>
            </button>

            <div className="hidden md:block w-px h-6 bg-[#262626]"></div>

            <div className="hidden md:block relative">
              <button 
                onClick={() => setIsI18nOpen(!isI18nOpen)}
                className="flex items-center gap-1 text-[#f5f5f5] hover:text-accent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1 text-xl notranslate"
                aria-haspopup="true"
                aria-expanded={isI18nOpen}
                aria-label="Select Language"
              >
                <span>{LANGUAGES.find(l => l.name === language)?.flag || '🇺🇸'}</span>
                <ChevronDown size={14} className={`transition-transform ${isI18nOpen ? 'rotate-180' : ''}`} />
              </button>
              {isI18nOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-[#0C0D00] border border-[#262626] rounded-xl shadow-xl flex flex-col z-50 overflow-hidden notranslate">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.name}
                      onClick={() => handleLanguageChange(lang)}
                      className={`text-left px-4 py-2 text-sm font-bold transition-all duration-300 hover:bg-[#1a1a1a] flex items-center gap-2 ${language === lang.name ? 'text-accent bg-[#1a1a1a]' : 'text-[#f5f5f5] hover:text-accent'}`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              className="lg:hidden text-[#f5f5f5] hover:text-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[57px] bg-[#111202] z-40 lg:hidden flex flex-col px-6 py-8 border-t border-[#262626] animate-in slide-in-from-top-2 duration-200 overflow-y-auto">
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col space-y-6 text-xl font-bold">
              <li>
                <button 
                  onClick={() => navigateTo('welcome')} 
                  className={`w-full text-left transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${currentPage === 'welcome' ? 'text-accent' : 'text-[#f5f5f5]'}`}
                  aria-current={currentPage === 'welcome' ? 'page' : undefined}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('about')} 
                  className={`w-full text-left transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${currentPage === 'about' ? 'text-accent' : 'text-[#f5f5f5]'}`}
                  aria-current={currentPage === 'about' ? 'page' : undefined}
                >
                  About
                </button>
              </li>
              <li>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => navigateTo('work')} 
                      className={`text-left transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${currentPage === 'work' ? 'text-accent' : 'text-[#f5f5f5]'}`}
                      aria-current={currentPage === 'work' ? 'page' : undefined}
                    >
                      Work
                    </button>
                    <button 
                      onClick={() => setIsMobileWorkOpen(!isMobileWorkOpen)}
                      className="p-2 text-[#f5f5f5] hover:text-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                      aria-label="Toggle work"
                      aria-expanded={isMobileWorkOpen}
                    >
                      <ChevronDown size={24} className={`transition-transform ${isMobileWorkOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {isMobileWorkOpen && (
                    <div className="flex flex-col pl-4 mt-4 space-y-4 border-l-2 border-[#262626] animate-in slide-in-from-top-2 duration-200">
                      <button
                        onClick={() => navigateTo('work')}
                        className="text-left text-lg font-bold text-[#f5f5f5] hover:text-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                      >
                        All Work ({PROJECTS.length})
                      </button>
                      {PROJECTS.map(p => (
                        <button
                          key={p.id}
                          onClick={() => {
                            navigateTo('work');
                            setTimeout(() => window.dispatchEvent(new CustomEvent('open-project', { detail: p.id })), 50);
                          }}
                          className="text-left text-lg font-bold text-[#f5f5f5] hover:text-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm flex items-center gap-2 pl-4"
                        >
                          <span className="font-bold shrink-0">-</span>
                          {p.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('connect')} 
                  className={`w-full text-left transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${currentPage === 'connect' ? 'text-accent' : 'text-[#f5f5f5]'}`}
                  aria-current={currentPage === 'connect' ? 'page' : undefined}
                >
                  Connect
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <main id="main-content" className="flex-grow w-full max-w-6xl mx-auto px-6 flex flex-col">
        {showA11yFeatures && <A11yExplainerCard />}
        {currentPage === 'welcome' && <WelcomePage showA11y={showA11yFeatures} navigateTo={navigateTo} />}
        {currentPage === 'about' && <AboutPage showA11y={showA11yFeatures} />}
        {currentPage === 'work' && <WorkPage showA11y={showA11yFeatures} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />}
        {currentPage === 'connect' && <ConnectPage showA11y={showA11yFeatures} />}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#262626] bg-[#111202] py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Site map vertical */}
            <div className="flex flex-col gap-4 text-sm font-mono md:w-1/3">
              <button onClick={() => navigateTo('welcome')} className="text-[#a3a3a3] hover:text-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm text-left w-fit">Home</button>
              <button onClick={() => navigateTo('about')} className="text-[#a3a3a3] hover:text-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm text-left w-fit">About</button>
              <div className="flex flex-col items-start gap-2">
                <button onClick={() => navigateTo('work')} className="text-[#a3a3a3] hover:text-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm text-left w-fit">Work</button>
                <div className="flex flex-col items-start gap-2 pl-4 border-l-2 border-[#262626] ml-2 mt-2">
                  {PROJECTS.map(p => (
                    <button 
                      key={p.id} 
                      onClick={() => {
                        navigateTo('work');
                        setTimeout(() => window.dispatchEvent(new CustomEvent('open-project', { detail: p.id })), 50);
                      }} 
                      className="text-[#a3a3a3] hover:text-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm text-xs text-left"
                    >
                      {p.title}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => navigateTo('connect')} className="text-[#a3a3a3] hover:text-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm text-left w-fit">Connect</button>
            </div>

            {/* Right Column: Lighthouse, Copyright, Social */}
            <div className="flex flex-col gap-12 md:w-2/3 w-full">
              {/* Lighthouse Scores */}
              <LighthouseFooter />

              {/* Bottom row of right column: Copyright & Social */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                {/* Copyright section */}
                <div className="flex flex-col justify-start items-center md:items-start text-[#a3a3a3] text-sm text-center md:text-left order-last md:order-none w-full md:w-auto pt-8 border-t border-[#262626] md:pt-0 md:border-t-0">
                  <span>&copy; {new Date().getFullYear()} Dan Dechiara</span>
                  <span>Built with accessibility in mind.</span>
                </div>

                {/* Link farm */}
                <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 font-mono text-sm">
                  <a href="https://www.linkedin.com/in/dan-dechiara-b6131566/" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-accent transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" aria-label="LinkedIn">
                    <Linkedin size={20} aria-hidden="true" />
                  </a>
                  <a href="https://github.com/dan-designs" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-accent transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" aria-label="Github">
                    <Github size={20} aria-hidden="true" />
                  </a>
                  <a href="https://res.cloudinary.com/datad8tms/image/upload/fl_attachment/v1772838222/Dan-Dechiara-Resume-2026_qwxw7p.pdf" download="Dan-Dechiara-Resume-2026.pdf" className="text-[#a3a3a3] hover:text-accent transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" aria-label="Download Resume">
                    <Download size={20} aria-hidden="true" />
                  </a>
                  <a href="mailto:danpdech@gmail.com" className="text-[#a3a3a3] hover:text-accent transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" aria-label="Email">
                    <Mail size={20} aria-hidden="true" />
                  </a>
                  <a href="tel:8045131200" className="text-[#a3a3a3] hover:text-accent transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" aria-label="Phone">
                    <Phone size={20} aria-hidden="true" />
                  </a>
                  <a href="https://www.youtube.com/@the_tangle_knots" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-accent transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" aria-label="Youtube">
                    <Youtube size={20} aria-hidden="true" />
                  </a>
                  <a href="https://www.instagram.com/dan.dech/" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-accent transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" aria-label="Instagram">
                    <Instagram size={20} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile A11y FAB (Hidden as requested) */}
      <div className="hidden">
        <button 
          role="switch"
          aria-checked={showA11yFeatures}
          onClick={() => setShowA11yFeatures(!showA11yFeatures)}
          className="group flex items-center gap-3 bg-[#0C0D00] border border-[#a3a3a3] p-3 pr-4 rounded-full shadow-2xl cursor-pointer hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/50"
        >
          <Accessibility size={20} className="text-accent" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <span className="sr-only">
              A11Y X-RAY
            </span>
            <div 
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${showA11yFeatures ? 'bg-accent group-hover:bg-accent-dark' : 'bg-[#737373] group-hover:bg-[#a3a3a3]'}`}
            >
              <span className={`inline-block h-3 w-3 transform rounded-full bg-[#111202] transition-transform ${showA11yFeatures ? 'translate-x-5' : 'translate-x-1'}`} />
            </div>
          </div>
        </button>
      </div>

      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </div>
  );
}

// --- PAGE COMPONENTS ---

function WelcomePage({ showA11y, navigateTo }: { showA11y: boolean, navigateTo: (page: string) => void }) {
  return (
    <div className="animate-in fade-in duration-500 flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[calc(100svh-57px)] flex flex-col justify-center relative pt-6 pb-12 md:py-0" aria-labelledby="hero-heading">
        {showA11y && (
          <A11yTooltip 
            title="Semantic Structure & Nav" 
            description="Uses a logical heading hierarchy (H1 to H3) and a <section> tag with aria-labelledby. The navigation above uses aria-current='page' for state."
            position="top-center"
          />
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          {/* Left Column: Image */}
          <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] w-full md:w-[85%] md:max-w-[420px] lg:w-[72%] lg:max-w-[378px] mx-auto border-2 border-transparent group-hover:border-accent transition-colors duration-500">
            <img 
              src="https://res.cloudinary.com/datad8tms/image/upload/v1772823845/Dan-Dechiara_rdkrq2.png" 
              alt="A portrait of Dan Dechiara, a smiling man with light skin, outdoors amongst large grey boulders. He is wearing a black Patagonia zip-up hoodie over a purple shirt, a tan and orange baseball cap, and climbing gear including a harness and chalk bag. He is positioned between two rocks, looking directly at the camera."
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-500 ease-in-out"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center">
            <h1 id="hero-heading" className="sr-only">
              Design Leader, Growth Strategist, & IC Architecting High-Impact Systems.
            </h1>
            <h2 className="heading-2 mb-6 text-[#f5f5f5]">
              Hey 👋 I'm <span className="text-accent">Dan!</span>
            </h2>
            <div className="body-base text-[#f5f5f5] space-y-4 mb-8">
              <p>
                I'm a designer, big wall climber, techno DJ, and maker.
              </p>
              <p>
                I architect systems and growth strategies that operationalize design teams and unlock org-level goals.
              </p>
              <p>
                With 13 years of design experience, I align IC leadership and business strategy to drive product systems and deliver measurable impact.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigateTo('work')}
                className="inline-flex items-center gap-2 bg-accent text-[#111202] border-2 border-transparent px-6 py-3 font-semibold hover:bg-accent-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-accent/50 focus-visible:outline-none rounded-sm"
              >
                View Work
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <button 
                onClick={() => navigateTo('connect')}
                className="inline-flex items-center gap-2 border-2 border-[#a3a3a3] bg-transparent px-6 py-3 font-semibold hover:border-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-accent/50 focus-visible:outline-none rounded-sm"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ethos Section */}
      <section className="py-20 border-t border-[#262626] relative" aria-labelledby="ethos-heading">
        <div className="mb-12 flex flex-col items-start">
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 id="ethos-heading" className="heading-3 m-0">Design & Leadership Ethos</h2>
            <div className="flex flex-row lg:flex-col items-center lg:items-end gap-4 lg:gap-2">
              <a 
                href="https://www.deque.com/en-301-549-compliance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-dark font-mono text-sm font-bold flex items-center gap-1 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1 whitespace-nowrap"
              >
                About EN 301 549 <ExternalLink size={16} />
              </a>
              <a 
                href="https://www.w3.org/WAI/WCAG22/quickref/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-dark font-mono text-sm font-bold flex items-center gap-1 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1 whitespace-nowrap"
              >
                About W3C <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <p className="body-base text-[#a3a3a3] max-w-3xl text-left">
            I drive value by operationalizing the design craft across three critical domains. This framework ensures that technical governance and scalability are built in to every product decision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PrincipleCard 
            icon={<BarChart3 className="text-accent" size={24} aria-hidden="true" />}
            title="Strategic Product Architecture"
            description="I align product ecosystems with business objectives and architect scalable frameworks that drive growth. This approach prioritizes high-level strategy and technical feasibility to ensure that every design decision serves a measurable commercial outcome."
            showA11y={showA11y}
            a11yNote="Icons are hidden from screen readers using aria-hidden='true' to reduce noise."
          />
          <PrincipleCard 
            icon={<Layers className="text-accent" size={24} aria-hidden="true" />}
            title="Systemic Design Operations"
            description="I scale design organizations by operationalizing the craft through robust systems and governance. By bridging the gap between execution and strategy, I increase org velocity and ensure cross-platform consistency in complex product ecosystems."
            showA11y={showA11y}
            a11yNote="High contrast ratios (#f5f5f5 on #0C0D00) exceed WCAG AAA requirements."
          />
          <PrincipleCard 
            icon={<Accessibility className="text-accent" size={24} aria-hidden="true" />}
            title="Inclusive Design Governance"
            description="I integrate global accessibility standards by injecting WCAG AA, Section 508, and EN 301 549 directly into the product DNA. This approach treats inclusive design as a baseline of quality and technical governance, mitigating risk while ensuring universal usability."
            showA11y={showA11y}
            a11yNote="Semantic markup ensures this grid is read as a list of principles by assistive tech."
          />
        </div>
      </section>

      {/* Work Preview Section */}
      <section className="py-20 border-t border-[#262626] relative" aria-labelledby="preview-heading">
        <div className="flex items-center justify-between mb-12">
          <h2 id="preview-heading" className="heading-2">Latest Projects</h2>
          <button 
            onClick={() => navigateTo('work')}
            className="text-accent hover:text-accent-dark font-mono text-sm font-bold flex items-center gap-1 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1"
          >
            View All <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.slice(0, 4).map(project => (
            <PreviewCard 
              key={project.id}
              project={project}
              showA11y={showA11y}
              onClick={() => {
                navigateTo('work');
                // We need a slight delay to allow the page to switch before setting the project
                setTimeout(() => window.dispatchEvent(new CustomEvent('open-project', { detail: project.id })), 50);
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function AboutPage({ showA11y }: { showA11y: boolean }) {
  return (
    <div className="min-h-[calc(100svh-57px)] py-8 md:py-12 animate-in fade-in duration-500">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
        
        {/* The Story - Spans 2 columns */}
        <div className="md:col-span-2 bg-[#0C0D00] border border-[#262626] rounded-2xl p-8 relative">
          {showA11y && (
            <A11yTooltip 
              title="Reading Order" 
              description="CSS Grid is used for visual layout, but the DOM order remains logical for screen readers, ensuring the story is read before the sidebar."
              position="top-right"
            />
          )}
          <div className="flex items-center gap-3 mb-6 border-b border-[#262626] pb-4">
            <div className="w-12 h-12 rounded-full border border-[#262626] overflow-hidden" aria-hidden="true">
              <img src="https://res.cloudinary.com/datad8tms/image/upload/v1773070543/Circle_usgtys.png" alt="Dan Dechiara" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h2 className="heading-4">Dan Dechiara</h2>
              <p className="label-base text-accent">My Story</p>
            </div>
          </div>
          <div className="prose prose-invert max-w-none text-[#d4d4d4] space-y-4">
            <p>
              With 13 years of experience, I am a product design lead focused on creating and scaling complex SaaS ecosystems with accompanying consumer marketplaces. I specialize in systems, 0-to-1 feature delivery, growth, and inclusive design, and combine data-driven experimentation with hands-on user testing to deliver optimized, scale-ready products.
            </p>
            <p>
              Through my career, I’ve found that the most successful products are those that are built at the intersection of strategic business goals and high-impact design. Whether I’m leading a multi-phase, full-stack platform transformation, modernizing front-end architecture to unlock i18n and public-sector procurement, or reducing customer attrition by 77% annually through the 0-to-1 delivery of new features, my goal is always to translate complex data and user insights into operational, high-impact interfaces that service the org's strategic initiatives.
            </p>
            <p className="font-bold text-[#f5f5f5] pt-2">Core Areas of Expertise:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white">Growth & Revenue Strategy:</strong> Architecting automated growth levers and optimization tools that drive user engagement.</li>
              <li><strong className="text-white">Design Systems & Ops:</strong> Operationalizing design systems integrated with Storybook to increase velocity and reduce design-to-development handoff time.</li>
              <li><strong className="text-white">Accessibility Leadership:</strong> Championing inclusive design by embedding WCAG compliance into QA processes and leading team training to achieve 508/ADA standards.</li>
              <li><strong className="text-white">Strategic Roadmapping:</strong> Partnering with leadership to translate long-term product visions into actionable, high-value features.</li>
            </ul>
            <p className="font-bold text-[#f5f5f5] pt-2">When I’m not building design systems or mentoring teams, you can usually find me:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Producing & DJing in the world of Hardgroove, Techno, and UK Garage and often tinkering with my DAWless synthesizer setup.</li>
              <li>Working on accessibility-focused web projects for non-profits like the Little Giant Society.</li>
            </ul>
          </div>
        </div>

        {/* The Resume - Spans 1 column */}
        <div className="md:col-span-1 bg-[#0C0D00] border border-[#262626] rounded-2xl p-8 h-fit">
          <div className="flex items-center gap-2 mb-6 text-accent">
            <Briefcase size={20} aria-hidden="true" />
            <h2 className="heading-5 text-[#f5f5f5]">Experience</h2>
          </div>
          <div className="space-y-6">
            <ResumeItem 
              role="Senior Product Designer" 
              company="Campspot" 
              period="Aug 2022 - Current" 
            />
            <ResumeItem 
              role="Principal Product Designer" 
              company="Practimind Health" 
              period="Nov 2021 - Dec 2022" 
            />
            <ResumeItem 
              role="Senior Product Designer" 
              company="Bellum AI" 
              period="Feb 2022 - Aug 2022" 
            />
            <ResumeItem 
              role="Senior UX/UI Designer" 
              company="Teacup Tech Systems" 
              period="Aug 2019 - Aug 2021" 
            />
            <ResumeItem 
              role="Owner, Operator, Sole Designer" 
              company="Dan_Designs" 
              period="Apr 2017 - Jul 2019" 
            />
            <ResumeItem 
              role="UX/UI Designer" 
              company="Perceptronics Solutions" 
              period="Aug 2014 - Apr 2017" 
            />
            <ResumeItem 
              role="UX/UI Designer" 
              company="Bizy" 
              period="Jul 2013 - Mar 2014" 
            />
          </div>
        </div>

        {/* Skills Grid - Spans 2 columns */}
        <div className="md:col-span-2 bg-[#0C0D00] border border-[#262626] rounded-2xl p-8 relative">
          {showA11y && (
            <A11yTooltip 
              title="Reducing Audio Clutter" 
              description="Decorative icons use aria-hidden='true' to prevent screen readers from announcing redundant visual information."
              position="top-right"
            />
          )}
          <div className="flex items-center gap-2 mb-6 text-accent">
            <Wrench size={20} aria-hidden="true" />
            <h2 className="heading-5 text-[#f5f5f5]">Tools</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <h3 className="label-lg text-[#a3a3a3] mb-3 border-b border-[#262626] pb-2">Design & Strategy</h3>
              <ul className="space-y-2 text-sm text-[#d4d4d4]">
                <li>Accessibility (WCAG 2.1 AA)</li>
                <li>Dovetail</li>
                <li>FigJam / Miro</li>
                <li>Figma (Advanced / Systems)</li>
                <li>Growth & Revenue Modeling</li>
                <li>Maze</li>
                <li>User Research & Testing</li>
                <li>UserTesting.com</li>
                <li>UX Architecture & Flows</li>
              </ul>
            </div>
            <div>
              <h3 className="label-lg text-[#a3a3a3] mb-3 border-b border-[#262626] pb-2">Engineering & Dev</h3>
              <ul className="space-y-2 text-sm text-[#d4d4d4]">
                <li>CSS3 / Tailwind CSS / Sass</li>
                <li>Git / Version Control</li>
                <li>HTML5 / Semantic Markup</li>
                <li>JavaScript / TypeScript</li>
                <li>React (Component Level)</li>
                <li>Storybook Integration</li>
              </ul>
            </div>
            <div>
              <h3 className="label-lg text-[#a3a3a3] mb-3 border-b border-[#262626] pb-2">Product & Analytics</h3>
              <ul className="space-y-2 text-sm text-[#d4d4d4]">
                <li>A/B Testing Platforms</li>
                <li>Agile / Scrum Methodologies</li>
                <li>Cross-functional Leadership</li>
                <li>Google Analytics</li>
                <li>Jira / Linear / Asana</li>
                <li>Looker</li>
                <li>Loom</li>
                <li>Mixpanel / Amplitude</li>
                <li>Pendo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Personal Interests - Spans 1 column */}
        <div className="md:col-span-1 bg-[#0C0D00] border border-[#262626] rounded-2xl p-8 relative overflow-hidden group">
          {/* Decorative background element */}
          <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <Disc size={160} aria-hidden="true" />
          </div>
          
          <div className="flex items-center gap-2 mb-6 text-accent relative z-10">
            <Disc size={20} aria-hidden="true" />
            <h2 className="heading-5 text-[#f5f5f5]">Outside of Work</h2>
          </div>
          <div className="relative z-10">
            <p className="body-sm text-[#d4d4d4] mb-4">
              Outside of design, I'm a DJ and Producer. My setup is heavily focused on DAWless hardware, analog synths, and drum machines.
            </p>
            <div className="bg-[#111202] border border-[#262626] p-4 rounded-2xl">
              <div className="label-base text-[#a3a3a3] mb-2">Current Rotation</div>
              <ul className="space-y-1 text-sm font-medium text-accent">
                <li>&gt; Hardgroove</li>
                <li>&gt; Techno</li>
                <li>&gt; UK Garage</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function WorkPage({ showA11y, selectedProject, setSelectedProject }: { showA11y: boolean, selectedProject: number | null, setSelectedProject: (id: number | null) => void }) {
  
  // Listen for custom event from Welcome page
  useEffect(() => {
    const handleOpenProject = (e: Event) => {
      const customEvent = e as CustomEvent;
      setSelectedProject(customEvent.detail);
    };
    window.addEventListener('open-project', handleOpenProject);
    return () => window.removeEventListener('open-project', handleOpenProject);
  }, [setSelectedProject]);

  if (selectedProject !== null) {
    const project = PROJECTS.find(p => p.id === selectedProject);
    if (!project) return null;

    return (
      <div className="min-h-[calc(100svh-57px)] py-12 md:py-20 animate-in slide-in-from-right-8 duration-500">
        <button 
          onClick={() => setSelectedProject(null)}
          className="flex items-center gap-2 text-[#a3a3a3] hover:text-accent font-mono text-sm mb-8 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2 py-1 -ml-2"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back to Work
        </button>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono border border-[#262626] px-2 py-1 text-[#d4d4d4] bg-[#0C0D00]">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="heading-1 mb-6">{project.title}</h1>
          <div className="inline-block bg-accent/10 border border-accent/30 text-accent px-4 py-2 font-mono text-sm mb-8">
            {project.metric}
          </div>
          
          <div className="w-full aspect-[21/9] bg-[#0C0D00] border border-[#262626] rounded-2xl relative flex items-center justify-center overflow-hidden">
            {project.videoUrl ? (
              <>
                <video 
                  src={project.videoUrl} 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  aria-label={project.ariaLabel}
                  aria-describedby={project.ariaDescribedBy ? `${project.ariaDescribedBy}-hero` : undefined}
                />
                {project.ariaDescription && (
                  <p id={`${project.ariaDescribedBy}-hero`} className="sr-only">{project.ariaDescription}</p>
                )}
              </>
            ) : project.imageUrl ? (
              <>
                <img 
                  src={project.imageUrl} 
                  alt={project.altText || `${project.title} hero`} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                  aria-label={project.ariaLabel}
                  aria-describedby={project.ariaDescribedBy ? `${project.ariaDescribedBy}-hero` : undefined}
                />
                {project.ariaDescription && (
                  <p id={`${project.ariaDescribedBy}-hero`} className="sr-only">{project.ariaDescription}</p>
                )}
              </>
            ) : (
              <>
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="text-[#a3a3a3] font-mono text-sm z-10">[{project.title} Hero Image]</div>
              </>
            )}
          </div>
        </div>

        {/* Deep Dive Content */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-[#262626] pt-12">
          <div className="md:col-span-2 space-y-12">
            {project.content ? (
              project.content.map((section: any, index: number) => (
                <section key={index}>
                  <h2 className="heading-3 mb-4 flex items-center gap-2">
                    <span className="text-accent font-mono text-sm">0{index + 1}.</span> {section.title.replace(/^\d+\.\s*/, '')}
                  </h2>
                  <div className="body-lg text-[#d4d4d4]">{section.body}</div>
                </section>
              ))
            ) : (
              <>
                <section>
                  <h2 className="heading-3 mb-4 flex items-center gap-2">
                    <span className="text-accent font-mono text-sm">01.</span> The Problem
                  </h2>
                  <p className="body-lg text-[#d4d4d4]">{project.problem}</p>
                </section>
                
                <section>
                  <h2 className="heading-3 mb-4 flex items-center gap-2">
                    <span className="text-accent font-mono text-sm">02.</span> The Process
                  </h2>
                  <p className="body-lg text-[#d4d4d4]">{project.process}</p>
                </section>

                <section>
                  <h2 className="heading-3 mb-4 flex items-center gap-2">
                    <span className="text-accent font-mono text-sm">03.</span> The Solution
                  </h2>
                  <p className="body-lg text-[#d4d4d4]">{project.solution}</p>
                </section>
              </>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="bg-[#0C0D00] border border-[#262626] rounded-2xl p-6 sticky top-24">
              <h3 className="heading-5 mb-4 border-b border-[#262626] pb-2">Key Metrics</h3>
              {project.metrics ? (
                <div className="space-y-6">
                  {project.metrics.map((m: any, idx: number) => (
                    <div key={idx}>
                      <div className="text-3xl font-bold text-accent mb-1">{m.value}</div>
                      <div className="text-[#f5f5f5] font-medium mb-1">{m.label}</div>
                      <p className="text-[#a3a3a3] text-sm">{m.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="text-3xl font-bold text-accent mb-2">{project.metric.split(' ')[0]}</div>
                  <p className="text-[#a3a3a3] text-sm">{project.metric.substring(project.metric.indexOf(' ') + 1)}</p>
                </>
              )}
              
              {showA11y && (
                <div className="mt-8 pt-4 border-t border-accent/20 text-sm text-accent bg-accent/5 p-4 rounded-sm">
                  <strong className="label-base block mb-1">A11y Note:</strong>
                  Data visualization and metrics are accompanied by clear text descriptions, ensuring screen reader users get the full context without relying on visual cues alone.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAB Button */}
        <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-bottom-8 duration-500">
          <a 
            href={project.figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-[#050505] px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(242,125,38,0.3)] hover:shadow-[0_0_30px_rgba(242,125,38,0.5)] hover:scale-105 transition-all duration-300"
          >
            <Eye size={18} />
            View Case Study
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100svh-57px)] py-12 md:py-20 animate-in fade-in duration-500">
      <div className="mb-12 relative">
        {showA11y && (
          <A11yTooltip 
            title="EN 301 549 Contrast" 
            description="Project tags use specific grays to ensure they pass the strict 4.5:1 text contrast minimums. Borders are decorative and use #262626."
            position="top-center"
          />
        )}
        <h1 className="heading-2 mb-4 text-[#f5f5f5]">Latest Projects</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map(project => (
          <ProjectGridCard 
            key={project.id} 
            project={project} 
            onClick={() => setSelectedProject(project.id)}
            showA11y={showA11y}
          />
        ))}
      </div>
    </div>
  );
}

function ConnectPage({ showA11y }: { showA11y: boolean }) {
  return (
    <div className="w-full min-h-[calc(100svh-57px)] flex flex-col items-center justify-center animate-in fade-in duration-500 relative py-12">
      {showA11y && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col gap-4 z-40 w-full max-w-xs">
          <A11yTooltip 
            title="Frictionless Access" 
            description="Forms can be accessibility barriers. Providing direct links to email and phone ensures users can communicate using their preferred, accessible tools."
            position="static"
          />
          <A11yTooltip 
            title="Interactive Focus & Contrast" 
            description="Focus states use a high-contrast 2px outline with an offset. Decorative borders use #262626 as they don't require 3:1 contrast."
            position="static"
          />
        </div>
      )}
      
      <div className="w-full max-w-2xl text-center mb-10">
        <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border border-[#262626]" aria-hidden="true">
           <img src="https://res.cloudinary.com/datad8tms/image/upload/v1773070543/Circle_usgtys.png" alt="Dan Dechiara" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <h1 className="heading-3 mb-2">Dan Dechiara</h1>
      </div>

      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <LinkTreeButton 
          icon={<Linkedin size={20} aria-hidden="true" />} 
          label="LinkedIn" 
          subtext="Professional Network"
          href="https://linkedin.com/in/dan-dechiara-b6131566" 
        />
        <LinkTreeButton 
          icon={
            <div className="relative w-5 h-5">
              <FileText size={20} className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0" aria-hidden="true" />
              <Download size={20} className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
            </div>
          } 
          label="Resume" 
          subtext="download"
          href="https://res.cloudinary.com/datad8tms/image/upload/fl_attachment/v1772838222/Dan-Dechiara-Resume-2026_qwxw7p.pdf" 
          download="Dan-Dechiara-Resume-2026.pdf"
        />
        <LinkTreeButton 
          icon={<Mail size={20} aria-hidden="true" />} 
          label="Email" 
          subtext="danpdech@gmail.com"
          href="mailto:danpdech@gmail.com" 
        />
        <LinkTreeButton 
          icon={<Phone size={20} aria-hidden="true" />} 
          label="Phone" 
          subtext="804.513.1200"
          href="tel:8045131200" 
        />
      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function PrincipleCard({ icon, title, description, showA11y, a11yNote }: { icon: React.ReactNode, title: string, description: string, showA11y: boolean, a11yNote: string }) {
  return (
    <div className="bg-[#0C0D00] border border-[#262626] rounded-2xl p-8 relative group">
      {showA11y && (
        <div className="label-sm absolute -top-3 -right-3 bg-accent text-[#111202] px-2 py-1 z-10 shadow-lg">
          A11y Note
        </div>
      )}
      <div className="mb-6" aria-hidden="true">
        {icon}
      </div>
      <h3 className="heading-5 mb-3">{title}</h3>
      <p className="body-base text-[#a3a3a3] mb-4">
        {description}
      </p>
      
      {showA11y && (
        <div className="mt-6 pt-4 border-t border-accent/20 text-sm text-accent bg-accent/5 p-4 rounded-sm">
          <strong className="label-base block mb-1">Behind the scenes:</strong>
          {a11yNote}
        </div>
      )}
    </div>
  );
}

function PreviewCard({ project, onClick, showA11y }: { project: any, onClick: () => void, showA11y: boolean }) {
  return (
    <article className="bg-[#0C0D00] border border-[#262626] rounded-2xl flex flex-col group relative hover:border-accent transition-colors cursor-pointer" onClick={onClick}>
      {showA11y && project.id === 1 && (
        <A11yTooltip 
          title="Focus Management" 
          description="The entire card is clickable via a pseudo-element on the link, keeping the DOM clean and avoiding nested interactive elements."
          position="top-right"
        />
      )}
      {showA11y && project.id === 2 && (
        <A11yTooltip 
          title="Accessible Imagery" 
          description="Abstract image placeholders use role='img' and descriptive aria-labels so assistive technologies don't skip them as empty divs."
          position="top-right"
        />
      )}
      <div className="aspect-video bg-[#171717] border-b border-[#262626] relative flex items-center justify-center overflow-hidden rounded-t-2xl" role="img" aria-label={project.ariaLabel || `${project.title} preview`}>
        {project.videoUrl ? (
          <>
            <video 
              src={project.videoUrl} 
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
              autoPlay 
              loop 
              muted 
              playsInline
              aria-label={project.ariaLabel}
              aria-describedby={project.ariaDescribedBy ? `${project.ariaDescribedBy}-preview` : undefined}
            />
            {project.ariaDescription && (
              <p id={`${project.ariaDescribedBy}-preview`} className="sr-only">{project.ariaDescription}</p>
            )}
          </>
        ) : project.imageUrl ? (
          <>
            <img 
              src={project.imageUrl} 
              alt={project.altText || `${project.title} preview`} 
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
              referrerPolicy="no-referrer" 
              aria-label={project.ariaLabel}
              aria-describedby={project.ariaDescribedBy ? `${project.ariaDescribedBy}-preview` : undefined}
            />
            {project.ariaDescription && (
              <p id={`${project.ariaDescribedBy}-preview`} className="sr-only">{project.ariaDescription}</p>
            )}
          </>
        ) : (
          <>
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="text-[#a3a3a3] font-mono text-sm z-10">[{project.title} Visual]</div>
          </>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-accent font-mono text-xs mb-4 border border-accent/20 bg-accent/5 inline-block px-2 py-1 self-start">
          {project.metric}
        </div>
        <h3 className="heading-5 mb-4">
          <button 
            className="text-left hover:text-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm before:absolute before:inset-0 cursor-pointer"
          >
            {project.title}
          </button>
        </h3>
        <p className="body-sm text-[#a3a3a3] mb-6 flex-grow line-clamp-2">
          {project.problem}
        </p>
        <div className="mt-auto flex items-center text-sm text-[#a3a3a3] group-hover:text-accent transition-colors font-mono uppercase tracking-wider">
          View Project <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}

function ProjectGridCard({ project, onClick, showA11y }: { project: any, onClick: () => void, showA11y: boolean }) {
  return (
    <article className="group relative flex flex-col bg-[#0C0D00] border border-[#262626] rounded-2xl hover:border-accent transition-colors cursor-pointer" onClick={onClick}>
      <div className="aspect-video bg-[#171717] border-b border-[#262626] relative flex items-center justify-center overflow-hidden rounded-t-2xl" role="img" aria-label={project.ariaLabel || `${project.title} preview`}>
        {project.videoUrl ? (
          <>
            <video 
              src={project.videoUrl} 
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
              autoPlay 
              loop 
              muted 
              playsInline
              aria-label={project.ariaLabel}
              aria-describedby={project.ariaDescribedBy ? `${project.ariaDescribedBy}-grid` : undefined}
            />
            {project.ariaDescription && (
              <p id={`${project.ariaDescribedBy}-grid`} className="sr-only">{project.ariaDescription}</p>
            )}
          </>
        ) : project.imageUrl ? (
          <>
            <img 
              src={project.imageUrl} 
              alt={project.altText || `${project.title} preview`} 
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
              referrerPolicy="no-referrer" 
              aria-label={project.ariaLabel}
              aria-describedby={project.ariaDescribedBy ? `${project.ariaDescribedBy}-grid` : undefined}
            />
            {project.ariaDescription && (
              <p id={`${project.ariaDescribedBy}-grid`} className="sr-only">{project.ariaDescription}</p>
            )}
          </>
        ) : (
          <>
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="text-[#a3a3a3] font-mono text-sm z-10">[{project.title} Visual]</div>
          </>
        )}
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="text-accent font-mono text-xs mb-3 border border-accent/20 bg-accent/5 inline-block px-2 py-1 self-start">
          {project.metric}
        </div>
        <h3 className="heading-4 mb-4">
          <button 
            className="text-left hover:text-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm before:absolute before:inset-0 cursor-pointer"
          >
            {project.title}
          </button>
        </h3>
        <p className="body-base text-[#a3a3a3] mb-6 flex-grow line-clamp-2">
          {project.problem}
        </p>
        <div className="mt-auto mb-6 flex items-center text-sm text-[#a3a3a3] group-hover:text-accent transition-colors font-mono uppercase tracking-wider">
          Read More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </div>
        <ul className="flex flex-wrap gap-2 relative z-10" aria-label="Technologies used">
          {project.tags.map((tag: string) => (
            <li key={tag} className="text-xs font-mono border border-[#262626] px-2 py-1 text-[#d4d4d4] bg-[#111202]">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ResumeItem({ role, company, period }: { role: string, company: string, period: string }) {
  return (
    <div className="border-l-2 border-[#262626] pl-4 relative">
      <div className="absolute w-2 h-2 bg-accent rounded-full -left-[5px] top-1.5"></div>
      <h3 className="text-sm font-bold text-[#f5f5f5]">{role}</h3>
      <div className="flex flex-col mt-1 gap-1">
        <span className="text-sm text-[#a3a3a3]">{company}</span>
        <span className="label-base text-[#a3a3a3]">{period}</span>
      </div>
    </div>
  );
}

function LinkTreeButton({ icon, label, subtext, href, download }: { icon: React.ReactNode, label: string, subtext: string, href: string, download?: boolean | string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={download}
      className="flex items-center p-4 bg-[#0C0D00] border border-[#262626] rounded-2xl hover:border-accent hover:bg-accent hover:text-[#111202] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#111202]"
    >
      <div className="mr-4 text-accent group-hover:text-[#111202] transition-colors">
        {icon}
      </div>
      <div className="flex-grow text-left">
        <div className="font-bold">{label}</div>
        <div className="text-xs font-mono text-[#a3a3a3] group-hover:text-[#111202]/70 transition-colors">{subtext}</div>
      </div>
      <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}

// Simple external link icon component since we didn't import it at the top to save space
function ExternalLink({ size, className }: { size: number, className?: string }) {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}

function A11yTooltip({ title, description, position = 'top-right', className = '' }: { title: string, description: string, position?: 'top-right' | 'top-left' | 'top-right-inset' | 'top-left-inset' | 'top-center' | 'bottom' | 'static', className?: string }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const positionClasses = {
    'top-right': 'absolute -top-4 -right-4',
    'top-left': 'absolute -top-4 -left-4',
    'top-right-inset': 'absolute top-4 right-4',
    'top-left-inset': 'absolute top-4 left-4',
    'top-center': 'absolute top-4 left-1/2 -translate-x-1/2',
    'bottom': 'absolute top-full mt-2 left-0',
    'static': 'relative',
  };

  return (
    <div role="status" aria-live="polite" className={`${positionClasses[position]} ${className} max-w-xs bg-[#171717] border border-accent p-4 shadow-2xl z-40 animate-in fade-in slide-in-from-bottom-2 duration-300`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} aria-hidden="true" />
          <h4 className="label-lg text-accent">{title}</h4>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsCollapsed(!isCollapsed);
          }}
          className="text-accent hover:text-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-0.5"
          aria-label={isCollapsed ? "Expand tooltip" : "Collapse tooltip"}
          aria-expanded={!isCollapsed}
        >
          {isCollapsed ? <Plus size={16} aria-hidden="true" /> : <Minus size={16} aria-hidden="true" />}
        </button>
      </div>
      {!isCollapsed && (
        <p className="body-sm text-[#d4d4d4] mt-2">
          {description}
        </p>
      )}
    </div>
  );
}

function A11yExplainerCard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div role="status" aria-live="polite" className="fixed top-[80px] right-6 max-w-sm bg-[#171717] border border-accent p-5 shadow-2xl z-40 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2">
          <Eye className="text-accent shrink-0 mt-0.5" size={18} aria-hidden="true" />
          <h4 className="label-lg text-accent text-lg">What is A11Y?</h4>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsCollapsed(!isCollapsed);
          }}
          className="text-accent hover:text-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-0.5"
          aria-label={isCollapsed ? "Expand A11Y explainer" : "Collapse A11Y explainer"}
          aria-expanded={!isCollapsed}
        >
          {isCollapsed ? <Plus size={18} aria-hidden="true" /> : <Minus size={18} aria-hidden="true" />}
        </button>
      </div>
      
      {!isCollapsed && (
        <>
          <p className="body-sm text-[#d4d4d4] mb-4 mt-3">
            "A11Y" is a numeronym for Accessibility (A, followed by 11 letters, followed by Y). It represents the practice of making digital experiences usable by everyone, regardless of disability.
          </p>
          <div className="flex flex-col gap-3">
            <div className="border-l-2 border-[#262626] pl-3 hover:border-accent transition-colors">
              <h5 className="font-bold text-accent text-sm mb-1">WCAG 2.2 AA</h5>
              <p className="text-xs text-[#a3a3a3]">The global standard for web accessibility, ensuring content is perceivable, operable, understandable, and robust.</p>
            </div>
            <div className="border-l-2 border-[#262626] pl-3 hover:border-accent transition-colors">
              <h5 className="font-bold text-accent text-sm mb-1">Section 508</h5>
              <p className="text-xs text-[#a3a3a3]">US federal law requiring electronic and information technology to be accessible.</p>
            </div>
            <div className="border-l-2 border-[#262626] pl-3 hover:border-accent transition-colors">
              <h5 className="font-bold text-accent text-sm mb-1">EN 301 549</h5>
              <p className="text-xs text-[#a3a3a3]">The European standard specifying accessibility requirements for ICT products.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
