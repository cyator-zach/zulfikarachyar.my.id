-- Create the profiles table
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ(6) NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ(6) NOT NULL DEFAULT now(),
    name TEXT NOT NULL,
    bio TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    image_url TEXT NOT NULL
);

-- Create the portfolio_items table
CREATE TABLE public.portfolio_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ(6) NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ(6) NOT NULL DEFAULT now(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    image_hint TEXT NOT NULL,
    challenge TEXT NOT NULL,
    solution TEXT NOT NULL,
    results TEXT NOT NULL,
    tags TEXT[] NOT NULL,
    live_url TEXT,
    repo_url TEXT,
    author_id UUID REFERENCES public.profiles(id)
);

-- Create the experiences table
CREATE TABLE public.experiences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ(6) NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ(6) NOT NULL DEFAULT now(),
    "position" TEXT NOT NULL,
    company TEXT NOT NULL,
    duration TEXT NOT NULL,
    description TEXT NOT NULL,
    display_order INTEGER NOT NULL
);

-- Create the tutorials table
CREATE TABLE public.tutorials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ(6) NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ(6) NOT NULL DEFAULT now(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    image_hint TEXT NOT NULL,
    category TEXT NOT NULL,
    content TEXT NOT NULL,
    author_id UUID REFERENCES public.profiles(id)
);

-- Optional: Insert seed data (Example for one profile)
INSERT INTO public.profiles (id, name, bio, email, image_url)
VALUES 
('11728c31-fb7a-4202-a892-42b65839f67a', 'Zulfikar Achyar', 'A fresh graduate Computer Engineering with a passion for software development.', 'zulfikarachyar@gmail.com', 'https://picsum.photos/seed/4/400/400');

-- Optional: Insert seed data (Example for experiences)
INSERT INTO public.experiences (display_order, "position", company, duration, description)
VALUES 
(1, 'Lead Software Engineer', 'Innovate Inc.', '2023-Present', 'Leading a team of developers to build next-generation web applications. Responsible for system architecture, code reviews, and mentoring junior engineers.'),
(2, 'Frontend Developer', 'Creative Solutions', '2021-2023', 'Developed and maintained responsive user interfaces for various clients using React and Vue.js. Collaborated with designers to implement pixel-perfect designs.');

-- Optional: Insert seed data (Example for portfolio items)
INSERT INTO public.portfolio_items (title, description, image_url, image_hint, challenge, solution, results, tags, live_url, repo_url, author_id)
VALUES
('AI-Powered Code Review', 'A tool that uses generative AI to automatically review pull requests and suggest improvements.', 'https://picsum.photos/seed/1/600/400', 'cloud infrastructure', 'Manual code reviews were slow and inconsistent.', 'We built a GitHub Action that triggers a Genkit flow. The flow analyzes the code diff, identifies potential issues, and comments on the pull request with suggestions.', 'Reduced code review time by 50% and improved code quality by 30%.', '{"Next.js", "Genkit", "AI", "TypeScript"}', '#', '#', '11728c31-fb7a-4202-a892-42b65839f67a'),
('Serverless Data Pipeline', 'A scalable data processing pipeline on Google Cloud.', 'https://picsum.photos/seed/2/600/400', 'data analytics', 'Needed to process millions of events per day without managing servers.', 'Used Cloud Functions, Pub/Sub, and BigQuery to create a fully serverless, event-driven architecture.', 'Achieved 99.99% uptime and processed 10 million events daily with low operational costs.', '{"GCP", "Serverless", "BigQuery", "TypeScript"}', '#', '#', '11728c31-fb7a-4202-a892-42b65839f67a'),
('Kubernetes Migration', 'Migrated a monolithic application to a microservices architecture on GKE.', 'https://picsum.photos/seed/3/600/400', 'container orchestration', 'The monolith was difficult to scale and deploy.', 'Broke down the application into smaller services, containerized them with Docker, and deployed them on a Google Kubernetes Engine cluster with a CI/CD pipeline.', 'Improved deployment frequency by 10x and enabled independent scaling of services.', '{"Kubernetes", "Docker", "GKE", "CI/CD"}', '#', '#', '1172\
8c31-fb7a-4202-a892-42b65839f67a');

-- Optional: Insert seed data (Example for tutorials)
INSERT INTO public.tutorials (title, description, image_url, image_hint, category, content, author_id)
VALUES
('Getting Started with Next.js 14', 'A comprehensive guide to building your first application with the new Next.js App Router.', 'https://picsum.photos/seed/t1/600/400', 'web development', 'Next.js', '## Introduction\n\nNext.js 14 introduced a new App Router that changes how we build applications. This tutorial will walk you through the basics.\n\n### Step 1: ...', '11728c31-fb7a-4202-a892-42b65839f67a'),
('Mastering TypeScript Generics', 'Learn how to use generics to write flexible and reusable code in TypeScript.', 'https://picsum.photos/seed/t2/600/400', 'programming typescript', 'TypeScript', '## What are Generics?\n\nGenerics allow you to create components that can work with a variety of types rather than a single one. This is a core feature of statically-typed languages.\n\n### Example: ...', '11728c31-fb7a-4202-a892-42b65839f67a'),
('CI/CD with GitHub Actions', 'Set up a continuous integration and deployment pipeline for your web application.', 'https://picsum.photos/seed/t3/600/400', 'devops pipeline', 'DevOps', '## The Workflow File\n\nEverything starts with a `.yml` file in your `.github/workflows` directory. This file defines the triggers and jobs for your pipeline.\n\n### On Push Event: ...', '11728c31-fb7a-4202-a892-42b65839f67a');
