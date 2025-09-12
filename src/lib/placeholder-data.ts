import { Cloud, Code, Server, Network, ShieldCheck, Linkedin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const skills: { name: string; icon: LucideIcon }[] = [
  { name: 'AWS', icon: Cloud },
  { name: 'GCP', icon: Cloud },
  { name: 'Docker', icon: Server },
  { name: 'Kubernetes', icon: Server },
  { name: 'Networking', icon: Network },
  { name: 'IT Support', icon: ShieldCheck },
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

export const contactLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zulfikar-achyar-79b15b257/',
    icon: Linkedin,
  },
];

export const email = 'zulfikarachyar@gmail.com';
