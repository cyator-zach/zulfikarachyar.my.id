
import { supabase } from './supabase/client';
import type { LucideIcon } from 'lucide-react';
import { Linkedin, Github, Instagram } from 'lucide-react';

// Tipe data yang akan kita gunakan di aplikasi
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  image_hint: string;
  tags: string[];
  live_url: string;
  repo_url: string;
  challenge: string;
  solution: string;
  results: string;
  author_id: string;
  created_at: string;
  author?: { name: string; image_url: string }; // Relasi ke profiles
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  image_url: string;
  image_hint: string;
  author_id: string;
  created_at: string;
  category: string;
  content: string;
  author?: { name: string; image_url: string }; // Relasi ke profiles
}


// --- FUNGSI PENGAMBILAN DATA ---

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const { data, error } = await supabase
    .from('portfolio_items')
    .select(`
      id,
      title,
      description,
      image_url,
      image_hint,
      tags,
      live_url,
      repo_url,
      challenge,
      solution,
      results,
      author_id,
      created_at,
      author:profiles ( name, image_url )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
  
  // Data (jika ada) sudah dalam format yang benar karena select eksplisit
  return (data || []) as PortfolioItem[];
}

export async function getPortfolioItemById(id: string): Promise<PortfolioItem | null> {
  const { data, error } = await supabase
    .from('portfolio_items')
    .select(`
      *,
      author:profiles ( name, image_url )
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching portfolio item with id ${id}:`, error.message);
    return null;
  }
  
  return data as PortfolioItem | null;
}

export async function getExperiences(): Promise<Experience[]> {
  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
  return data || [];
}

export async function getTutorials(): Promise<Tutorial[]> {
  const { data, error } = await supabase
    .from('tutorials')
    .select(`
      *,
      author:profiles ( name, image_url )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching tutorials:', error);
    return [];
  }
  return (data || []) as Tutorial[];
}

export async function getTutorialById(id: string): Promise<Tutorial | null> {
  const { data, error } = await supabase
    .from('tutorials')
    .select(`
      *,
      author:profiles ( name, image_url )
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching tutorial with id ${id}:`, error);
    return null;
  }
  return data as Tutorial | null;
}


// --- DATA STATIS (yang tidak perlu ada di DB) ---

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '/tutorials', label: 'Tutorial' },
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
