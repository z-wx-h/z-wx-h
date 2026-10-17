export const site = {
  version: "V1.0",
  name: "郑皓",
  nameEn: "ZhengHao",
  role: "学生 / 开发者 / 创作者",
  taglineEn: "Quiet creator, bringing ideas across mediums.",
  taglineZh: "热爱探究的创作者，让想法在代码、影像与硬件之间落地。",
  manifesto:
    "用代码构建逻辑，用剪辑讲述故事，用单片机连接现实，用 AI 拓展想象。",
  about:
    "我是郑皓，一名同时走在开发、影像与硬件之间的创作者，毕业于广西外国语学院人工智能专业。关注可运行的系统、可观看的叙事、可触摸的装置。创作时追求克制的表达：少一点装饰，多一点完成度。",
  // 首屏红线区域循环画面：kind 用 "gif" 或 "video"
  // 文件放在 public/media/，路径以 /media/ 开头
  heroMedia: {
    kind: "video" as "gif" | "video",
    gifSrc: "/media/hero.gif",
    videoSrc: "/media/hero.mp4",
    posterSrc: "/media/hero-poster.jpg",
    alt: "AI 漫剧成片循环画面",
  },
  contact: {
    email: "2984901489@qq.com",
    github: "https://github.com/",
    gitee: "https://gitee.com/",
    bilibili: "https://space.bilibili.com/",
    youtube: "https://youtube.com/",
    wechat: "ZhengHao",
    resume: "/郑皓的简历-代码技术.pdf",
    note: "欢迎交流合作，期待参与有趣的项目与创意碰撞。",
  },
};

export const navItems = [
  { href: "#home", label: "首页" },
  { href: "#about", label: "关于" },
  { href: "#work", label: "作品" },
  { href: "#skills", label: "技能" },
  { href: "#contact", label: "联系" },
] as const;

export type VideoCategory = "短片" | "混剪" | "商业" | "实验";
export type McuPlatform = "STM32" | "Arduino" | "ESP32" | "其他";
export type CodeType = "Web" | "工具" | "算法" | "开源";
export type ComicType = "漫画" | "动态漫" | "短剧";

export type WorkItem = {
  id: string;
  group: "video" | "mcu" | "code" | "comic";
  title: string;
  cover: string;
  summary: string;
  tags: string[];
  date: string;
  link?: string;
  repo?: string;
  demo?: string;
  videoEmbed?: string;
  type?: string;
  duration?: string;
  tools?: string[];
  platform?: string;
  features?: string[];
  process?: string[];
};

export const videoProjects: WorkItem[] = [
  {
    id: "v-1",
    group: "video",
    title: "带货口播短片",
    type: "短片",
    duration: "02:18",
    date: "2025.11",
    tools: ["Premiere Pro", "After Effects"],
    cover: "/images/covers/video-night.jpg",
    summary: "以沉香为引，讲解沉香的功效与作用。",
    tags: ["短片", "Premiere Pro"],
    videoEmbed: "https://www.xiaohongshu.com/explore/695532840000000022039b7a?xsec_token=ABGjCqVJNciPJfMeuLOpHCrdjY42z9l-v3VnFZuiSs27A=&xsec_source=pc_search",
  },
  {
    id: "v-2",
    group: "video",
    title: "作品混剪 Showreel",
    type: "混剪",
    duration: "01:05",
    date: "2026.03",
    tools: ["DaVinci Resolve"],
    cover: "/images/covers/video-reel.jpg",
    summary: "把跨媒介作品压缩成一条节奏明确的混剪，强调材质与转场。",
    tags: ["混剪", "DaVinci"],
    link: "https://www.douyin.com/user/self?modal_id=7393330614189001993",
  },
];

export const mcuProjects: WorkItem[] = [
  {
    id: "m-1",
    group: "mcu",
    title: "环境监测节点",
    platform: "ESP32",
    date: "2025.08",
    cover: "/images/covers/mcu-sensor.svg",
    summary: "采集温湿度与空气质量，通过 MQTT 上报并在本地 OLED 实时显示。",
    tags: ["UART", "I2C", "MQTT"],
    repo: "https://github.com/",
    features: ["SGP30 / DHT22", "FreeRTOS 任务拆分", "低功耗休眠"],
  },
  {
    id: "m-2",
    group: "mcu",
    title: "云台稳像实验",
    platform: "STM32",
    date: "2026.01",
    cover: "/images/covers/mcu-gimbal.svg",
    summary: "基于 IMU 反馈的两轴云台，用 PID 抑制手持抖动。",
    tags: ["PID", "I2C", "STM32"],
    repo: "https://github.com/",
  },
];

