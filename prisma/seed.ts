import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  const author = await prisma.profile.upsert({
    where: { id: 'clondp5b0000008l3a4y2b9z0' },
    update: {},
    create: {
      id: 'clondp5b0000008l3a4y2b9z0',
      name: 'Zulfikar Achyar',
      image_url: 'https://picsum.photos/seed/4/400/400',
      email: 'zulfikarachyar@gmail.com',
      bio: 'A passionate Computer Engineering graduate ready to build and optimize the software of the future.',
    },
  });

  const portfolioItems = [
    {
      id: 'proj1',
      title: 'AI-Powered E-commerce Platform',
      description: 'A modern e-commerce site with personalized recommendations.',
      image_url: 'https://picsum.photos/seed/1/600/400',
      image_hint: 'cloud infrastructure',
      tags: ['Next.js', 'React', 'AI', 'PostgreSQL'],
      live_url: 'https://example.com',
      repo_url: 'https://github.com/cyator-zach',
      challenge: 'The main challenge was to build a recommendation engine that was both accurate and fast, without increasing the operational cost significantly.',
      solution: 'We developed a hybrid recommendation model using collaborative filtering and content-based filtering, implemented on a serverless architecture to manage costs.',
      results: 'Increased user engagement by 25% and boosted average order value by 15% within the first quarter of deployment.',
      authorId: author.id,
    },
    {
      id: 'proj2',
      title: 'Real-time Data Analytics Dashboard',
      description: 'A dashboard for visualizing and analyzing real-time data streams.',
      image_url: 'https://picsum.photos/seed/2/600/400',
      image_hint: 'data analytics',
      tags: ['React', 'D3.js', 'WebSocket', 'Node.js'],
      live_url: 'https://example.com',
      repo_url: 'https://github.com/cyator-zach',
       challenge: 'Handling high-velocity data streams and rendering them smoothly on the frontend without performance degradation was a major hurdle.',
      solution: 'We used WebSockets for real-time data ingestion and leveraged D3.js for efficient, hardware-accelerated SVG rendering. Data aggregation was performed on the backend to reduce payload size.',
      results: 'Achieved sub-second latency for data visualization and enabled business users to make real-time decisions, improving operational efficiency by 30%.',
      authorId: author.id,
    },
    {
      id: 'proj3',
      title: 'Cloud Orchestration Tool',
      description: 'A tool to automate cloud infrastructure deployment and management.',
      image_url: 'https://picsum.photos/seed/3/600/400',
      image_hint: 'container orchestration',
      tags: ['Go', 'Docker', 'Kubernetes', 'gRPC'],
      live_url: 'https://example.com',
      repo_url: 'https://github.com/cyator-zach',
      challenge: 'The complexity of managing multi-cloud environments and ensuring consistent deployments across different providers was the primary challenge.',
      solution: 'We built a CLI tool using Go that interacted with Kubernetes APIs to abstract away the underlying cloud provider specifics. This allowed for a single, declarative configuration for all environments.',
      results: 'Reduced deployment time from hours to minutes and cut down infrastructure management overhead by 50%.',
      authorId: author.id,
    },
     {
      id: 'proj4',
      title: 'Serverless Video Processing Pipeline',
      description: 'An automated pipeline for transcoding and watermarking videos.',
      image_url: 'https://picsum.photos/seed/5/600/400',
      image_hint: 'serverless architecture',
      tags: ['AWS Lambda', 'S3', 'FFmpeg', 'Serverless'],
      live_url: 'https://example.com',
      repo_url: 'https://github.com/cyator-zach',
      challenge: 'Processing large video files in a cost-effective and scalable manner was difficult. Long-running transcoding tasks often timed out in standard serverless environments.',
      solution: 'We designed a step-function-based workflow on AWS. Video chunks were processed in parallel by Lambda functions, which orchestrated FFmpeg running in a container. This allowed for scalable and resilient video processing.',
      results: 'Reduced video processing costs by 70% compared to a VM-based solution and improved processing speed by 5x.',
      authorId: author.id,
    },
  ];

  for (const item of portfolioItems) {
    await prisma.portfolioItem.upsert({
      where: { id: item.id },
      update: {},
      create: item,
    });
  }
  
  const experiences = [
    {
      id: 'exp1',
      position: 'Software Engineer Intern',
      company: 'Tech Startup Inc.',
      duration: 'Jun 2023 - Aug 2023',
      description: 'Developed and maintained features for a web application using React and Node.js. Collaborated with a team of engineers to deliver high-quality software.',
      display_order: 1,
    },
    {
      id: 'exp2',
      position: 'Teaching Assistant',
      company: 'University of Technology',
      duration: 'Sep 2022 - May 2023',
      description: 'Assisted in teaching introductory programming courses. Graded assignments, held office hours, and provided support to students.',
      display_order: 2,
    }
  ];

  for (const exp of experiences) {
     await prisma.experience.upsert({
      where: { id: exp.id },
      update: {},
      create: exp,
    });
  }
  
  const tutorials = [
    {
      id: 'tut1',
      title: 'Getting Started with Next.js 14',
      description: 'A comprehensive guide to setting up a new project with the Next.js App Router.',
      content: 'This is the full markdown content for the Next.js 14 tutorial. It covers routing, data fetching, and more.',
      image_url: 'https://picsum.photos/seed/tut1/600/400',
      image_hint: 'code editor',
      category: 'Next.js',
      authorId: author.id,
    },
    {
      id: 'tut2',
      title: 'Mastering Prisma with PostgreSQL',
      description: 'Learn how to use Prisma as a powerful ORM for your PostgreSQL database.',
      content: 'This tutorial walks you through schema design, migrations, and advanced queries with Prisma.',
      image_url: 'https://picsum.photos/seed/tut2/600/400',
      image_hint: 'database schema',
      category: 'Database',
      authorId: author.id,
    },
    {
      id: 'tut3',
      title: 'CI/CD Pipelines with GitHub Actions',
      description: 'Automate your testing and deployment workflows using GitHub Actions.',
      content: 'From creating your first workflow to deploying to the cloud, this guide covers it all.',
      image_url: 'https://picsum.photos/seed/tut3/600/400',
      image_hint: 'automation workflow',
      category: 'DevOps',
      authorId: author.id,
    }
  ];
  
  for (const tut of tutorials) {
     await prisma.tutorial.upsert({
      where: { id: tut.id },
      update: {},
      create: tut,
    });
  }


  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
