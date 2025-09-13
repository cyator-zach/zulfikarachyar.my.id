
import { Cloud, Code, Server, Network, ShieldCheck, Linkedin, Github, Instagram } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '/tutorials', label: 'Tutorial' },
];

export const skills: { name: string; icon: LucideIcon }[] = [
  { name: 'AWS', icon: Cloud },
  { name: 'GCP', icon: Cloud },
  { name: 'Docker', icon: Server },
  { name: 'Kubernetes', icon: Server },
  { name: 'Networking', icon: Network },
];

const authorDetails = {
    name: 'Zulfikar Achyar',
    imageUrl: 'https://picsum.photos/seed/4/100/100',
};

export const portfolioItems = [
  {
    id: 'proj1',
    title: 'Automated Cloud Infra',
    description: 'A Bangkit course project building a CI/CD pipeline for deploying a web app to AWS.',
    imageUrl: 'https://picsum.photos/seed/1/600/400',
    imageHint: 'cloud infrastructure',
    tags: ['AWS', 'CI/CD', 'Terraform', 'Docker'],
    liveUrl: '#',
    repoUrl: '#',
    challenge: 'The main challenge was to automate the entire deployment lifecycle, from code commit to a live, scalable environment in the cloud, while ensuring security and reliability.',
    solution: 'We designed a complete CI/CD pipeline using GitHub Actions. Terraform was used for Infrastructure as Code (IaC) to provision resources on AWS, including VPC, EC2 instances, and load balancers. The application was containerized using Docker for consistent environments.',
    results: 'Achieved a fully automated deployment process, reducing manual intervention by 90%. Improved deployment frequency and stability, allowing for faster iteration and feedback cycles.',
    author: authorDetails.name,
    authorImageUrl: authorDetails.imageUrl,
    date: '2024-07-28',
  },
  {
    id: 'proj2',
    title: 'Data Analysis App',
    description: 'A personal project using Python and Flask for real-time data visualization.',
    imageUrl: 'https://picsum.photos/seed/2/600/400',
    imageHint: 'data analytics dashboard',
    tags: ['Python', 'Flask', 'Pandas', 'Chart.js'],
    liveUrl: '#',
    repoUrl: '#',
    challenge: 'The goal was to create a web application that could ingest CSV data, process it, and present it in an interactive and easily understandable dashboard for non-technical users.',
    solution: 'A web app was built using Flask as the backend to handle data uploads and processing with the Pandas library. The frontend used Chart.js to render interactive charts and graphs, providing a dynamic user experience for data exploration.',
    results: 'Successfully created a tool that allows users to upload their own datasets and instantly gain visual insights, making data analysis more accessible.',
    author: authorDetails.name,
    authorImageUrl: authorDetails.imageUrl,
    date: '2024-07-25',
  },
  {
    id: 'proj3',
    title: 'Container Orchestration',
    description: 'Experimenting with microservices architecture using Docker and Kubernetes.',
    imageUrl: 'https://picsum.photos/seed/3/600/400',
    imageHint: 'container orchestration',
    tags: ['Docker', 'Kubernetes', 'Microservices', 'GKE'],
    liveUrl: '#',
    repoUrl: '#',
    challenge: 'To break down a monolithic application into a set of independently deployable microservices and manage them effectively for scalability and resilience.',
    solution: 'The application was refactored into several microservices, each containerized with Docker. Kubernetes on Google Kubernetes Engine (GKE) was used to orchestrate the containers, managing service discovery, load balancing, and automated scaling.',
    results: 'Improved modularity and scalability of the application. Enabled independent updates for each service, leading to a more agile development workflow.',
    author: authorDetails.name,
    authorImageUrl: authorDetails.imageUrl,
    date: '2024-07-22',
  },
];

export const experiences = [
  {
    company: 'Diskominfo Kabupaten Langkat',
    position: 'Network Technician (Internship)',
    duration: 'Feb 2024 - Mei 2024',
    description:
      'Assisted in managing and maintaining the network infrastructure, including configuration and troubleshooting of network devices.',
  },
];

