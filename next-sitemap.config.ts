import type { IConfig } from "next-sitemap";
import url from "./url.json";

const config: IConfig = {
  siteUrl: url.url,
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
};

export default config;
