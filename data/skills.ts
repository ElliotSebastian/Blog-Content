// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	
	{
		id: "vue",
		name: "Vue.js",
		description:
			"正在学。原因是我意识到现在的前端再也不是靠硬敲HTML的了",
		icon: "logos:vue",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 8 },
		projects: ["data-visualization-tool"],
		color: "#4FC08D",
	},
	{
		id: "python",
		name: "Python",
		description:
			"这玩意真好",
		icon: "logos:python",
		category: "backend",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#3776AB",
	},
	{
		id: "cpp",
		name: "C++",
		description:
			"上次用这玩意还是初中学信息学竞赛",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "intermediate",
		experience: { years: 6, months: 0 },
		projects: ["game-engine", "system-optimization"],
		color: "#00599C",
	},
	{
		id: "c",
		name: "C",
		description:
			"Bro的编程启蒙",
		icon: "logos:c",
		category: "backend",
		level: "intermediate",
		experience: { years: 8, months:0 },
		projects: ["embedded-system", "kernel-module"],
		color: "#A8B9CC",
	},
	{
		id: "php",
		name: "PHP",
		description:
			"没怎么学，我懒",
		icon: "logos:php",
		category: "backend",
		level: "beginner",
		experience: { years: 1, months: 0 },
		projects: ["cms-system", "e-commerce-backend"],
		color: "#777BB4",
	},
	
	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description:
			"好东西。学会了之后我就懒得学别的了，起码我自个够用。",
		icon: "logos:mysql-icon",
		category: "database",
		level: "intermediate",
		experience: { years: 3, months: 0 },
		projects: ["e-commerce-platform", "blog-system"],
		color: "#4479A1",
	},
	
	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"挺折磨的",
		icon: "logos:git-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 3, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"这边给到神中神",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 6, months:0 },
		color: "#007ACC",
	},
	{
		id: "docker",
		name: "Docker",
		description:
			"有比神中神更高的评价吗？",
		icon: "logos:docker-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#2496ED",
	},

	// Other Skills

	//System
	{
		id: "linux",
		name: "Linux",
		description:
			"个人感觉比用Windows还熟练",
		icon: "logos:linux-tux",
		category: "tools",
		level: "advanced",
		experience: { years: 5, months: 0 },
		projects: ["server-management", "shell-scripting"],
		color: "#FCC624",
	},
	
];