export const tutorialItems = [
  {
    id: 'tut1',
    title: 'Getting Started with Docker',
    description: 'A beginner-friendly guide to containerizing your first application.',
    imageUrl: 'https://picsum.photos/seed/10/600/400',
    imageHint: 'docker logo',
    author: authorDetails.name,
    authorImageUrl: authorDetails.imageUrl,
    date: '2024-07-20',
    category: 'Docker',
    content: `
### What is Docker?

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.

### Step 1: Create a Dockerfile

A \`Dockerfile\` is a text document that contains all the commands a user could call on the command line to assemble an image.

\`\`\`dockerfile
# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Your app binds to port 3000, so you'll use the EXPOSE instruction
EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "start" ]
\`\`\`

### Step 2: Build the Docker Image

Navigate to your project directory in the terminal and run the following command:

\`\`\`bash
docker build -t my-node-app .
\`\`\`

### Step 3: Run the Docker Container

Once the image is built, you can run it as a container:

\`\`\`bash
docker run -p 4000:3000 my-node-app
\`\`\`

Now, you can access your application at \`http://localhost:4000\`.
    `,
  },
  {
    id: 'tut2',
    title: 'Buku Panduan SEO Next.js: Raih Peringkat Lebih Tinggi',
    description: 'Pelajari cara meningkatkan SEO aplikasi Anda menggunakan fitur-fitur canggih dari Next.js dan Vercel untuk mendapatkan audiens yang lebih besar.',
    imageUrl: 'https://picsum.photos/seed/11/600/400',
    imageHint: 'seo analytics',
    author: 'Alice Alexandra Moore',
    authorImageUrl: 'https://picsum.photos/seed/author1/100/100',
    date: '2023-02-23',
    category: 'Next.js',
    content: `
Aplikasi Anda layak mendapat audiens yang lebih besar.

Optimasi mesin pencari (SEO) memudahkan pelanggan menemukan dan memercayai Anda. Namun, meningkatkan SEO aplikasi Anda seringkali merupakan proses yang tidak transparan. Ketika kesuksesan SEO terasa seperti keajaiban, Anda tidak selalu yakin bagaimana cara mengulanginya atau meningkatkannya.

Dalam artikel ini, kami akan mengupas SEO, menjelaskan beberapa aspek paling teknis dari prosesnya. SEO tidak harus menjadi beban, dan dengan Next.js di Vercel sebagai fondasi yang kokoh, Anda siap membangun praktik terbaik, dan melihat peningkatan eksponensial dalam prosesnya.

### Bersaing untuk SEO yang lebih baik dengan Next.js
Next.js memprioritaskan SEO, menggabungkan berbagai alat dan rekomendasi bagi para pengembang untuk menerapkan pola SEO yang baik dengan mudah. ​​Analitik terintegrasi ke dalam kerangka kerja itu sendiri, sehingga memudahkan pemantauan performa aplikasi Anda. Jika dipadukan dengan Jaringan Edge Vercel , Anda akan mendapatkan statistik performa per-deployment otomatis untuk pengambilan keputusan yang lebih baik.

Berikut beberapa praktik terbaik SEO dan bagaimana Anda dapat menggunakan alat Next.js untuk mencapainya.

### Rendering dan mengapa itu penting
Alih-alih menelusuri situs web dengan mengeklik, mesin pencari merayapi kode sumber sesuai urutan penulisannya, mengantrekan tautan untuk diindeks berikutnya. Sementara itu, JavaScript sisi klien dikirim ke antrean render dan membutuhkan waktu lebih lama (dan daya komputasi yang lebih besar) untuk diindeks.

Ini berarti melakukan pra-rendering situs Anda secara statis atau di server adalah praktik terbaik untuk SEO, karena membuat perayap bersedia mengindeks ulang situs Anda lebih sering. Namun, metode pra-rendering juga memiliki kekurangan, karena Pembuatan Situs Statis (SSG) seringkali dapat memperlambat waktu pembuatan, dan Rendering Sisi Server (SSR) tanpa caching yang tepat dapat menyebabkan kinerja pemuatan halaman awal yang lambat sekaligus menghalangi proses rendering untuk pengambilan data Anda.

Untuk menggabungkan keunggulan SSR dan SSG, Next.js menawarkan Regenerasi Statis Inkremental (ISR) , yang melakukan pra-render semua halaman Anda seperti SSG, tetapi juga memungkinkan Anda memperbarui halaman tertentu sesuai kebutuhan, tanpa perlu men-deploy ulang aplikasi. Anda mendapatkan konten dinamis dengan kecepatan—dan kemampuan indeks perayap—konten statis.

### Kecepatan di semua platform
ISR dengan Next.js bukan hanya berarti halaman Anda dapat dirayapi dengan lebih mudah. ​​Ini juga berarti halaman Anda akan dimuat hampir seketika oleh pengguna. Dan dalam SEO, kecepatan memengaruhi segalanya:

- **Pengalaman pengguna.** Situs web yang lebih cepat membuat pengguna tetap terlibat dengan konten lebih lama, sehingga menghasilkan rasio konversi yang lebih tinggi.
- **Peringkat mesin pencari.** Google menganggap kecepatan situs sebagai faktor peringkat yang kuat dalam algoritma mereka.
- **Optimasi seluler.** Sebagian besar pengguna menemukan situs web baru di perangkat seluler, dan Google merayapi situs web di peramban seluler secara default.

Jadi, selain strategi renderingnya, bagaimana Next.js dapat membantu?

- **Optimasi gambar.** Next.js memiliki komponen \`next/image\` plug-and-play yang memformat gambar secara tepat berdasarkan perangkat pengguna.
- **Pemecahan kode dengan impor dinamis.** Anda dapat memilih untuk menunda skrip hingga ke tingkat komponen, hanya menyajikan kode yang benar-benar akan digunakan.
- **Optimasi font.** Next.js memiliki Optimasi Webfont Otomatis bawaan, yang menghilangkan pengambilan data yang tidak perlu.
- **Kembangkan sekali, terapkan di mana saja.** Basis kode Anda di Next.js akan berjalan cepat di semua perangkat desktop dan seluler.

### Strategi konten
Judul memang penting. Namun, subjudul, daftar, tabel, dan elemen lain yang secara visual membagi teks Anda bagi pengguna juga penting. Perayap mesin pencari menggunakan jenis informasi yang sama untuk mendapatkan konteks. Selain itu, manfaatkan data terstruktur dengan mengikuti rekomendasi Skema untuk hal-hal seperti acara, produk, dan ulasan.

### Merekayasa jalan Anda menuju kesuksesan
Dengan memiliki visi yang jelas tentang struktur aplikasi Anda, Anda dapat mencerminkan visi tersebut di Next.js dengan cara yang tidak hanya meningkatkan SEO, tetapi juga meningkatkan alur pengguna.

#### Metadata Dinamis
Komponen HTML \`<head>\` menawarkan peluang SEO yang unik. Anda dapat menambahkan sejumlah besar informasi tentang halaman Anda. Next.js menawarkan \`next/head\` yang dinamis yang memungkinkan Anda memisahkan logika output \`<head>\` ke dalam komponen. Dengan App Router, Anda dapat membawa metadata Anda selangkah lebih maju, dengan membuatnya secara dinamis di tingkat komponen.

#### Navigasi yang lebih cerdas
Perayap mesin pencari memetakan situs Anda berdasarkan halaman mana yang tertaut ke halaman mana.
- **App Router.** Direktori \`app\` Next.js 13 menawarkan cara intuitif untuk menyusun situs web Anda.
- **Tata Letak.** Anda dapat menggunakan tata letak untuk membuat templat halaman untuk situs Anda.
- **Perutean dinamis.** URL yang masuk akal dan terindeks juga berperan penting dalam SEO.
- **Komponen Link.** Next.js menggunakan komponen React \`<Link>\` untuk menyediakan prefetching dan kemampuan untuk menautkan ke rute dinamis dari satu tempat terpusat di basis kode.

#### Memperbaiki jalan buntu
Menerapkan navigasi yang lebih cerdas di seluruh situs juga dapat membantu Anda menemukan tautan rusak dan halaman yang tidak terpakai.

#### Peringkat regional
Internasionalisasi (i18n) dan lokalisasi memungkinkan situs Anda naik peringkat mesin pencari di seluruh dunia. Next.js menyediakan serangkaian fitur untuk membantu mengoptimalkan situs Anda di wilayah mana pun.
    `,
  },
  {
    id: 'tut3',
    title: 'Understanding CI/CD with GitHub Actions',
    description: 'Learn how to automate your build, test, and deployment workflows.',
    imageUrl: 'https://picsum.photos/seed/12/600/400',
    imageHint: 'automation pipeline',
    author: authorDetails.name,
    authorImageUrl: authorDetails.imageUrl,
    date: '2024-07-10',
    category: 'CI/CD',
    content: `
Continuous Integration (CI) and Continuous Deployment (CD) are practices that help automate the software development and release process.

### Core Concepts

*   **CI (Continuous Integration)**: Automatically building and testing code changes every time a developer pushes to the repository.
*   **CD (Continuous Deployment)**: Automatically deploying the code to a production environment after it passes the CI stage.

### Example GitHub Actions Workflow

Create a file at \`.github/workflows/main.yml\`:

\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'

    - name: Install dependencies
      run: npm install

    - name: Build
      run: npm run build

    - name: Run tests
      run: npm test
\`\`\`

This workflow will automatically run on every push to the \`main\` branch, installing dependencies, building the project, and running tests.
    `,
  },
  {
    id: 'tut4',
    title: 'Introduction to Kubernetes',
    description: 'Grasp the basic concepts of Kubernetes and run your first pod.',
    imageUrl: 'https://picsum.photos/seed/13/600/400',
    imageHint: 'kubernetes cluster',
    author: authorDetails.name,
    authorImageUrl: authorDetails.imageUrl,
    date: '2024-07-05',
    category: 'Kubernetes',
    content: `
Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications.

### Key Objects

*   **Pod**: The smallest deployable unit in Kubernetes, which can contain one or more containers.
*   **Service**: An abstract way to expose an application running on a set of Pods as a network service.
*   **Deployment**: Manages a set of replica Pods. It handles scaling and rollouts.

### Running a Pod

Here's a simple Pod manifest (\`pod.yaml\`):

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
\`\`\`

To create this Pod, run:
\`\`\`bash
kubectl apply -f pod.yaml
\`\`\`

To see your running pod, run:
\`\`\`bash
kubectl get pods
\`\`\`
    `,
  },
  {
    id: 'tut5',
    title: 'How to use Tailwind CSS with Next.js',
    description: 'A guide to setting up and using the utility-first CSS framework in your project.',
    imageUrl: 'https://picsum.photos/seed/14/600/400',
    imageHint: 'css code',
    author: authorDetails.name,
    authorImageUrl: authorDetails.imageUrl,
    date: '2024-06-28',
    category: 'Tailwind CSS',
    content: `
Tailwind CSS is a utility-first CSS framework that's perfect for rapid UI development.

### Installation

The easiest way to install Tailwind with a Next.js project is by following the official guide.

\`\`\`bash
npx create-next-app@latest my-project --tailwind --eslint
\`\`\`

### How it Works

Instead of writing custom CSS classes, you apply pre-existing utility classes directly in your HTML.

For example, to create a centered button with padding and a blue background:

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
\`\`\`

This approach makes styling fast and keeps your CSS from growing out of control.
    `,
  },
  {
    id: 'tut6',
    title: 'Building a REST API with Node.js and Express',
    description: 'Create a simple but powerful REST API from scratch.',
    imageUrl: 'https://picsum.photos/seed/15/600/400',
    imageHint: 'api development',
    author: authorDetails.name,
    authorImageUrl: authorDetails.imageUrl,
    date: '2024-06-22',
    category: 'Node.js',
    content: `
Node.js and Express are a classic combination for building fast and scalable REST APIs.

### Setup

First, initialize a Node.js project and install Express:

\`\`\`bash
npm init -y
npm install express
\`\`\`

### Create the Server

Create a file named \`index.js\`:

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// A simple GET route
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// A simple POST route
app.post('/echo', (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(\`Example app listening at http://localhost:\${port}\`);
});
\`\`\`

Run the server with \`node index.js\` and you'll have a working API.
    `,
  },
  {
    id: 'tut7',
    title: 'Managing State in React with Zustand',
    description: 'A minimalist state management solution for your React applications.',
    imageUrl: 'https://picsum.photos/seed/16/600/400',
    imageHint: 'react components',
    author: authorDetails.name,
    authorImageUrl: authorDetails.imageUrl,
    date: '2024-06-18',
    category: 'React',
    content: `
Zustand provides a simple, unopinionated way to manage state in React.

### Creating a Store

First, install it: \`npm install zustand\`

Create a store to hold your state and actions.

\`\`\`javascript
import { create } from 'zustand';

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
\`\`\`

### Using the Store in a Component

You can then use the hook in any component to access and update the state.

\`\`\`jsx
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}
\`\`\`

It's that simple! No providers needed.
    `,
  },
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
