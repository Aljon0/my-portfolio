// Featured projects data
export const featuredProjects = [
  {
    id: 1,
    title: "ED3C: Memorial Design Platform",
    description:
      "Interactive 3D customization web application for memorial design and gravestone creation.",
    image: "/path-to-memorial-design-img.jpg",
    category: "Web App",
    technologies: ["React", "Three.js", "Firebase"],
    link: "#",
    featured: true,
    caseStudy: {
      title: "ED3C: Revolutionizing Memorial Design",
      overview:
        "ED3C is an innovative web application designed to transform the memorial design process for Double Seven Lapida Maker Incorporation. By providing an intuitive, real-time 3D customization platform, it addresses key challenges in memorial design.",
      features: [
        "Interactive 3D design tool",
        "Real-time customization of gravestones, table signs, urns, and bases",
        "User-friendly design management system",
        "Comprehensive order tracking",
      ],
      technologyStack: [
        "Frontend: React.js",
        "3D Rendering: Three.js",
        "Backend & Database: Firebase",
      ],
    },
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Secure online shopping application with payment integration and user authentication system.",
    image: "/path-to-ecommerce-img.jpg",
    category: "Web App",
    technologies: ["React", "Node.js", "Tailwind"],
    link: "#",
    featured: true,
    caseStudy: "Case study content for E-Commerce Platform",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Responsive portfolio built with React and Tailwind CSS showcasing projects and skills.",
    image: "/path-to-portfolio-img.jpg",
    category: "Web App",
    technologies: ["React", "Tailwind", "Three.js"],
    link: "#",
    featured: true,
    caseStudy: "Case study content for Portfolio Website",
  },
  {
    id: 4,
    title: "Task Manager",
    description:
      "Collaborative tool for teams to organize and assign tasks, and track progress.",
    image: "/path-to-taskmanager-img.jpg",
    category: "Web App",
    technologies: ["React", "Express", "MongoDB"],
    link: "#",
    featured: true,
    caseStudy: "Case study content for Task Management App",
  },
];

