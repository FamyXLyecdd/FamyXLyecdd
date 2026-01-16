const fs = require('fs');

const username = "FamyXLyecdd";
const name = "FamySabishii";
const primaryColor = "bc13fe";
const secondaryColor = "00f0ff";

// --- HELPERS ---
const center = (content) => `<div align="center">\n\n${content}\n\n</div>`;
const details = (summary, content) => `<details>\n<summary>${summary}</summary>\n\n${content}\n\n</details>`;
const img = (src, alt, width) => `<img src="${src}" alt="${alt}" ${width ? `width="${width}"` : ''} />`;

// --- DATA ---
const badges = {
    languages: [
        "lua", "typescript", "javascript", "python", "html5", "css3", "cpp", "csharp", "rust", "go", "java", "php", "ruby", "swift", "kotlin", "dart"
    ],
    frameworks: [
        "react", "nextjs", "vuejs", "angular", "svelte", "node.js", "express", "django", "flask", "fastapi", "spring", "laravel", "rails", "flutter", "react_native", "electron"
    ],
    tools: [
        "git", "github", "gitlab", "docker", "kubernetes", "jenkins", "travisci", "circleci", "aws", "azure", "gcp", "firebase", "mongodb", "postgresql", "mysql", "redis", "nginx", "apache", "linux", "ubuntu", "debian", "arch", "windows", "vscode", "vim", "neovim", "figma", "unity", "unreal"
    ]
};

const repos = [
    { name: "FamyyUILib", lang: "Lua", desc: "Premium UI Library for Roblox. Smooth, modern, and beautiful.", stars: "100+", forks: "50+" },
    { name: "KowaMoon", lang: "TypeScript", desc: "Next-gen web application framework.", stars: "80+", forks: "20+" },
    { name: "bitterfamy", lang: "Unknown", desc: "Experimental codebase.", stars: "10", forks: "2" },
    { name: "cmfamyy-scripts-loader", lang: "Lua", desc: "Universal Script Loader.", stars: "150+", forks: "40+" },
    { name: "famyfamily", lang: "HTML", desc: "Community landing page.", stars: "20", forks: "5" },
    { name: "gato-phone", lang: "JavaScript", desc: "Mobile emulation layer.", stars: "30", forks: "8" },
    { name: "legitimacy", lang: "CSS", desc: "Styles and themes.", stars: "12", forks: "1" },
    { name: "mobileroblox", lang: "Python", desc: "Automation tools.", stars: "55", forks: "12" },
    { name: "personal-site", lang: "TypeScript", desc: "V4 Personal Portfolio.", stars: "90+", forks: "15" },
    { name: "rblxgenerator", lang: "HTML", desc: "Generator tools.", stars: "25", forks: "3" },
    { name: "reroll", lang: "Python", desc: "Reroll automation script.", stars: "200+", forks: "50+" },
    { name: "roblox-live", lang: "Unknown", desc: "Live service capabilities.", stars: "40", forks: "10" },
    { name: "SMMFamy", lang: "JavaScript", desc: "Social Media Manager.", stars: "60", forks: "20" },
    { name: "sweetfamy", lang: "TypeScript", desc: "Core collection of utilities.", stars: "75", forks: "25" },
    { name: "Tracker", lang: "TypeScript", desc: "Advanced tracking system.", stars: "30", forks: "5" },
    { name: "xymaff-admin", lang: "Lua", desc: "Admin system for games.", stars: "120+", forks: "60+" }
];

// --- SECTIONS ---

const header = center(`
<!-- HEADER START -->
${img("https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=40&pause=1000&color=BC13FE&center=true&vCenter=true&width=600&lines=System.init(%22FamyXLyecdd%22)%3B;Lead+Frontend+Architect;Pixel-Perfect+UI+Designe;Roblox+Lua+Expert;Wake+Up%2C+User...", "Typing Header")}
<br/>
${img("https://github-readme-stats.vercel.app/api?username=FamyXLyecdd&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=bc13fe&icon_color=00f0ff&text_color=ffffff", "Stats")}
${img("https://github-readme-streak-stats.herokuapp.com/?user=FamyXLyecdd&theme=tokyonight&hide_border=true&background=00000000&ring=bc13fe&fire=bc13fe&currStreakLabel=bc13fe", "Streak")}
<!-- HEADER END -->
`);

