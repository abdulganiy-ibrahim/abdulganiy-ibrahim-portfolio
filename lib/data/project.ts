import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    image: '/projectImages/sellora-dash-sreenshot.webp',
    name: 'Sellora',
    desc: "A platform that lets businesses run their own online store. Each business gets its own storefront, product list, and a dashboard to keep track of orders and sales. Every store's information is completely private, so one business can never see or change another's. I built this protection into the deepest layer of the system, so it doesn't depend on everything else working perfectly. Customers send their orders through WhatsApp, which keeps buying simple and familiar.",
    technology: [
      'React.js', 'Next.js', 'TailwindCSS', 'Supabase'
    ],
    LiveUrl: 'https://sellora-project-pi.vercel.app',
    githubUrl: 'https://github.com/abdulganiy-ibrahim/sellora-project',
    status: 'public'
  }, {
    id: '2',
    image: '/projectImages/LPMS.png',
    name: 'Product management system',
    desc: "A simple tool for keeping track of the products a business has in stock. You can add new items, update their details, remove old ones, and see everything in one place. It was the first time I built the behind the scenes part of an app on my own, and it taught me how to keep that part organised and easy to maintain as it grows.",
    technology: [
      'React.js', 'TailwindCSS', 'Typescript', 'Express.js', 'PostgreSQL'
    ],
    LiveUrl: 'https://product-management-web-seven.vercel.app/',
    githubUrl: 'https://github.com/abdulganiy-ibrahim/product-management-system',
    status: 'public'
  }, {
    id: '3',
    image: '/projectImages/my-portfolio.png',
    name: 'Portfolio: Personal website',
    desc: "The website you are on right now. I designed every part of it myself, including a scrolling timeline of my journey that has its own layout on phones, pop up windows for each project, and smooth animations. Everything was built from scratch instead of using ready made design kits, so it reflects my own style.",
    technology: [
      'Next.js', 'Typescript', 'TailwindCSS', 'Framer Motion'
    ],
    LiveUrl: 'https://abdulganiy-ibrahim-dev.vercel.app/',
    githubUrl: 'https://github.com/abdulganiy-ibrahim/abdulganiy-ibrahim-portfolio',
    status: 'public'
  }, {
    id: '4',
    image: '/projectImages/auth-system.png', // replace with your screenshot or a simple graphic
    name: 'Authentication system',
    desc: "A secure sign up and login system that any app can use to know who its users are. People create an account, sign in, and stay signed in safely. Passwords are never saved in a readable form, different users get access to different things, and repeated wrong guesses are blocked so nobody can break into an account by trial and error. This isn't live online right now because hosting it has a cost, but the full source code is open on GitHub for anyone who wants to look inside.",
    technology: [
      'Node.js', 'Express.js', 'JWT'
    ],
    githubUrl: 'https://github.com/abdulganiy-ibrahim/REPO-NAME',
    status: 'public'
  }
]