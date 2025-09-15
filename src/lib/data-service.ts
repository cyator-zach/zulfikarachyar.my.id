'use server';
import { prisma } from '@/lib/prisma';

// Re-export types from Prisma so our components don't need to import from .prisma/client
export type { PortfolioItem, Experience, Tutorial, Profile } from '@prisma/client';
// Define combined types for relations
export type PortfolioItemWithAuthor = import('@prisma/client').Prisma.PortfolioItemGetPayload<{
  include: { author: true }
}>;
export type TutorialWithAuthor = import('@prisma/client').Prisma.TutorialGetPayload<{
  include: { author: true }
}>;


export async function getPortfolioItems(): Promise<PortfolioItemWithAuthor[]> {
  try {
    const items = await prisma.portfolioItem.findMany({
      include: {
        author: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    return items;
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
}

export async function getPortfolioItemById(id: string): Promise<PortfolioItemWithAuthor | null> {
  try {
    const item = await prisma.portfolioItem.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
    return item;
  } catch (error) {
    console.error(`Error fetching portfolio item with id ${id}:`, error);
    return null;
  }
}

export async function getExperiences(): Promise<import('@prisma/client').Experience[]> {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: {
        display_order: 'asc',
      },
    });
    return experiences;
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
}

export async function getTutorials(): Promise<TutorialWithAuthor[]> {
  try {
    const tutorials = await prisma.tutorial.findMany({
      include: {
        author: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    return tutorials;
  } catch (error) {
    console.error('Error fetching tutorials:', error);
    return [];
  }
}

export async function getTutorialById(id: string): Promise<TutorialWithAuthor | null> {
  try {
    const tutorial = await prisma.tutorial.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
    return tutorial;
  } catch (error) {
    console.error(`Error fetching tutorial with id ${id}:`, error);
    return null;
  }
}
