export const featuredProjects = [
  {
    id: 3,
    title: "ED3C: Eternal Design",
    description:
      "Interactive 3D customization web application for memorial design and gravestone creation.",
    image: "/projects/ed3c.webp",
    category: "Web App",
    technologies: ["React", "Tailwind", "Three.js", "Firebase"],
    link: "#",
    featured: true,
    caseStudy: {
      title: "ED3C: Eternal Design 3D Customization",
      overview:
        "ED3C is an innovative web application designed to transform the memorial design process for Double Seven Lapida Maker Incorporation. By providing an intuitive, real-time 3D customization platform, it addresses key challenges in memorial design.",
      problemAndSolution: {
        problem: [
          "Customers demand to see design previews immediately, leading to time-consuming revisions and bottlenecks.",
          "The business struggles with managing multiple orders and frequently gets confused with customer requests.",
          "There have been cases where customers pay partially, never complete the payment, and fail to claim their orders—causing losses.",
        ],
        solution: [
          "ED3C introduces a real-time 3D visualization feature, allowing customers to design and preview gravestones, urns, and table signs themselves, minimizing revision requests.",
          "A dedicated order tracking system and messaging module lets customers check the status of their orders and communicate directly with the business.",
          "Separate forms per customer were implemented to organize order details and reduce confusion.",
          "The system also includes digital receipts for both partial and full payments—preventing unpaid or abandoned orders from being fulfilled until full payment is received.",
        ],
      },
      features: [
        "Interactive 3D design tool",
        "Real-time customization of gravestones, table signs, urns, and bases",
        "User-friendly design management system",
        "Comprehensive order tracking",
        "Real-time messaging between customer and business",
        "Partial and full payment tracking with receipt generation",
        "Admin Dashboard for monthly sales and most buyed products",
        "Template Designs for gravestones, urns, and table signs",
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
    title: "AI-Resume Builder",
    description:
      "An intelligent resume builder that uses Mistral AI for skill suggestions, customizable templates, and PDF export with Firebase integration.",
    image: "/projects/AI-Resume Builder.webp",
    category: "Web App",
    technologies: ["React", "Tailwind", "Firebase", "Express", "Mistral AI"],
    link: "https://ai-rb-haee.onrender.com",
    featured: true,
    caseStudy: {
      title: "AI-Powered Resume Builder: Smarter Resume Creation",
      overview:
        "This web application streamlines the resume creation process by integrating Mistral AI to suggest relevant skills based on job titles. It allows users to generate, customize, save, and download resumes using a clean, intuitive interface and PDF-ready templates.",
      features: [
        "AI-generated skill suggestions via Mistral AI",
        "Customizable resume templates styled with Tailwind CSS",
        "Export resumes as PDF files",
        "Save and load resumes using Firebase Firestore",
        "Secure user authentication via Firebase Auth",
      ],
      technologyStack: [
        "Frontend: React.js + Tailwind CSS",
        "Backend: Express.js (Node.js)",
        "AI Integration: Mistral AI",
        "Database: Firebase Firestore",
        "Authentication: Firebase Authentication",
      ],
    },
  },
  {
    id: 1,
    title: "AI-Health Companion",
    description:
      "A smart healthcare assistant web app that uses Mistral AI and public medical APIs to help users check symptoms, track mental health, and access timely health advice.",
    image: "/projects/AI-HealthCare.webp",
    category: "Web App",
    technologies: ["React", "Tailwind", "Firebase", "Express", "Mistral AI"],
    link: "https://projectbaymax.onrender.com/",
    featured: true,
    caseStudy: {
      title: "BAYMAX – Your AI-Powered Health Companion",
      overview:
        "BAYMAX is an AI-driven health assistant web application that empowers users to monitor their well-being through symptom checks, mood tracking, journaling, and wellness tips. By integrating Mistral AI with trusted public medical data sources like the National Library of Medicine (NLM), the system provides informed and contextual health responses in real time.",
      features: [
        "AI-powered Symptom Checker using Mistral AI and MedlinePlus/NLM APIs",
        "Daily emotional and health check-ins with mood sliders and logs",
        "Private journaling feature with CBT-inspired prompts",
        "Personalized health tips and push notification reminders",
        "Emergency assistant with quick access to stored critical health info",
      ],
      technologyStack: [
        "Frontend: React.js + Tailwind CSS",
        "Backend: Express.js (Node.js)",
        "AI Integration: Mistral AI + NLM / MedlinePlus APIs",
        "Database: Firebase Firestore",
        "Authentication: Firebase Authentication",
      ],
    },
  },
];

// Small projects data
export const smallProjects = [
  {
    id: 5,
    title: "Expense Tracker",
    description:
      "A streamlined expense tracking application built with React and Appwrite to help users manage their personal finances effectively.",
    image: "/projects/expensetracker.webp",
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
    image: "/projects/chatsphere.webp",
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
    image: "/projects/taskmanager.webp",
    category: "Web App",
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
    image: "/projects/ai-mr.webp",
    category: "Web App",
    technologies: ["React", "Tailwind", "Express"],
    link: "https://ai-movie.onrender.com",
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

export const certificates = [
  {
    id: 8,
    title: "Introduction to Computer Networking",
    image: "/certificates/ICN.png",
    category: "Certificate",
    issuer: "Simplilearn",
    date: "2025",
  },
  {
    id: 9,
    title: "AWS Cloud Practitioner",
    image: "/path-to-aws-cert.jpg",
    category: "Certificate",
    issuer: "Amazon Web Services",
    date: "2022",
  },
  {
    id: 10,
    title: "MongoDB Developer",
    image: "/path-to-mongo-cert.jpg",
    category: "Certificate",
    issuer: "MongoDB University",
    date: "2022",
  },
];
