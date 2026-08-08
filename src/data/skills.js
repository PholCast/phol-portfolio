import { FaJava, FaDocker, FaGitAlt, FaAws } from 'react-icons/fa6'
import { DiMsqlServer } from 'react-icons/di'
import {
  SiSupabase,
  SiFirebase,
  SiSpring,
  SiPython,
  SiHtml5,
  SiCss,
  SiSpringboot,
  SiJavascript,
  SiReact,
  SiNestjs,
  SiTypescript,
  SiAngular,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPostman,
  SiGraphql,
  SiTailwindcss,
  SiNodedotjs,
  SiJest,
  SiVercel,
  SiFigma,
  SiGithub,
  SiTrello,
  SiJira,
  SiLinux
} from 'react-icons/si'
import { LuUsers, LuPuzzle, LuShieldCheck, LuClock3, LuMessagesSquare } from 'react-icons/lu'

export const mainSkills = [
  {
    title: 'Java',
    label: 'Backend',
    description: {
      es: 'Sólida base para construir servicios robustos, tipados y mantenibles.',
      en: 'Strong foundation for building robust, typed and maintainable services.'
    },
    icon: FaJava,
    color: '#f59e0b'
  },
  {
    title: 'Spring Boot',
    label: 'APIs',
    description: {
      es: 'Desarrollo de APIs REST seguras, escalables y listas para producción.',
      en: 'Development of secure, scalable and production-ready REST APIs.'
    },
    icon: SiSpringboot,
    color: '#4ade80'
  },
  {
    title: 'JavaScript',
    label: 'Frontend',
    description: {
      es: 'Construcción de experiencias interactivas y dinámicas en la web.',
      en: 'Building interactive and dynamic web experiences.'
    },
    icon: SiJavascript,
    color: '#facc15'
  },
  {
    title: 'React',
    label: 'UI',
    description: {
      es: 'Interfaces modernas, componibles y orientadas a producto.',
      en: 'Modern, composable and product-oriented interfaces.'
    },
    icon: SiReact,
    color: '#38bdf8'
  },
  {
    title: 'Node.js',
    label: 'Runtime',
    description: {
      es: 'Servicios eficientes para integraciones, automatización y APIs.',
      en: 'Efficient services for integrations, automation and APIs.'
    },
    icon: SiNodedotjs,
    color: '#22c55e'
  },
  {
    title: 'NestJS',
    label: 'Architecture',
    description: {
      es: 'Arquitecturas backend limpias y escalables con enfoque enterprise.',
      en: 'Clean and scalable backend architectures with an enterprise mindset.'
    },
    icon: SiNestjs,
    color: '#e11d48'
  }
]

