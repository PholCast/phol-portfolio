import { createProjectPreview } from '../utils/svgPreview'
import project1Image from '../assets/images/project_1.png'

export const projects = [
  {
    id: '1',
    name: { es: 'Sentinel Commerce', en: 'Sentinel Commerce' },
    shortDescription: {
      es: 'Plataforma de comercio con enfoque en arquitectura modular y conversión.',
      en: 'E-commerce platform focused on modular architecture and conversion.'
    },
    longDescription: {
      es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/',
    demo: 'https://example.com',
    mainImage: project1Image,
    gallery: [
      project1Image,
      project1Image
    ],
    videos: [
      { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: project1Image }
    ]
  },
  {
    id: '2',
    name: { es: 'Atlas Health', en: 'Atlas Health' },
    shortDescription: {
      es: 'Sistema clínico con dashboard, trazabilidad y foco en claridad operativa.',
      en: 'Clinical system with dashboard, traceability and operational clarity.'
    },
    longDescription: {
      es: 'Atlas Health centraliza la experiencia de monitoreo y gestión clínica con paneles informativos, navegación mínima y componentes pensados para reducir fricción. El sistema prioriza accesibilidad, lectura rápida de indicadores y una estructura visual que permite encontrar información crítica con pocos pasos. Es una base ideal para modelos SaaS orientados a equipos de salud o laboratorios.',
      en: 'Atlas Health centralizes clinical monitoring and management through informative dashboards, minimal navigation and components designed to reduce friction. The system prioritizes accessibility, quick reading of indicators and a visual structure that allows critical information to be found in just a few steps. It is an ideal foundation for SaaS models oriented to healthcare teams or labs.'
    },
    technologies: ['React', 'NestJS', 'PostgreSQL', 'Docker', 'Swagger'],
    github: 'https://github.com/',
    demo: 'https://example.com',
    mainImage: createProjectPreview({ title: 'Atlas Health', tag: 'Clinical dashboard and analytics', accent: '#22c55e', accentTwo: '#0ea5e9' }),
    gallery: [
      createProjectPreview({ title: 'Atlas Ward', tag: 'Patient tracking', accent: '#14b8a6', accentTwo: '#22c55e' }),
      createProjectPreview({ title: 'Atlas Reports', tag: 'Reporting and metrics', accent: '#3b82f6', accentTwo: '#8b5cf6' })
    ],
    videos: [
      { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: createProjectPreview({ title: 'Atlas motion', tag: 'Dashboard interactions', accent: '#22c55e', accentTwo: '#38bdf8' }) }
    ]
  },
  {
    id: '3',
    name: { es: 'Nebula Studio', en: 'Nebula Studio' },
    shortDescription: {
      es: 'Portafolio creativo para estudios y productos digitales con navegación fluida.',
      en: 'Creative portfolio for studios and digital products with smooth navigation.'
    },
    longDescription: {
      es: 'Nebula Studio explora una experiencia editorial para mostrar trabajos, testimonios y procesos de forma elegante. El proyecto usa una composición más cinematográfica, con bloques horizontales, cards profundas y una narrativa visual que mantiene el foco en el contenido. El resultado sirve como referencia para portfolios, estudios de diseño y landing pages premium.',
      en: 'Nebula Studio explores an editorial experience for showcasing work, testimonials and process in an elegant way. The project uses a more cinematic composition, with horizontal blocks, deep cards and a visual narrative that keeps the focus on the content. The result serves as a reference for portfolios, design studios and premium landing pages.'
    },
    technologies: ['React', 'Framer Motion', 'Swiper.js', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/',
    demo: 'https://example.com',
    mainImage: createProjectPreview({ title: 'Nebula Studio', tag: 'Editorial portfolio and storytelling', accent: '#f472b6', accentTwo: '#8b5cf6' }),
    gallery: [
      createProjectPreview({ title: 'Nebula Case Study', tag: 'Research and outcome', accent: '#a855f7', accentTwo: '#ec4899' }),
      createProjectPreview({ title: 'Nebula Gallery', tag: 'Visual showcase', accent: '#38bdf8', accentTwo: '#a855f7' })
    ],
    videos: [
      { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: createProjectPreview({ title: 'Nebula motion', tag: 'Scroll and reveal', accent: '#ec4899', accentTwo: '#38bdf8' }) }
    ]
  }
]
