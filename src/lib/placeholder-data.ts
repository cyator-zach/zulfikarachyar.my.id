import { Cloud, Code, Box, Github, Linkedin, Mail, HardHat, CodeXml } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navLinks = [
  { href: '#about-me', label: 'Tentang Saya' },
  { href: '#portfolio', label: 'Portofolio' },
  { href: '#experience', label: 'Pengalaman' },
  { href: '#contact', label: 'Kontak' },
];

export const skills: { name: string; icon: LucideIcon }[] = [
  { name: 'AWS', icon: Cloud },
  { name: 'GCP', icon: Cloud },
  { name: 'Python', icon: CodeXml },
  { name: 'Docker', icon: HardHat },
  { name: 'Kubernetes', icon: HardHat },
  { name: 'Terraform', icon: Code },
];

export const portfolioItems = [
  {
    id: 'proj1',
    title: 'Infrastruktur Cloud Otomatis',
    description: 'Membangun pipeline CI/CD untuk deployment aplikasi web ke AWS menggunakan Terraform dan GitHub Actions.',
    imageUrl: 'https://picsum.photos/seed/1/600/400',
    imageHint: 'cloud infrastructure',
  },
  {
    id: 'proj2',
    title: 'Aplikasi Analisis Data',
    description: 'Aplikasi Python dengan Flask untuk visualisasi data penjualan secara real-time.',
    imageUrl: 'https://picsum.photos/seed/2/600/400',
    imageHint: 'data analytics',
  },
  {
    id: 'proj3',
    title: 'Orkestrasi Kontainer',
    description: 'Migrasi aplikasi monolitik ke arsitektur microservices menggunakan Docker dan Kubernetes.',
    imageUrl: 'https://picsum.photos/seed/3/600/400',
    imageHint: 'container orchestration',
  },
   {
    id: 'proj4',
    title: 'Platform Serverless',
    description: 'Mengembangkan API backend menggunakan AWS Lambda dan API Gateway yang sepenuhnya serverless.',
    imageUrl: 'https://picsum.photos/seed/5/600/400',
    imageHint: 'serverless architecture',
  },
];

export const experiences = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Cloud Engineer',
    duration: 'Jan 2021 - Sekarang',
    description:
      'Merancang dan mengimplementasikan arsitektur cloud-native yang skalabel di AWS dan GCP, mengotomatiskan infrastruktur dengan Terraform, dan mengelola cluster Kubernetes.',
  },
  {
    company: 'Web Innovators',
    position: 'DevOps Engineer',
    duration: 'Jun 2018 - Des 2020',
    description:
      'Membangun dan memelihara pipeline CI/CD, meningkatkan keandalan sistem, dan mengimplementasikan praktik pemantauan dan logging.',
  },
  {
    company: 'Digital Creations',
    position: 'Junior Python Developer',
    duration: 'Jul 2017 - Mei 2018',
    description:
      'Mengembangkan fitur backend untuk berbagai aplikasi web, menulis skrip untuk otomatisasi tugas, dan berkolaborasi dalam siklus hidup pengembangan perangkat lunak.',
  },
];

export const contactLinks = [
  {
    name: 'LinkedIn',
    url: '#',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: '#',
    icon: Github,
  },
];

export const email = 'emailanda@example.com';