const about = `
## ⚡ System Status: ONLINE

\`\`\`yaml
User: ${name}
Role: Architect / Developer
Location: The Void
Status: Coding...
Specs:
  - Brain: 100% Efficiency
  - Coffee: Limitless
  - Aesthetic: Cyberpunk 2077
\`\`\`

> "If it looks good enough, it is wrong. It must look mathematical, deliberate, and expensive."  
> — *Protocol 50*

---
`;

const skills = `
## 🛠️ Arsenal

${center(badges.languages.map(l => img(`https://img.shields.io/badge/${l}-000000?style=for-the-badge&logo=${l}&logoColor=${primaryColor}`, l)).join(" "))}
<br/>
${center(badges.frameworks.map(l => img(`https://img.shields.io/badge/${l}-000000?style=for-the-badge&logo=${l}&logoColor=${secondaryColor}`, l)).join(" "))}
<br/>
${center(badges.tools.map(l => img(`https://img.shields.io/badge/${l}-000000?style=for-the-badge&logo=${l}&logoColor=ffffff`, l)).join(" "))}
`;

const projectsSection = `
## 🚀 Mission Log

| Project | Protocol | Status | Classification |
| :--- | :---: | :---: | :--- |
${repos.map(r => `| **[${r.name}](https://github.com/${username}/${r.name})** | \`${r.lang}\` | ![Stars](https://img.shields.io/badge/Stars-${r.stars}-yellow?style=flat-square) | ${r.desc} |`).join("\n")}

`;

const activity = `
## 📊 Neural Network Activity

${center(img(`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0a0a0a&color=${primaryColor}&line=${secondaryColor}&point=ffffff&area=true&hide_border=true`, "Activity Graph", "100%"))}

${center(img(`https://github-profile-trophy.vercel.app/?username=${username}&theme=tokyonight&no-frame=true&column=7&margin-w=15&margin-h=15`, "Trophies"))}
`;

const snake = center(img(`https://github.com/${username}/${username}/blob/output/github-contribution-grid-snake.svg`, "Snake"));

const footer = center(`
${badges.tools.map(t => `<a href="#"><img src="https://img.shields.io/badge/${t}-Join_Network-black?style=social&logo=${t}"/></a>`).slice(0, 5).join(" ")}
<br/>
Designed by **FamyXLyecdd** | Systems Online
`);

// --- MASSIVE LOG GENERATOR ---
const generateLogs = (count) => {
    let logs = "## 📜 System Boot Sequence\n\n```log\n";
    const actions = ["Initializing", "Loading", "Compiling", "Optimizing", "Decrypting", "Rendering", "Fetching", "Deploying"];
    const components = ["Kernel", "Neural_Net", "UI_Layer", "Database_Shard", "Security_Protocol", "Asset_Bundle", "Shader_Cache", "DOM_Tree"];

    for (let i = 0; i < count; i++) {
        const time = new Date().toISOString();
        const action = actions[Math.floor(Math.random() * actions.length)];
        const component = components[Math.floor(Math.random() * components.length)];
        const hex = Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
        logs += `[${time}] [${action.toUpperCase()}] > ${component} at 0x${hex} ... OK\n`;
    }
    logs += "```\n";
    return logs;
};

// --- ASSEMBLE ---
console.log("Generating README...");

const content = [
    header,
    about,
    skills,
    activity,
    projectsSection,
    snake,
    // Add multiple gigantic log sections to hit 5000 lines
    details("System Boot Logs [CORE]", generateLogs(2000)),
    details("Network Traffic Logs [INBOUND]", generateLogs(2000)),
    details("Neural Training Logs [EPOCH 001-999]", generateLogs(2000)),
    footer
].join("\n\n");


fs.writeFileSync('README.md', content);
console.log("README.md generated (" + content.split('\n').length + " lines)");
