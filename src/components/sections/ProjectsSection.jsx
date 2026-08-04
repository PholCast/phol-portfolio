import { motion } from 'framer-motion'
import { FaArrowRightLong, FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import BorderGlow from '../ui/BorderGlow'
import ScrollFloat from '../effects/ScrollFloat'

const ProjectsSection = ({ projects, copy, locale, onSelectProject }) => {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollFloat containerClassName="text-center" textClassName="font-semibold tracking-tight text-white">
          {copy.title}
        </ScrollFloat>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-white/60 sm:text-base">
          {copy.subtitle}
        </p>

        <div className="mt-12 space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
            >
              <BorderGlow
                className="cursor-pointer rounded-[32px]"
                backgroundColor="#08111f"
                glowColor="264 91% 65%"
                borderRadius={32}
                glowRadius={48}
                glowIntensity={1}
                animated={false}
                onClick={() => onSelectProject(project)}
              >
                <article className="grid gap-0 overflow-hidden rounded-[32px] lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[260px] lg:min-h-[360px]">
                    <img src={project.mainImage} alt={project.name[locale]} loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col justify-between gap-6 p-5 sm:p-7 lg:p-8">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-white sm:text-3xl">{project.name[locale]}</h3>
                          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                            {project.shortDescription[locale]}
                          </p>
                        </div>
                        <FaArrowRightLong className="mt-1 hidden text-white/40 lg:block" />
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/76">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        <FaGithub />
                        {copy.viewGitHub}
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        <FaArrowUpRightFromSquare />
                        {copy.viewDemo}
                      </a>
                    </div>
                  </div>
                </article>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