export const skillCategories = [
  
    {
    key: 'languages',
    title: { es: 'Lenguajes', en: 'Languages' },
    items: [
      { name: 'Java', icon: FaJava, color: 'rgba(245, 158, 11, 0.55)' },
      { name: 'JavaScript', icon: SiJavascript, color: 'rgba(250, 204, 21, 0.55)' },
      { name: 'TypeScript', icon: SiTypescript, color: 'rgba(59, 130, 246, 0.55)' },
      { name: 'Python', icon: SiPython, color: 'rgba(59, 130, 246, 0.55)' }
    ]
  },
  {
    key: 'frontend',
    title: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'HTML', icon: SiHtml5, color: 'rgba(249, 115, 22, 0.55)' },
      { name: 'CSS', icon: SiCss, color: 'rgba(59, 130, 246, 0.55)' },
      { name: 'React', icon: SiReact, color: 'rgba(56, 189, 248, 0.55)' },
      { name: 'Angular', icon: SiAngular, color: 'rgba(239, 68, 68, 0.55)' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'rgba(14, 165, 233, 0.55)' },
      // { name: 'Figma', icon: SiFigma, color: 'rgba(168, 85, 247, 0.55)' }
    ]
  },
  {
    key: 'backend',
    title: { es: 'Backend', en: 'Backend' },
    items: [
      { name: 'Spring Boot', icon: SiSpringboot, color: 'rgba(74, 222, 128, 0.55)' },
      { name: 'Spring', icon: SiSpring, color: 'rgba(34, 197, 94, 0.55)' },
      { name: 'NestJS', icon: SiNestjs, color: 'rgba(225, 29, 72, 0.55)' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'rgba(34, 197, 94, 0.55)' },
      // { name: 'GraphQL', icon: SiGraphql, color: 'rgba(236, 72, 153, 0.55)' },
      { name: 'Jest', icon: SiJest, color: 'rgba(239, 68, 68, 0.55)' }
    ]
  },
  {
    key: 'databases',
    title: { es: 'Bases de datos', en: 'Databases' },
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'rgba(59, 130, 246, 0.55)' },
      { name: 'MySQL', icon: SiMysql, color: 'rgba(14, 165, 233, 0.55)' },
      { name: 'SQL Server', icon: DiMsqlServer, color: 'rgba(239, 68, 68, 0.55)' },
      // { name: 'MongoDB', icon: SiMongodb, color: 'rgba(34, 197, 94, 0.55)' },
      // { name: 'Redis', icon: SiRedis, color: 'rgba(248, 113, 113, 0.55)' }
    ]
  },
  {
    key: 'cloud',
    title: { es: 'Cloud y Servicios', en: 'Cloud & Services' },
    items: [
      { name: 'AWS', icon: FaAws, color: 'rgba(245, 158, 11, 0.55)' },
      { name: 'Supabase', icon: SiSupabase, color: 'rgba(34, 197, 94, 0.55)' },
      { name: 'Firebase', icon: SiFirebase, color: 'rgba(250, 204, 21, 0.55)' },
    ]
  },
  {
    key: 'tools',
    title: { es: 'Otras herramientas', en: 'Other tools' },
    items: [
      { name: 'Git', icon: FaGitAlt, color: 'rgba(249, 115, 22, 0.55)' },
      { name: 'Docker', icon: FaDocker, color: 'rgba(14, 165, 233, 0.55)' },
      { name: 'GitHub', icon: SiGithub, color: 'rgba(255, 255, 255, 0.45)' },
      { name: 'Vercel', icon: SiVercel, color: 'rgba(255, 255, 255, 0.35)' },
      { name: 'Postman', icon: SiPostman, color: 'rgba(249, 115, 22, 0.55)' },
      { name: 'Jira', icon: SiJira, color: 'rgba(59, 130, 246, 0.55)' },
      { name: 'Trello', icon: SiTrello, color: 'rgba(37, 99, 235, 0.55)' },
      { name: 'Linux', icon: SiLinux, color: 'rgba(251, 191, 36, 0.55)' }
    ]
  },
{
  key: 'soft',
  title: { es: 'Habilidades blandas', en: 'Soft skills' },
  items: [
    {
      name: { es: 'Trabajo en equipo', en: 'Teamwork' },
      icon: LuUsers,
      color: 'rgba(96, 165, 250, 0.55)'
    },
    {
      name: { es: 'Resolución de problemas', en: 'Problem solving' },
      icon: LuPuzzle,
      color: 'rgba(168, 85, 247, 0.55)'
    },
    {
      name: { es: 'Comunicación', en: 'Communication' },
      icon: LuMessagesSquare,
      color: 'rgba(52, 211, 153, 0.55)'
    },
    {
      name: { es: 'Adaptabilidad', en: 'Adaptability' },
      icon: LuShieldCheck,
      color: 'rgba(248, 113, 113, 0.55)'
    },
    {
      name: { es: 'Gestión del tiempo', en: 'Time management' },
      icon: LuClock3,
      color: 'rgba(250, 204, 21, 0.55)'
    }
  ]
}
]