// Small projects data
export const smallProjects = [
  {
    id: 5,
    title: "Expense Tracker",
    description:
      "A streamlined expense tracking application built with React and Appwrite to help users manage their personal finances effectively.",
    image: "/ExpenseTracker.png",
    category: "Web App",
    technologies: ["React", "Tailwind", "Appwrite"],
    link: "https://expensetracker-hrws.onrender.com",
    featured: false,
    caseStudy: {
      title: "Expense Tracker",
      overview:
        "ExpenseTracker is a simple yet powerful web application that allows users to track and manage their expenses. With intuitive user interface and seamless integration with Appwrite backend services, users can easily categorize expenses, perform CRUD operations, and gain insights into their spending habits.",
      features: [
        "User Authentication: Secure login and registration system powered by Appwrite Auth",
        "Expense Management: Create, read, update, and delete expense records",
        "Categorization: Organize expenses into categories (food, travel, bills, etc.)",
        "Responsive Design: Works seamlessly across desktop and mobile devices",
        "Real-time Updates: Changes reflect immediately with Appwrite's real-time capabilities",
      ],
      technologyStack: ["Frontend: React.js", "Backend/Database: Appwrite"],
    },
  },
  {
    id: 6,
    title: "Chat Sphere",
    description:
      "ChatSphere is a sleek, responsive chat app built with React, Vite, and Tailwind CSS, showcasing real-time messaging powered by Firebase. Designed with user experience at its core, it features intuitive authentication, instant communication, and a polished UI that adapts seamlessly across devices. From dark mode and emoji support to file sharing and group chats, ChatSphere demonstrates best practices in modern frontend development, efficient state management, and scalable backend integration.",
    image: "/ChatSphere.png",
    category: "Web App",
    technologies: ["React", "Tailwind", "Firebase"],
    link: "https://chat-web-app-1c91d.web.app/",
    featured: false,
    caseStudy: {
      title: "Chat Sphere",
      overview:
        "ChatSphere is a modern, responsive real-time chat application built with React, Vite, and Tailwind CSS. This project demonstrates how to create an elegant messaging interface with a focus on user experience and design.",
      features: [
        "User Authentication: Email/Password login and registration, google authentication integration",
        "Real-time Messaging: instant message delivery, message status indicators (sent, delivered, seen), Timestamp display",
        "Contacts & Conversations: Contact list with search functionality, Online status indicators, Unread message counters, Online only filtering",
        "Rich User Interface: Dark/light mode toggle, Responsive design for all device sizes, Emoji picker",
      ],
      technologyStack: ["Frontend: React.js", "Backend/Database: Firebase"],
    },
  },
  {
    id: 7,
    title: "Task Master",
    description:
      "A responsive and efficient task management app built with React, TailwindCSS, and Supabase. It allows users to manage tasks with features like creation, filtering, and real-time updates via a RESTful API.",
    image: "/TaskManager.png",
    category: "Web Tool",
    technologies: ["React", "Tailwind", "Supabase"],
    link: "https://task-manager-app-cwgb.onrender.com",
    featured: false,
    caseStudy: {
      title: "Task Master",
      overview:
        "The Task Manager App is a modern productivity tool designed to help users manage daily tasks with ease. With an intuitive interface and mobile-first responsive design, the app supports creating, updating, filtering, and deleting tasks. Built using a Supabase and React, it focuses on speed, simplicity, and functionality.",
      features: [
        "Task Dashboard: Overview of tasks with categorized and prioritized lists.",
        "CRUD Functionality: Create, read, update, and delete tasks with detailed attributes (title, description, due date, priority, category, and status).",
        "Task Filtering: Easily filter tasks by category to stay focused.",
        "Responsive Design: Fully optimized for both desktop and mobile screens.",
      ],
      technologyStack: [
        "Frontend: React + Vite, TailwindCSS",
        "Backend: Supabase",
      ],
    },
  },
  {
    id: 8,
    title: "Movie Recommendation Chatbot",
    description:
      "An AI-powered movie recommendation chatbot built with React that lets users chat and receive personalized movie suggestions in real-time, no account required.",
    image: "/AI-MR.png",
    category: "Web App",
    technologies: ["React", "Tailwind", "Express"],
    link: "https://your-movie-chatbot-link.com",
    featured: false,
    caseStudy: {
      title: "AI-Powered Movie Recommendation Chatbot",
      overview:
        "This chatbot web app provides users with personalized movie recommendations through an AI-driven conversational interface. By leveraging Hugging Face’s natural language processing capabilities and real-time movie data from TMDB, the chatbot delivers intelligent and engaging suggestions. Users can interact freely without needing an account, and favorites are saved locally for convenience.",
      features: [
        "Conversational UI: Chat-based interface for a natural and engaging user experience",
        "AI-Driven Suggestions: Uses Hugging Face API to understand context and deliver tailored movie recommendations",
        "Rich Movie Data: Pulls movie details including titles, posters, and summaries from TMDB",
        "Local Favorites: Users can save favorite movies to local storage with no login required",
        "Responsive Design: Fully responsive layout optimized for both desktop and mobile users",
      ],
      technologyStack: [
        "Frontend: React.js with Tailwind CSS",
        "AI Integration: Hugging Face Inference API",
        "Movie Data: TMDB (The Movie Database) API",
        "Storage: Browser Local Storage",
        "Backend: Express.js (Node.js)",
      ],
    },
  },
];

// Certificates data
export const certificates = [
  {
    id: 8,
    title: "Meta Frontend Developer",
    description:
      "Professional certification covering React, JavaScript, and web development fundamentals.",
    image: "/path-to-meta-cert.jpg",
    category: "Certificate",
    issuer: "Meta",
    date: "2023",
    link: "#",
  },
  {
    id: 9,
    title: "AWS Cloud Practitioner",
    description:
      "Foundational certification for Amazon Web Services cloud infrastructure.",
    image: "/path-to-aws-cert.jpg",
    category: "Certificate",
    issuer: "Amazon Web Services",
    date: "2022",
    link: "#",
  },
  {
    id: 10,
    title: "MongoDB Developer",
    description:
      "Technical certification in MongoDB database development and management.",
    image: "/path-to-mongo-cert.jpg",
    category: "Certificate",
    issuer: "MongoDB University",
    date: "2022",
    link: "#",
  },
];
