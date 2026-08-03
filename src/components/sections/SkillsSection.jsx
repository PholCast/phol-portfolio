import { motion } from 'framer-motion'
import MagicBento from '../ui/MagicBento'
import SpotlightCard from '../ui/SpotlightCard'
import ScrollFloat from '../effects/ScrollFloat'

const SkillsSection = ({ mainSkills, categories, copy, locale }) => {
  const bentoCards = mainSkills.map((skill) => {
    const Icon = skill.icon
    return {
      title: skill.title,
      label: skill.label,
      description: skill.description[locale],
      icon: <Icon />,
      color: '#120F17'
    }
  })

  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollFloat containerClassName="text-center" textClassName="font-semibold tracking-tight text-white">
          {copy.title}
        </ScrollFloat>

        <div className="mt-8">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
            {copy.main}
          </h3>
          <MagicBento cards={bentoCards} enableTilt={true} enableMagnetism={false} glowColor="80, 100, 255" />
        </div>

        <div className="mt-16">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
            {copy.all}
          </h3>

          <div className="mt-8 space-y-10">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.05 }}
              >
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/45">
                  {category.title[locale]}
                </h4>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {category.items.map((skill) => {
                    const Icon = skill.icon
                    return (
                      <SpotlightCard
                        key={skill.name}
                        spotlightColor={skill.color}
                        className="flex h-28 items-center justify-center rounded-[28px] border border-white/10 bg-white/5 px-5 py-4 text-white shadow-[0_16px_60px_rgba(0,0,0,0.18)]"
                        style={{ minHeight: '112px' }}
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-2xl text-white">
                            <Icon />
                          </span>
                          <span className="text-lg font-semibold text-white">{skill.name}</span>
                        </div>
                      </SpotlightCard>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
