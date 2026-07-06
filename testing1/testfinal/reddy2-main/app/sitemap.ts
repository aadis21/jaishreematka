import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reddyofficial.com';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/about-us`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/app`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/casino`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact-us`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/reddybook`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/responsible-gaming`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/sports-betting`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/login`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/signup`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
  ];
}
