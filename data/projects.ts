export const projects: {
  id: number;
  title: string;
  image: string;
  description: string;
  tools: string[];
  links: {
    live: string;
    front?: string;
    back?: string;
    full?: string;
  };
}[] = [
  {
    id: 1,
    title: "Travel Nest - Hotel Management Application",
    image: "/travel-nest.png",
    description:
      "Travel Nest is a full-stack hotel booking application built with modern technologies like Next.js, React.js, and TypeScript.",
    tools: [
      "Next.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Clerk",
    ],
    links: {
      live: "https://travel-nest-ecru.vercel.app",
      full: "https://github.com/SazzatTuhin/travel-nest",
    },
  },
  {
    id: 2,
    title: "E-commerce Platform",
    image: "/ecommerce.png",
    description: "A full-fledged e-commerce platform with payment integration.",
    tools: ["React", "Node.js", "MongoDB"],
    links: {
      live: "https://example.com/ecommerce",
      front: "https://github.com/username/ecommerce-frontend",
      back: "https://github.com/username/ecommerce-backend",
    },
  },
  {
    id: 3,
    title: "Social Media App",
    image: "/social.jpg",
    description:
      "A social media platform with real-time chat and notifications.",
    tools: ["Angular", "Firebase", "Bootstrap"],
    links: {
      live: "https://example.com/social-media",
      front: "https://github.com/username/social-media-frontend",
    },
  },
  {
    id: 4,
    title: "Task Management Tool",
    image: "/task.png",
    description: "A task management tool to track and organize your work.",
    tools: ["Vue.js", "Express.js", "MySQL"],
    links: {
      live: "https://example.com/task-manager",
      front: "https://github.com/username/task-manager-frontend",
      back: "https://github.com/username/task-manager-backend",
    },
  },
  {
    id: 5,
    title: "Blog Platform",
    image: "/blog.png",
    description:
      "A blogging platform with markdown support and comment sections.",
    tools: ["Gatsby", "GraphQL", "Netlify"],
    links: {
      live: "https://example.com/blog",
      full: "https://github.com/username/blog-platform",
    },
  },
  {
    id: 6,
    title: "Weather App",
    image: "/weather.png",
    description:
      "A weather forecasting app with geolocation and map integration.",
    tools: ["React Native", "OpenWeather API"],
    links: {
      live: "https://example.com/weather-app",
      front: "https://github.com/username/weather-app-frontend",
    },
  },
];
