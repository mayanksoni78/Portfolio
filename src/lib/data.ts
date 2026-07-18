import type { PersonalInfo, SocialLink, Project, Skill, Education, Achievement, NavItem } from '@/types';


export const personalInfo: PersonalInfo = {
  name: 'Mayank Soni',
  tagline: 'Full Stack Developer',
  bio: "I am a Computer Science student at IIIT Vadodara driven by a passion for building scalable web applications that solve complex real world problems. With deep expertise in the MERN stack and a robust foundation in data structures and algorithms, I have successfully solved over 1000 problems across various competitive programming platforms. I combine engineering rigor with creative problem solving to deliver impactful and efficient software solutions.",
  email: 'mayanksoni782005@gmail.com',
  phone: '+91 9644480966',
  resumeUrl: '/resume.pdf',
  location: 'Ratlam, Madhya Pradesh, India',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/mayanksoni78',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/mayanksoni78',
    icon: 'linkedin',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/mayank_07_soni',
    icon: 'twitter',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/mayank_07_soni',
    icon: 'instagram',
  },
];

export const projects: Project[] = [
  {
    id: 'car-rental-app',
    title: 'Car Rental Platform',
    subtitle: 'Real-Time Vehicle Reservation System',
    description:
      'A comprehensive full-stack vehicle booking engine designed for a seamless user experience. Engineered with robust JWT security, it features a dynamic multi-parameter search system and a highly optimized reservation workflow that strictly prevents real-time booking conflicts.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OAuth', 'Razorpay'],
    highlights: [
      'Architected a robust booking engine with concurrent transaction handling to strictly prevent double-booking and schedule conflicts.',
      'Developed a high-performance search interface allowing users to instantly filter fleet inventory by availability, pricing, and location.',
      'Engineered a secure, role-based authentication and authorization flow utilizing JWT to protect user sessions and data.',
      'Designed a highly intuitive and responsive user interface, ensuring a flawless cross-device experience for browsing and managing rentals.',
    ],
    githubUrl: 'https://github.com/mayanksoni78/Car_Rental',
    liveUrl: 'https://car-rental-mu-ashy.vercel.app/',
    image: '/images/projects/car-rental.png',
  },
  {
    id: 'learnflex',
    title: 'LearnFlex',
    subtitle: 'Adaptive Entrance Exam Preparation Engine',
    description:
      'A scalable, full-stack educational platform built to streamline entrance exam preparation. It features a robust assessment engine, data-driven performance analytics, and personalized learning pathways that identify knowledge gaps to accelerate student progress.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'OAuth'],
    highlights: [
      'Developed a sophisticated assessment engine with real-time performance tracking and automated grading modules.',
      'Architected adaptive learning algorithms that analyze user data to provide personalized study recommendations and target weak areas.',
      'Designed a high-concurrency backend API architecture capable of handling simultaneous user test submissions without data bottlenecks.',
      'Crafted a modern, mobile-responsive dashboard that improved user engagement metrics through intuitive navigation and clear progress visualization.',
    ],
    githubUrl: 'https://github.com/mayanksoni78/Learn_Flex',
    liveUrl: 'https://learn-flex-yw72.vercel.app/HomePage',
    image: '/images/projects/learnflex.png',
  },
];

export const skills: Skill[] = [
  // Languages
  { name: 'C', category: 'language' },
  { name: 'C++', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'SQL', category: 'language' },
  { name: 'HTML5', category: 'language' },
  { name: 'CSS3', category: 'language' },

  // Frontend
  { name: 'React.js', category: 'frontend' },
  { name: 'React Native', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'JWT', category: 'backend' },
  { name: 'OAuth 2.0', category: 'backend' },

  // Database
  { name: 'MongoDB', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Supabase', category: 'database' },

  // Tools
  { name: 'Git', category: 'tool' },
  { name: 'GitHub', category: 'tool' },
  { name: 'VS Code', category: 'tool' },
  { name: 'Vercel', category: 'tool' },
];

export const education: Education[] = [
  {
    institution: 'Indian Institute of Information Technology (IIIT), Vadodara',
    degree: 'B.Tech in Computer Science and Engineering',
    duration: '2024 — Present',
    grade: '',
    description:
      'Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems',
  },
  
];

export const achievements: Achievement[] = [
  {
    title: 'Competitive Programming',
    description:
      'Solved 1000+ algorithmic problems across Codeforces, LeetCode, GFG, and CodeChef.',
    stat: '1000+',
  },
  {
    title: 'LeetCode',
    description: 'Achieved a max rating of 1618 on LeetCode.',
    stat: '1618',
  },
  {
    title: 'Codeforces',
    description: 'Earned Pupil rank with a max rating of 1213.',
    stat: '1213',
  },
  {
    title: 'CodeChef',
    description: '2-Star Coder with a max rating of 1477.',
    stat: '1477',
  },
];

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const leadership = [
  {
    role: 'Lead',
    organization: 'IIITV Cultural Committee',
    duration: '2024 — 2026',
    points: [
      'Led sponsorship outreach and corporate communication strategies for large-scale events, securing partnerships for 1000+ participants.',
      'Directed end-to-end event planning, including rigorous budget management, logistics coordination, and team supervision for cultural fests.',
    ],
  },
  {
    role: 'Core Member',
    organization: 'IIITV Academics Committee',
    duration: '2024 — 2026',
    points: [
      'Spearheaded the design, content strategy, and publication of the official 2025 Institute Magazine as a core member of the Editorial Club.',
      'Facilitated academic workshops and departmental outreach to bridge communication between students and faculty.',
    ],
  },
  
];
