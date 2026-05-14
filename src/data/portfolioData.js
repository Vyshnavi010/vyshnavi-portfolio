export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/vyshnavimashetti', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vyshnavimashetti', icon: 'linkedin' },
  { label: 'LeetCode', href: 'https://leetcode.com/vyshnavimashetti', icon: 'code' },
  { label: 'Email', href: 'mailto:vyshnavimashetti@gmail.com', icon: 'mail' },
]

export const stats = [
  { label: 'CGPA', value: '8.5', icon: 'star', color: 'from-yellow-400 to-amber-500' },
  { label: 'Projects', value: '4+', icon: 'folder', color: 'from-brand-500 to-violet-500' },
  { label: 'Certifications', value: '4', icon: 'award', color: 'from-pink-500 to-rose-500' },
  { label: 'Skills', value: '15+', icon: 'zap', color: 'from-cyan-400 to-brand-500' },
]

export const skillCategories = [
  {
    title: 'Programming',
    color: 'from-brand-500 to-violet-500',
    borderColor: 'border-brand-500/20',
    glowColor: 'rgba(86,104,245,0.15)',
    skills: [
      { name: 'Java', level: 85, icon: '☕' },
      { name: 'SQL', level: 80, icon: '🗄️' },
      { name: 'JavaScript', level: 75, icon: '⚡' },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-cyan-400 to-brand-500',
    borderColor: 'border-cyan-500/20',
    glowColor: 'rgba(34,211,238,0.15)',
    skills: [
      { name: 'HTML', level: 90, icon: '🌐' },
      { name: 'CSS', level: 85, icon: '🎨' },
      { name: 'React', level: 75, icon: '⚛️' },
      { name: 'Tailwind CSS', level: 80, icon: '💨' },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: 'from-emerald-400 to-cyan-400',
    borderColor: 'border-emerald-500/20',
    glowColor: 'rgba(52,211,153,0.15)',
    skills: [
      { name: 'Git', level: 80, icon: '🔀' },
      { name: 'GitHub', level: 85, icon: '🐙' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'Google Colab', level: 75, icon: '📓' },
    ],
  },
  {
    title: 'AI / ML',
    color: 'from-pink-500 to-violet-500',
    borderColor: 'border-pink-500/20',
    glowColor: 'rgba(244,114,182,0.15)',
    skills: [
      { name: 'Opinion Mining', level: 70, icon: '💬' },
      { name: 'Sentiment Analysis', level: 72, icon: '🧠' },
      { name: 'ML Basics', level: 65, icon: '🤖' },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Faculty Profile Website',
    description: 'A responsive faculty profile website with user-friendly navigation and an accessibility-focused UI — designed to professionally showcase academic portfolios.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive Design', 'Easy Navigation', 'Accessibility Focused'],
    color: 'from-brand-500 to-violet-500',
    accent: '#5668f5',
    emoji: '🎓',
    github: 'https://github.com/vyshnavimashetti',
    demo: '#',
  },
  {
    id: 2,
    title: 'Library Management System',
    description: 'A full-featured library management system with login, book issue/return tracking, stock management and a clean dashboard UI.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Login System', 'Issue / Return', 'Stock Dashboard'],
    color: 'from-cyan-400 to-brand-500',
    accent: '#22d3ee',
    emoji: '📚',
    github: 'https://github.com/vyshnavimashetti',
    demo: '#',
  },
  {
    id: 3,
    title: 'Banking System Application',
    description: 'A secure Java-based banking application featuring authentication, deposits, withdrawals, and fund transfers — built with OOP principles.',
    tech: ['Java', 'OOP', 'DSA'],
    features: ['Secure Auth', 'Transactions', 'Fund Transfer'],
    color: 'from-amber-400 to-orange-500',
    accent: '#fbbf24',
    emoji: '🏦',
    github: 'https://github.com/vyshnavimashetti',
    demo: '#',
  },
  {
    id: 4,
    title: 'AI Daily Task Manager',
    description: 'A React-powered productivity app with AI-driven task suggestions, habit tracking, smart reminders, and a beautiful analytics dashboard.',
    tech: ['React', 'AI', 'Tailwind CSS'],
    features: ['AI Suggestions', 'Habit Tracking', 'Analytics'],
    color: 'from-pink-500 to-rose-500',
    accent: '#f472b6',
    emoji: '🤖',
    github: 'https://github.com/vyshnavimashetti',
    demo: '#',
  },
]

export const certifications = [
  {
    title: 'AIML Virtual Internship',
    issuer: 'AICTE / AIML Program',
    date: '2023',
    desc: 'Completed an AI/ML virtual internship covering machine learning, data science, and intelligent systems.',
    color: 'from-pink-500 to-violet-500',
    icon: '🤖',
  },
  {
    title: 'Java Full Stack Developer',
    issuer: 'Internship Program',
    date: '2023',
    desc: 'Intensive full-stack development internship with Java backend and modern frontend technologies.',
    color: 'from-brand-500 to-cyan-400',
    icon: '☕',
  },
  {
    title: 'Juniper MIST AI Internship',
    issuer: 'Juniper Networks',
    date: '2024',
    desc: 'Explored AI-driven network management through Juniper\'s MIST AI platform and cloud networking.',
    color: 'from-emerald-400 to-cyan-400',
    icon: '🌐',
  },
  {
    title: 'AWS Cloud Developer',
    issuer: 'Amazon Web Services',
    date: '2024',
    desc: 'Earned AWS certification demonstrating cloud architecture, deployment, and developer best practices.',
    color: 'from-amber-400 to-orange-500',
    icon: '☁️',
  },
]

export const achievements = [
  { icon: '💻', text: 'Built 4+ academic and personal projects spanning web & systems' },
  { icon: '🧩', text: 'Strong DSA foundation with consistent LeetCode practice' },
  { icon: '🤖', text: 'Exploring AI/ML with hands-on internship experience' },
  { icon: '📜', text: '4 industry-recognized certifications from top organizations' },
  { icon: '🌱', text: 'Continuous learner — always picking up new tools and frameworks' },
  { icon: '🏆', text: 'Participated in technical workshops and learning programs' },
]
