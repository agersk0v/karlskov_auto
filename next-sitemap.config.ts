import type { IConfig } from "next-sitemap";

const config: IConfig = {
    siteUrl: "https://karlskov-auto.vercel.app",
    generateRobotsTxt: true,
    changefreq: "monthly",
    priority: 0.7,
    sitemapSize: 5000,
};

export default config;
