import techTalks from '@/public/techtalks.webp'
import teamsDev from '@/public/teams-dev.png'
import appleStore from '@/public/apple-store.png'
import calculator from '@/public/calculator.png'
import worldExplorer from '@/public/world-explorer.png'
import restaurant from '@/public/restaurant.png'
import todoList from '@/public/todo-list.png'
import CodeLeb from '@/public/codeLeb.png'

export const navItems = [
  { name: 'Home', to: 'home', offset: 0 },
  { name: 'About', to: 'about', offset: -80 },
  { name: 'Skills', to: 'skills', offset: -80 },
  { name: 'Experience', to: 'experience', offset: -50 },
  { name: 'Projects', to: 'projects', offset: -50 },
]

export const skills = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: '#3178C6',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    color: '#FFFFFF',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#8CC84B',
  },
  {
    name: 'Express.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    color: '#FFFFFF',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#4DB33D',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    color: '#38BDF8',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: '#F05033',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: '#3776AB',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: '#007396',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: '#336791',
  },
]

export const experienceData = [
  {
    role: 'Web Development Intern',
    company: 'TechTalks',
    date: 'Sept 2025 - Nov 2025',
    description:
      'Led a small development team to build a full-stack web application. Contributed to both frontend and backend development, implemented core features, and collaborated closely with the team to deliver a functional and scalable product.',
    logo: techTalks,
  },
]

export const projects = [
  {
    img: CodeLeb,
    title: 'codeLeb',
    description:
      'A gamified learning platform designed to make programming fun, structured, and motivating. It combines interactive lessons, coding challenges, and an XP-based progression system to help learners grow from beginner to advanced levels.',
    techs: ['Next.js', 'TailwindCSS', 'PostgreSQL', 'Prisma', 'Clerk'],
    githubLink: 'https://github.com/AZZAM-K/codeleb.git',
    liveLink: 'https://codeleb.vercel.app',
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
  {
    img: worldExplorer,
    title: 'World Explorer',
    description:
      'An interactive application that lets users explore detailed information about countries around the world. Includes advanced search, filtering, and sorting options, along with dedicated pages for each country.',
    techs: ['React', 'React-Router', 'TypeScript', 'CSS'],
    githubLink: 'https://github.com/AZZAM-K/World-Explorer.git',
    liveLink: 'https://azzam-k-world-explorer.vercel.app',
  },
  {
    img: todoList,
    title: 'Todo List',
    description:
      'A simple and intuitive task-management app that allows users to add tasks, delete them, and mark them as completed. Built for clarity, simplicity, and a clean user experience.',
    techs: ['React', 'CSS'],
    githubLink: 'https://github.com/AZZAM-K/Todo-list.git',
    liveLink: 'https://azzam-k-todo-list.vercel.app',
  },
  {
    img: restaurant,
    title: 'Restaurant',
    description:
      'A responsive dessert-ordering application where users can browse items, add them to a cart, adjust quantities, view their total, and confirm their order—all through a clean and user-friendly interface.',
    techs: ['React', 'CSS'],
    githubLink: 'https://github.com/AZZAM-K/Restaurant.git',
    liveLink: 'https://azzam-k-restaurant.vercel.app',
  },
  {
    img: calculator,
    title: 'Calculator',
    description:
      'A modern calculator application offering basic arithmetic functionality and multiple switchable UI themes for a customizable user experience.',
    techs: ['React', 'CSS'],
    githubLink: 'https://github.com/AZZAM-K/Calculator.git',
    liveLink: 'https://azzam-k-calculator.vercel.app',
  },
]
