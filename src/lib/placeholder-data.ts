import { Cloud, Code, Server, Network, ShieldCheck, Linkedin, Github, Instagram } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '/tutorials', label: 'Tutorial' },
  { href: '#contact', label: 'Contact' },
];

export const skills: { name: string; icon: LucideIcon }[] = [
  { name: 'AWS', icon: Cloud },
  { name: 'GCP', icon: Cloud },
  { name: 'Docker', icon: Server },
  { name: 'Kubernetes', icon: Server },
  { name: 'Networking', icon: Network },
];

export const portfolioItems = [
  {
    id: 'proj1',
    title: 'Automated Cloud Infra',
    description: 'A Bangkit course project building a CI/CD pipeline for deploying a web app to AWS.',
    imageUrl: 'https://picsum.photos/seed/1/600/400',
    imageHint: 'cloud infrastructure',
  },
  {
    id: 'proj2',
    title: 'Data Analysis App',
    description: 'A personal project using Python and Flask for real-time data visualization.',
    imageUrl: 'https://picsum.photos/seed/2/600/400',
    imageHint: 'data analytics dashboard',
  },
  {
    id: 'proj3',
    title: 'Container Orchestration',
    description: 'Experimenting with microservices architecture using Docker and Kubernetes.',
    imageUrl: 'https://picsum.photos/seed/3/600/400',
    imageHint: 'container orchestration',
  },
];

export const experiences = [
  {
    company: 'Bangkit Academy',
    position: 'Cloud Computing Cohort',
    duration: 'Feb 2024 - Jul 2024',
    description:
      'Completed an intensive program focusing on cloud technologies, including Google Cloud Platform and AWS, with a capstone project on scalable cloud solutions.',
  },
  {
    company: 'PT. Telkom Indonesia',
    position: 'IT Support (Internship)',
    duration: 'Jun 2023 - Aug 2023',
    description:
      'Provided technical assistance and troubleshooting for hardware, software, and network issues. Gained experience in a corporate IT environment.',
  },
  {
    company: 'UPT. TIK Universitas Syiah Kuala',
    position: 'Network Technician (Internship)',
    duration: 'Jun 2022 - Aug 2022',
    description:
      'Assisted in managing and maintaining the campus network infrastructure, including configuration and troubleshooting of network devices.',
  },
];

export const tutorialItems = [
  {
    id: 'tut1',
    title: 'Getting Started with Docker',
    description: 'A beginner-friendly guide to containerizing your first application.',
    imageUrl: 'https://picsum.photos/seed/10/600/400',
    imageHint: 'docker logo',
  },
  {
    id: 'tut2',
    title: 'Deploying a Next.js App to Vercel',
    description: 'Step-by-step tutorial on deploying your Next.js project seamlessly.',
    imageUrl: 'https://picsum.photos/seed/11/600/400',
    imageHint: 'serverless deployment',
  },
  {
    id: 'tut3',
    title: 'Understanding CI/CD with GitHub Actions',
    description: 'Learn how to automate your build, test, and deployment workflows.',
    imageUrl: 'https://picsum.photos/seed/12/600/400',
    imageHint: 'automation pipeline',
  },
    {
    id: 'tut4',
    title: 'Introduction to Kubernetes',
    description: 'Grasp the basic concepts of Kubernetes and run your first pod.',
    imageUrl: 'https://picsum.photos/seed/13/600/400',
    imageHint: 'kubernetes cluster',
  },
  {
    id: 'tut5',
    title: 'How to use Tailwind CSS with Next.js',
    description: 'A guide to setting up and using the utility-first CSS framework in your project.',
    imageUrl: 'https://picsum.photos/seed/14/600/400',
    imageHint: 'css code',
  },
  {
    id: 'tut6',
    title: 'Building a REST API with Node.js and Express',
    description: 'Create a simple but powerful REST API from scratch.',
    imageUrl: 'https://picsum.photos/seed/15/600/400',
    imageHint: 'api development',
  },
   {
    id: 'tut7',
    title: 'Managing State in React with Zustand',
    description: 'A minimalist state management solution for your React applications.',
    imageUrl: 'https://picsum.photos/seed/16/600/400',
    imageHint: 'react components',
  },
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
