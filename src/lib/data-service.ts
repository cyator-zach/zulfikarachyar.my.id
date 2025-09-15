'use server';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import type { PortfolioItem, Experience, Tutorial, Profile } from './db-types';

export type { PortfolioItem, Experience, Tutorial, Profile };

// Define combined types for relations
export type PortfolioItemWithAuthor = PortfolioItem & {
  author: Profile | null;
};
export type TutorialWithAuthor = Tutorial & {
  author: Profile | null;
};

export async function getPortfolioItems(): Promise<PortfolioItemWithAuthor[]> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  
  try {
    const { data, error } = await supabase
      .from('portfolio_items')
      .select(`
        *,
        author:profiles(*)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching portfolio items:', error);
      return [];
    }

    // Supabase JS v2 returns a single object for a one-to-one relationship
    // This ensures compatibility with the component's expectation of an author object
    return data || [];
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
}

export async function getPortfolioItemById(id: string): Promise<PortfolioItemWithAuthor | null> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  try {
    const { data, error } = await supabase
      .from('portfolio_items')
      .select(`
        *,
        author:profiles(*)
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error fetching portfolio item with id ${id}:`, error);
      return null;
    }

    return data;
  } catch (error) {
    console.error(`Error fetching portfolio item with id ${id}:`, error);
    return null;
  }
}

export async function getExperiences(): Promise<Experience[]> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching experiences:', error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
}

export async function getTutorials(): Promise<TutorialWithAuthor[]> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  try {
    const { data, error } = await supabase
      .from('tutorials')
      .select(`
        *,
        author:profiles(*)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching tutorials:', error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error('Error fetching tutorials:', error);
    return [];
  }
}

export async function getTutorialById(id: string): Promise<TutorialWithAuthor | null> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  try {
    const { data, error } = await supabase
      .from('tutorials')
      .select(`
        *,
        author:profiles(*)
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error fetching tutorial with id ${id}:`, error);
      return null;
    }
    return data;
  } catch (error) {
    console.error(`Error fetching tutorial with id ${id}:`, error);
    return null;
  }
}
