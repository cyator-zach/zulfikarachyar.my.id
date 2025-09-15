
import { createClient } from '@supabase/supabase-js';
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

// Helper untuk membuat client Supabase baru dengan kredensial yang benar
// Ini memastikan kita tidak terjebak dengan koneksi yang salah atau kadaluwarsa
const getSupabaseClient = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase URL or Anon Key is not defined in environment variables.');
    }
    
    // Selalu buat client baru untuk memastikan koneksi yang bersih
    return createClient(supabaseUrl, supabaseAnonKey);
};

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('portfolio_items')
    .select(`
      *,
      author:profiles ( name, image_url )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching portfolio items:', error.message);
    return [];
  }
  
  // Memastikan data relasi author ditangani dengan benar
  return (data || []).map(item => ({
    ...item,
    author: Array.isArray(item.author) ? item.author[0] : item.author
  })) as PortfolioItem[];
}

export async function getPortfolioItemById(id: string): Promise<PortfolioItem | null> {
  const supabase = getSupabaseClient();
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
  
  if (!data) return null;

  const item = {
    ...data,
    author: Array.isArray(data.author) ? data.author[0] : data.author
  };
  
  return item as PortfolioItem | null;
}

export async function getExperiences(): Promise<Experience[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching experiences:', error.message);
    return [];
  }
  return data || [];
}

export async function getTutorials(): Promise<Tutorial[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('tutorials')
    .select(`
      *,
      author:profiles ( name, image_url )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching tutorials:', error.message);
    return [];
  }

  return (data || []).map(item => ({
    ...item,
    author: Array.isArray(item.author) ? item.author[0] : item.author
  })) as Tutorial[];
}

export async function getTutorialById(id: string): Promise<Tutorial | null> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('tutorials')
    .select(`
      *,
      author:profiles ( name, image_url )
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching tutorial with id ${id}:`, error.message);
    return null;
  }

  if (!data) return null;

  const item = {
      ...data,
      author: Array.isArray(data.author) ? data.author[0] : data.author
  };

  return item as Tutorial | null;
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
