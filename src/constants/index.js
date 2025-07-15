import {
  appleStore,
  restaurant,
  calculator,
  worldExplorer,
  todoList,
  ticTacToe,
  tipCalculator,
  eCommerce,
  portfolio,
} from '../assets'

export const projects = [
  {
    img: appleStore,
    title: 'Apple Store',
    desc: 'Full-stack Apple store',
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
    desc: 'Explore data about all the countries',
    techs: ['React', 'React-Router', 'TypeScript', 'CSS'],
    githubLink: 'https://github.com/AZZAM-K/World-Explorer.git',
    liveLink: 'https://azzam-k-world-explorer.vercel.app',
  },
  {
    img: todoList,
    title: 'Todo List',
    desc: 'Simple todo-list',
    techs: ['React', 'CSS'],
    githubLink: 'https://github.com/AZZAM-K/Todo-list.git',
    liveLink: 'https://azzam-k-todo-list.vercel.app',
  },
  {
    img: restaurant,
    title: 'Restaurant',
    desc: 'Restaurant desserts app',
    techs: ['React', 'CSS'],
    githubLink: 'https://github.com/AZZAM-K/Restaurant.git',
    liveLink: 'https://azzam-k-restaurant.vercel.app',
  },
  {
    img: portfolio,
    title: 'This Portfolio',
    desc: 'My personal portfolio',
    techs: ['React', 'TailwindCSS', 'React-Router'],
    githubLink: 'https://github.com/AZZAM-K/Portfolio.git',
    liveLink: 'https://azzam-k-portfolio.vercel.app',
  },
  {
    img: calculator,
    title: 'Calculator',
    desc: 'Calculator with theme toggler',
    techs: ['React', 'CSS'],
    githubLink: 'https://github.com/AZZAM-K/Calculator.git',
    liveLink: 'https://azzam-k-calculator.vercel.app',
  },
  {
    img: tipCalculator,
    title: 'Tip Calculator',
    desc: 'A simple web app to split the bill and tip amount per person',
    techs: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/AZZAM-K/tip-calculator-app.git',
    liveLink: 'https://azzam-k.github.io/tip-calculator-app',
  },
  {
    img: ticTacToe,
    title: 'Tic-Tac-Toe Game',
    desc: 'Classic Tic-Tac-Toe game',
    techs: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/AZZAM-K/Tic-Tak-Toe.git',
    liveLink: 'https://azzam-k.github.io/Tic-Tak-Toe',
  },
  {
    img: eCommerce,
    title: 'E-Commerce Cart',
    desc: 'Simple e-commerce cart to add, view, and remove items',
    techs: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/AZZAM-K/E-commerce-product-page.git',
    liveLink: 'https://azzam-k.github.io/E-commerce-product-page',
  },
]

export const skills = [
  {
    category: 'Languages',
    techs: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  },
  {
    category: 'Databases',
    techs: ['MongoDB', 'SQL'],
  },
  {
    category: 'Frameworks',
    techs: ['React', 'Express'],
  },
  {
    category: 'Tools',
    techs: ['VSCode', 'Postman', 'Git & GitHub'],
  },
  {
    category: 'Other',
    techs: ['HTML', 'CSS', 'TailwindCSS', 'Node.js'],
  },
]
