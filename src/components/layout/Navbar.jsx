import { useState } from 'react'
import { motion } from 'framer-motion'
import GooeyNav from '../ui/GooeyNav'
import StaggeredMenu from '../ui/StaggeredMenu'

const Navbar = ({
  name,
  items,
  activeIndex,
  onNavigate,
  language,
  onToggleLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = items.map((item) => ({
    label: item.label,
    href: `#${item.id}`,
  }))

  const staggeredItems = items.map((item) => ({
    label: item.label,
    ariaLabel: item.label,
    link: `#${item.id}`,
  }))

  const handleStaggeredItemClick = (index) => {
    onNavigate(index)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center gap-4">
        {/* Contenedor visual del navbar */}
        <div className="flex min-w-0 flex-1 items-center gap-4 rounded-[28px] border border-white/10 bg-[rgba(6,12,24,0.68)] px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl max-[975px]:justify-between">
          <motion.button
            type="button"
            onClick={() => onNavigate(0)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0 text-left cursor-pointer font-display text-[#60a7ff] text-base font-semibold tracking-[0.08em] sm:text-lg"
            aria-label={`${name} home`}
          >
            {name}
          </motion.button>

          {/* Navegación desktop */}
          <div className="hidden min-w-0 flex-1 justify-center min-[975px]:flex">
            <GooeyNav
              items={navItems}
              activeIndex={activeIndex}
              onItemSelect={(index) => onNavigate(index)}
            />
          </div>

          {/* Idioma */}
          <nav className="flex items-center justify-end gap-3">
            <motion.button
              type="button"
              onClick={onToggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-11 items-center  cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold tracking-[0.2em] text-white/85 transition hover:bg-white/10"
              aria-label="Toggle language"
            >
              {language.toUpperCase()}
            </motion.button>
          </nav>
        </div>

        {/* Menú móvil: fuera del contenedor visual */}
        <div className="relative z-[100] rounded-[28px] border border-white/10 bg-[rgba(6,12,24,0.68)] px-4 py-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)]  flex-shrink-0 min-[975px]:hidden">
          <StaggeredMenu
            isFixed
            externalToggle
            open={mobileMenuOpen}
            onMenuOpen={() => setMobileMenuOpen(true)}
            onMenuClose={() => setMobileMenuOpen(false)}
            onItemClick={handleStaggeredItemClick}
            items={staggeredItems}
            displaySocials={false}
            displayItemNumbering
            colors={['#4f46e5', '#7c3aed']}
            accentColor="#818cf8"
            menuButtonColor="#ffffff"
            openMenuButtonColor="#ffffff"
            changeMenuColorOnOpen={false}
            closeOnClickAway
          />
        </div>
      </div>
    </header>
  )
}

export default Navbar