import { useEffect, useMemo, useRef, useState } from 'react'
import ReactModal from 'react-modal'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import ContactSection from './components/sections/ContactSection'
import ProjectModal from './components/ui/ProjectModal'
import { translations } from './data/translations'
import { socials } from './data/socials'
import { projects } from './data/projects'
import { mainSkills, skillCategories } from './data/skills'
import profileImage from './assets/images/phol-profile.webp'

const sectionIds = ['hero', 'about', 'projects', 'skills', 'contact']

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'es')
  const [activeSection, setActiveSection] = useState('hero')
  const [selectedProject, setSelectedProject] = useState(null)
  const pendingNavTargetRef = useRef(null)
  const navReleaseTimerRef = useRef(null)

  const copy = translations[language]

  const cvFile =
    language === 'es'
      ? '/cv/Phol_Castaneda_CV_ES.pdf'
      : '/cv/Phol_Castaneda_CV_EN.pdf'

  const heroSocials = {
    ...socials,
    heroActions: {
      ...socials.heroActions,
      cv: {
        ...socials.heroActions.cv,
        href: cvFile,
        download: cvFile.split('/').pop()
      }
    }
  }

  const getPredominantSection = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    let bestId = null
    let bestVisiblePixels = -1

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return
      const rect = element.getBoundingClientRect()
      const visibleTop = Math.max(rect.top, 0)
      const visibleBottom = Math.min(rect.bottom, viewportHeight)
      const visiblePixels = Math.max(0, visibleBottom - visibleTop)

      if (visiblePixels > bestVisiblePixels) {
        bestVisiblePixels = visiblePixels
        bestId = id
      }
    })

    return bestId
  }


  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
  }, [language])

  useEffect(() => {
    ReactModal.setAppElement('#root')
  }, [])

  useEffect(() => {
    let rafId = null

    const updateFromViewport = () => {
      if (pendingNavTargetRef.current) return
      const predominant = getPredominantSection()
      if (predominant && predominant !== activeSection) {
        setActiveSection(predominant)
      }
    }

    const scheduleViewportCheck = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        updateFromViewport()
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible?.target?.id) return

        const visibleId = visible.target.id
        const pendingTarget = pendingNavTargetRef.current

        // While smooth-scrolling from the navbar, ignore intermediate sections
        // and only confirm the selected destination when it is truly predominant.
        if (pendingTarget) {
          if (visibleId === pendingTarget && visible.intersectionRatio >= 0.55) {
            setActiveSection(pendingTarget)
            pendingNavTargetRef.current = null
          }
          return
        }

        setActiveSection(visibleId)
      },
      { threshold: [0.25, 0.4, 0.55, 0.7] }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    window.addEventListener('scroll', scheduleViewportCheck, { passive: true })
    window.addEventListener('resize', scheduleViewportCheck)

    // Initial sync on mount to avoid stale active section.
    scheduleViewportCheck()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', scheduleViewportCheck)
      window.removeEventListener('resize', scheduleViewportCheck)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [activeSection])

  useEffect(() => {
    return () => {
      if (navReleaseTimerRef.current) {
        clearTimeout(navReleaseTimerRef.current)
      }
    }
  }, [])

  const navItems = useMemo(
    () => sectionIds.map((id, index) => ({ id, label: copy.nav[index] })),
    [copy.nav]
  )

  const scrollToSection = (index) => {
    const id = sectionIds[index]
    const element = document.getElementById(id)
    if (element) {
      if (navReleaseTimerRef.current) {
        clearTimeout(navReleaseTimerRef.current)
      }
      pendingNavTargetRef.current = id
      setActiveSection(id)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })

      // Safety release so manual scrolling keeps updating the nav even if
      // the target section never hits the strict observer threshold.
      navReleaseTimerRef.current = setTimeout(() => {
        pendingNavTargetRef.current = null
        const predominant = getPredominantSection()
        if (predominant) {
          setActiveSection(predominant)
        }
      }, 1200)
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.16),_transparent_32%),radial-gradient(circle_at_80%_15%,_rgba(168,85,247,0.12),_transparent_26%),linear-gradient(180deg,_#06101f_0%,_#081120_46%,_#050b16_100%)] text-white transition-colors duration-500">
      <div className="pointer-events-none fixed inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:92px_92px]" />
      <Navbar
        name="Phol Castañeda"
        items={navItems}
        activeIndex={sectionIds.indexOf(activeSection)}
        onNavigate={scrollToSection}
        language={language}
        onToggleLanguage={() => setLanguage((current) => (current === 'es' ? 'en' : 'es'))}
      />

      <main className="relative z-10">
        <HeroSection
          copy={copy.hero}
          socials={heroSocials}
          onNavigate={scrollToSection}
          profileImage={profileImage}
        />
        <AboutSection copy={copy.about} />
        <ProjectsSection
          projects={projects}
          copy={copy.projects}
          locale={language}
          onSelectProject={setSelectedProject}
        />
        <SkillsSection
          mainSkills={mainSkills}
          categories={skillCategories}
          copy={copy.skills}
          locale={language}
        />
        <ContactSection copy={copy.contact} socials={socials} />
      </main>

      <ProjectModal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        copy={copy.projects.modal}
        locale={language}
      />
    </div>
  )
}

export default App
