'use server';
import prisma from '@/lib/prisma';
import type { PortfolioItem, Experience, Tutorial, Profile } from '@prisma/client';

export type { PortfolioItem, Experience, Tutorial, Profile };

// Define combined types for relations
export type PortfolioItemWithAuthor = PortfolioItem & {
  author: Profile | null;
};
export type TutorialWithAuthor = Tutorial & {
  author: Profile | null;
};

export async function getPortfolioItems(): Promise<PortfolioItemWithAuthor[]> {
  try {
    const data = await prisma.portfolioItem.findMany({
      include: { author: true },
      orderBy: { created_at: 'desc' },
    });
    return data;
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
}

export async function getPortfolioItemById(id: string): Promise<PortfolioItemWithAuthor | null> {
  try {
    const data = await prisma.portfolioItem.findUnique({
      where: { id },
      include: { author: true },
    });
    return data;
  } catch (error) {
    console.error(`Error fetching portfolio item with id ${id}:`, error);
    return null;
  }
}

export async function getExperiences(): Promise<Experience[]> {
  try {
    const data = await prisma.experience.findMany({
      orderBy: { display_order: 'asc' },
    });
    return data;
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
}

export async function getTutorials(): Promise<TutorialWithAuthor[]> {
  try {
    const data = await prisma.tutorial.findMany({
      include: { author: true },
      orderBy: { created_at: 'desc' },
    });
    return data;
  } catch (error) {
    console.error('Error fetching tutorials:', error);
    return [];
  }
}

export async function getTutorialById(id: string): Promise<TutorialWithAuthor | null> {
  try {
    const data = await prisma.tutorial.findUnique({
      where: { id },
      include: { author: true },
    });
    return data;
  } catch (error) {
    console.error(`Error fetching tutorial with id ${id}:`, error);
    return null;
  }
}
