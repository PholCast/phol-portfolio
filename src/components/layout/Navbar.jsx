import { motion } from 'framer-motion'
import GooeyNav from '../ui/GooeyNav'

const Navbar = ({ name, items, activeIndex, onNavigate, language, onToggleLanguage }) => {
  const navItems = items.map((item) => ({ label: item.label, href: `#${item.id}` }))

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center gap-4 rounded-[28px] border border-white/10 bg-[rgba(6,12,24,0.68)] px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <motion.button
          type="button"
          onClick={() => onNavigate(0)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-shrink-0 text-left font-display text-base font-semibold tracking-[0.08em] text-white/90 sm:text-lg"
          aria-label={`${name} home`}
        >
          {name}
        </motion.button>

        <div className="hidden min-w-0 flex-1 justify-center lg:flex">
          <GooeyNav items={navItems} activeIndex={activeIndex} onItemSelect={(index) => onNavigate(index)} />
        </div>

        <nav className="flex flex-1 items-center justify-end gap-2 lg:flex-none">
          {/* <motion.button
            type="button"
            onClick={onToggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-white/85 transition hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </motion.button> */}

          <motion.button
            type="button"
            onClick={onToggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-11 items-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold tracking-[0.2em] text-white/85 transition hover:bg-white/10"
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </motion.button>
        </nav>
      </div>

      <div className="mt-3 flex justify-center lg:hidden">
        <div className="w-full max-w-7xl overflow-x-auto rounded-full border border-white/8 bg-[rgba(6,12,24,0.5)] p-2 backdrop-blur-xl">
          <GooeyNav items={navItems} activeIndex={activeIndex} onItemSelect={(index) => onNavigate(index)} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
