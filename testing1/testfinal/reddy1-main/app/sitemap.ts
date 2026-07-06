import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reddynow.com';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/about-us`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blogs`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/indian-card-games`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/reddy-anna-id/cricket-id`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/reddy-anna-id/demo-id`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/reddy-anna-id/ipl-betting-id`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/reddy-anna-sports/cricket-betting`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/reddy-anna-sports/football-betting`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/reddy-anna-sports/horse-racing`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/reddy-anna-sports/live-betting`, lastModified, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/reddy-anna-sports/tennis-betting`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/login`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/register`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
  ];
}
