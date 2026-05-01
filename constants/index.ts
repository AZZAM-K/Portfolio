import teamsDev from '@/public/teams-dev.png'
import appleStore from '@/public/apple-store.png'
import CodeLeb from '@/public/codeLeb.png'
import LebSpace from '@/public/LebSpace.png'
import {
  expoIcon,
  ExpressIcon,
  GithubIcon,
  SocketIcon,
} from '@/components/Icons'

export const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const skills = [
  {
    category: 'Frontend',
    items: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: '#61DAFB',
      },
      {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        color: '#e8f4ff',
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        color: '#3178C6',
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        color: '#06B6D4',
      },
      {
        name: 'React Router',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg',
        color: '#CA4245',
      },
      {
        name: 'Redux',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
        color: '#764ABC',
      },
    ],
  },
  {
    category: 'Backend',
    items: [
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: '#5FA04E',
      },
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        color: '#F7CA3E',
      },
      {
        name: 'Express',
        icon: ExpressIcon,
        color: '#ffffff',
      },
      {
        name: 'WebSockets',
        icon: SocketIcon,
        color: '#00b4ff',
      },
    ],
  },
  {
    category: 'Mobile',
    items: [
      {
        name: 'React Native',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original-wordmark.svg',
        color: '#61DAFB',
      },
      {
        name: 'Expo',
        icon: expoIcon,
        color: '#ffffff',
      },
    ],
  },
  {
    category: 'Database',
    items: [
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        color: '#4169E1',
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        color: '#47A248',
      },
      {
        name: 'Prisma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
        color: '#e8f4ff',
      },
      {
        name: 'Supabase',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
        color: '#3ECF8E',
      },
    ],
  },
  {
    category: 'DevOps',
    items: [
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        color: '#F05032 ',
      },
      {
        name: 'Github',
        icon: GithubIcon,
        color: '#e8f4ff',
      },
      {
        name: 'AWS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
        color: '#FF9900',
      },
    ],
  },
]

export const experienceData = [
  {
    role: 'Web Development Intern',
    company: 'TechTalks',
    date: 'Sept 2025 - Nov 2025',
    description:
      'Led a small development team to build a full-stack web application. Contributed to both frontend and backend development, implemented core features, and collaborated closely with the team to deliver a functional and scalable product.',
    highlights: [
      'Led the end-to-end delivery of CodeLeb from concept to launch.',
      'Guided the team through Agile sprints to keep work aligned and on schedule.',
      'Created an engaging learning experience with clear flows and feedback.',
      'Built a reliable backend workflow connected to the product data.',
    ],
    location: 'Remote',
  },
]

export const projects = [
  {
    img: CodeLeb,
    title: 'CodeLeb',
    description:
      'A gamified learning platform designed to make programming fun, structured, and motivating. It combines interactive lessons, coding challenges, and an XP-based progression system to help learners grow from beginner to advanced levels.',
    techs: ['Next.js', 'TailwindCSS', 'PostgreSQL', 'Prisma', 'Clerk'],
    githubLink: 'https://github.com/AZZAM-K/codeleb.git',
    liveLink: 'https://codeleb.vercel.app',
  },
  {
    img: LebSpace,
    title: 'LebSpace',
    description:
      'A full-featured social media platform built specifically for Lebanese users. LebSpace offers real-time messaging, stories, posts, notifications, and strong privacy controls, all wrapped in a modern, responsive UI for a smooth and secure social experience.',
    techs: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'React-Router',
      'Socket.io',
      'TailwindCSS',
      'Cloudinary',
    ],
    githubLink: 'https://github.com/AZZAM-K/LebSpace.git',
    liveLink: 'https://lebspace.vercel.app',
  },
  {
    img: teamsDev,
    title: 'teams-dev',
    description:
      'A modern project management platform that enables users to create and manage projects, organize tasks, and collaborate with team members in real time. Includes secure user authentication and a streamlined workflow for efficient team coordination.',
    techs: ['Next.js', 'TailwindCSS', 'PostgreSQL', 'Prisma', 'Auth.js'],
    githubLink: 'https://github.com/AZZAM-K/teams-dev.git',
    liveLink: 'https://teams-dev-lb.vercel.app',
  },
  {
    img: appleStore,
    title: 'Apple Store',
    description:
      'A full-featured e-commerce application that allows users to browse products, manage their cart, and complete secure online purchases. Includes product filtering, responsive design, and a smooth checkout experience.',
    techs: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Cloudinary',
      'Stripe',
      'TailwindCSS',
      'Redux',
      'React-Router',
    ],
    githubLink: 'https://github.com/AZZAM-K/Apple-Store-Frontend.git',
    liveLink: 'https://apple-store-azzam-k.vercel.app',
  },
]
