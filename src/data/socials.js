import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileArrowDown } from 'react-icons/fa6'

export const socials = {
  email: '',
  links: [
    {
      key: 'email',
      href: 'mailto:pholcast@gmail.com',
      icon: FaEnvelope,
      color: '#38bdf8'
    },
    {
      key: 'github',
      href: 'https://github.com/PholCast',
      icon: FaGithub,
      color: '#f97316'
    },
    {
      key: 'linkedin',
      href: 'https://www.linkedin.com/in/pholcast/',
      icon: FaLinkedinIn,
      color: '#3b82f6'
    }
  ],
  heroActions: {
    mail: {
      href: 'mailto:pholcast@gmail.com',
      icon: FaEnvelope
    },
    github: {
      href: 'https://github.com/PholCast',
      icon: FaGithub
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/pholcast/',
      icon: FaLinkedinIn
    },
    cv: {
      icon: FaFileArrowDown,
    }
  }
}
