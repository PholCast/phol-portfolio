import { createProjectPreview } from '../utils/svgPreview'
import project1Image from '../assets/images/fluxlab/project_1.png'
import project1_2Image from '../assets/images/fluxlab/project_1_2.png'
import project1_3Image from '../assets/images/fluxlab/project_1_3.png'
import project2Image from '../assets/images/focushub/project_2.png'
import project2_2Image from '../assets/images/focushub/project_2_2.png'


export const projects = [
  {
    id: '1',
    name: { es: 'FluxLab', en: 'FluxLab' },
    shortDescription: {
      es: 'Plataforma web LIMS (Laboratory Information Management System) para la gestión de laboratorios de biotecnología ambiental, diseñada para centralizar la administración de muestras, proyectos y resultados, optimizando la trazabilidad y automatizando procesos clave del laboratorio.',
      en: 'LIMS (Laboratory Information Management System) web platform for environmental biotechnology laboratories, designed to centralize samples, projects, and results while improving traceability and automating key laboratory processes.'
    },
    longDescription: {
      es:   'FluxLab es una plataforma web LIMS (Laboratory Information Management System) desarrollada para optimizar la gestión de laboratorios de biotecnología ambiental. La plataforma centraliza la administración de clientes, proyectos, muestras y resultados en un único entorno, reemplazando procesos manuales y hojas de cálculo dispersas por un flujo de trabajo digital, organizado y trazable.\n\nEl sistema incorpora autenticación de usuarios, gestión de proyectos y muestras, importación y exportación de datos mediante archivos Excel, generación de plantillas, dashboards y generación de informes.',
      en: 'FluxLab is a LIMS (Laboratory Information Management System) web platform developed to streamline the management of environmental biotechnology laboratories. The platform centralizes clients, projects, samples, and results within a single environment, replacing manual processes and scattered spreadsheets with a structured, traceable digital workflow.\n\nThe system includes user authentication, project and sample management, Excel import and export capabilities, template generation, dashboards, and report generation.'
    },
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'NestJS', 'TypeORM', 'Supabase', 'Swagger'],
    github: 'https://github.com/PholCast/fluxlab-backend',
    demo: 'https://fluxlab-front.vercel.app/',
    mainImage: project1Image,
    gallery: [
      project1_2Image,
      project1_3Image
    ],
    videos: [
      { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: project1Image }
    ]
  },
  {
    id: '2',
    name: { es: 'FocusHub', en: 'FocusHub' },
    shortDescription: {
      es: 'Plataforma web de productividad que integra la gestión de tareas, eventos y técnicas de concentración para optimizar la organización personal en un único entorno.',
      en: 'Productivity web platform that combines task management, event scheduling, and focus techniques to optimize personal organization within a single environment.'
    },
    longDescription: {
      es: 'FocusHub es una plataforma web de productividad desarrollada para ayudar a estudiantes, profesionales y freelancers a organizar sus actividades y mantener la concentración durante su jornada. El sistema reúne la gestión de tareas, eventos, técnicas de concentración y métricas de rendimiento en una experiencia intuitiva que reduce la necesidad de utilizar múltiples herramientas independientes.\n\nLa plataforma incorpora autenticación de usuarios, gestión de tareas y eventos, calendario interactivo, técnicas de concentración con temporizadores predefinidos y personalizados, estadísticas de productividad, panel de control con métricas y soporte para modos claro y oscuro.',
      en: 'FocusHub is a productivity web platform developed to help students, professionals, and freelancers organize their daily activities and stay focused throughout their work or study sessions. The system brings together task management, event scheduling, focus techniques, and productivity metrics in an intuitive experience that reduces the need to switch between multiple disconnected tools.\n\nThe platform includes user authentication, task and event management, an interactive calendar, focus techniques with predefined and customizable timers, productivity statistics, a dashboard with key metrics, and support for both light and dark themes.'
    },
    technologies: ['TypeScript', 'Angular', 'CSS', 'NestJS', 'TypeORM', 'PostgreSQL', 'JWT', 'Swagger', 'Chart.js'],
    github: 'https://github.com/PholCast/FocusHub',
    demo: 'https://focushub-eight.vercel.app/',
    mainImage: project2Image,
    gallery: [
      project2_2Image
    ],
    videos: [
      { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: project2Image }
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
