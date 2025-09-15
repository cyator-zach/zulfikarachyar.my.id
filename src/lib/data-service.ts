'use server';
// @ts-nocheck
import postgres from 'postgres';
import type { LucideIcon } from 'lucide-react';

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

let sql: postgres.Sql | null = null;
const DATABASE_URL = 'postgresql://postgres:K7ZQF3zUEr9rgg96@db.sttycqpnguiglnieivdw.supabase.co:5432/postgres';


function getDbClient() {
  if (!DATABASE_URL) {
    console.error('DATABASE_URL environment variable is not set.');
    return null;
  }
  if (!sql) {
    sql = postgres(DATABASE_URL);
  }
  return sql;
}


async function getAuthorsMap(): Promise<Map<string, Profile>> {
  const client = getDbClient();
  if (!client) return new Map();
  try {
    const authors = await client<Profile[]>`SELECT id, name, image_url FROM profiles`;
    const authorMap = new Map();
    for (const author of authors) {
      authorMap.set(author.id, author);
    }
    return authorMap;
  } catch (error) {
    console.error('Error fetching authors:', error);
    return new Map();
  }
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const client = getDbClient();
  if (!client) return [];
  try {
    const items = await client<PortfolioItem[]>`
      SELECT id, title, description, image_url, image_hint, tags, live_url, repo_url, challenge, solution, results, author_id, created_at
      FROM portfolio_items 
      ORDER BY created_at DESC
    `;
    const authorMap = await getAuthorsMap();
    return items.map(item => ({
      ...item,
      author: authorMap.get(item.author_id),
    }));
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
}

export async function getPortfolioItemById(id: string): Promise<PortfolioItem | null> {
  const client = getDbClient();
  if (!client) return null;
  try {
    const [item] = await client<PortfolioItem[]>`
      SELECT id, title, description, image_url, image_hint, tags, live_url, repo_url, challenge, solution, results, author_id, created_at
      FROM portfolio_items 
      WHERE id = ${id}
    `;
    if (!item) return null;
    
    const authorMap = await getAuthorsMap();
    return {
      ...item,
      author: authorMap.get(item.author_id),
    };
  } catch (error) {
    console.error(`Error fetching portfolio item with id ${id}:`, error);
    return null;
  }
}

export async function getExperiences(): Promise<Experience[]> {
  const client = getDbClient();
  if (!client) return [];
  try {
    const experiences = await client<Experience[]>`
      SELECT id, company, position, duration, description 
      FROM experiences 
      ORDER BY display_order ASC
    `;
    return experiences;
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
}

export async function getTutorials(): Promise<Tutorial[]> {
  const client = getDbClient();
  if (!client) return [];
  try {
    const tutorials = await client<Tutorial[]>`
      SELECT id, title, description, image_url, image_hint, author_id, created_at, category, content
      FROM tutorials
      ORDER BY created_at DESC
    `;
    const authorMap = await getAuthorsMap();
    return tutorials.map(tutorial => ({
      ...tutorial,
      author: authorMap.get(tutorial.author_id),
    }));
  } catch (error) {
    console.error('Error fetching tutorials:', error);
    return [];
  }
}

export async function getTutorialById(id: string): Promise<Tutorial | null> {
  const client = getDbClient();
  if (!client) return null;
  try {
    const [tutorial] = await client<Tutorial[]>`
      SELECT id, title, description, image_url, image_hint, author_id, created_at, category, content
      FROM tutorials
      WHERE id = ${id}
    `;
     if (!tutorial) return null;

    const authorMap = await getAuthorsMap();
    return {
        ...tutorial,
        author: authorMap.get(tutorial.author_id)
    };
  } catch (error) {
    console.error(`Error fetching tutorial with id ${id}:`, error);
    return null;
  }
}
