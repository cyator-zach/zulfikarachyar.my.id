
// This file is deprecated and will be removed in the future.
// Data is now fetched from src/lib/data-service.ts
import type { LucideIcon } from 'lucide-react';
import { Linkedin, Github, Instagram } from 'lucide-react';

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '/tutorials', label: 'Tutorial' },
  { href: '/sitemap', label: 'Sitemap'}
];

export const contactLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zulfikar-achyar-79b15b257/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/cyator-zach',
    icon: Github,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/zulfikar_achyar',
    icon: Instagram,
  },
];

export const email = 'zulfikarachyar@gmail.com';
