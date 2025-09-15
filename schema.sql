-- Create the 'profiles' table
CREATE TABLE profiles (
    id UUID PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    bio TEXT NOT NULL,
    email TEXT NOT NULL,
    image_url TEXT NOT NULL
);

-- Create the 'experiences' table
CREATE TABLE experiences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    position TEXT NOT NULL,
    company TEXT NOT NULL,
    duration TEXT NOT NULL,
    description TEXT NOT NULL,
    display_order INTEGER NOT NULL
);

-- Create the 'portfolio_items' table
CREATE TABLE portfolio_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    challenge TEXT NOT NULL,
    solution TEXT NOT NULL,
    results TEXT NOT NULL,
    image_url TEXT NOT NULL,
    image_hint TEXT NOT NULL,
    live_url TEXT,
    repo_url TEXT,
    tags TEXT[] NOT NULL,
    author_id UUID REFERENCES profiles(id)
);

-- Create the 'tutorials' table
CREATE TABLE tutorials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT NOT NULL,
    image_hint TEXT NOT NULL,
    category TEXT NOT NULL,
    author_id UUID REFERENCES profiles(id)
);

-- Insert sample data for 'profiles'
INSERT INTO profiles (id, name, bio, email, image_url) VALUES
('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', 'Zulfikar Achyar', 'A passionate Computer Engineering graduate ready to build and optimize the software of the future.', 'zulfikarachyar@gmail.com', 'https://picsum.photos/seed/4/400/400');

-- Insert sample data for 'experiences'
INSERT INTO experiences (position, company, duration, description, display_order) VALUES
('Full Stack Developer', 'Dicoding Indonesia', '2023', 'Completed the "Belajar Membuat Aplikasi Web dengan React" course, building a functional notes application with React.', 1),
('Cloud Computing', 'Bangkit Academy', '2023', 'Graduated from the Cloud Computing learning path, gaining skills in Google Cloud Platform, back-end development with Node.js, and more.', 2);

-- Insert sample data for 'portfolio_items'
INSERT INTO portfolio_items (title, description, challenge, solution, results, image_url, image_hint, live_url, repo_url, tags, author_id) VALUES
('Cloud-Based Personal Notes App', 'A responsive personal notes application built with React and deployed on a cloud platform.', 'The main challenge was to create a stateful, responsive, and performant user interface for managing notes.', 'I leveraged React''s component-based architecture and hooks (useState, useEffect) to manage application state. The app was built with a mobile-first approach and deployed using a cloud service.', 'A fully functional personal notes application with features for adding, archiving, and deleting notes. The project solidified my understanding of React fundamentals.', 'https://picsum.photos/seed/1/600/400', 'cloud infrastructure', '#', '#', '{"React", "JavaScript", "Cloud"}', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'),
('E-commerce API', 'A robust RESTful API for an e-commerce platform, complete with product management and user authentication.', 'The challenge was designing a scalable and secure API structure that could handle various e-commerce functionalities.', 'I designed the API using Node.js and Express, implementing JWT for authentication and creating a clear data model for products, users, and orders. The API was documented using OpenAPI (Swagger).', 'A secure and scalable API ready to be integrated with a front-end application, capable of handling core e-commerce operations.', 'https://picsum.photos/seed/2/600/400', 'data analytics', '#', '#', '{"Node.js", "Express", "API", "JWT"}', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'),
('Containerized Microservices', 'A project exploring the deployment of a simple application as a set of containerized microservices.', 'The main goal was to understand the principles of containerization and orchestration using Docker and a cloud-based container service.', 'I broke down a monolithic application into smaller services, containerized each with Docker, and deployed them using a managed container orchestration service, ensuring they could communicate effectively.', 'Gained hands-on experience with Docker, containerization, and the basics of microservice architecture, improving application scalability and maintainability.', 'https://picsum.photos/seed/3/600/400', 'container orchestration', '#', '#', '{"Docker", "Microservices", "Cloud"}', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');

-- Insert sample data for 'tutorials'
INSERT INTO tutorials (title, description, content, image_url, image_hint, category, author_id) VALUES
('Getting Started with Node.js', 'A beginner-friendly guide to setting up a Node.js development environment and building your first server.', 'This is the full markdown content for the Node.js tutorial...', 'https://picsum.photos/seed/t1/600/400', 'code editor', 'Web Development', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'),
('Understanding Docker basics', 'Learn the fundamental concepts of Docker, from images and containers to Dockerfiles.', 'This is the full markdown content for the Docker tutorial...', 'https://picsum.photos/seed/t2/600/400', 'docker logo', 'DevOps', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'),
('React Hooks Explained', 'A deep dive into the most commonly used React Hooks like useState, useEffect, and useContext.', 'This is the full markdown content for the React Hooks tutorial...', 'https://picsum.photos/seed/t3/600/400', 'react logo', 'Web Development', '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
