import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileArrowDown } from 'react-icons/fa6'

export const socials = {
  email: 'hello@pholcastaneda.dev',
  links: [
    {
      key: 'email',
      href: 'mailto:hello@pholcastaneda.dev',
      icon: FaEnvelope,
      color: '#38bdf8'
    },
    {
      key: 'github',
      href: 'https://github.com/',
      icon: FaGithub,
      color: '#f97316'
    },
    {
      key: 'linkedin',
      href: 'https://www.linkedin.com/',
      icon: FaLinkedinIn,
      color: '#3b82f6'
    }
  ],
  heroActions: {
    mail: {
      href: 'mailto:hello@pholcastaneda.dev',
      icon: FaEnvelope
    },
    github: {
      href: 'https://github.com/',
      icon: FaGithub
    },
    linkedin: {
      href: 'https://www.linkedin.com/',
      icon: FaLinkedinIn
    },
    cv: {
      href: 'data:text/plain;charset=utf-8,Phol%20Casta%C3%B1eda%20-%20Full%20Stack%20Developer',
      icon: FaFileArrowDown,
      download: 'phol-castaneda-cv.txt'
    }
  }
}
