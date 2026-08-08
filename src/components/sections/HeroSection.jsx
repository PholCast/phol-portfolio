import { motion } from 'framer-motion'
import { FaArrowRightLong } from 'react-icons/fa6'
import DotField from '../effects/DotField'
import ProfileCard from '../ui/ProfileCard'
import iconPattern from '../../assets/images/iconpattern.png'
import grainTexture from '../../assets/images/grain.webp'

const heroButtonVariants = {
  rest: { y: 0 },
  hover: { y: -2 }
}

const HeroSection = ({ copy, socials, onNavigate, profileImage }) => {
  const actions = copy.buttons

  return (
    <section id="hero" className="relative overflow-hidden pt-26 sm:pt-30 lg:pt-34">
      <div className="absolute inset-0">
        <DotField
          dotRadius={2}
          dotSpacing={15}
          cursorRadius={520}
          cursorForce={0.12}
          bulgeOnly
          bulgeStrength={70}
          glowRadius={150}
          sparkle
          gradientFrom="rgba(99, 102, 241, 0.35)"
          gradientTo="rgba(168, 85, 247, 0.2)"
          glowColor="#007aff"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-8 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.5em] text-white/55">{copy.intro}</p>
          <h1 className="text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            {copy.name}
          </h1>
          <p className="mt-5 text-2xl font-medium text-accent sm:text-3xl">{copy.role}</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">{copy.description}</p>

          <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { key: 'mail', href: socials.heroActions.mail.href, label: actions.mail, icon: socials.heroActions.mail.icon },
              { key: 'github', href: socials.heroActions.github.href, label: actions.github, icon: socials.heroActions.github.icon },
              { key: 'linkedin', href: socials.heroActions.linkedin.href, label: actions.linkedin, icon: socials.heroActions.linkedin.icon },
              { key: 'cv', href: socials.heroActions.cv.href, label: actions.cv, icon: socials.heroActions.cv.icon, download: socials.heroActions.cv.download }
            ].map((action) => {
              const Icon = action.icon
              return (
                <motion.a
                  key={action.key}
                  href={action.href}
                  download={action.download}
                  target={action.href.startsWith('http') ? '_blank' : undefined}
                  rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
                  variants={heroButtonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-3 text-xs font-medium text-white/90 shadow-[0_14px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 sm:text-sm"
                  aria-label={action.label}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs transition group-hover:bg-white/18 sm:h-8 sm:w-8">
                    <Icon />
                  </span>
                  <span className="truncate">{action.label}</span>
                  <FaArrowRightLong className="hidden text-[10px] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100 sm:block" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
          className="flex justify-center lg:justify-end"
        >
          <ProfileCard
            className="w-fit lg:w-[330px]"
            avatarUrl={profileImage}
            iconUrl={iconPattern}
            grainUrl={grainTexture}
            handle="pholcast"
            status={copy.available}
            contactText={copy.buttons.mail}
            enableTilt
            enableMobileTilt={false}
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            behindGlowSize="56%"
          />
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => onNavigate(1)}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="group relative z-10 mx-auto mb-4 flex flex-col items-center gap-2 text-white/70 cursor-pointer"
        aria-label={copy.scroll}
      >
        <span className="text-xs uppercase tracking-[0.45em]">{copy.scroll}</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-2xl"
        >
          ↓
        </motion.span>
      </motion.button>
    </section>
  )
}

export default HeroSection