export const codeProjects: WorkItem[] = [
  {
    id: "c-1",
    group: "code",
    title: "个人作品集站点",
    type: "Web",
    date: "2026.10",
    cover: "/images/covers/code-web.svg",
    summary: "暗色极简作品集，集中展示影像、硬件、代码与 AI 漫剧。",
    tags: ["Next.js", "Tailwind", "GSAP"],
    features: ["作品筛选", "模态预览", "平滑滚动"],
    demo: "/",
    repo: "https://github.com/",
  },
  {
    id: "c-2",
    group: "code",
    title: "串口调试小工具",
    type: "工具",
    date: "2025.06",
    cover: "/images/covers/code-tool.svg",
    summary: "面向单片机调试的轻量串口助手，支持快捷指令与日志过滤。",
    tags: ["Python", "PyQt"],
    repo: "https://github.com/",
  },
];

export const comicProjects: WorkItem[] = [
  {
    id: "a-1",
    group: "comic",
    title: "手搓漫剧",
    type: "ai漫剧",
    date: "2026.04",
    tools: ["Midjourney", "Runway", "剪映"],
    cover: "/images/covers/comic-rain.png",
    summary: "用 AI 生成分镜与视频，完成年少中二的梦想。",
    tags: ["动态漫", "Midjourney"],
    process: ["脚本与分镜", "角色与场景生成", "动态化与配音", "成片调色"],
    link: "https://www.douyin.com/user/MS4wLjABAAAAkWUW_yV_tugP50VOjrPLgLv8cCz99zvMPAVBm_VLWcy3tFJeysvXYnegL_myGo9J?from_tab_name=main&is_search=1&list_name=follow&modal_id=7667057496716343289&nt=0",
  },
];

export const skillGroups = [
  {
    name: "视频剪辑",
    items: ["Premiere Pro", "DaVinci Resolve", "Final Cut Pro", "After Effects", "剪映"],
  },
  {
    name: "单片机开发",
    items: ["STM32", "51 单片机", "C/C++" ],
  },
  {
    name: "编程语言",
    items: ["Python", "JavaScript", "TypeScript", "C/C++", "Java"],
  },
  {
    name: "Web 开发",
    items: ["HTML", "CSS", "React", "Vue", "Node.js"],
  },
  {
    name: "AI 与创意工具",
    items: ["Midjourney", "Stable Diffusion", "Runway", "ChatGPT", "Claude"],
  },
  {
    name: "设计工具",
    items: ["Photoshop", "Figma", "Canva"],
  },
  {
    name: "开发工具",
    items: ["Git", "GitHub", "VS Code", "Docker"],
  },
];

export const awards = [
  {
    title: "2022年创新创业",
    org: "校赛一等",
    date: "2022.11",
    note: "光帆计划-柔性太阳能板设计",
  },
  {
    title: "·网络安全知识竞赛",
    org: "NISP一级",
    date: "2024.12",
    note: "以网络安全知识，了解网络安全的重要性",
  },
  {
    title: "2022年国际环保设计",
    org: "铜奖",
    date: "2022.9",
    note: "以环保的设计理念，设计温馨小屋",
  },
  {
    title: "自我评价",
    org: "1.0",
    date: "2026.10",
    note: "本人为人工智能专业本科毕业，具备人工智能、计算机网络、嵌入式、数据挖掘等专业理论基础，拥有多段企业实习经历。熟悉 Windows 系统运维、软件环境部署，掌握 Python、C、Java 等编程语言，了解深度学习框架、MySQL 数据库，具备基础数据采集、数据清洗分析能力；同时具备良好问题排查意识，能够快速上手系统配置、资源管理、业务数据统计类工作。工作上做事严谨细致，责任心强，有较强逻辑思维与学习能力，能够快速学习新技术，善于团队协作，期望从事人工智能开发、网络运维、技术支持、数据处理类岗位，愿意在岗位中持续沉淀技术能力。",
  },
];
