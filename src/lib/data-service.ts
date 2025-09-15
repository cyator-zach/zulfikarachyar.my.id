'use server';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';

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
  author?: { name: string; image_url: string };
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  display_order: number;
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
  author?: { name: string; image_url: string };
}

export interface Profile {
  id: string;
  name: string;
  image_url: string;
}

async function getAuthorsMap(supabase: ReturnType<typeof createClient>): Promise<Map<string, Profile>> {
  const { data: authors, error } = await supabase.from('profiles').select('id, name, image_url');

  if (error) {
    console.error('Error fetching authors:', error);
    return new Map();
  }
  
  const authorMap = new Map<string, Profile>();
  for (const author of authors) {
    authorMap.set(author.id, author);
  }
  return authorMap;
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: items, error } = await supabase
    .from('portfolio_items')
    .select('id, title, description, image_url, image_hint, tags, live_url, repo_url, challenge, solution, results, author_id, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }

  const authorMap = await getAuthorsMap(supabase);
  return items.map(item => ({
    ...item,
    author: authorMap.get(item.author_id),
  }));
}

export async function getPortfolioItemById(id: string): Promise<PortfolioItem | null> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: item, error } = await supabase
    .from('portfolio_items')
    .select('id, title, description, image_url, image_hint, tags, live_url, repo_url, challenge, solution, results, author_id, created_at')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching portfolio item with id ${id}:`, error);
    return null;
  }
  if (!item) return null;

  const authorMap = await getAuthorsMap(supabase);
  return {
    ...item,
    author: authorMap.get(item.author_id),
  };
}

export async function getExperiences(): Promise<Experience[]> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: experiences, error } = await supabase
    .from('experiences')
    .select('id, company, position, duration, description')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
  return experiences;
}

export async function getTutorials(): Promise<Tutorial[]> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: tutorials, error } = await supabase
    .from('tutorials')
    .select('id, title, description, image_url, image_hint, author_id, created_at, category, content')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching tutorials:', error);
    return [];
  }

  const authorMap = await getAuthorsMap(supabase);
  return tutorials.map(tutorial => ({
    ...tutorial,
    author: authorMap.get(tutorial.author_id),
  }));
}

export async function getTutorialById(id: string): Promise<Tutorial | null> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: tutorial, error } = await supabase
    .from('tutorials')
    .select('id, title, description, image_url, image_hint, author_id, created_at, category, content')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching tutorial with id ${id}:`, error);
    return null;
  }
  if (!tutorial) return null;

  const authorMap = await getAuthorsMap(supabase);
  return {
    ...tutorial,
    author: authorMap.get(tutorial.author_id),
  };
}
