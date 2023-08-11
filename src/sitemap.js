 import sitemap from 'sitemap'
import fs from 'fs'
const hostname = 'https://www.winndeal.com';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/product-services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },

];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());