// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "waffle",
		title: "Waffle-咖啡杯测评分辅助",
		description:
			"一款简单的咖啡杯测评分辅助软件。基于SCA最新CVA评分模型，帮助咖啡爱好者与专业人士提升杯测效率和准确性。",
		image: "",
		category: "mobile",
		techStack: ["Flet", "Python"],
		status: "in-progress",
		sourceCode: "https://github.com/ElliotSebastian/WaffleCupperAssistant",
		startDate: "2026-02-05",
		featured: true,
		tags: ["Coffee", "Tool", "Open Source"],
	},
	{
		id: "resumegen",
		title: "在线简历生成器",
		description:
			"一款简易的在线简历生成器。可以选择简历模板，根据提示填入相关数据后自动排版，支持预览和导出PDF格式简历。",
		image: "",
		category: "web",
		techStack: ["JavaScript", "HTML", "CSS"],
		status: "completed",
		sourceCode: "https://github.com/ElliotSebastian/ResumeGenerator",
		visitUrl: "https://resume.github.elliotsebastian.site",
		startDate: "2026-03-23",
		tags: ["Web", "Tool", "Resume"],
		showImage: false,
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
